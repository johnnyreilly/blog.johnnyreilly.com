---
slug: azure-container-apps-easy-auth-and-dotnet-authentication
title: 'Azure Container Apps, Easy Auth and .NET authentication'
authors: johnnyreilly
tags: [azure container apps, easy auth, asp.net, authentication]
image: ./title-image.png
description: 'Azure Container Apps support Easy Auth. However, .NET applications run in ACAs do not recognise Easy Auth authentication. This post explains the issue and solves it.'
hide_table_of_contents: false
---

Easy Auth is a great way to authenticate your users. However, when used in the context of Azure Container Apps, .NET applications do not, by default, recognise that Easy Auth is in place. What I mean by this, is that you might be authenticated but .NET will still act as if you aren't. `builder.Services.AddAuthentication()` and `app.UseAuthentication()` doesn't change that. This post explains the issue and solves it through the implementation of a middleware.

![title image reading "Azure Container Apps, Easy Auth and .NET authentication" with the Azure Container App logos](title-image.png)

<!--truncate-->

If you're looking for information about Easy Auth and roles with .NET and Azure App Service, you can find it here:

- [Azure App Service, Easy Auth and Roles with .NET](../2021-01-14-azure-easy-auth-and-roles-with-dotnet-and-core/index.md)
- [Azure App Service, Easy Auth and Roles with .NET and Microsoft.Identity.Web](../2021-01-17-azure-easy-auth-and-roles-with-net-and-microsoft-identity-web/index.md)

## `User.Identity.IsAuthenticated == false`

When I'm building an application, I want to focus on the problem I'm solving. I don't want to think about how to implement my own authentication system. Rather, I tend to lean on another provider for that, and if I'm working in the Azure ecosystem, that often means Easy Auth.

I recently started building a .NET application using Easy Auth and deploying to Azure Container Apps. One thing that surprised me when I tested it out was that, whilst I was being authenticated, my app didn't seem to be aware of it. What I mean by this is when I inspected the `User.Identity.IsAuthenticated` property in my application, it was `false`. The reason why lies [in the documentation](https://learn.microsoft.com/en-us/azure/container-apps/authentication#access-user-claims-in-application-code):

> For all language frameworks, Container Apps makes the claims in the incoming token available to your application code. The claims are injected into the request headers, which are present whether from an authenticated end user or a client application. External requests aren't allowed to set these headers, so they're present only if set by Container Apps. Some example headers include:
>
> `X-MS-CLIENT-PRINCIPAL-NAME` > `X-MS-CLIENT-PRINCIPAL-ID`
>
> **Code that is written in any language or framework can get the information that it needs from these headers.**

The emphasis above is mine. What it's saying here is this: **you need to implement this yourself**.

## Implementing `AddEasyAuthContainerAppAuthentication()`
