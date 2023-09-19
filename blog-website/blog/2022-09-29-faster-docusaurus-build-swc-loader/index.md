---
slug: faster-docusaurus-build-swc-loader
title: 'Faster Docusaurus builds with swc-loader'
authors: johnnyreilly
tags: [docusaurus, webpack]
image: ./title-image.png
description: 'This post demonstrates how to speed up your Docusaurus build by using SWC and the `swc-loader` for webpack.'
hide_table_of_contents: false
---

This post demonstrates how to speed up your Docusaurus build by using SWC and the `swc-loader` for webpack.

![title image reading "Faster Docusaurus builds with swc-loader" with Docusaurus, SWC and webpack logos](title-image.png)

<!--truncate-->

## SWC

At present there's a number of projects which have been providing alternate transpilation mechanisms to transform TypeScript / modern JavaScript into JavaScript that will run widely supported browsers. Historically this has been handled by tools like the TypeScript compiler itself and Babel. Both of these tools are written in TypeScript / JavaScript. The new tools and projects which have been appearing often use languages like Go and Rust which offer the gift of performance gains. Shorter build times in other words.

We're going to make use of [SWC (Speedy Web Compiler)](https://swc.rs/) to speed up the Docusaurus build. To quote the SWC docs:

> SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.
>
> 🏎 SWC is 20x faster than Babel on a single thread and 70x faster on four cores.

We like faster! Interestingly, the Docusaurus site itself is built with SWC and has been since 19th March 2022. You can see [Josh Cena](https://twitter.com/SidaChen63)'s [PR implementing SWC for Docusaurus here](https://github.com/facebook/docusaurus/pull/6944).

However, by default, Docusaurus is built using Babel. This post will demonstrate how to make the switch. In fact as part of the PR that implements this post, this blog (also platformed on Docusaurus) will migrate from Babel to SWC. [See the blog post PR here](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/288).

## Goodbye `babel-loader`, hello `swc-loader`

Docusaurus is bundled using webpack. As a consequence, we need a tool to bridge the gap between webpack and SWC. That tool is the [`swc-loader`](https://github.com/swc-project/swc-loader).

By default, the Docusaurus build uses Babel for its build. Let's add `swc-loader` and `@swc/core` to the project:

```bash
yarn add @swc/core swc-loader
```

With those in place, we're now able to tweak our the webpack config in `docusaurus.config.js` to use `swc-loader` instead of `babel-loader`:

```js
const config = {
  // ....

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  // ....
};
```

## Build times

With this in place, we're done. We can now run `yarn build` and see the difference in build times. On GitHub actions (where I build my blog), the build time for the blog site went from around 6 minutes to around 4 minutes. It's somewhat variable, but there's a definite improvement, and every little helps!
