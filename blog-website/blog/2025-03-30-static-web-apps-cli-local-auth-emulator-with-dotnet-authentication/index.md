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

This post builds somewhat on posts I've written about using the Static Web Apps CLI [with the Vite proxy server with for enhanced performance](../2024-06-18-static-web-apps-cli-improve-performance-with-vite-server-proxy/index.md) and [how to use the `--api-location` argument to connect to a separately running backend API](../2023-05-20-static-web-apps-cli-node-18-could-not-connect-to-api/index.md). However, you need not have read either post to understand what we're doing.

We're going to first walk through what we're trying to achieve, and then we'll walk through the steps to get there. When it comes to implementation, we're going to use Vite as our front end server, and ASP.NET as our back end server. The Static Web Apps CLI will be used for local authentication emulation.

<!--truncate-->

## Local authentication choices

When we're building an application, let's think about the options that we have, with regards to our local development setup. It's pretty typical for applications to use some kind of third party authentication provider, rather than providing their own. This could be [Okta](https://www.okta.com/), [Microsoft Entra / Azure AD](https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication), [Auth0](https://auth0.com/) or something else.

It's possible to configure a local development setup which integrates with a third party authentication provider. However, is that wise? Do you want to couple your ability to be able to test scenarios on your local machine, to a server, somewhere out there on the internet? You certainly can. It typically involves setting a redirect URI on the authentication provider to `http://localhost:5173` (or wherever your local setup runs).

But it is inconvenient to get that set up in the first place. And even once it is set up, you're then coupled to being online whenever you're testing locally. We're offline more than we appreciate. I'm writing these words on an aeroplane which is currently flying over Botswana. I have no internet access right now. But as you've gathered, I'm on my computer and I'm able to do things. How? Because I'm using the Azure Static Web Apps CLI local authentication emulator for local development.

That's what this post is about. How to use the Static Web Apps CLI local authentication emulator with ASP.NET authentication to enable a great (and offline-first) local development setup.

## What is the Static Web Apps CLI?

We should probably talk about what the [Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/) is. It describes itself as:

> The Static Web Apps (SWA) CLI is an open-source commandline tool that streamlines local development and deployment for Azure Static Web Apps.

It's original purpose was to provide a local development server for an Azure service known as [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/). However, it has a number of features that make it useful for general web application development. For example, it can be used to [proxy requests to a backend API server](https://azure.github.io/static-web-apps-cli/docs/cli/swa-start#serve-both-the-front-end-app-and-api), and it can also be used to [emulate authentication](https://azure.github.io/static-web-apps-cli/docs/cli/local-auth).

We're going to use the authentication emulator to provide a local authentication server whilst we're developing. Just that piece of functionality; we're intentionally only using a subset of the Static Web Apps CLI functionality.

Incidentally, there are alternatives. I'm aware of one other local authentication emulator, which is the [Firebase Authentication Emulator](https://firebase.google.com/docs/emulator-suite/connect_auth). This could likely be used in a similar way. However, we'll be using the Static Web Apps CLI local authentication emulator.

## How does the Static Web Apps CLI local authentication emulator work?

When running the Static Web Apps `start` command, it surfaces login endpoints at this location: `http://localhost:4280/.auth/login/<PROVIDER_NAME>`. `<PROVIDER_NAME>` is the name of the authentication provider you want to use. This might be `aad`, `github` etc. If you look at the code ([and you can here](https://github.com/Azure/static-web-apps-cli/blob/062fb288d34126a095be6f3e1dc57fe5adb3f4bf/src/public/auth.html)) you'll realise that the `<PROVIDER_NAME>` can actually be any string; it's not limited to the names of the authentication providers that are supported by Azure Static Web Apps. So if you want to use an arbitary name like `potato` as the provider name, you can do that. In terms of emulation, it doesn't matter what the provider name is.

When started, the CLI will serve a local authentication UI at this endpoint which looks like this:

![screenshot of Static Web Apps CLI local authentication emulator at work](swa-cli-local-auth.png)

When you hit the `Login` button, it will use the form data to create a fake user and [set a cookie in your browser named `StaticWebAppsAuthCookie`](https://github.com/Azure/static-web-apps-cli/blob/062fb288d34126a095be6f3e1dc57fe5adb3f4bf/src/public/auth.html#L193-L196). That cookie will look something like this:

![screenshot of the StaticWebAppsAuthCookie in Chrome Devtools](screenshot-staticwebappsauthcookie.png)

And whilst it looks like a JWT, it isn't. It's actually a base64 encoded string which contains the user information that you provided in the form. In fact you can see what it is by flipping open the browser devtools and running this code in the console after you have hit the `Login` button:

```js
JSON.parse(
  atob(
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('StaticWebAppsAuthCookie='))
      ?.split('=')[1],
  ),
);
```

This will acquire the cookie that has just been created by the Static Web Apps CLI local authentication emulator from your browser. It then decodes it and parses the JSON string to get the user information that you provided in the form. It produces something like this:

```json
{
  "userId": "0106ec0be6200439b6987751b8bf6e7a",
  "userRoles": ["anonymous", "authenticated", "MyRole"],
  "claims": [{ "typ": "MyId", "val": "123456789" }],
  "identityProvider": "could-be-anything",
  "userDetails": "megan.s@thing.com"
}
```

This cookie will be sent to your backend API server with every request.

## How is our solution going to work?

To make a working development setup, we need three things:

1. A front end server (Vite)
2. A back end server (ASP.NET)
3. A local authentication server (Static Web Apps CLI)

We'll bring these three things together to create a local development setup that allows us to develop our application locally, with authentication. This diagram shows how the three components will work together:

```mermaid
graph TD
    subgraph Network traffic
        UserBrowser[<img src="./img/icon-noun-browser.svg" style="height: 50px" /> Developer's local browser]
        ViteProxy[<img src="./img/icon-noun-server.svg" style="height: 50px" /> Vite server http:\/\/localhost:5173]
        AuthEmulator[<img src="./img/icon-noun-server.svg" style="height: 50px" /> Static Web App CLI local authentication emulator http:\/\/localhost:4280]
        DotNetBackend[<img src="./img/icon-noun-server.svg" style="height: 50px" /> ASP.NET Backend http:\/\/localhost:5000]
    end

    UserBrowser --> ViteProxy
    ViteProxy --> | authentication requests | AuthEmulator
    ViteProxy --> | all other requests | DotNetBackend
```

From the developer's browser, HTTP requests will be sent to the Vite server running on `http://localhost:5173`. The Vite server will proxy authentication emulation requests to the Static Web Apps CLI local authentication emulator running on `http://localhost:4280`. All other requests will be proxied to the ASP.NET backend server running on `http://localhost:5000`.

This setup means that the cookie that is set by the Static Web Apps CLI local authentication emulator will be sent to the ASP.NET backend server with every request. So to make the ASP.NET authentication work, we need to make sure that the ASP.NET server is configured to accept this cookie and use it to authenticate the user.

## Time to implement

Now that we've talked about what we're trying to achieve, let's walk through the steps to get there. We'll need both the .NET SDK and Node.js installed on our machine. From here on out it's code.

## How to set up the Static Web Apps CLI local authentication emulator with ASP.NET

, and it will also set a cookie in your browser. This cookie is used to authenticate requests to your backend API server.

you have access to a local authentication UI. This interface is served locally from the emulator and allows you to set fake user information for the current user from the provider supplied.

http://localhost:5173/.auth/login/aad

https://github.com/Azure/static-web-apps-cli/blob/062fb288d34126a095be6f3e1dc57fe5adb3f4bf/src/public/auth.html

code that saves cookie:

https://github.com/Azure/static-web-apps-cli/blob/062fb288d34126a095be6f3e1dc57fe5adb3f4bf/src/public/auth.html#L193-L196

```js
function saveCookie(formElement) {
  const data = localStorage[hashStorageKey(formElement)];
  document.cookie = `StaticWebAppsAuthCookie=${btoa(data)}; path=/`;
}
```

## Credits

- Server icon by Konstantin Velichko from [Noun Project](https://thenounproject.com/browse/icons/term/server/) (CC BY 3.0)
- Browser icon by syahruni from [Noun Project](https://thenounproject.com/browse/icons/term/browser/) (CC BY 3.0)
