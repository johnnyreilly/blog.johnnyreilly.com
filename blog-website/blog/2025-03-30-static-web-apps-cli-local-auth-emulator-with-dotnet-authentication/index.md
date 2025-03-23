---
slug: static-web-apps-cli-local-auth-emulator-with-dotnet-authentication
title: 'Static Web Apps CLI: local authentication emulation with ASP.NET'
authors: johnnyreilly
tags: [azure static web apps, node.js, asp.net, static web apps cli]
image: ./title-image.png
description: 'The Static Web Apps CLI has a local authentication emulator. This is a useful tool for local development, and can be used with ASP.NET authentication. This post shows how.'
hide_table_of_contents: false
---

When developing web applications that have some dependency on authentication, it can be tricky to get a local development setup that allows you to manage authentication effectively. However, there's a way to achieve this, using the Static Web Apps CLI local authentication emulator.

![title image reading "Static Web Apps CLI: improve performance with Vite server proxy" with the Static Web Apps CLI and Vite logos](title-image.png)

I build a lot of SPA style applications that run JavaScript / TypeScript on the front end and C# / ASP.NET on the back end. The majority of those apps require some kind of authentication. In fact I'd struggle to think many apps that don't. This post will walk through how to integrate ASP.NET authentication with the Static Web Apps CLI local authentication emulator to achieve a great local development setup. Don't worry if that doesn't make sense right now, once we have walked through the setup, it will.

This post builds somewhat on what I've written about [using the Vite proxy server with the Static Web Apps CLI for enhanced performance](../2024-06-18-static-web-apps-cli-improve-performance-with-vite-server-proxy/index.md) and [connecting directly to the `--api-location`](../2023-05-20-static-web-apps-cli-node-18-could-not-connect-to-api/index.md). However, you need not have read either post to understand what we're doing.

<!--truncate-->

## Local authentication choices

When we're building an application, let's think about the options that we have, with regards to our local development setup. It's pretty typical for applications to use some kind of third party authentication provider, rather than providing their own. This could be [Okta](https://www.okta.com/), [Microsoft Entra / Azure AD](https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication), [Auth0](https://auth0.com/) or something else.

It's possible to configure a local development setup which integrates with a third party authentication provider. However, is that wise? Do you want to couple your ability to be able to test scenarios on your local machine, to a server, somewhere out there on the internet? You certainly can. It typically involves setting a redirect URI on the authentication provider to `http://localhost:5173` (or wherever your local setup runs).

But it is inconvenient to get that set up in the first place. And even once it is set up, you're then coupled to being online whenever you're testing locally. We're offline more than we appreciate. I'm writing these words on an aeroplane which is currently flying over Botswana. I have no internet access right now. But as you've gathered, I'm on my computer and I'm able to do things. How? Because I'm using the Azure Static Web Apps CLI local authentication emulator for local development.

That's what this post is about. How to use the Static Web Apps CLI local authentication emulator with ASP.NET authentication to enable a great (and offline-first) local development setup.

## What is the Static Web Apps CLI?

https://azure.github.io/static-web-apps-cli/docs/cli/local-auth

surely it's inappropriate and madness to use it
we're just using start / auth
a subset of it
doug crockford javascript the good parts
