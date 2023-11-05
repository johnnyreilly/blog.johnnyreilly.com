---
slug: the-mysterious-case-of-webpack-angular-and-jquery
title: 'The Mysterious Case of webpack, AngularJS and jQuery'
authors: johnnyreilly
tags: [angularjs, webpack, jquery]
hide_table_of_contents: false
description: 'Angular can use jQuery instead of jQLite, but this becomes complicated when using webpack. We need to use the ProvidePlugin function in webpack.config.js.'
---

You may know that [Angular ships with a cutdown version of jQuery called jQLite](https://docs.angularjs.org/api/ng/function/angular.element). It's still possible to use the full-fat jQuery; to quote the docs:

<!--truncate-->

> To use `jQuery`, simply ensure it is loaded before the `angular.js` file.

Now the wording rather implies that you're not using any module loader / bundler. Rather that all files are being loaded via `script` tags and relies on the global variables that result from that. True enough, if you take a look at the [Angular source](https://github.com/angular/angular.js/blob/eaa1119d4252bed08dfa42f984ef9502d0f02775/src/Angular.js#L1791) you can see how this works:

```ts
// bind to jQuery if present;
var jqName = jq();
jQuery = isUndefined(jqName)
  ? window.jQuery // use jQuery (if present)
  : !jqName
  ? undefined // use jqLite
  : window[jqName]; // use jQuery specified by `ngJq`
```

Amongst other things it looks for a `jQuery` variable which has been placed onto the `window` object. If it is found then jQuery is used; if it is not then it's `jqLite` all the way.

## But wait! I'm using webpack

Me too! And one of the reasons is that we get to move away from reliance upon the global scope and towards proper modularisation. So how do we get Angular to use jQuery given the code we've seen above? Well, your first thought might be to `npm install` yourself some `jQuery` and then make sure you've got something like this in your entry file:

```ts
import 'jquery'; // This'll fix it... Right?
import * as angular from 'angular';
```

Wrong.

## You need the `ProvidePlugin`

In your `webpack.config.js` you need to add the following entry to your plugins:

```ts
new webpack.ProvidePlugin({
          "window.jQuery": "jquery"
      }),
```

This uses the webpack [`ProvidePlugin`](https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin) and, at the point of webpackification (© 2016 John Reilly) all references in the code to `window.jQuery` will be replaced with a reference to the webpack module that contains jQuery. So when you look at the bundled file you'll see that the code that checks the `window` object for `jQuery` has become this:

```ts
jQuery = isUndefined(jqName)
  ? __webpack_provided_window_dot_jQuery // use jQuery (if present)
  : !jqName
  ? undefined // use jqLite
  : window[jqName]; // use jQuery specified by `ngJq`
```

That's right; webpack is providing Angular with jQuery whilst still _not_ placing a `jQuery` variable onto the `window`. Neat huh?
