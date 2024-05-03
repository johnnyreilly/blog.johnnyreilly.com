---
slug: large-language-models-view-models-backend-for-frontend
title: 'Large Language Models, Open API, View Models and the Backend for Frontend Pattern'
authors: johnnyreilly
image: ./title-image.png
tags: [azure, c#, ai]
description: To integrate LLMs with APIs, there is a need for the LLM equivalent of view models and the backend for frontend pattern. This discusses it in the context of Semantic Kernel.
hide_table_of_contents: false
---

Of late, myself and others have been doing work to integrate APIs into LLM interactions, using [Semantic Kernel](https://github.com/microsoft/semantic-kernel). This post is something of a brain dump on the topic. Given how fast this space is moving, I expect what is written here to be out of date, possibly even _before_ I hit publish. But nevertheless, I hope it's useful.

![title image reading "Large Language Models, Open API, View Models and the Backend for Frontend Pattern" with the Azure Open AI / Swagger logos](title-image.png)

<!--truncate-->

## Swagger / Open API and Semantic Kernel

APIs are awesome. Imagine LLMs could interact with APIs to allow you to chat directly to your data. This is what [function calling](https://platform.openai.com/docs/guides/function-calling) provides. It allows you to take some kind of API and integrate it with your LLM. This is a powerful concept, but it's not without its challenges.

APIs are often documented in Swagger / Open API. This is a great way to document APIs, but it's not always the best way to interact with them from an LLM point of view. We'll go into more detail on the problems it can present in a moment, but first let's look at how we can use Semantic Kernel to integrate with APIs.

It's completely possible to plug an LLM into an Open API / Swagger described API using Semantic Kernel. Here's an example of how you might do that from the [Semantic Kernel GitHub repository](https://github.com/microsoft/semantic-kernel/blob/9a4450622021ce003234863bcf4def9613ae1153/dotnet/samples/Concepts/Plugins/CreatePluginFromOpenApiSpec_Jira.cs#L69-L77):

```cs
var apiPluginRawFileURL = new Uri("https://raw.githubusercontent.com/microsoft/PowerPlatformConnectors/dev/certified-connectors/JIRA/apiDefinition.swagger.json");
jiraFunctions = await kernel.ImportPluginFromOpenApiAsync(
    "jiraPlugin",
    apiPluginRawFileURL,
    new OpenApiFunctionExecutionParameters(
        httpClient, tokenProvider.AuthenticateRequestAsync,
        serverUrlOverride: new Uri(serverUrl)
    )
);
```

The code above is creating a Jira plugin from an Open API spec. Brilliant! We didn't have to do any work; Semantic Kernel has done the heavy lifting for us. It's created a plugin that we can use to interact with Jira. Ready for the but?

## The problem with Swagger / Open API and LLMs

The example above illustrates the simplicity of integrating. But what it doesn't reveal is the unfortunate reality that **LLMs are not great at ignoring information**. They will mention fields you explicitly tell them not to. Just to spite you.

I have found myself writing prompts like this:

> Please tell me about stories that are assigned to me. Please never refer to the stories by their ids - use titles instead.

Only to find that in the responses the LLM will _still_ refer to the stories by their ids.

It's a bit like having a child who you've told not to do something, only to find they've done it anyway. The LLM may even cheekily say something like "I know you told me not too, but I included the id for reference". The scallywag.

I despair.

## Bring on the view models and the BFFs

It's not the same thing, but a useful framing for this to my mind is remembering when ORMs started to appear to automate access to databases. You could take your ORM, and host it in a web service and, hey presto, your database was now accessible over HTTP. So let's take our React app (or whatever) and have it talk to our database.

Except, of course, that's a terrible idea. You don't want your React app talking directly to your database. There's a number of reasons why, too much information going backwards and forward (perhaps including information you'd never like clients to see). There's the security aspect; why are you exposing your database to updates directly from the internet? Is that wise? You get the picture. We don't do that generally and with good reason.

What we tend to do instead is to have [backend for frontends (BFF)](https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends) that sits between your app and your database. One of the things the BFF does is to provide a view of the data that is appropriate for the client. It's a bit like a [view model](https://en.wikipedia.org/wiki/View_model) in the backend. It's a way to ensure that only the necessary information is exposed to the client.

We need to do the a similar thing with LLMs. Let's have BFFs / view models for providing data to LLMs. That way we can ensure that only the necessary information is given to them, and our answers do not contain data we would rather not see.

So rather than giving an LLM a data structure like this:

```json
{
  "stories": [
    {
      "id": 1,
      "title": "Story 1",
      "description": "This is the first story"
      //... MANY MORE FIELDS
    },
    {
      "id": 2,
      "title": "Story 2",
      "description": "This is the second story"
      //... MANY MORE FIELDS
    }
  ]
}
```

We give it the trimmed down equivalent:

```json
{
  "stories": [
    {
      "title": "Story 1",
      "description": "This is the first story"
    },
    {
      "title": "Story 2",
      "description": "This is the second story"
    }
  ]
}
```

This has the combined benefit of reducing our token usage (as we're sending less data) and reducing the risk of exposing data we'd rather not.

## Conclusion

The integrated support for consuming Open API / Swagger specs is definitely going to improve over time, both in Semantic Kernel and in the wider ecosystem. That said, I am wondering if there's a fundamental issue that needs to be solved as well.

If you want this to work directly with Swagger, is it necessary to have a BFF for LLMs built into the the API in the first place? Is that even a good idea? Maybe it is, maybe it isn't. I'm not sure. But it's something I'm thinking about.
