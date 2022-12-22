---
title: 'Azure Static Web Apps: dynamic redirects with Azure Functions'
authors: johnnyreilly
tags: [Azure Static Web Apps, redirects, Azure Functions, GitHub Actions]
image: ./title-image.png
hide_table_of_contents: false
---

Azure Static Web Apps can perform URL redirects using the `routes` section in the `staticwebapp.config.json`. However it is limited. This post will demonstrate dynamic redirects with Azure Functions.

![title image reading "Azure Static Web Apps: dynamic redirects with Azure Functions" with the Static Web Apps and Azure Functions logo](title-image.png)

Attempt to implement a mechanism that uses an Azure Function as the fallback navigation route as advised by @anthonychu here:

https://twitter.com/nthonyChu/status/1605429770715402240

Based upon prior art in @nuxtjs; see:

- https://github.com/unjs/nitro/blob/1d9102a7215414068e30b52c96324ec3553b61c8/src/runtime/entries/azure.ts#L7
- https://github.com/unjs/nitro/blob/1d9102a7215414068e30b52c96324ec3553b61c8/src/presets/azure.ts#L49

## What's this made up of?

Created a simple JavaScript Azure Function following this guide: https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=react#create-the-api - named our single function `fallback`, so it will be served up at `/api/fallback`

The code of the function is:

```js
//@ts-check
const { parseURL } = require('ufo');
const routes = require('./redirects');

async function fallback(context, req) {
  /** @type string */ const originalUrl = req.headers['x-ms-original-url'];
  if (originalUrl) {
    // This URL has been proxied as there was no static file matching it.
    context.log(`x-ms-original-url: ${originalUrl}`);

    const parsedURL = parseURL(originalUrl);

    const matchedRoute = routes.find((route) =>
      parsedURL.pathname.includes(route.route)
    );

    if (matchedRoute) {
      context.log(`Redirecting ${originalUrl} to ${matchedRoute.redirect}`);

      context.res = {
        status: matchedRoute.statusCode,
        headers: { location: matchedRoute.redirect },
      };
      return;
    }
  }

  context.log(
    `No explicit redirect for ${originalUrl} so will redirect to 404`
  );

  context.res = {
    status: 302,
    headers: {
      location: originalUrl
        ? `/404?originalUrl=${encodeURIComponent(originalUrl)}`
        : '404',
    },
  };
}

module.exports = fallback;
```

Looking at the original URL, this function looks for a redirect in a big list of declared redirects we've made in a `redirects.js` file. If it finds a match, it redirects. Otherwise it redirects to the custom 404 screen and includes any original URL in the query string for visibility. With this in place, any unhandled redirects should show up in Google Analytics etc.

In our `staticwebapp.config.json`:

```json
  "navigationFallback": {
    "rewrite": "/api/fallback"
  },
  "platform": {
    "apiRuntime": "node:18"
  },
  "routes": [
    {
      "route": "/404",
      "statusCode": 404
    },
```

We:

- point to our `fallback` function (`/api/fallback`) in `navigationFallback` - this will attempt to find a declared redirect and redirect to it, failing a match it will redirect to the `/404` route
- we declare an `apiRuntime` of Node.js 18
- whenever the `/404` route is hit, we ensure the status code is 404.
- we remove the `route` redirects we had in place as these will now be handled by `/api/fallback`

In our GitHub Action we add in our Azure Function so it's built and deployed alongside our blog:

```yml
api_location: '/blog-website/api'
```
