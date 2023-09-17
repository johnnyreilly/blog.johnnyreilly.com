---
slug: inlining-angular-templates-with-webpack
title: 'Inlining Angular Templates with WebPack and TypeScript'
authors: johnnyreilly
tags: [angularjs, webpack]
hide_table_of_contents: false
description: '`raw-loader` package in webpack configuration for Angular 1.x projects preloads templates and enables compile-time error checking.'
---

This technique actually applies to pretty much any web stack where you have to supply templates; it just so happens that I'm using Angular 1.x in this case. Also I have an extra technique which is useful to handle the [ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude) scenario.

<!--truncate-->

## Preamble

For some time I've been using webpack to bundle my front end. I write ES6 TypeScript; import statements and all. This is all sewn together using the glorious [ts-loader](https://www.npmjs.com/package/ts-loader) to compile and emit ES6 code which is handed off to the wonderful [babel-loader](https://www.npmjs.com/package/babel-loader) which transpiles it to ESold code. All with full source map support. It's wonderful.

However, up until now I've been leaving Angular to perform the relevant http requests at runtime when it needs to pull in templates. That works absolutely fine but my preference is to preload those templates. In fact I've [written before](../2015-02-17-using-gulp-in-asp-net-instead-of-web-optimization/index.md) about using the [gulp angular template cache](https://www.npmjs.com/package/gulp-angular-templatecache) to achieve just that aim.

So I was wondering; in this modular world what would be the equivalent approach? Sure I could still use the gulp angular template cache approach but I would like something a little more deliberate and a little less magic. Also, I've discovered (to my cost) that when using the existing approach, it's possible to break the existing implementation without realising it; only finding out there's a problem in Production when unexpected http requests start happening. Finding these problems out at compile time rather than runtime is always to be strived for. So how?

## [raw-loader](https://www.npmjs.com/package/raw-loader)!

raw-loader allows you load file content using `require` statements. This works well with the use case of inlining html. So I drop it into my `webpack.config.js` like so:

```js
var path = require('path');

module.exports = {
  cache: true,
  entry: {
    main: './src/main.ts',

    vendor: [
      'babel-polyfill',
      'angular',
      'angular-animate',
      'angular-sanitize',
      'angular-ui-bootstrap',
      'angular-ui-router',
    ],
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
        loader: 'babel-loader?presets[]=es2015!ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        // THIS IS THE MAGIC!
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw',
      },
    ], // THAT WAS THE MAGIC!
  },
  plugins: [
    // ....
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
};
```

With this in place, if someone requires a file with the `html` suffix then raw-loader comes in. So now we can swap this:

```js
$stateProvider.state('state1', {
  url: '/state1',
  templateUrl: 'partials/state1.html',
});
```

For this:

```js
$stateProvider.state('state1', {
  url: '/state1',
  template: require('./partials/state1.html'),
});
```

Now initially TypeScript is going to complain about your `require` statement. That's fair; outside of node-land it doesn't know what `require` is. No bother, you just need to drop in a one line simple definition file to sort this out; let me present `webpack-require.d.ts`:

```ts
declare var require: (filename: string) => any;
```

You've now inlined your template. And for bonus points, if you were to make a mistake in your path then webpack would shout at you at compile time; which is a _good, good_ thing.

## ng-include

The one use case that this doesn't cover is where your templates import other templates through use of the [ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude) directive. They will still trigger http requests as the templates are served. The simple way to prevent that is by priming the angular `<a href="https://docs.angularjs.org/api/ng/service/$templateCache">$templateCache</a>` like so:

```js
app.run([
  '$templateCache',
  ($templateCache: ng.ITemplateCacheService) => {
    $templateCache.put('justSome.html', require('./justSome.html'));
    // Other templates go here...
  },
]);
```

Now when the app spins up it already has everything it needs pre-cached.
