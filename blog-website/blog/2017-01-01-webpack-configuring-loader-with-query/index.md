---
slug: webpack-configuring-loader-with-query
title: 'webpack: configuring a loader with query / options'
authors: johnnyreilly
tags: [webpack]
hide_table_of_contents: false
description: 'webpack 2 now enforces a strict schema for `webpack.config.js`. Loaders should be configured using `query` or `options`.'
---

[webpack 2 is on it's way](https://medium.com/webpack/webpack-2-2-the-release-candidate-2e614d05d75f#.ntniu44u6). As one of the maintainers of [ts-loader](https://github.com/TypeStrong/ts-loader/) I've been checking out that ts-loader works with webpack 2. It does: phew!

<!--truncate-->

ts-loader has a continuous integration build that runs against webpack 1. When webpack 2 ships we're planning to move to running CI against webpack 2. However, webpack 2 has some breaking changes. The one that's particularly of relevance to our test packs is that a strict schema is now enforced for `webpack.config.js` with webpack 2. This has been the case since webpack 2 hit beta 23. Check the [PR that added it](https://github.com/webpack/webpack/pull/2974). You can see some of the [frankly tortured discussion that this generated as well](https://github.com/webpack/webpack/issues/3018).

Let's all take a moment and realise that working on open source is sometimes a rather painful experience. Take a breath. Breathe out. Ready to carry on? Great.

There are 2 ways to configure loader options for ts-loader (and in fact this stands for most loaders). Loader options can be set either using a `query` when specifying the loader or through the `ts` (insert the name of alternative loaders here) property in the `webpack.config.js`.

The implicatations of the breaking change are: with webpack 2 you can **no longer** configure ts-loader (or any other loader) with a `ts` (insert the name of alternative loaders here) property in the `webpack.config.js`. It **must** be done through the `query` / `options`. The following code is no longer valid with webpack 2:

```js
module.exports = {
  ...
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  // specify option using `ts` property - **only do this if you are using webpack 1**
  ts: {
    transpileOnly: false
  }
}
```

This change means that we have needed to adjust how our test pack works. We can no longer make use of `ts` for configuration. Since I wasn't terribly aware of `query` I thought it made sense to share my learnings.

## What exactly is `query` / `options`?

Good question. Well, strictly speaking it's 2 possible things; both ways to configure a webpack loader. Classically `query` was a string which could be appended to the name of the loader much like a [`query string`](https://en.wikipedia.org/wiki/Query_string) but actually with [greater powers](https://github.com/webpack/loader-utils#parsequery):

```js
module.exports = {
  ...
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader?' + JSON.stringify({
        transpileOnly: false
      })
    }]
  }
}
```

But it can also be a separately specified object that's supplied alongside a loader (I understand this is relatively new behaviour):

```js
module.exports = {
  ...
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
      query: {
        transpileOnly: false
      }
    }]
  }
}
```

## webpack 2 is coming - look busy!

So if you're planning to move to webpack 2, be aware of this breaking change. You can start moving to using configuration via query right now with webpack 1. You don't need to be using webpack 2 to make the jump. So jump!

Finally, and by way of a PS, `query` is renamed to `options` in webpack 2; a much better name to my mind. There's actually a bunch of other renames on the way as well - check out the [migration guide](https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules) for more on this. The important thing to note is that **the old names work in webpack 2**. But you should plan to move to the new naming at some point as they'll likely disappear when webpack 3 ships.
