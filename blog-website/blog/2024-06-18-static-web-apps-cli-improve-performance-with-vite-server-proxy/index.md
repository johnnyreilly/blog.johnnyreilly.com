---
slug: static-web-apps-cli-improve-performance-with-vite-server-proxy
title: 'Static Web Apps CLI: improve performance with Vite server proxy'
authors: johnnyreilly
tags: [azure static web apps, node.js]
image: ./title-image.png
description: 'The Static Web Apps CLI has a slow proxy server. This post shows you how to improve performance by using Vite server proxy instead.'
hide_table_of_contents: false
---

I often use the Azure Static Web Apps CLI for local development. It's not only handy when building Azure Static Web Apps, but also when building other types of web app, which also rely upon both a frontend server and some kind of API server. The Azure Static Web Apps CLI is particularly handy if you want to spoof authentication / authorization as well.

Changes in the behaviour of Node.js in version 17 caused issues with the Static Web Apps CLI. You can read a [previous post which discussed this](../2023-05-20-static-web-apps-cli-node-18-could-not-connect-to-api/index.md). However, whilst the issue was fixed in version 1.1.4 of the Static Web Apps CLI, it caused significant performance regressions in the CLIs dev server functionality.

This post shows you how to improve your developer experience by using Vite server proxy instead.

![title image reading "Static Web Apps CLI: improve performance with Vite server proxy" with the Static Web Apps CLI and Vite logos](title-image.png)

<!--truncate-->

## What the Static Web Apps CLI does

The Static Web Apps CLI is a great tool for local development. It spins up a local server which proxies requests to your frontend / backend servers. This is a great way to handle local development without having to work around CORS issues. There's also an extra bonus in the box, in that you can spoof authentication / authorization as well.

So to be clear, for the purposes of local development, the Static Web Apps CLI is a dev server that does three important things:

1. Proxies requests across to your front end dev server (in my case this is Vite, and this will become relevant later)
2. Proxies requests across to your backend server
3. Provides an authentication / authorization mechanism

## The issue with the Static Web Apps CLI

All of this is great, but the performance of the proxy server has been poor since version 1.1.4 of the Static Web Apps CLI. So whilst the issue with Node.js 18 was fixed, the performance of the proxy server was impacted. Consider a comment from [this GitHub issue](https://github.com/Azure/static-web-apps-cli/issues/663#issuecomment-1646061953):

> It works for me as well, the main problem is that the performance of the site is terrible when compared not running through swa cli. Pages take long time to load and resources (for example > 1s to load a font)

Regrettably, performance has not improved significantly since that time. [You can read more about the performance issues in this issue](https://github.com/Azure/static-web-apps-cli/issues/736).

## Proxying with Vite

So what can we do about this? Well, for my local development I'm using Vite as my frontend server. Vite has a server proxy feature which is very performant.

[Sam "Betty" McKoy](https://github.com/bzbetty) suggested that we could use the Vite server proxy instead of the Static Web Apps CLI proxy server [here](https://github.com/Azure/static-web-apps-cli/issues/736#issuecomment-2143373208). This is a great idea, and it's very easy to do.

My `package.json` file in the frontend app has the following scripts:

```json
    "scripts": {
        "dev": "vite",
        "start": "swa start http://localhost:5173 --run \"npm run dev\" --api-location ./api"
    }
```

Right now, once I've run `npm start` the Static Web Apps CLI will start up the frontend server and the backend server. I can then browse to `http://localhost:4280` and see my app running. Front end requests will be proxied to `http://localhost:5173` and backend requests will be proxied to my API (in my case it's an Azure Function served on `http://localhost:7071`) - but it could be somewhere else, and [that's configurable](https://azure.github.io/static-web-apps-cli/docs/cli/swa-start/#start-api-server-manually).

To get the Vite server proxy working, I need to change the `vite.config.ts` to add the following `server.proxy` configuration:

```ts
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // ...
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4280',
        changeOrigin: true,
        autoRewrite: true,
      },
      '/.auth': {
        target: 'http://127.0.0.1:4280',
        changeOrigin: true,
        autoRewrite: true,
      },
    },
  },
});
```

What does this do? Well, for requests that go to Vite (on `http://localhost:5173`), thanks to this change, requests with the prefix `/api` and `/.auth` are now proxied across back to the Static Web App CLI server at `http://localhost:4280`.

You'll note a few options being set:

- [`changeOrigin`](https://vitejs.dev/config/server-options.html#server-proxy) - will change both host and origin headers to match the target
- [`autoRewrite`](https://github.com/http-party/node-http-proxy#options) - rewrites the location host/port on (201/301/302/307/308) redirects based on requested host/port.

You'll also note we're using a `target` of `http://127.0.0.1:4280` rather than `http://localhost:4280`. This is because of the changes in Node.js 17 and above which mean that IPv6 is the default DNS instead of IPv4.

If you were to try using a `target` of `http://localhost:4280` in the configuration you may see an error like below due to the IPv6 DNS issue:

```bash
[run] 1:38:29 PM [vite] http proxy error: /.auth/login/aad
[run] Error: connect ECONNREFUSED ::1:4280
[run]     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1555:16)
```

If you stick with `http://127.0.0.1:4280` and you should be fine. I discovered the workaround from [this GitHub issue](https://github.com/vitejs/vite/discussions/7620#discussioncomment-5689650).

## Comparing performance

With the Vite `server.proxy` configuration in place, our app is now usable on 2 ports. We can browse to both `http://localhost:5173` and `http://localhost:4280` - both ports will show our app running. Going to `http://localhost:5173` is using Vite directly for static assets and proxying back to `http://localhost:4280` for API / auth. Going to `http://localhost:4280` is using the Static Web Apps CLI to proxy to Vite for static assets, uses itself for auth and proxies any API requests.

I'm going to take a medium sized app and run it with both configurations. I'll then use the Chrome DevTools to compare the performance of the two configurations. It'll be a basic test, but it should give us an idea of the performance difference.

The Static Web App CLI (`http://localhost:4280`) takes just over **10 seconds** to load the app.

![screenshot of devtools showing 10 seconds finish time](devtools-performance-static-web-app-cli.png)

The Vite server proxy (`http://localhost:5173`) takes just around **1.5 seconds** to load the app.

![screenshot of devtools showing 10 seconds finish time](devtools-performance-vite-server-proxy.png)

This is a significant improvement in performance. The Vite server proxy approach is nearly **10x faster** than the Static Web Apps CLI proxy server.

It's worth noting that we're still using the Static Web Apps CLI for authentication / authorization and for hitting the backend server. However, given that static assets are by far the most common request, this change will make a big difference to your local development experience.

## Summary

The Static Web Apps CLI is a great tool for local development. However, the performance of the proxy server has been poor since version 1.1.4. This post has shown you how to improve performance by using the Vite server proxy instead. The Vite server proxy is much faster than the Static Web Apps CLI proxy server. This is a simple change to make, and it will make a big difference to your local development experience. Give it a try and see how much faster your app loads!
