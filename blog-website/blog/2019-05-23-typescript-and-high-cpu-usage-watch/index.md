---
slug: typescript-and-high-cpu-usage-watch
title: "TypeScript and high CPU usage - watch don't stare!"
authors: johnnyreilly
tags: [fork-ts-checker-webpack-plugin, webpack, typescript]
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

```
| Value                                 | CPU usage on idle |
| ------------------------------------- | ----------------- |
| TS default _(TSC_WATCHFILE not set)_  | **7\.4%**         |
| UseFsEventsWithFallbackDynamicPolling | 0\.2%             |
| UseFsEventsOnParentDirectory          | 0\.2%             |
| PriorityPollingInterval               | **6\.2%**         |
| DynamicPriorityPolling                | 0\.5%             |
| UseFsEvents                           | 0\.2%             |
```

As you can see, the default performs poorly. On the other hand, an option like `UseFsEventsWithFallbackDynamicPolling` is comparative greasy lightning.

## workaround!

To get this better experience into your world now, you could just set an environment variable on your machine. However, that doesn't scale; let's instead look at introducing the environment variable into your project explicitly.

We're going to do this in a cross platform way using [`cross-env`](https://github.com/kentcdodds/cross-env). This is a mighty useful utility by Kent C Dodds which allows you to set environment variables in a way that will work on Windows, Mac and Linux. Imagine it as the jQuery of the environment variables world :-)

Let's add it as a `devDependency`:

```
yarn add -D cross-env
```

Then take a look at your `package.json`. You've probably got a `start` script that looks something like this:

```
"start": "webpack-dev-server --progress --color --mode development --config webpack.config.development.js",
```

Or if you're a create-react-app user maybe this:

```
"start": "react-scripts start",
```

Prefix your `start` script with `cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling`. This will, when run, initialise an environment variable called `TSC_WATCHFILE` with the value `UseFsEventsWithFallbackDynamicPolling`. Then it will start your development server as it did before. When TypeScript is fired up by webpack it will see this environment variable and use it to configure the file watching behaviour to one of the more performant options.

So, in the case of a `create-react-app` user, your finished `start` script would look like this:

```
"start": "cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling react-scripts start",
```

## The Future

There's a possibility that the default watch behaviour may change in TypeScript in future. It's currently under discussion, you can read more [here](https://github.com/microsoft/TypeScript/issues/31048).
