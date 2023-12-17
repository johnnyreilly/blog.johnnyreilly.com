---
slug: using-webpacks-defineplugin-with-typescript
title: "Understanding webpack's DefinePlugin (and using with TypeScript)"
description: "webpack's DefinePlugin allows you to create global constants which can be configured at compile time; here's how to use it with TypeScript"
authors: johnnyreilly
tags: [webpack, typescript]
hide_table_of_contents: false
---

I've been searching for a way to describe what the DefinePlugin actually does. The [docs](https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin) say:

> Define free variables. Useful for having development builds with debug logging or adding global constants.

<!--truncate-->

I think I would describe it like this: the DefinePlugin allows you to create global constants which can be _configured at compile time_. I find this very useful for allowing different behaviour between development builds and release builds. This post will demonstrate usage of this approach, talk about what's actually happening and how to get this working nicely with TypeScript.

## What Globals?

For our example we want to define 2 global constants; a string called `__VERSION__` and a boolean called `__IN_DEBUG__`. The names are deliberately wacky to draw attention to the fact that these are not your everyday, common-or-garden variables. Them's "special". These constants will be initialised with different values depending on whether we are in a debug build or a production build. Usage of these constants in our code might look like this:

```ts
if (__IN_DEBUG__) {
  console.log(`This app is version ${__VERSION__}`);
}
```

So, if `__IN_DEBUG__` is set to `true` this code would log out to the console the version of the app.

## Configuring our Globals

To introduce these constants to webpack we're going to add this to our webpack configuration:

```ts
var webpack = require('webpack');

// ...

plugins: [
  new webpack.DefinePlugin({
    __IN_DEBUG__: JSON.stringify(false),
    __VERSION__: JSON.stringify('1.0.0.' + Date.now()),
  }),
  // ...
];
// ...
```

What's going on here? Well, each key of the object literal above represents one of our global constants. When you look at the value, just imagine each outer `JSON.stringify( ... )` is not there. It's just noise. Imagine instead that you're seeing this:

```ts
__IN_DEBUG__: false,
__VERSION__: '1.0.0.' + Date.now()
```

A little clearer, right? `__IN_DEBUG__` is given the boolean value `false` and `__VERSION__` is given the string value of `1.0.0.` plus the ticks off of `Date.now()`. What's happening here is well explained in Pete Hunt's excellent [webpack howto](https://github.com/petehunt/webpack-howto#6-feature-flags): "definePlugin takes raw strings and inserts them". `JSON.stringify` facilitates this; it produces a string representation of a value that can be inlined into code. When the inlining takes place the actual output would be something like this:

```ts
if (false) {
  // Because at compile time, __IN_DEBUG__ === false
  console.log(`This app is version ${'1.0.0.1469268116580'}`); // And __VERSION__ === "1.0.0.1469268116580"
}
```

And if you've got some [UglifyJS](https://github.com/mishoo/UglifyJS) or similar in the mix then, in the example above, this would actually strip out the statement above entirely since it's clearly a [NOOP](https://en.wikipedia.org/wiki/NOP). Yay the dead code removal! If `__IN_DEBUG__` was `false` then (perhaps obviously) this statement would be left in place as it wouldn't be dead code.

## TypeScript and Define

The final piece of the puzzle is making TypeScript happy. It doesn't know anything about our global constants. So we need to tell it:

```ts
declare var __IN_DEBUG__: boolean;
declare var __VERSION__: string;
```

And that's it. Compile time constants are a go!
