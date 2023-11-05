---
slug: webpack-syncing-enhanced-resolve
title: 'webpack: syncing the enhanced-resolve'
authors: johnnyreilly
tags: [webpack]
hide_table_of_contents: false
description: 'How to create a sync webpack resolver instead of the default async resolver using `enhanced-resolve`.'
---

Like Captain Ahab I resolve to sync the white whale that is webpack's [`enhanced-resolve`](https://github.com/webpack/enhanced-resolve)... English you say? Let me start again:

<!--truncate-->

So, you're working on a webpack loader. (In my case the typescript loader; [`ts-loader`](https://github.com/TypeStrong/ts-loader)) You have need of webpack's resolve capabilities. You dig around and you discover that that superpower is lodged in the very heart of the enhanced-resolve package. Fantastic. But wait, there's more: your needs are custom. You need a sync, not an async resolver. (Try saying that quickly.) You regard the description of `enhanced-resolve` with some concern:

> "Offers an async require.resolve function. It's highly configurable."

Well that doesn't sound too promising. Let's have a look at the docs. Ah. Hmmm. You know how it goes with webpack. Why document anything clearly when people could just guess wildly until they near insanity and gibber? Right? It's well established that webpack's attitude to docs has been traditionally akin to Gordon Gecko's view on lunch.

![](documentation-is-for-wimps.webp)

In all fairness, things are beginning to change on that front. In fact the [new docs](https://webpack.js.org/) look very promising. But regrettably, the docs on the enhanced-resolve repo are old school. Which is to say: opaque. However, I'm here to tell you that if a sync resolver is your baby then, contrary to appearances, `enhanced-resolve` has your back.

## Sync, for lack of a better word, is good

Nestled inside enhanced-resolve is the [`ResolverFactory.js`](https://github.com/webpack/enhanced-resolve/blob/3f3f4cd1fcbafa1e98c3c6470fed1277817ed607/lib/ResolverFactory.js) which can be used to make a resolver. However, you can supply it with a million options and that's just like giving someone a gun with a predilection for feet.

What you want is an example of how you could make a sync resolver. Well, surprise surprise it's right in front of your nose. Tucked away in [`node.js`](https://github.com/webpack/enhanced-resolve/blob/3f3f4cd1fcbafa1e98c3c6470fed1277817ed607/lib/node.js) (I do \***not**\* get the name) is exactly what you're after. It contains a number of factory functions which will construct a ready-made resolver for you; sync or async. Perfect! So here's how I'm rolling:

```js
const node = require('enhanced-resolve/lib/node');

function makeSyncResolver(options) {
  return node.create.sync(options.resolve);
}

const resolveSync = makeSyncResolver(loader.options);
```

The loader options used above you'll be familiar with as the `resolve` section of your `webpack.config.js`. You can read more about them [here](https://github.com/webpack/enhanced-resolve/blob/master/README/index.md) and [here](https://webpack.js.org/configuration/resolve/).

What you're left with at this point is a function; a `resolveSync` function if you will that takes 3 arguments:

<dl><dt>context</dt><dd>I don't know what this is. So when using the function I just supply <code>undefined</code>; and that seems to be OK. Weird, right?</dd><dt>path</dt><dd>This is the path to your code (I think). So, a valid value to supply - handily lifted from the ts-loader test pack - would be: <code>C:\source\ts-loader\.test\babel-issue92</code></dd><dt>request</dt><dd>The actual module you're interested in; so using the same test the relevant value would be <code>./submodule/submodule</code></dd></dl>

Put it all together and what have you got?

```js
const resolvedFileName = resolveSync(
  undefined,
  'C:source\ts-loader.test\babel-issue92',
  './submodule/submodule',
);

// resolvedFileName: C:\source\ts-loader\.test\babel-issue92\submodule\submodule.tsx
```

Boom.
