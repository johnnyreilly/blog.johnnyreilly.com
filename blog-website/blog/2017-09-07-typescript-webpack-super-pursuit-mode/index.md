---
slug: typescript-webpack-super-pursuit-mode
title: 'TypeScript + webpack: Super Pursuit Mode'
authors: johnnyreilly
tags: [fork-ts-checker-webpack-plugin, webpack, typescript]
hide_table_of_contents: false
description: 'Learn how to improve build speeds with TypeScript and webpack using fork-ts-checker-webpack-plugin, HappyPack, and thread-loader/cache-loader.'
---

_[This post also featured as a webpack Medium publication](https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79)._

<!--truncate-->

If you're like me then you'll like TypeScript and you'll like module bundling with webpack. You may also like speedy builds. That's completely understandable. The fact of the matter is, you sacrifice a bit of build speed to have webpack in the mix. Wouldn't it be great if we could even up the difference?

I'm the primary maintainer of ts-loader, a TypeScript loader for webpack. Just recently a couple of PRs were submitted that said, in other words: ts-loader is like this:

![](KITT.webp)

But it could be like this:

![](webkitt.webp)

Apologies for the image quality above; there appear to be no high quality pictures out there of KITT in Super Pursuit Mode for me to defame with [Garan Jenkin](https://github.com/plemont)'s atrocious puns.

## fork-ts-checker-webpack-plugin

["Faster type checking with forked process"](https://github.com/TypeStrong/ts-loader/issues/537) read the enticing name of the issue. It turned out to be [Piotr Oleś](https://github.com/piotr-oles) ([@OlesDev](https://twitter.com/OlesDev)) telling the world about his beautiful creation. He'd put together a mighty fine plugin that can be used alongside ts-loader called the [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin). The name is a bit of a mouthful but the purpose is mouth-watering. To quote the README, it is a:

> webpack plugin that runs typescript type checker on a separate process.

What does this mean and how does this fit with ts-loader? Well, ts-loader does 2 jobs:

1. It transpiles your TypeScript into JavaScript and hands it off to webpack
2. It collects any TypeScript compilation errors and reports them to webpack

What this plugin does is say, "forget about #2 - we've got this." It removes the responsibility for type checking from ts-loader, so the only work ts-loader does is transpilation. In the meantime, the all important type checking is still happening. To be honest, there would be little reason to recommend this approach otherwise. The difference is `fork-ts-checker-webpack-plugin` is doing the heavy lifting **in a separate process**. This provides a nice performance boost to your workflow. ts-loader is doing **less** and that's a <u>good thing</u>

.

The approach used here is similar to that employed by awesome-typescript-loader. ATL is another TypeScript loader for webpack by the excellent [Stanislav Panferov](https://github.com/s-panferov). ATL also has a technique for performing typechecking in a forked process. fork-ts-checker-webpack-plugin was an effort by Piotr to implement something similar but with improved incremental build performance.

How do we use it? Add fork-ts-checker-webpack-plugin as a `devDependency` of your project and then amend the `webpack.config.js` to set ts-loader into `transpileOnly` mode and drop the plugin into the mix:

```js
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var webpackConfig = {
  // other config...
  context: __dirname, // to automatically find tsconfig.json
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
```

If you'd like to see an example of how to use the plugin then take a look at a [simple example](https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker) and a [more involved one](https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-fork-ts-checker).

## HappyPack

Not so long ago I didn't know what <strike>happyness</strike>

[HappyPack](https://github.com/amireh/happypack) was. "Happiness in the form of faster webpack build times." That's what it is.

> HappyPack makes webpack builds faster by allowing you to transform multiple files in parallel.

It does this by spinning up multiple threads, each with their own loaders inside. We wanted to do this with ts-loader; to have multiple instances of ts-loader running. Work can then be divided up across these separate loaders. Isn't multi-threading great?

ts-loader did not initially play nicely with HappyPack; essentially this is because ts-loader touches parts of webpack's API that HappyPack replaces. The entirely wonderful [Artem Kozlov](https://github.com/aindlq) submitted a [PR which added HappyPack support to ts-loader](https://github.com/TypeStrong/ts-loader/pull/547). Support essentially amounts to switching ts-loader to run in `transpileOnly` mode and ensuring that there is no attempt to talk to parts of the webpack API that HappyPack removes.

It would be hard to recommend using HappyPack as is because, as with `transpileOnly` mode you lose all typechecking. Where it becomes worthwhile is where it is combined with the fork-ts-checker-webpack-plugin so you keep the typechecking.

Enough with the chitter chatter; how can we achieve this? Add HappyPack as a `devDependency` of your project and then amend the `webpack.config.js` as follows:

```js
var HappyPack = require('happypack');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // other config...
  context: __dirname, // to automatically find tsconfig.json
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=ts',
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'ts',
      threads: 2,
      loaders: [
        {
          path: 'ts-loader',
          query: { happyPackMode: true },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
  ],
};
```

Note that the ts-loader options are now configured via the HappyPack `query` and that we're setting ts-loader with the `happyPackMode` option set.

There's one other thing to note which is important; we're now passing the `checkSyntacticErrors` option to the fork plugin. This ensures that the plugin checks for both syntactic errors (eg `const array = [{} {}];`) and semantic errors (eg `const x: number = '1';`). By default the plugin only checks for semantic errors. This is because when ts-loader is used with `transpileOnly` set, ts-loader will still report syntactic errors. But when used in `happyPackMode` it does not.

If you'd like to see an example of how to use HappyPack then once again we have a [simple example](https://github.com/TypeStrong/ts-loader/tree/master/examples/happypack) and a [more involved one](https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-happypack).

## `thread-loader` \+ `cache-loader`

You might have some reservations about using HappyPack. First of all the quirky configuration required makes your webpack config rather less comprehensible. Also, HappyPack is not officially blessed by webpack. It is a side project developed externally from webpack and there's no guarantees that new versions of webpack won't break it. Neither of these are reasons not to use HappyPack but they are things to bear in mind.

What if there were a way to parallelise our builds which dealt with these issues? Well, there is! By using [thread-loader](https://github.com/webpack-contrib/thread-loader) and [cache-loader](https://github.com/webpack-contrib/cache-loader) in combination you can both feel happy that you're using an official webpack workflow and you can have a config that's less confusing.

What would that config look like? This:

```js
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // other config...
  context: __dirname, // to automatically find tsconfig.json
  module: {
    rules: {
      test: /\.tsx?$/,
      use: [
        { loader: 'cache-loader' },
        {
          loader: 'thread-loader',
          options: {
            // there should be 1 cpu for the fork-ts-checker-webpack-plugin
            workers: require('os').cpus().length - 1,
          },
        },
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
          },
        },
      ],
    },
  },
  plugins: [new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })],
};
```

As you can see the configuration is much cleaner than with HappyPack. Interestingly ts-loader still needs to run in "`happyPackMode`" and that's because thread-loader is essentially behaving in the same fashion as with HappyPack and so ts-loader needs to behave in the same way. Probably ts-loader should have a more generic flag name than "`happyPackMode`". (Famously, naming things is hard; so if you've a good idea, tell me!)

These loaders are new and so tread carefully. My own experiences have been pretty positive but your mileage may vary. Do note that, as with HappyPack, the thread-loader is highly configurable.

If you'd like to see an example of how to use thread-loader and cache-loader then once again we have a [simple example](https://github.com/TypeStrong/ts-loader/tree/master/examples/thread-loader) and a [more involved one](https://github.com/TypeStrong/ts-loader/tree/master/examples/react-babel-karma-gulp-thread-loader).

## All This Could Be Yours...

> Wow! It looks like we can cut our build time by 4 minutes! [\#webpack](https://twitter.com/hashtag/webpack?src=hash)[@typescriptlang](https://twitter.com/typescriptlang) // cc [@johnny_reilly](https://twitter.com/johnny_reilly)[pic.twitter.com/gjvy9SLBAT](https://t.co/gjvy9SLBAT)
>
> — Donald Pipowitch (@PipoPeperoni) [June 23, 2017](https://twitter.com/PipoPeperoni/status/878148978356834304)

<script async="" src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

In this post we're improving build speeds with TypeScript and webpack in 3 ways:

<dl><dt>fork-ts-checker-webpack-plugin</dt><dd>With this plugin in play ts-loader only performs transpilation. ts-loader is doing less so the build is faster.</dd><dt>HappyPack</dt><dd>With HappyPack in the mix, the build is parallelised. That parallelisation means the build is faster.</dd><dt>thread-loader / cache-loader</dt><dd>With thread-loader and cache-loader, again the build is parallelised and the build is faster.</dd></dl>

<iframe src="https://giphy.com/embed/Bo2WsocASVBm0" width="240" height="180" frameBorder="0" allowFullScreen=""></iframe>
