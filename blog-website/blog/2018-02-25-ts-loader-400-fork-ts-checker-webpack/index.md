---
slug: ts-loader-400-fork-ts-checker-webpack
title: 'ts-loader 4 / fork-ts-checker-webpack-plugin 0.4'
authors: johnnyreilly
tags: [webpack, fork-ts-checker-webpack-plugin, ts-loader]
hide_table_of_contents: false
description: 'webpack 4 has been released, along with updates for ts-loader and fork-ts-checker-webpack-plugin. See links for details and examples.'
---

webpack 4 has shipped!

<!--truncate-->

## `ts-loader`

The [`ts-loader`](https://github.com/TypeStrong/ts-loader) 4 is available too. For details see our release [here](https://github.com/TypeStrong/ts-loader/releases/tag/v4.0.0). To start using `ts-loader` 4:

- When using `yarn`: `yarn add ts-loader@4.1.0 -D`
- When using `npm`: `npm install ts-loader@4.1.0 -D`

Remember to use this in concert with the webpack 4. To see a working example take a look at [the "vanilla" example](https://github.com/johnnyreilly/ts-loader/tree/master/examples/vanilla).

## `fork-ts-checker-webpack-plugin`

There's more! You may like to use the [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin), (aka the ts-loader turbo-booster). The webpack compatible version has been [released to npm as 0.4.1](https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v0.4.1):

- When using `yarn`: `yarn add fork-ts-checker-webpack-plugin@0.4.1 -D`
- When using `npm`: `npm install fork-ts-checker-webpack-plugin@0.4.1 -D`

To see a working example take a look at [the "fork-ts-checker" example](https://github.com/johnnyreilly/ts-loader/tree/master/examples/fork-ts-checker).
