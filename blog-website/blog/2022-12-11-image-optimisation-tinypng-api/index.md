---
title: 'Image Optimisation with the TinyPNG API'
authors: johnnyreilly
tags: [image optimisation, TinyPNG, API]
image: ./title-image.webp
hide_table_of_contents: false
---

Image optimisation can be automated with the TinyPNG API. This post demonstrates how to do that.

![title image reading "Image Optimisation with the TinyPNG API" with TinyPNG and Lighthouse logos](title-image.webp)

## Images and optimisation

Images are a big part of the web. They're also a big part of the web's payload. If we're not careful, we can end up with a site that's slow to load and expensive to host. I run [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) on my blog and I'm always looking for ways to improve the performance of the site. One of the things that Lighthouse flags is image optimisation.

It's a good idea to optimise our images; to make sure they're not unhelpfully large. You can do this manually using tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/). However, it's also possible to automate this process. In this post, I'll show you how to do that using the TinyPNG API.

## The TinyPNG API

The [TinyPNG API](https://tinypng.com/developers) is a paid service. You can get a free API key which allows you to optimise 500 images per month. If you need to optimise more than that, you'll need to pay for a subscription.

It's worth noting that the name "TinyPNG" is a bit of a misnomer. The API supports a number of image formats including PNG, JPEG and WebP. It's not just for PNGs. In fact we'll be using the WebP format in this post.

You can just use the API directly. However, I prefer to use a client library. We'll be using [the Node.js](https://tinypng.com/developers/reference/nodejs) library.

## Getting started

We're going to initialise a simple Node.js console application called "tinify" using [TypeScript](https://www.typescriptlang.org/) and [`ts-node`](https://typestrong.org/ts-node/):

```bash
mkdir tinify
cd tinify
npm init -y
npm install @types/node tinify ts-node typescript
npx tsc --init
```

You'll note that we're using the `tinify` npm package [which is developed here](https://github.com/tinify/tinify-nodejs).
