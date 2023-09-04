---
slug: using-ts-loader-with-webpack-2
title: 'Using ts-loader with webpack 2'
authors: johnnyreilly
tags: [ts-loader, webpack]
hide_table_of_contents: false
description: 'TypeScript loader ts-loader has made its loader compatible with webpack 2. The update allows greater compatibility between the two applications.'
---

Hands up, despite being one of the maintainers of [ts-loader](https://github.com/TypeStrong/ts-loader) (a TypeScript loader for webpack) I have not been tracking webpack v2. My reasons? Well, I'm keen on cutting edge but bleeding edge is often not a ton of fun as dealing with regularly breaking changes is frustrating. I'm generally happy to wait for things to settle down a bit before leaping aboard. However, [webpack 2 RC'd last week](https://github.com/webpack/webpack/releases/tag/v2.2.0-rc.0) and so it's time to take a look!

<!--truncate-->

## Porting our example

Let's take [ts-loader's webpack 1 example](https://github.com/TypeStrong/ts-loader/tree/master/examples/webpack1-gulp-react-flux-babel-karma) and try and port it to webpack 2. Will it work? Probably; I'm aware of other people using ts-loader with webpack 2. It'll be a voyage of discovery. Like Darwin on the Beagle, I shall document our voyage for a couple of reasons:

- I'm probably going to get some stuff wrong. That's fine; one of the best ways to learn is to make mistakes. So do let me know where I go wrong.
- I'm doing this based on what I've read in the new docs; they're very much a work in progress and the mistakes I make here may lead to those docs improving even more. That matters; **documentation matters**. I'll be leaning heavily on the [Migrating from v1 to v2](https://webpack.js.org/guides/migrating/) guide.

So here we go. Our example is one which uses TypeScript for static typing and uses Babel to transpile from ES-super-modern (yes - it's a thing) to ES-older-than-that. Our example also uses React; but that's somewhat incidental. It only uses webpack for typescript / javascript and karma. It uses gulp to perform various other tasks; so if you're reliant on webpack for less / sass compilation etc then I have no idea whether that works.

First of all, let's install the latest RC of webpack:

```ts
npm install webpack@2.2.0-rc.1 --save-dev
```

## `webpack.config.js`

Let's look at our existing `webpack.config.js`:

```js
'use strict';

var path = require('path');

module.exports = {
  cache: true,
  entry: {
    main: './src/main.tsx',
    vendor: ['babel-polyfill', 'fbemitter', 'flux', 'react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader:
          'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2016', 'es2015', 'react'],
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
};
```

There's a number of things we need to do here. First of all, we can get rid of the empty extension under resolve; I understand that's unnecessary now. Also, I'm going to get rid of `'.webpack.js'` and `'.web.js'`; I never used them anyway. Also, just having `'babel'` as a loader won't fly anymore. We need that suffix as well.

Now I could start renaming `loaders` to `rules` as the terminology is changing. But I'd like to deal with that later since I know the old school names are still supported at present. More interestingly, I seem to remember hearing that one of the super exciting things about webpack is that it supports modules directly now. (I think that's supposed to be good for tree-shaking but I'm not totally certain.)

Initially I thought I was supposed to switch to a custom babel preset called [`babel-preset-es2015-webpack`](https://www.npmjs.com/package/babel-preset-es2015-webpack). However it has a big "DEPRECATED" mark at the top and it says I should just use `babel-preset-es2015` (which I already am) with the following option specified:

```js
{
    "presets": [
        [
            "es2015",
            {
                "modules": false
            }
        ]
    ]
}
```

Looking at our existing config you'll note that for `js` files we're using `query` (`options` in the new world I understand) to configure babel usage. We're using [query parameters](https://webpack.github.io/docs/using-loaders.html#query-parameters) for `ts` files. I have _zero_ idea how to configure preset options using query parameters. Fiddling with `query` / `options` didn't seem to work. So, I've decided to abandon using query entirely and drop in a [`.babelrc`](http://babeljs.io/docs/usage/babelrc/) file using our presets combined with the [`modules`](https://babeljs.io/docs/plugins/#plugin-preset-options) setting:

```js
{
   "presets": [
      "react",
      [
         "es2015",
         {
            "modules": false
         }
      ],
      "es2016"
   ]
}
```

As an aside; apparently these are applied in reverse order. So `es2016` is applied first, `es2015` second and `react` third. I'm not totally certain this is correct; the `<a href="http://babeljs.io/docs/usage/babelrc/">.babelrc</a> docs` are a little unclear.

With our query options extracted we're down to a simpler `webpack.config.js`:

```js
'use strict';

var path = require('path');

module.exports = {
  cache: true,
  entry: {
    main: './src/main.tsx',
    vendor: ['babel-polyfill', 'fbemitter', 'flux', 'react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
```

## `plugins`

In our example the `plugins` section of our `webpack.config.js` is extended in a separate process. Whilst we're developing we also set the `debug` flag to be `true`. [It seems we need to introduce a `LoaderOptionsPlugin` to do this for us.](https://webpack.js.org/guides/migrating/#debug)

As we introduce our `LoaderOptionsPlugin` we also need to make sure that we provide it with `options`. How do I know this? Well [someone raised an issue against ts-loader](https://github.com/TypeStrong/ts-loader/issues/283). I don't think this is actually an issue with ts-loader; I think it's just a webpack 2 thing. I could be wrong; answers on a postcard please.

Either way, to get up and running we just need the `LoaderOptionsPlugin` in play. Consequently, most of what follows in our `webpack.js` file is unchanged:

```js
// .....

var webpackConfig = require('../webpack.config.js');
var packageJson = require('../package.json');

// .....

function buildProduction(done) {
  // .....

  myProdConfig.plugins = myProdConfig.plugins.concat(
    // .....

    // new webpack.optimize.DedupePlugin(), Not a thing anymore apparently
    new webpack.optimize.UglifyJsPlugin(),

    // I understand this here matters...
    // but it doesn't seem to make any difference; perhaps I'm missing something?
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    failPlugin,
  );

  // .....
}

function createDevCompiler() {
  var myDevConfig = webpackConfig;
  myDevConfig.devtool = 'inline-source-map';
  // myDevConfig.debug = true; - not allowed in webpack 2

  myDevConfig.plugins = myDevConfig.plugins.concat(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    new WebpackNotifierPlugin({
      title: 'webpack build',
      excludeWarnings: true,
    }),

    // this is the webpack 2 hotness!
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: myDevConfig,
    }),
    // it ends here - there wasn't much really....
  );

  // create a single instance of the compiler to allow caching
  return webpack(myDevConfig);
}

// .....
```

## `LoaderOptionsPlugin` we hardly new ya

After a little more experimentation it seems that the `LoaderOptionsPlugin` is not necessary at all for our own use case. In fact it's probably not best practice to get used to using it as it's only intended to live a short while whilst people move from webpack 1 to webpack 2. In that vein let's tweak our `webpack.js` file once more:

```js
function buildProduction(done) {
  // .....

  myProdConfig.plugins = myProdConfig.plugins.concat(
    // .....

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),

    failPlugin,
  );

  // .....
}

function createDevCompiler() {
  var myDevConfig = webpackConfig;
  myDevConfig.devtool = 'inline-source-map';

  myDevConfig.plugins = myDevConfig.plugins.concat(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    new WebpackNotifierPlugin({
      title: 'webpack build',
      excludeWarnings: true,
    }),
  );

  // create a single instance of the compiler to allow caching
  return webpack(myDevConfig);
}

// .....
```

## `karma.conf.js`

Finally Karma. Our `karma.conf.js` with webpack 1 looked like this:

```js
/* eslint-disable no-var, strict */
'use strict';

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html
  config.set({
    browsers: ['PhantomJS'],

    files: [
      // This ensures we have the es6 shims in place and then loads all the tests
      'test/main.js',
    ],

    port: 9876,

    frameworks: ['jasmine'],

    logLevel: config.LOG_INFO, //config.LOG_DEBUG

    preprocessors: {
      'test/main.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      debug: true,
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true,
      },
    },

    // reporter options
    mochaReporter: {
      colors: {
        success: 'bgGreen',
        info: 'cyan',
        warning: 'bgBlue',
        error: 'bgRed',
      },
    },
  });
};
```

We just need to chop out the `debug` statement from the `webpack` section like so:

```js
module.exports = function(config) {

  // .....

    webpack: {
      devtool: 'inline-source-map',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },

  // .....

  });
};
```

## Compare and contrast

We now have a repo that works with webpack 2 rc 1. Yay! If you'd like to see it then take a look [here](https://github.com/TypeStrong/ts-loader/tree/master/examples/webpack2-gulp-react-flux-babel-karma).

I thought I'd compare performance / output size of compiling with webpack 1 to webpack 2. First of all in debug / development mode:

```ts
// webpack 1

Version: webpack 1.14.0
Time: 5063ms
    Asset     Size  Chunks             Chunk Names
  main.js  37.2 kB       0  [emitted]  main
vendor.js  2.65 MB       1  [emitted]  vendor

// webpack 2

Version: webpack 2.2.0-rc.1
Time: 5820ms
    Asset     Size  Chunks                    Chunk Names
  main.js  38.7 kB       0  [emitted]         main
vendor.js  2.63 MB       1  [emitted]  [big]  vendor
```

Size and compilation time is not massively different from webpack 1 to webpack 2. It's all about the same. I'm not sure if that's to be expected or not.... Though I've a feeling in production mode I'm supposed to feel the benefits of tree shaking so let's have a go:

```ts
// webpack 1

Version: webpack 1.14.0
Time: 5788ms
                         Asset     Size  Chunks             Chunk Names
  main.269c66e1bc13b7426cee.js  10.5 kB       0  [emitted]  main
vendor.269c66e1bc13b7426cee.js   231 kB       1  [emitted]  vendor

// webpack 2

Version: webpack 2.2.0-rc.1
Time: 5659ms
                         Asset     Size  Chunks             Chunk Names
  main.33e0d70eeec29206e9b6.js  9.22 kB       0  [emitted]  main
vendor.33e0d70eeec29206e9b6.js   233 kB       1  [emitted]  vendor
```

To my surprise this looks pretty much unchanged before and after as well. This may be a sign I have missed something crucial out. Or maybe that's to be expected. Do give me a heads up if I've missed something...
