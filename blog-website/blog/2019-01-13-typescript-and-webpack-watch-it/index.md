---
slug: typescript-and-webpack-watch-it
title: 'TypeScript and webpack: Watch It'
authors: johnnyreilly
tags: [webpack, typescript]
hide_table_of_contents: false
description: 'TypeScripts "watch" API shortens time between incremental builds for quicker development; updates are available for fork-ts-checker-webpack-plugin.'
---

All I ask for is a compiler and a tight feedback loop. Narrowing the gap between making a change to a program and seeing the effect of that is a productivity boon. The TypeScript team are wise cats and dig this. They've taken strides to improve the developer experience of TypeScript users by [introducing a "watch" API which can be leveraged by other tools](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#writing-an-incremental-program-watcher). To quote the docs:

<!--truncate-->

> TypeScript 2.7 introduces two new APIs: one for creating "watcher" programs that provide set of APIs to trigger rebuilds, and a "builder" API that watchers can take advantage of... This can speed up large projects with many files.

Recently the wonderful [0xorial](https://github.com/0xorial) [opened a PR to add support for the watch API](https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/198) to the [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin).

I took this PR for a spin on a large project that I work on. With my machine, I was averaging 12 seconds between incremental builds. (I will charitably describe the machine in question as "challenged"; hobbled by one of the most aggressive virus checkers known to mankind. Fist bump InfoSec 🤜🤛😉) Switching to using the watch API dropped this to a mere 1.5 seconds!

## You Can Watch Too

0xorial's PR was merged toot suite and was been released as [`fork-ts-checker-webpack-plugin@1.0.0-alpha.2`](https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0-alpha.2). If you'd like to take this for a spin then you can. Just:

1. Up your version of the plugin to `fork-ts-checker-webpack-plugin@next` in your `package.json`
2. Add `useTypescriptIncrementalApi: true` to the plugin when you initialise it in your `webpack.config.js`.

That's it.

## Mary Poppins

Sorry, I was trying to paint a word picture of something you might watch that was also comforting. Didn't quite work...

Anyway, you might be thinking "wait, just hold on a minute.... he said `@next` \- I am _not_ that bleeding edge." Well, it's not like that. Don't be scared.

`fork-ts-checker-webpack-plugin` has merely been updated for webpack 5 (which is in alpha) and the `@next` reflects that. To be clear, the `@next` version of the plugin still supports (remarkably!) webpack 2, 3 and 4 as well as 5 alpha. Users of current and historic versions of webpack should feel safe using the `@next` version; for webpack 2, 3 and 4 expect stability. webpack 5 users should expect potential changes to align with webpack 5 as it progresses.

## Roadmap

This is available now and we'd love for you to try it out. As you can see, at the moment it's opt-in. You have to explicitly choose to use the new behaviour. Depending upon how testing goes, we may look to make this the default behaviour for the plugin in future (assuming users are running a high enough version of TypeScript). It would be great to hear from people if they have any views on that, or feedback in general.

Much ❤️ y'all. And many thanks to the very excellent [0xorial](https://github.com/0xorial) for the hard work.
