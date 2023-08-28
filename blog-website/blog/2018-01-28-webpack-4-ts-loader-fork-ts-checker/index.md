---
slug: webpack-4-ts-loader-fork-ts-checker
title: 'webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas'
authors: johnnyreilly
tags: [fork-ts-checker-webpack-plugin, ts-loader, webpack]
hide_table_of_contents: false
description: 'The TypeScript ts-loader beta to work with webpack 4 is now available, along with the fork-ts-checker-webpack-plugin, which complements ts-loader.'
---

[The first webpack 4 beta dropped on Friday](https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2). Very exciting! Following hot on the heels of those announcements, I've some news to share too. Can you guess what it is?

<!--truncate-->

## `ts-loader`

Yes! The [`ts-loader`](https://github.com/TypeStrong/ts-loader) beta to work with webpack 4 is available. To get hold of the beta:

- When using `yarn`: `yarn add ts-loader@4.0.0-beta.0 -D`
- When using `npm`: `npm install ts-loader@4.0.0-beta.0 -D`

Remember to use this in concert with the webpack 4 beta. To see a working example take a look at [the "vanilla" example](https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla).

## `fork-ts-checker-webpack-plugin`

There's more! You may like to use the [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin), (which goes lovely with `ts-loader` and a biscuit). There is a beta available for that too:

- When using `yarn`: `yarn add johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D`
- When using `npm`: `npm install johnnyreilly/fork-ts-checker-webpack-plugin#4.0.0-beta.1 -D`

To see a working example take a look at [the "fork-ts-checker" example](https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker).

## PRs

If you would like to track the progress of these betas then I encourage you to take a look at the PRs they were built from. The ts-loader PR can be found [here](https://github.com/TypeStrong/ts-loader/pull/710). The fork-ts-checker-webpack-plugin PR can be found [here](https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93).

These are betas so things may change further; though hopefully not significantly.
