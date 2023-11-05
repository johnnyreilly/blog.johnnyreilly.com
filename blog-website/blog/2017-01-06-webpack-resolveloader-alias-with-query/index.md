---
slug: webpack-resolveloader-alias-with-query
title: 'webpack: resolveLoader / alias with query / options'
authors: johnnyreilly
tags: [webpack]
hide_table_of_contents: false
description: 'Webpacks enhanced-resolve has a bug with aliased loaders. A workaround involves suffixing the aliased path with query options.'
---

Sometimes you write a post for the ages. Sometimes you write one you hope is out of date before you hit "publish". This is one of those.

<!--truncate-->

There's a [bug](https://github.com/webpack/enhanced-resolve/issues/41) in webpack's enhanced-resolve. It means that you cannot configure an aliased loader using the `query` (or `options` in the webpack 2 nomenclature). Let me illustrate; consider the following code:

```js
module.exports = {
  // ...
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
            entryFileIsJs: true
        }
      }
    ]
  }
}

module.exports.resolveLoader = { alias: { 'ts-loader': require('path').join(__dirname, "../../index.js")
```

At the time of writing, if you alias a loader as above, then the `query` / `options` will \*_not_\* be passed along. This is bad, particularly given the requirement in webpack 2 that configuration is no longer possible through extending the [`webpack.config.js`](https://webpack.js.org/guides/migrating/#loader-configuration-is-through-options). So what to do? Well, when this was a problem previously the marvellous [James Brantly](https://www.twitter.com/jbrantly) had a [workaround](https://github.com/webpack/webpack/issues/1289#issuecomment-125767499). I've taken that and run with it:

```js
var config = {
  // ...
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          entryFileIsJs: true,
        },
      },
    ],
  },
};

module.exports = config;

var loaderAliasPath = require('path').join(__dirname, '../../../index.js');
var rules = config.module.loaders || config.module.rules;
rules.forEach(function (rule) {
  var options = rule.query || rule.options;
  rule.loader = rule.loader.replace(
    'ts-loader',
    loaderAliasPath + (options ? '?' + JSON.stringify(options) : ''),
  );
});
```

This approach stringifies the `query` / `options` and suffixes it to the aliased path. This works as long as the options you're passing are JSON-able (yes it's a word).

As I said earlier; hopefully by the time you read this the workaround will no longer be necessary again. But just in case....
