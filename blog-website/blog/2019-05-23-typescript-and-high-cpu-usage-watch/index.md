---
slug: typescript-and-high-cpu-usage-watch
title: "TypeScript and high CPU usage - watch don't stare!"
authors: johnnyreilly
tags: [typescript, fork-ts-checker-webpack-plugin, webpack]
hide_table_of_contents: false
description: 'High CPU usage in watch mode on idle due to TypeScripts fs.watchFile. fs.watch recommended instead. Env variable controls file watching.'
---

I'm one of the maintainers of the [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin). Hi there!

<!--truncate-->

Recently, various issues have been raised against create-react-app (which uses fork-ts-checker-webpack-plugin) as well as against the plugin itself. They've been related to the level of CPU usage in watch mode on idle; i.e. it's high!

- [https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/236](https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/236)
- [https://github.com/facebook/create-react-app/issues/6792](https://github.com/facebook/create-react-app/issues/6792)

## Why High?

Now, under the covers, the `fork-ts-checker-webpack-plugin` uses the TypeScript watch API.

The marvellous [John](https://github.com/NeKJ) (not me - another John) did some digging and discovered the root cause came down to the way that the TypeScript watch API watches files:

> TS uses internally the `fs.watch` and `fs.watchFile` API functions of nodejs for their watch mode. The latter function [is even not recommended by nodejs documentation](https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener) for performance reasons, and urges to use `fs.watch` instead.
>
> **NodeJS doc:**
>
> > Using fs.watch() is more efficient than fs.watchFile and fs.unwatchFile. fs.watch should be used instead of fs.watchFile and fs.unwatchFile when possible.

## "there is another"

John also found that there are other file watching behaviours offered by TypeScript. What's more, the file watching behaviour is _configurable with an environment variable_. That's right, if an environment variable called `TSC_WATCHFILE` is set, it controls the file watching approach used. Big news!

John did some rough benchmarking of the performance of the different options that be set on his PC running linux 64 bit. Here's how it came out:

| Value | CPU usage on idle |
|
