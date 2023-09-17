---
slug: azure-static-web-apps-easyauth-deeplink
title: 'Deep linking with Azure Static Web Apps and Easy Auth'
authors: johnnyreilly
tags: [azure static web apps, auth, azure]
image: ./title-image.png
description: 'Azure Static Web Apps does not support deep linking with authentication. This post describes how to work around this limitation.'
hide_table_of_contents: false
---

Azure Static Web Apps doesn't support deep linking with authentication. The [post login redirect](https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#post-login-redirect) parameter of `post_login_redirect_uri` does not support query string parameters. This post describes how to work around this limitation.

![title image reading "Deep linking with Azure Static Web Apps and Easy Auth" with Azure AD and Static Web App logos](title-image.png)

<!--truncate-->

## Updated 1st March 2023

I'm happy to say that this blog post is no longer necessary; [the behavour is now built into Azure Static Web Apps](https://github.com/Azure/static-web-apps/issues/435#issuecomment-1353985870). Here is an example `staticwebapp.config.json` which supports deep linking using the [`.referrer`](https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#set-up-post-sign-in-redirect) post sign-in redirect:

```json
{
  "auth": {
    "identityProviders": {
      "azureActiveDirectory": {
        // ...
      }
    }
  },
  "navigationFallback": {
    "rewrite": "index.html"
  },
  "routes": [
    {
      "route": "/login",
      "rewrite": "/.auth/login/aad",
      "allowedRoles": ["anonymous", "authenticated"]
    },
    {
      "route": "/.auth/login/github",
      "statusCode": 404
    },
    {
      "route": "/.auth/login/twitter",
      "statusCode": 404
    },
    {
      "route": "/logout",
      "redirect": "/.auth/logout",
      "allowedRoles": ["anonymous", "authenticated"]
    },
    {
      "route": "/*",
      "allowedRoles": ["authenticated"]
    }
  ],
  "responseOverrides": {
    "401": {
      "redirect": "/.auth/login/aad?post_login_redirect_uri=.referrer",
      "statusCode": 302
    }
  }
  // ...
}
```

## Deep linking

Imagine the situation: your colleague sends you `https://our-app.com/pages/important-page?someId=theId`. You click the link and you're presented with a login screen. You login and you're presented with a page, but not the one your colleague meant you to see. What do you do now? If you realise what's happened, you'll likely paste the URL into the address bar again so you end up where you hope to. But what if you don't realise what's happened? Answer: confusion and frustration.

If you're using Azure Static Web Apps, you're likely to have this problem. [Azure Static Web Apps doesn't support deep linking with authentication](https://github.com/Azure/static-web-apps/issues/435). When you get redirected you'll find you are (at best) missing the query parameters. If you take a look at the link here you'll see a suggested workaround. We're going to develop that idea in this post.

## The workaround

The idea of the workaround is this:

- at the start of the authentication process, store the URL you're trying to get to in local storage
- when the authentication process completes, redirect to the URL you stored in local storage

The post suggested a React specific approach. We'd like something that is framework agnostic. So if you're running with Svelte, Vue, Angular or something else, you can use this approach too.

## The implementation

We're going to need to make sure our [`staticwebapp.config.json`](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration) is set up to support our goal:

```json
{
  "auth": {
    "identityProviders": {
      "azureActiveDirectory": {
        "registration": {
          "openIdIssuer": "https://login.microsoftonline.com/AAD_TENANT_ID/v2.0",
          "clientIdSettingName": "AAD_CLIENT_ID",
          "clientSecretSettingName": "AAD_CLIENT_SECRET"
        }
      }
    }
  },
  "navigationFallback": {
    "rewrite": "index.html"
  },
  "routes": [
    {
      "route": "/login",
      "rewrite": "/.auth/login/aad",
      "allowedRoles": ["anonymous", "authenticated"]
    },
    {
      "route": "/.auth/login/github",
      "statusCode": 404
    },
    {
      "route": "/.auth/login/twitter",
      "statusCode": 404
    },
    {
      "route": "/logout",
      "redirect": "/.auth/logout",
      "allowedRoles": ["anonymous", "authenticated"]
    },
    {
      "route": "/*.json",
      "allowedRoles": ["authenticated"]
    }
  ],
  "responseOverrides": {
    "401": {
      "redirect": "/login",
      "statusCode": 302
    }
  },
  "globalHeaders": {
    "content-security-policy": "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'"
  },
  "mimeTypes": {
    ".json": "text/json",
    ".md": "text/markdown",
    ".xml": "application/xml"
  }
}
```

There's a number of things to note here:

- we're using Azure Active Directory as our identity provider (and disabling others) - the approach in this post will work with any identity provider; this is just the one I'm using. Easy Auth supports [a number of identity providers](https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#identity-providers)
- we're creating a `/login` route to redirect to the Azure AD login page - you don't have to do this, but it's a nice touch.
- we're protecting the `*.json` files with authentication - this is because our JSON files actually contain secure information. If we were using say an API instead, we'd protect that with authentication instead. Crucially, access to HTML / JS / CSS is _not_ protected. This is important, because we need to be able to access our `index.html` file and associated JavaScript to store the URL we're trying to get to in local storage.

With this in place, we can implement our workaround. Let's create a file called `deeplink.ts`:

```ts
const deeplinkPathAndQueryKey = 'deeplink:pathAndQuery';

/**
 * If authenticated, redirect to the path and query string stored in local storage.
 * If not authenticated, store the current path and query string in local storage and redirect to the login page.
 *
 * @param loginUrl The URL to redirect to if the user is not authenticated
 */
export async function deeplink(loginUrl: string) {
  if (!loginUrl) {
    throw new Error('loginUrl is required');
  }

  const pathAndQuery = location.pathname + location.search;
  console.log(`deeplink: URL before: ${pathAndQuery}`);

  const deeplinkPathAndQuery = localStorage.getItem(deeplinkPathAndQueryKey);

  const isAuth = await isAuthenticated();

  if (isAuth) {
    if (deeplinkPathAndQuery && pathAndQuery === '/') {
      console.log(`deeplink: Redirecting to ${deeplinkPathAndQuery}`);
      localStorage.removeItem(deeplinkPathAndQueryKey);
      history.replaceState(null, '', deeplinkPathAndQuery);
    }
  } else if (!deeplinkPathAndQuery) {
    if (pathAndQuery !== '/' && pathAndQuery !== loginUrl) {
      console.log(
        `deeplink: Storing redirect URL of ${pathAndQuery} and redirecting to ${loginUrl}`,
      );
      localStorage.setItem(deeplinkPathAndQueryKey, pathAndQuery);
      location.href = loginUrl;
    } else {
      console.log(`deeplink: Redirecting to ${loginUrl}`);
      location.href = loginUrl;
    }
  }
}

async function isAuthenticated() {
  try {
    const response = await fetch('/.auth/me');
    const authMe = (await response.json()) as AuthMe;
    const isAuth = authMe.clientPrincipal !== null;
    return isAuth;
  } catch (error) {
    console.error('Failed to fetch /.auth/me', error);
    return false;
  }
}

interface AuthMe {
  clientPrincipal: null | {
    claims: {
      typ: string;
      val: string;
    }[];
    identityProvider: string;
    userDetails: string;
    userId: string;
    userRoles: string[];
  };
}
```

The code above implements our workaround. It does the following:

- it checks whether a user is authenticated by hitting the `/.auth/me` endpoint that is provided by the Easy Auth / Static Web Apps authentication system
- if users are not authenticated, it:
  - stores the path and query string in localStorage and
  - redirects them to the login page
- when they return post-authentication it retrieves the path and query string from localStorage and sets the URL to that

What does usage look like? Well let's take the root of a simple React app:

```tsx
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { deeplink } from 'easyauth-deeplink';

function main() {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>,
    );
  }
}

deeplink('/login').then(main);
// or
deeplink('/.auth/login/aad').then(main);
// or
deeplink('/.auth/login/github').then(main);
// or
deeplink('/.auth/login/twitter').then(main);
// or
deeplink('/.auth/login/google').then(main);
// etc
```

You can see here that the first thing we do is call `deeplink` with the URL of the login page (you can see I've provided a number of options). This will redirect the user to the login page if they're not authenticated, and will redirect them to the URL they were trying to access if they are authenticated. Once that's done, we render our app.

You should be able to apply this regardless of your framework. The important thing is that you call `deeplink` before you render your app.

## Announcing `easyauth-deeplink`

I've created a package called [`easyauth-deeplink`](https://github.com/johnnyreilly/easyauth-deeplink) that implements the workaround above. You can install it with `npm install easyauth-deeplink` or `yarn add easyauth-deeplink`. It's a single file, so you can just copy and paste it into your project if you prefer.

## Conclusion

It would be tremendous if this became a feature that was built into Azure Static Web Apps. Maybe one day it will be. In the meantime, I hope this workaround helps you.

It should be said that whilst we've described usage in this post with Static Web Apps, the same approach should work with any Azure Service that has Easy Auth enabled; App Service / Function Apps etc. I've not tried it, but I'd be surprised if it didn't work.
