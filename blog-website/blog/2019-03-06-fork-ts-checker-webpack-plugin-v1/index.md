---
slug: fork-ts-checker-webpack-plugin-v1
title: 'fork-ts-checker-webpack-plugin v1.0'
authors: johnnyreilly
tags: [fork-ts-checker-webpack-plugin, ts-loader, webpack, typescript]
hide_table_of_contents: false
description: '`fork-ts-checker-webpack-plugin` released v1.0.0 with TypeScript 3+ support, incremental watch API by default, and compatibility with webpack and TSLint.'
---

[It's time for the first major version of `fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0). It's been a long time coming :-)

<!--truncate-->

## A Little History

The `fork-ts-checker-webpack-plugin` was originally the handiwork of [Piotr Oleś](https://github.com/piotr-oles). He raised an issue with [`ts-loader`](https://github.com/TypeStrong/ts-loader/issues/537) suggesting it could be the McCartney to `ts-loader`'s Lennon:

> Hi everyone!
>
> I've created webpack plugin: [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) that plays nicely with `ts-loader`. The idea is to compile project with `transpileOnly: true` and check types on separate process (async). With this approach, webpack build is not blocked by type checker and we have semantic check with fast incremental build. More info on github repo :)
>
> So if you like it and you think it would be good to add some info in README/index.md about this plugin, I would be greatful.
>
> Thanks :)

We did like it. We did think it would be good. We took him up on his kind offer.

Since that time many people have had their paws on the `fork-ts-checker-webpack-plugin` codebase. We love them all.

## One Point Oh

We could have had our first major release a long time ago. The idea first occurred when webpack 5 alpha appeared. "Huh, look at that, a major version number.... Maybe we should do that?" "_Great_ idea chap - do it!" So here it is; fresh out the box: v1.0.0

There are actually no breaking changes that we're aware of; users of 0.x `fork-ts-checker-webpack-plugin` should be be able to upgrade without any drama.

## Incremental Watch API on by Default

Users of TypeScript 3+ may notice a performance improvement as by default the plugin now uses the [incremental watch API](https://github.com/Microsoft/TypeScript/pull/20234) in TypeScript.

Should this prove problematic you can opt out of using it by supplying `useTypescriptIncrementalApi: false`. We are aware of an [issue with Vue and the incremental API](https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/219). We hope it will be fixed soon - a generous member of the community is taking a look. In the meantime, we will _not_ default to using the incremental watch API when in Vue mode.

## Compatibility

As it stands, the plugin supports webpack 2, 3, 4 and 5 alpha. It is compatible with TypeScript 2.1+ and TSLint 4+.

Right that's it - enjoy it! And thanks everyone for contributing - we really dig your help. Much love.
