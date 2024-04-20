---
slug: using-kernel-memory-to-chunk-documents-into-azure-ai-search
title: 'Using Kernel Memory to Chunk Documents into Azure AI Search'
authors: johnnyreilly
image: ./title-image.png
tags: [azure, c#, asp.net, ai]
description: To build RAG (Retrieval Augmented Generation) experiences, where LLMs can query documents, you need a strategy to chunk those documents. Kernel Memory supports this.
hide_table_of_contents: false
---

I've recently been working on building RAG (Retrieval Augmented Generation) experiences into applications; building systems where large language models (LLMs) can query documents. To achieve this, you first need a strategy to chunk those documents and make them LLM-friendly. [Kernel Memory](https://github.com/microsoft/kernel-memory), a sister project of [Semantic Kernel](https://github.com/microsoft/semantic-kernel) supports this.

![title image reading "Azure Open AI: generate article metadata with TypeScript" with the Azure Open AI / TypeScript logos](title-image.png)

<!--truncate-->

If you haven't heard of Kernel Memory before, it's a library that, amongst other things, provides a way to chunk documents into smaller pieces. To quote the [Kernel Memory GitHub repository](https://github.com/microsoft/kernel-memory?tab=readme-ov-file#kernel-memory-km-and-semantic-memory-sm):

> Kernel Memory (KM) is a service built on the feedback received and lessons learned from developing Semantic Kernel (SK) and Semantic Memory (SM). It provides several features that would otherwise have to be developed manually, such as storing files, extracting text from files, providing a framework to secure users' data, etc. The KM codebase is entirely in .NET, which eliminates the need to write and maintain features in multiple languages. As a service, KM can be used from any language, tool, or platform, e.g. browser extensions and ChatGPT assistants.

In this post, I'll show you how to use Kernel Memory to chunk documents in the background of an ASP.NET application.

## Kernel Memory: Serverless vs Service

There's two ways that you can run Kernel Memory: "Serverless" and "Service".

Running the full service is more powerful and complex, but effectively requires running a separate application, which you then need to integrate with. Given that I'm building a simple ASP.NET application, I'll be using the serverless approach, which allows us to run Kernel Memory within the context of a single application (which will contain our own application code as well). We can then manage our integrations with Kernel Memory as simple method calls.

The documentation is very clear that if you want to scale then you'll likely want to consider the service approach. But my own experience has been that serverless works well for small to medium-sized applications.

Perhaps surprisingly, using serverless we can still have the experience of running Kernel Memory as a non-blocking separate service **within** the context of our ASP.NET application. This is achieved by running Kernel Memory as a [hosted service](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-8.0) - this is the standard ASP.NET mechanism for background tasks. That's what we're going to do.

There's three parts to bring this to life:

1. Our Kernel Memory serverless instance - this is where the integration between Kernel Memory, Azure Open AI, Azure AI Search and the actual chunking takes place
2. A queue which we'll use to provide documents for chunking with Kernel Memory
3. Our hosted service which will be bringing together the queue and the Kernel Memory integration to manage our background document processing

## 1. Setting up Kernel Memory serverless

To integrate with Kernel Memory, we must construct ourselves an `IKernelMemory` like so:

```cs
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
    // Only necessary if you want to add Document Intelligence
    .WithAzureAIDocIntel(new AzureAIDocIntelConfig
    {
        Auth = AzureAIDocIntelConfig.AuthTypes.AzureIdentity,
        Endpoint = "https://cog-ourapp-dev.cognitiveservices.azure.com/",
    })
    .Build();
```

What we're doing here, is creating `IKernelMemory` instance and making it aware of all our deployed Azure resources. Going through how to deploy those is out of the scope of this post, but it's probably worth highlighting that we're using `AzureIdentity` for auth as it's particularly secure, if you would like to use other options, you certainly can.

### Chunking with Kernel Memory Serverless

With our `IKernelMemory` ready to go, we now need a way to chunk documents. Deep down, this is achieved by calling `_memory.ImportDocumentAsync` and passing the name of your index, your document etc. In fact, feel free to just use that!

However, it's often helpful to have a number of other things in place to manage:

1. Applying tags to documents (this gives you more power when querying later)
2. Creating acceptable names / ids for the Azure AI Search Service (it has criteria we must meet!)
3. Handling rate limiting - more on that in a moment

To that end, I tend to end up implementing a `Store` method that looks something like this:

```cs
public async Task Store(string index, string documentUrl, string fileName, Stream documentContent)
{
    // example documentUrl:
    // Chunking, getting embeddings for and storing for documentUrl consisting of 103469 characters in https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
    _logger.LogInformation($"Chunking, getting embeddings for and storing for {{{nameof(documentUrl)}}} consisting of {{count}} characters in {{{nameof(index)}}}", documentUrl, documentContent.Length, index);

    string documentId = MakeDocumentId(documentUrl);

    TagCollection tags = new()
    {
        { Constants.TagDocumentUrl, documentUrl },
        { Constants.TagFileName, fileName },
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

Much of the code above concerns rate limiting / 429s. It's not uncommon when chunking to be hit by 429s - "Too many requests". Chunking documents requires use of Azure Open AI resources, and the level of access you have is typically restricted and controlled via quotas. There's an element of this that you can avoid by controlling the quota available on your Azure Open AI deployments ([you can read more about this here](../2023-08-17-azure-open-ai-capacity-quota-bicep/index.md)), and as well you can do a certain amount of retrying chunking operations until you succeed.

The code above tries to handle a number of re-attempts as wisely as it can, and using the information that Azure APIs surface around when re-attempting is allowed. (Interestingly you'll see a number of strategies employed here as, frankly, the way information is surfaced just keeps changing! We can likely have less code in future when a final standard is committed to.)

### Bringing it together

We're going to put this all together in a single class called `ChunkerService`. It will look like this:

```cs
using Microsoft.KernelMemory;

using OurApp.Model;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.Text.Json;

namespace OurApp.Services;

public interface IChunkerService
{
    Task Store(string indexName, string documentUrl, string fileName, Stream documentContent);
}

public class ChunkerService : IChunkerService
{
    private readonly IKernelMemory _memory;
    private readonly ILogger<ChunkerService> _logger;

    public ChunkerService(
        ILogger<ChunkerService> logger
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
            // Only necessary if you want to add Document Intelligence
            .WithAzureAIDocIntel(new AzureAIDocIntelConfig
            {
                Auth = AzureAIDocIntelConfig.AuthTypes.AzureIdentity,
                Endpoint = "https://cog-ourapp-dev.cognitiveservices.azure.com/",
            })
            .Build();
    }

    public async Task Store(string index, string documentUrl, string fileName, Stream documentContent)
    {
        // example documentUrl:
        // Chunking, getting embeddings for and storing for documentUrl consisting of 103469 characters in https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
        _logger.LogInformation($"Chunking, getting embeddings for and storing for {{{nameof(documentUrl)}}} consisting of {{count}} characters in {{{nameof(index)}}}", documentUrl, documentContent.Length, index);

        string documentId = MakeDocumentId(documentUrl);

        TagCollection tags = new()
        {
            { Constants.TagDocumentUrl, documentUrl },
            { Constants.TagFileName, fileName },
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

With your own implementation you wouldn't be hard-coding the Azure resources like I have here, but rather you'd be passing them in as configuration. Incidentally, you could also use Dependency Injection to inject the `IKernelMemory` instance into your service, but again, I've kept it simple here for clarity.

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

By contrast, the `DequeueDocumentUri` method will be called from the context of our background service; it will pick call this method to pick up a file for processing.

## 3. Our background service

Finally, we need a background service to bring together our `DocumentProcessorQueue` and our `ChunkerService`. This is a standard ASP.NET hosted service. It will look like this:

```cs
using Azure.Storage.Blobs;
using Azure.Core;
using Azure.Identity;

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

            var env = _services.GetRequiredService<IHostEnvironment>();
            var chunkerService = _services.GetRequiredService<IChunkerService>();
            var documentProcessorQueue = _services.GetRequiredService<IDocumentProcessorQueue>();

            await PerformRagGestion(env, chunkerService, documentProcessorQueue, stoppingToken);
        }
        catch (Exception e)
        {
            _logger.LogError(e, $"Error processing document");
        }
    }

    async Task PerformRagGestion(IHostEnvironment env, IChunkerService chunkerService, IDocumentProcessorQueue documentProcessorQueue, CancellationToken stoppingToken)
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
                _logger.LogInformation($"Processing document: {{{nameof(documentToProcess)}}}", documentToProcess);
                await ChunkDocumentAndStoreInAzureAISearchIndex(env, chunkerService, documentToProcess);
            }
            catch (Exception e)
            {
                _logger.LogError(e, $"Error processing document: {{{nameof(documentToProcess)}}}", documentToProcess);
            }
        }
    }

    public async Task ChunkDocumentAndStoreInAzureAISearchIndex(
        IHostEnvironment env,
        IChunkerService chunkerService,
        DocumentToProcess documentToProcess
    )
    {
        var watch = System.Diagnostics.Stopwatch.StartNew();
        try
        {
            TokenCredential credential = env.IsDevelopment() ? new AzureCliCredential() : new DefaultAzureCredential(new DefaultAzureCredentialOptions
            {
                ManagedIdentityClientId = "[Managed Identity ClientId Here]",
            });

            BlobServiceClient azureBlobServiceClient = new (
                new Uri("https://stourappdev.blob.core.windows.net"), credential
            );
            var containerClient = azureBlobServiceClient.GetBlobContainerClient(documentToProcess.IndexName);

            // eg DocumentUrl: https://stourappdev.blob.core.windows.net/my-index/A%20Booklet.pdf
            string fileName = System.Web.HttpUtility.UrlDecode(documentToProcess.DocumentUrl.Split('/').Last());
            var blobClient = containerClient.GetBlobClient(fileName);

            MemoryStream stream = new();
            var response = await blobClient.DownloadToAsync(stream);
            await chunkerService.Store(
                indexName: documentToProcess.IndexName,
                documentUrl: documentToProcess.DocumentUrl,
                fileName: fileName,
                documentContent: stream
            );

            watch.Stop();

            _log.LogInformation(
                $"Chunked and stored {{{nameof(documentToProcess.DocumentUrl)}}} in Azure AI Search {{{nameof(documentToProcess.IndexName)}}} index in {{{nameof(watch.Elapsed.Seconds)}}} seconds",
                documentToProcess.DocumentUrl, documentToProcess.IndexName, watch.Elapsed.TotalSeconds);
        }
        catch (Exception ex)
        {
            _log.LogError(ex, "Problem chunking document: {DocumentUrl}", documentToProcess.DocumentUrl);

            throw new Exception($"Problem chunking document: {documentToProcess.DocumentUrl}", ex);
        }
    }
}
```

This service will run in the background of your ASP.NET application, and will pick up documents from the queue and process them. You might be puzzled by the name "RagGestion" - this is a term my good friend [George Karsas](https://medium.com/@georgekarsas) coined to describe the process of preparing documents for Retrieval Augmented Generation. It's a great term, and I've adopted it!

Ultimately, the `ChunkDocumentAndStoreInAzureAISearchIndex` method is where the magic happens. It downloads the document from Blob Storage, chunks it using Kernel Memory, and then stores it in Azure AI Search.

You'll see we're doing some timing here - this is because it's useful to know how long the process takes. If you're processing a lot of documents, you'll want to know how long it's taking to process each one.

## Registering your services

Finally, you'll need to register your services in your `Program.cs` file. You'll want to add the following:

```cs
builder.Services
    .AddSingleton<IChunkerService, ChunkerService>()
    .AddSingleton<IRagGestionService, RagGestionService>()
    .AddSingleton<IDocumentProcessorQueue, DocumentProcessorQueue>()

    .AddHostedService<DocumentProcessorBackgroundService>()
;
```

With this in place we have an application that can chunk documents in the background. The final part of the puzzle is to add documents to the queue.

## Adding documents to the queue

To add documents to the queue, you'll need to create an endpoint in your ASP.NET application. This endpoint will accept files and add them to the queue. Here's an example of how you might do that:

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

    [RequestSizeLimit(104857600)]// For 100 MB
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

As you can see, this endpoint accepts files, uploads them to Blob Storage and adds them to the queue with `_documentProcessorQueue.EnqueueDocumentUri`. This will then be picked up by the background service and processed.

## Conclusion

And that's it! You now have an ASP.NET application that can chunk documents in the background using Kernel Memory running in serverless mode. I haven't yet had the need to upgrade to the full Kernel Memory service. Perhaps the day will come, but the mileage you can get with just this approach is considerable.
