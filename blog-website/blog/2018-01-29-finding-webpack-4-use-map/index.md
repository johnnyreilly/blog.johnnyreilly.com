---
slug: finding-webpack-4-use-map
title: 'Finding webpack 4 (use a Map)'
authors: johnnyreilly
tags: [webpack]
hide_table_of_contents: false
description: 'webpack 4s new plugin architecture requires migrating from "kebab-case" to "camelCase". A migration guide for plugins and loaders is available.'
---

## Update: 03/02/2018

<!--truncate-->

Tobias Koppers has written a migration guide for plugins / loaders as well - take a read [here](https://medium.com/webpack/webpack-4-migration-guide-for-plugins-loaders-20a79b927202). It's very useful.

## webpack 4

webpack 4 is on the horizon. [The beta dropped last Friday](https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2). So what do you, as a plugin / loader author need to do? What needs to change to make your loader / plugin webpack 4 friendly?

This is a guide that should inform you about the changes you might need to make. It's based on my own experiences migrating [`ts-loader`](https://github.com/TypeStrong/ts-loader) and the [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin). If you'd like to see this in action then take a look at the PRs related to these. The ts-loader PR can be found [here](https://github.com/TypeStrong/ts-loader/pull/710). The fork-ts-checker-webpack-plugin PR can be found [here](https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93).

## Plugins

One of the notable changes to webpack with v4 is the change to the plugin architecture. In terms of implications it's worth reading the comments made by [Tobias Koppers](https://twitter.com/wsokra)[here](https://github.com/webpack/webpack/issues/6244#issuecomment-357502113) and [here](https://github.com/webpack/webpack/issues/6064#issuecomment-349405474).

Previously, if your plugin was tapping into a compiler hook you'd write code that looked something like this:

```js
this.compiler.plugin('watch-close', () => {
  // do your thing here
});
```

With webpack 4 things done changed. You'd now write something like this:

```js
this.compiler.hooks.watchClose.tap(
  'name-to-identify-your-plugin-goes-here',
  () => {
    // do your thing here
  },
);
```

Hopefully that's fairly clear; we're using the new `hooks` property and tapping into our event of choice by `camelCasing` what was previously `kebab-cased`. So in this case `plugin('watch-close' =&gt; hooks.watchClose.tap`.

In the example above we were attaching to a sync hook. Now let's look at an async hook:

```js
this.compiler.plugin('watch-run', (watching, callback) => {
  // do your thing here
  callback();
});
```

This would change to be:

```js
this.compiler.hooks.watchRun.tapAsync(
  'name-to-identify-your-plugin-goes-here',
  (compiler, callback) => {
    // do your thing here
    callback();
  },
);
```

Note that rather than using `tap` here, we're using `tapAsync`. If you're more into promises there's a `tapPromise` you could use instead.

## Custom Hooks

Prior to webpack 4, you could use your own custom hooks within your plugin. Usage was as simple as this:

```js
this.compiler.applyPluginsAsync('fork-ts-checker-service-before-start', () => {
  // do your thing here
});
```

You can still use custom hooks with webpack 4, but there's a little more ceremony involved. Essentially, you need to tell webpack up front what you're planning. Not hard, I promise you.

First of all, you'll need to add the package [`tapable`](https://www.npmjs.com/package/tapable) as a dependency. Then, inside your plugin you'll need to import the type of hook that you want to use; in the case of the `fork-ts-checker-webpack-plugin` we used both a sync and an async hook:

```js
const AsyncSeriesHook = require('tapable').AsyncSeriesHook;
const SyncHook = require('tapable').SyncHook;
```

Then, inside your `apply` method you need to register your hooks:

```js
if (
  this.compiler.hooks.forkTsCheckerServiceBeforeStart ||
  this.compiler.hooks.forkTsCheckerCancel ||
  // other hooks...
  this.compiler.hooks.forkTsCheckerEmit
) {
  throw new Error('fork-ts-checker-webpack-plugin hooks are already in use');
}
this.compiler.hooks.forkTsCheckerServiceBeforeStart = new AsyncSeriesHook([]);

this.compiler.hooks.forkTsCheckerCancel = new SyncHook([]);
// other sync hooks...
this.compiler.hooks.forkTsCheckerDone = new SyncHook([]);
```

If you're interested in backwards compatibility then you should use the `_pluginCompat` to wire that in:

```js
this.compiler._pluginCompat.tap('fork-ts-checker-webpack-plugin', (options) => {
  switch (options.name) {
    case 'fork-ts-checker-service-before-start':
      options.async = true;
      break;
    case 'fork-ts-checker-cancel':
    // other sync hooks...
    case 'fork-ts-checker-done':
      return true;
  }
  return undefined;
});
```

With your registration in place, you just need to replace your calls to `compiler.applyPlugins('sync-hook-name', ` and `compiler.applyPluginsAsync('async-hook-name', ` with calls to `compiler.hooks.syncHookName.call(` and `compiler.hooks.asyncHookName.callAsync(`. So to migrate our `fork-ts-checker-service-before-start` hook we'd write:

```js
this.compiler.hooks.forkTsCheckerServiceBeforeStart.callAsync(() => {
  // do your thing here
});
```

## Loaders

Loaders are impacted by the changes to the plugin architecture. Mostly this means applying the same plugin changes as discussed above. `ts-loader` hooks into 2 plugin events:

```js
loader._compiler.plugin('after-compile' /* callback goes here */);
loader._compiler.plugin('watch-run' /* callback goes here */);
```

With webpack 4 these become:

```js
loader._compiler.hooks.afterCompile.tapAsync(
  'ts-loader' /* callback goes here */,
);
loader._compiler.hooks.watchRun.tapAsync('ts-loader' /* callback goes here */);
```

Note again, we're using the string `"ts-loader"` to identify our loader.

## I need a `Map`

When I initially ported to webpack 4, `ts-loader` simply wasn't working. In the end I tied this down to problems in our `watch-run` callback. There's 2 things of note here.

Firstly, as per [the changelog](https://github.com/webpack/webpack/releases/tag/v4.0.0-beta.0), the `watch-run` hook now has the `Compiler` as the first parameter. Previously this was a subproperty on the supplied `watching` parameter. So swapping over to use the compiler directly was necessary. Incidentally, `ts-loader` previously made use of the `watching.startTime` property that was supplied in webpack's 1, 2 and 3. It seems to be coping without it; so hopefully that's fine.

Secondly, with webpack 4 it's "ES2015 all the things!" That is to say, with webpack now requiring a minimum of node 6, the codebase is free to start using ES2015. So if you're a consumer of `compiler.fileTimestamps` (and `ts-loader` is) then it's time to make a change to cater for the different API that a `Map` offers instead of indexing into an object literal with a `string` key.

What this means is, code that would once have looked like this:

```js
Object.keys(watching.compiler.fileTimestamps)
  .filter(
    (filePath) =>
      watching.compiler.fileTimestamps[filePath] > lastTimes[filePath],
  )
  .forEach((filePath) => {
    lastTimes[filePath] = times[filePath];
    // ...
  });
```

Now looks more like this:

```js
for (const [filePath, date] of compiler.fileTimestamps) {
  if (date > lastTimes.get(filePath)) {
    continue;
  }

  lastTimes.set(filePath, date);
  // ...
}
```

## Happy Porting!

I hope your own port to webpack 4 goes well. Do let me know if there's anything I've missed out / any inaccuracies etc and I'll update this guide.
