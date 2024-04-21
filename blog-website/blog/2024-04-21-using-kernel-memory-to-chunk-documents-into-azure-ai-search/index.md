---
slug: using-kernel-memory-to-chunk-documents-into-azure-ai-search
title: 'Using Kernel Memory to Chunk Documents into Azure AI Search'
authors: johnnyreilly
image: ./title-image.png
tags: [azure, c#, asp.net, ai]
description: To build RAG (Retrieval Augmented Generation) experiences, where LLMs can query documents, you need a strategy to chunk those documents. Kernel Memory supports this.
hide_table_of_contents: false
---

I've recently been working on building retrieval augmented generation (RAG) experiences into applications; building systems where large language models (LLMs) can query documents. To achieve this, we first need a strategy to chunk those documents and make them LLM-friendly. [Kernel Memory](https://github.com/microsoft/kernel-memory), a sister project of [Semantic Kernel](https://github.com/microsoft/semantic-kernel) supports this.

![title image reading "Using Kernel Memory to Chunk Documents into Azure AI Search" with the Azure Open AI / Azure AI Search logos](title-image.png)

<!--truncate-->

If you haven't heard of Kernel Memory before, it's a library that, amongst other things, provides a way to chunk documents into smaller pieces. To quote the [Kernel Memory GitHub repository](https://github.com/microsoft/kernel-memory?tab=readme-ov-file#kernel-memory-km-and-semantic-memory-sm):

> Kernel Memory (KM) is a service built on the feedback received and lessons learned from developing Semantic Kernel (SK) and Semantic Memory (SM). It provides several features that would otherwise have to be developed manually, such as storing files, extracting text from files, providing a framework to secure users' data, etc. The KM codebase is entirely in .NET, which eliminates the need to write and maintain features in multiple languages. As a service, KM can be used from any language, tool, or platform, e.g. browser extensions and ChatGPT assistants.

In this post, I'll show you how to use Kernel Memory to chunk documents in the background of an ASP.NET application.

## Kernel Memory: Serverless vs Service

There's two ways that we can run Kernel Memory: "Serverless" and "Service".

Running the full service is more powerful, but effectively requires running a separate application. We would then need to integrate our main app with that. Given that I'm building with ASP.NET, I'll be using the serverless approach, which allows us to run Kernel Memory within the context of a single application (which will contain our main app code as well). We can then manage our integrations with Kernel Memory as simple method calls.

This is simpler and more cost-effective, but it does have some limitations. The service approach offers more features; including persistent retry logic. The documentation states that if we want to scale then we'll likely want to consider the service approach. But my own experience has been that serverless works very well for small to medium-sized applications.

Perhaps surprisingly, using serverless we can still have the experience of running Kernel Memory as a **non-blocking** separate service within the context of our ASP.NET application. This is achieved by running Kernel Memory as a [hosted service](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-8.0) - this is the standard ASP.NET mechanism for running background tasks. That's what we're going to use.

There's four parts to bring this to life:

1. Our Kernel Memory serverless instance - this is where the integration between Kernel Memory, Azure Open AI, Azure AI Search and the actual chunking takes place
2. A queue which we'll use to provide documents for chunking with Kernel Memory
3. Our hosted service which will bring together the queue and the Kernel Memory integration to manage our background document processing
4. An endpoint in our ASP.NET application to add documents to the queue

## 1. Setting up Kernel Memory serverless

There's a number of dependencies that we need to add to our project to get Kernel Memory working. These are:

```bash
dotnet add Azure.AI.OpenAI
dotnet add Azure.AI.FormRecognizer # if we want to use Document Intelligence - not mandatory
dotnet add Azure.Identity
dotnet add Azure.Storage.Blobs
dotnet add Microsoft.KernelMemory.Core
dotnet add Microsoft.SemanticKernel
```

With this in place we'll start to integrate with Kernel Memory. We will first construct ourselves an `IKernelMemory` like so:

```cs
_memory = new KernelMemoryBuilder()
    .WithAzureOpenAITextEmbeddingGeneration(new AzureOpenAIConfig
    {
        APIType = AzureOpenAIConfig.APITypes.EmbeddingGeneration,
        Auth = AzureOpenAIConfig.AuthTypes.AzureIdentity,
        Endpoint = "https://cog-ourapp-dev.openai.azure.com/",
        Deployment = "OpenAi-text-embedding-ada2" // text-embedding-ada-002
    })
    .WithAzureOpenAITextGeneration(new AzureOpenAIConfig
    {
        APIType = AzureOpenAIConfig.APITypes.ChatCompletion,
        Auth = AzureOpenAIConfig.AuthTypes.AzureIdentity,
        Endpoint = "https://cog-ourapp-dev.openai.azure.com/",
        Deployment = "OpenAi-gpt-35-turbo-16k" // gpt-3.5-turbo-16k
    })
    .WithAzureAISearchMemoryDb(new AzureAISearchConfig
    {
        Auth = AzureAISearchConfig.AuthTypes.AzureIdentity,
        Endpoint = "https://srch-ourapp-dev.search.windows.net",
    })
    // Only necessary if you want to add Document Intelligence
    .WithAzureAIDocIntel(new AzureAIDocIntelConfig
    {
        Auth = AzureAIDocIntelConfig.AuthTypes.AzureIdentity,
        Endpoint = "https://cog-ourapp-dev.cognitiveservices.azure.com/",
    })
    .Build();
```

What we're doing here, is creating an `IKernelMemory` instance and making it aware of all our deployed Azure resources. Going through how to deploy those is out of the scope of this post, but it's probably worth highlighting that we're using `AzureIdentity` for auth as it's particularly secure, if you would like to use other options, you certainly can.

It's probably worth highlighting that we're using the `text-embedding-ada-002` model for text embedding and the `gpt-3.5-turbo-16k` model for text generation. These are the models that I've found to be most effective for my use cases. Of these, the text embedding model is the most important - it's the one that will be used to chunk documents.

You'll also note we're using Azure AI Document Intelligence; this is optional and just tackles a few more document chunking scenarios. It's not mandatory.

### Chunking with Kernel Memory serverless

With our `IKernelMemory` ready to go, we now need a way to chunk documents. Deep down, this is achieved by acquiring the document we want to chunk from blob storage and passing it to `_memory.ImportDocumentAsync` with the name of the index we want to process into. You can see examples of this usage in the [Kernel Memory docs](https://microsoft.github.io/kernel-memory/serverless). You can also see how it works in the [Kernel Memory repository itself](https://github.com/microsoft/kernel-memory/blob/9112757f4fe25edd7bfbf10222621f11422bd3b5/service/Core/MemoryServerless.cs#L89).

However, it's often helpful to have a number of other things in place to manage:

1. Applying tags to documents (this gives us more power when querying later)
2. Creating acceptable names / ids for the Azure AI Search Service
3. Handling rate limiting - more on that in a moment

To that end, I tend to end up implementing a `Process` method that looks something like this:

```cs
public async Task Process(string index, string documentUrl)
{
    TokenCredential credential = _env.IsDevelopment() ? new AzureCliCredential() : new DefaultAzureCredential(new DefaultAzureCredentialOptions
    {
        ManagedIdentityClientId = "[Managed Identity ClientId Here]",
    });

    BlobServiceClient azureBlobServiceClient = new (
        new Uri("https://stourappdev.blob.core.windows.net"), credential
    );
    var containerClient = azureBlobServiceClient.GetBlobContainerClient(index);

    // eg DocumentUrl: https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
    string fileName = System.Web.HttpUtility.UrlDecode(documentToProcess.DocumentUrl.Split('/').Last());
    var blobClient = containerClient.GetBlobClient(fileName);

    MemoryStream documentContent = new();
    var response = await blobClient.DownloadToAsync(documentContent);

    // example documentUrl:
    // Chunking, getting embeddings for and storing for documentUrl consisting of 103469 characters in https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
    _logger.LogInformation($"Chunking, getting embeddings for and storing for {{{nameof(documentUrl)}}} consisting of {{count}} characters in {{{nameof(index)}}}", documentUrl, documentContent.Length, index);

    string documentId = MakeDocumentId(documentUrl);

    TagCollection tags = new()
    {
        { "DocumentUrl", documentUrl },
        { "FileName", fileName },
    };

    var stopwatch = new Stopwatch();
    stopwatch.Start();

    int? waitForSeconds = null;
    bool done = false;
    int attempt = 0;
    do
    {
        attempt++;

        if (attempt == 4) // if we've tried 3 times, give up
            throw new Exception($"Failed to store document {documentUrl} after {attempt - 1} attempts and {stopwatch.Elapsed.TotalSeconds} seconds");

        try
        {
            if (waitForSeconds != null)
            {
                _logger.LogInformation($"Waiting {{{nameof(waitForSeconds)}}} seconds", waitForSeconds.Value);
                await Task.Delay(TimeSpan.FromSeconds(waitForSeconds.Value));
                waitForSeconds = null;
            }

            _logger.LogInformation("Importing documentId {documentId} attempt {attempt}", documentId, attempt);
            await _memory.ImportDocumentAsync(content: documentContent, fileName: fileName, documentId: documentId, index: index, tags: tags);

            done = true;
        }
        catch (Microsoft.SemanticKernel.HttpOperationException e) when (e.InnerException is Azure.RequestFailedException azureRequestFailedException)
        {
            waitForSeconds = HandleRequestFailed(azureRequestFailedException);
        }
        catch (Azure.RequestFailedException azureRequestFailedException)
        {
            waitForSeconds = HandleRequestFailed(azureRequestFailedException);
        }
        catch (Exception ex)
        {
            throw new Exception($"Error storing document {documentUrl} on attempt {attempt} after {stopwatch.Elapsed.TotalSeconds} seconds", ex);
        }
    } while (!done);

    stopwatch.Stop();

    _logger.LogInformation($"Processed {{{nameof(documentId)}}} into {{{nameof(index)}}} index in {{{nameof(stopwatch.Elapsed.TotalSeconds)}}} seconds", documentId, index, stopwatch.Elapsed.TotalSeconds);
}

int? HandleRequestFailed(Azure.RequestFailedException azureRequestFailedException)
{
    int? waitForSeconds;
    var response = azureRequestFailedException.GetRawResponse();
    var retryAfterSeconds = response?.Headers.FirstOrDefault(h => h.Name == "x-ratelimit-reset-requests").Value
        ?? response?.Headers.FirstOrDefault(h => h.Name == "Retry-After").Value;

    //x-ratelimit-reset-requests: 4,x-ms-client-request-id: XXXX,apim-request-id: 69569dd5-2e4a-4bfa-9b52-f3eb08481a83,Strict-Transport-Security: max-age=31536000; includeSubDomains; preload,X-Content-Type-Options: nosniff,policy-id: DeploymentRatelimit-Call,x-ms-region: West Europe,Date: Fri, 01 Dec 2023 13:29:12 GMT,Content-Length: 85,Content-Type: application/json
    waitForSeconds = retryAfterSeconds != null ? int.Parse(retryAfterSeconds) : null;

    if (waitForSeconds == null)
    {
        const string pattern = @"Try again in (\d+) seconds";
        var match = Regex.Match(azureRequestFailedException.Message, pattern);
        // wait for 60 seconds if a specific value is not provided
        waitForSeconds = match.Success && int.TryParse(match.Groups[1].Value, out int seconds) ? seconds + 1 : 60;
    }

    if (azureRequestFailedException.Status == (int)System.Net.HttpStatusCode.TooManyRequests)
    {
        // var headers = response?.Headers.Select(h => $"{h.Name}: {h.Value}").ToList() ?? new List<string>();
        // _logger.LogWarning(azureRequestFailedException, $"429 - too many requests, will wait {{{nameof(waitForSeconds)}}} seconds - HEADERS: {{{nameof(headers)}}}", waitForSeconds, string.Join(",", headers));
        _logger.LogWarning(azureRequestFailedException, $"429 - too many requests, will wait {{{nameof(waitForSeconds)}}} seconds", waitForSeconds);
    }
    else
    {
        var headers = response?.Headers.Select(h => $"{h.Name}: {h.Value}").ToList() ?? [];
        _logger.LogError(azureRequestFailedException, $"Azure.RequestFailedException - {{{nameof(azureRequestFailedException.Status)}}} status code, will wait {{{nameof(waitForSeconds)}}} seconds - HEADERS: {{{nameof(headers)}}}", azureRequestFailedException.Status, waitForSeconds, string.Join(",", headers));
    }

    return waitForSeconds;
}


/// <summary>
/// Make a documentId from a fileName; remove all characters except A-Z, a-z, 0-9, ., _, -
/// </summary>
static string MakeDocumentId(string fileName) => Regex.Replace(fileName, "[^A-Za-z0-9._-]", ""); // eg "A Booklet.pdf"
```

Much of the code above concerns rate limiting / 429s. It's not uncommon when chunking to be hit by 429s - "Too many requests". Chunking documents requires use of Azure Open AI resources, and the level of access we have is typically restricted and controlled via quotas. There's an element of this that we can avoid by controlling the quota available on our Azure Open AI deployments ([you can read more about this here](../2023-08-17-azure-open-ai-capacity-quota-bicep/index.md)), and we can implement a certain amount of retry logic also.

The code above tries to handle a number of re-attempts as wisely as it can, and using the information that Azure APIs surface around when re-attempting is allowed. Interestingly you'll see a variety of strategies employed here around retry times, as the way information is surfaced to support this keeps changing! We can likely have less code in future when a final standard is committed to.

### Bringing it together

We're going to put this all together in a single class called `RagGestionService`.

You might be puzzled by the name "RagGestion" - this is a term my good friend [George Karsas](https://medium.com/@georgekarsas) coined to describe the process of preparing documents for Retrieval Augmented Generation. It's a great term, and I've adopted it!

The `RagGestionService` will look like this:

```cs
using Azure.Storage.Blobs;
using Azure.Core;
using Azure.Identity;

using Microsoft.KernelMemory;

using OurApp.Model;

using System.Diagnostics;
using System.Text.RegularExpressions;
using System.Text.Json;

namespace OurApp.Services;

public interface IRagGestionService
{
    Task Process(string indexName, string documentUrl);
}

public class RagGestionService : IRagGestionService
{
    private readonly IKernelMemory _memory;
    private readonly ILogger<RagGestionService> _logger;

    public RagGestionService(
        ILogger<RagGestionService> logger
    )
    {
        _logger = logger;

        _memory = new KernelMemoryBuilder()
            .WithAzureOpenAITextEmbeddingGeneration(new AzureOpenAIConfig
            {
                APIType = AzureOpenAIConfig.APITypes.EmbeddingGeneration,
                Auth = AzureOpenAIConfig.AuthTypes.AzureIdentity,
                Endpoint = "https://cog-ourapp-dev.openai.azure.com/",
                Deployment = "OpenAi-text-embedding-ada2"
            })
            .WithAzureOpenAITextGeneration(new AzureOpenAIConfig
            {
                APIType = AzureOpenAIConfig.APITypes.ChatCompletion,
                Auth = AzureOpenAIConfig.AuthTypes.AzureIdentity,
                Endpoint = "https://cog-ourapp-dev.openai.azure.com/",
                Deployment = "OpenAi-gpt-35-turbo-16k"
            })
            .WithAzureAISearchMemoryDb(new AzureAISearchConfig
            {
                Auth = AzureAISearchConfig.AuthTypes.AzureIdentity,
                Endpoint = "https://srch-ourapp-dev.search.windows.net",
            })
            // Only necessary if we want to add Document Intelligence
            .WithAzureAIDocIntel(new AzureAIDocIntelConfig
            {
                Auth = AzureAIDocIntelConfig.AuthTypes.AzureIdentity,
                Endpoint = "https://cog-ourapp-dev.cognitiveservices.azure.com/",
            })
            .Build();
    }

    public async Task Process(string index, string documentUrl)
    {
        TokenCredential credential = _env.IsDevelopment() ? new AzureCliCredential() : new DefaultAzureCredential(new DefaultAzureCredentialOptions
        {
            ManagedIdentityClientId = "[Managed Identity ClientId Here]",
        });

        BlobServiceClient azureBlobServiceClient = new (
            new Uri("https://stourappdev.blob.core.windows.net"), credential
        );
        var containerClient = azureBlobServiceClient.GetBlobContainerClient(index);

        // eg DocumentUrl: https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
        string fileName = System.Web.HttpUtility.UrlDecode(documentToProcess.DocumentUrl.Split('/').Last());
        var blobClient = containerClient.GetBlobClient(fileName);

        MemoryStream documentContent = new();
        var response = await blobClient.DownloadToAsync(documentContent);

        // example documentUrl:
        // Chunking, getting embeddings for and storing for documentUrl consisting of 103469 characters in https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
        _logger.LogInformation($"Chunking, getting embeddings for and storing for {{{nameof(documentUrl)}}} consisting of {{count}} characters in {{{nameof(index)}}}", documentUrl, documentContent.Length, index);

        string documentId = MakeDocumentId(documentUrl);

        TagCollection tags = new()
        {
            { "DocumentUrl", documentUrl },
            { "FileName", fileName },
        };

        var stopwatch = new Stopwatch();
        stopwatch.Start();

        int? waitForSeconds = null;
        bool done = false;
        int attempt = 0;
        do
        {
            attempt++;

            if (attempt == 4) // if we've tried 3 times, give up
                throw new Exception($"Failed to store document {documentUrl} after {attempt - 1} attempts and {stopwatch.Elapsed.TotalSeconds} seconds");

            try
            {
                if (waitForSeconds != null)
                {
                    _logger.LogInformation($"Waiting {{{nameof(waitForSeconds)}}} seconds", waitForSeconds.Value);
                    await Task.Delay(TimeSpan.FromSeconds(waitForSeconds.Value));
                    waitForSeconds = null;
                }

                _logger.LogInformation("Importing documentId {documentId} attempt {attempt}", documentId, attempt);
                await _memory.ImportDocumentAsync(content: documentContent, fileName: fileName, documentId: documentId, index: index, tags: tags);

                done = true;
            }
            catch (Microsoft.SemanticKernel.HttpOperationException e) when (e.InnerException is Azure.RequestFailedException azureRequestFailedException)
            {
                waitForSeconds = HandleRequestFailed(azureRequestFailedException);
            }
            catch (Azure.RequestFailedException azureRequestFailedException)
            {
                waitForSeconds = HandleRequestFailed(azureRequestFailedException);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error storing document {documentUrl} on attempt {attempt} after {stopwatch.Elapsed.TotalSeconds} seconds", ex);
            }
        } while (!done);

        stopwatch.Stop();

        _logger.LogInformation($"Processed {{{nameof(documentId)}}} into {{{nameof(index)}}} index in {{{nameof(stopwatch.Elapsed.TotalSeconds)}}} seconds", documentId, index, stopwatch.Elapsed.TotalSeconds);
    }

    int? HandleRequestFailed(Azure.RequestFailedException azureRequestFailedException)
    {
        int? waitForSeconds;
        var response = azureRequestFailedException.GetRawResponse();
        var retryAfterSeconds = response?.Headers.FirstOrDefault(h => h.Name == "x-ratelimit-reset-requests").Value
            ?? response?.Headers.FirstOrDefault(h => h.Name == "Retry-After").Value;

        //x-ratelimit-reset-requests: 4,x-ms-client-request-id: XXXX,apim-request-id: 69569dd5-2e4a-4bfa-9b52-f3eb08481a83,Strict-Transport-Security: max-age=31536000; includeSubDomains; preload,X-Content-Type-Options: nosniff,policy-id: DeploymentRatelimit-Call,x-ms-region: West Europe,Date: Fri, 01 Dec 2023 13:29:12 GMT,Content-Length: 85,Content-Type: application/json
        waitForSeconds = retryAfterSeconds != null ? int.Parse(retryAfterSeconds) : null;

        if (waitForSeconds == null)
        {
            const string pattern = @"Try again in (\d+) seconds";
            var match = Regex.Match(azureRequestFailedException.Message, pattern);
            // wait for 60 seconds if a specific value is not provided
            waitForSeconds = match.Success && int.TryParse(match.Groups[1].Value, out int seconds) ? seconds + 1 : 60;
        }

        if (azureRequestFailedException.Status == (int)System.Net.HttpStatusCode.TooManyRequests)
        {
            // var headers = response?.Headers.Select(h => $"{h.Name}: {h.Value}").ToList() ?? new List<string>();
            // _logger.LogWarning(azureRequestFailedException, $"429 - too many requests, will wait {{{nameof(waitForSeconds)}}} seconds - HEADERS: {{{nameof(headers)}}}", waitForSeconds, string.Join(",", headers));
            _logger.LogWarning(azureRequestFailedException, $"429 - too many requests, will wait {{{nameof(waitForSeconds)}}} seconds", waitForSeconds);
        }
        else
        {
            var headers = response?.Headers.Select(h => $"{h.Name}: {h.Value}").ToList() ?? [];
            _logger.LogError(azureRequestFailedException, $"Azure.RequestFailedException - {{{nameof(azureRequestFailedException.Status)}}} status code, will wait {{{nameof(waitForSeconds)}}} seconds - HEADERS: {{{nameof(headers)}}}", azureRequestFailedException.Status, waitForSeconds, string.Join(",", headers));
        }

        return waitForSeconds;
    }


    /// <summary>
    /// Make a documentId from a fileName; remove all characters except A-Z, a-z, 0-9, ., _, -
    /// </summary>
    static string MakeDocumentId(string fileName) => Regex.Replace(fileName, "[^A-Za-z0-9._-]", ""); // eg "A Booklet.pdf"
}
```

By the way, I don't advise hard-coding the Azure resources as I have here, but rather passing them in as configuration. Incidentally, we could also use dependency injection to inject a prepared `IKernelMemory` instance into the service, but again, I'm keeping it simple here for clarity.

## 2. Our document processor queue

In order that we have a way to provide documents for chunking, we need a queue. This is a simple queue that we can add documents to, and then process them in the background. We're going to use a `ConcurrentQueue` for this, with a little wrapper around it so we can encapsulate the queue for sharing between our UI and our background task, and also to do some logging.

```cs
using System.Collections.Concurrent;

using OurApp.Model;

namespace OurApp.Services.Implementations;

public record DocumentToProcess(
    string DocumentUrl,
    string IndexName
);

public interface IDocumentProcessorQueue
{
    DocumentToProcess? DequeueDocumentUri();
    void EnqueueDocumentUri(DocumentToProcess documentToProcess);
}

public class DocumentProcessorQueue : IDocumentProcessorQueue
{
    readonly ConcurrentQueue<DocumentToProcess> _documentUrlQueue;
    readonly ILogger<DocumentProcessorQueue> _logger;

    public DocumentProcessorQueue(ILogger<DocumentProcessorQueue> logger)
    {
        _documentUrlQueue = new();
        _logger = logger;
    }

    public void EnqueueDocumentUri(DocumentToProcess documentToProcess)
    {
        _logger.LogInformation($"Adding document for background processing onto {{{nameof(documentToProcess.IndexName)}}} index later: {{{nameof(documentToProcess.DocumentUrl)}}} ({{{nameof(_documentUrlQueue.Count)}}} items on queue)", documentToProcess.IndexName, documentToProcess.DocumentUrl, _documentUrlQueue.Count);
        _documentUrlQueue.Enqueue(documentToProcess);
    }

    public DocumentToProcess? DequeueDocumentUri()
    {
        if (_documentUrlQueue.TryDequeue(out var documentToProcess))
        {
            _logger.LogInformation($"Document picked up for background processing onto {{{nameof(documentToProcess.IndexName)}}} index: {{{nameof(documentToProcess.DocumentUrl)}}} ({{{nameof(_documentUrlQueue.Count)}}} items remain on queue)", documentToProcess.IndexName, documentToProcess.DocumentUrl, _documentUrlQueue.Count);
            return documentToProcess;
        }

        return null;
    }
}
```

The `EnqueueDocumentUri` method above will be called from the context of our UI - from an ASP.NET controller. This will be invoked when someone uploads a file and will also be responsible for adding the file to a BlobService for storage prior to processing.

By contrast, the `DequeueDocumentUri` method will be called from the context of our background service; it will call this method to pick up a file for processing.

## 3. Our background service

Next, we need a background service to bring together our `DocumentProcessorQueue` and our `RagGestionService`. This is a standard ASP.NET hosted service. It will look like this:

```cs
using OurApp.Model;
using OurApp.Services;

namespace OurApp.BackgroundServices;

public class DocumentProcessorBackgroundService : BackgroundService
{
    private readonly ILogger<DocumentProcessorBackgroundService> _logger;
    private readonly IServiceProvider _services;

    public DocumentProcessorBackgroundService(IServiceProvider services, ILogger<DocumentProcessorBackgroundService> logger)
    {
        _services = services;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        try
        {
            _logger.LogInformation("Starting RagGestion");

            var ragGestionService = _services.GetRequiredService<IRagGestionService>();
            var documentProcessorQueue = _services.GetRequiredService<IDocumentProcessorQueue>();

            await PerformRagGestion(env, chunkerService, documentProcessorQueue, stoppingToken);
        }
        catch (Exception e)
        {
            _logger.LogError(e, $"Error processing document");
        }
    }

    async Task PerformRagGestion(IRagGestionService ragGestionService, IDocumentProcessorQueue documentProcessorQueue, CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);

            DocumentToProcess? documentToProcess = documentProcessorQueue.DequeueDocumentUri();
            if (documentToProcess == null)
            {
                _logger.LogDebug("No documents to process");
                continue;
            }

            try
            {
                var watch = System.Diagnostics.Stopwatch.StartNew();

                _logger.LogInformation($"Processing document: {{{nameof(documentToProcess.DocumentUrl)}}}", documentToProcess.DocumentUrl);

                await ragGestionService.Process(
                    indexName: documentToProcess.IndexName,
                    documentUrl: documentToProcess.DocumentUrl
                );

                watch.Stop();

                _logger.LogInformation(
                    $"Chunked and stored {{{nameof(documentToProcess.DocumentUrl)}}} into Azure AI Search {{{nameof(documentToProcess.IndexName)}}} index in {{{nameof(watch.Elapsed.Seconds)}}} seconds",
                    documentToProcess.DocumentUrl, documentToProcess.IndexName, watch.Elapsed.TotalSeconds);
            }
            catch (Exception e)
            {
                _logger.LogError(e, $"Error processing document: {{{nameof(documentToProcess)}}}", documentToProcess);
            }
        }
    }
}
```

This service will run in the background of the ASP.NET application, will pick up documents from the queue (if there are any) and pass them to the `RagGestionService` for processing. It will trigger every 5 seconds, running for the lifetime of the application.

You'll see we're doing some timing here - this is because it's useful to know how long the process takes. If we're processing a lot of documents, we'll want to know how long it's taking to process each one.

## 4. Adding documents to the queue

To add documents to the queue, we'll need to create an endpoint in our ASP.NET application. This endpoint will accept files and add them to the queue. Here's an example of how we might do that:

```cs
using Microsoft.AspNetCore.Mvc;

using Azure.Storage.Blobs;
using Azure.Identity;
using Azure.Core;

namespace OurApp.Controllers;

public record UploadedFile(
    string FileName,
    bool Succeeded,
    long Size,
    string DocumentUrl
);

[ApiController]
public class UploadController : ControllerBase
{
    private readonly IDocumentProcessorQueue _documentProcessorQueue;
    private readonly ILogger<UploadController> _log;
    private readonly IHostEnvironment _env;

    public UploadController(
        ILogger<UploadController> log,
        IHostEnvironment env,
        IDocumentProcessorQueue documentProcessorQueue
    )
    {
        _log = log;
        _env = env;
        _documentProcessorQueue = documentProcessorQueue;
    }

    [RequestSizeLimit(104857600)] // For files of up to 100 MB - perhaps larger than you'd want to upload in a single go
    [HttpPost($"api/{nameof(UploadFiles)}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<UploadedFile>))]
    [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(string))]
    [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(string))]
    public async Task<ActionResult<List<UploadedFile>>> UploadFiles(
        [FromQuery] string indexName,
        List<IFormFile> files
    )
    {
        var processedFiles = new List<UploadedFile>();

        try
        {
            foreach (var formFile in files)
            {
                try
                {
                    TokenCredential credential = _env.IsDevelopment() ? new AzureCliCredential() : new DefaultAzureCredential(new DefaultAzureCredentialOptions
                    {
                        ManagedIdentityClientId = "[Managed Identity ClientId Here]",
                    });

                    BlobServiceClient azureBlobServiceClient = new(
                        new Uri("https://stourappdev.blob.core.windows.net"), credential
                    );
                    var containerClient = azureBlobServiceClient.GetBlobContainerClient(indexName);
                    if (!await containerClient.ExistsAsync())
                        await containerClient.CreateIfNotExistsAsync();

                    var blobClient = containerClient.GetBlobClient(formFile.FileName);
                    StreamReader streamReader = new(formFile.OpenReadStream());
                    var uploaded = await blobClient.UploadAsync(streamReader.BaseStream, overwrite: true);

                    var uploadedFile = new UploadedFile(
                        FileName: formFile.FileName,
                        Succeeded: true,
                        Size: formFile.Length,
                        DocumentUrl: blobClient.Uri.AbsoluteUri
                    );
                    processedFiles.Add(uploadedFile);

                    _documentProcessorQueue.EnqueueDocumentUri(
                        new DocumentToProcess(
                            DocumentUrl: uploadedFile.DocumentUrl,
                            IndexName: indexName
                        )
                    );
                }
                catch (Exception ex)
                {
                    processedFiles.Add(new UploadedFile(
                        FileName: formFile.FileName,
                        Succeeded: false,
                        Size: formFile.Length,
                        DocumentUrl: string.Empty
                    ));

                    _log.LogError(ex, "Failed to upload {file}", formFile.FileName);
                }
            }

            return Ok(processedFiles);
        }
        catch (Exception ex)
        {
            _log.LogError(ex, "Problem uploading files");
            return BadRequest("Problem uploading files");
        }
    }
}
```

As we can see, this endpoint:

1. Accepts files from a POST request with an index name in the querystring
2. Uploads them to Blob Storage (matching the container name to the index they will be processed into in future)
3. Adds them to the queue with `_documentProcessorQueue.EnqueueDocumentUri`. This will then be picked up by the background service and processed.

## Registering our services

Finally, we'll need to register our services in the `Program.cs` file. We'll want to add the following:

```cs
builder.Services
    .AddSingleton<IRagGestionService, RagGestionService>()
    .AddSingleton<IDocumentProcessorQueue, DocumentProcessorQueue>()

    .AddHostedService<DocumentProcessorBackgroundService>()
;
```

With this in place we have an application that can upload documents and chunk them in the background.

## Conclusion

And that's it! This is an ASP.NET application that can chunk documents (or RagGest 😉) in the background using Kernel Memory running in serverless mode. I haven't yet had the need to upgrade to the full Kernel Memory service. Perhaps the day will come, but the mileage we can get with this approach is considerable.

Many thanks to [David Rosevear](https://github.com/drosevear) and [George Karsas](https://www.linkedin.com/in/george-karsas) for their help working on this mechanism. And George for "RagGestion" - I love it!
