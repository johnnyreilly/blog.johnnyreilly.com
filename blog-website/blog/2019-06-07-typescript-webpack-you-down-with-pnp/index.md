---
slug: typescript-webpack-you-down-with-pnp
title: 'TypeScript / webpack - you down with PnP? Yarn, you know me!'
authors: johnnyreilly
tags: [webpack, typescript, node.js]
hide_table_of_contents: false
description: 'Yarn PnP speeds up module installation and eliminates node_modules. Converting to it is easy but some rough edges exist.'
---

Yarn PnP is an innovation by the Yarn team designed to speed up module resolution by node. To quote the [(excellent) docs](https://yarnpkg.com/en/docs/pnp):

<!--truncate-->

> Plug’n’Play is an alternative installation strategy unveiled in September 2018...
>
> The way regular installs work is simple: Yarn generates a `node_modules` directory that Node is then able to consume. In this context, Node doesn’t know the first thing about what a package is: it only reasons in terms of files. “Does this file exist here? No? Let’s look in the parent `node_modules` then. Does it exist here? Still no? Too bad… parent folder it is!” - and it does this until it matches something that matches one of the possibilities. That’s vastly inefficient.
>
> When you think about it, Yarn knows everything about your dependency tree - it evens installs it! So why is Node tasked with locating your packages on the disk? Why don’t we simply query Yarn, and let it tell us where to look for a package X required by a package Y? That’s what Plug’n’Play (abbreviated PnP) is. Instead of generating a node_modules directory and leaving the resolution to Node, we now generate a single .pnp.js file and let Yarn tell us where to find our packages.

Yarn has been worked upon, amongst others, by the excellent [Maël Nison](https://twitter.com/arcanis). You can hear him talking about it in person [in this talk at JSConfEU](https://youtu.be/XePfzVs852s).

Thanks particularly to Maël's work, it's possible to use Yarn PnP with TypeScript using webpack with `ts-loader` _and_`fork-ts-checker-webpack-plugin`. This post intends to show you just how simple it is to convert a project that uses either to work with Yarn PnP.

## Vanilla `ts-loader`

Your project is built using standalone `ts-loader`; i.e. a simple setup that handles both transpilation and type checking.

First things first, add this property to your `package.json`: (this is only required if you are using Yarn 1; this tag will be optional starting from the v2, where projects will switch to PnP by default.)

```
{
    "installConfig": {
        "pnp": true
    }
}
```

Also, because this is webpack, we're going to need to add an extra dependency in the form of `pnp-webpack-plugin`:

```
yarn add -D pnp-webpack-plugin
```

To quote the excellent docs, make the following amends to your `webpack.config.js`:

```
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
    module: {
        rules: [{
            test: /\.ts$/,
            loader: require.resolve('ts-loader'),
            options: PnpWebpackPlugin.tsLoaderOptions(),
        }],
    },
    resolve: {
        plugins: [ PnpWebpackPlugin, ],
    },
    resolveLoader: {
        plugins: [ PnpWebpackPlugin.moduleLoader(module), ],
    },
};
```

If you have any options you want to pass to `ts-loader`, just pass them as parameter of `pnp-webpack-plugin`'s `tsLoaderOptions` function and it will take care of forwarding them properly. Behind the scenes the `tsLoaderOptions` function is providing `ts-loader` with the options necessary to switch into Yarn PnP mode.

Congratulations; you now have `ts-loader` functioning with Yarn PnP support!

## `fork-ts-checker-webpack-plugin` with `ts-loader`

You may well be using `fork-ts-checker-webpack-plugin` to handle type checking whilst `ts-loader` gets on with the transpilation. This workflow is also supported using `pnp-webpack-plugin`. You'll have needed to follow the same steps as the `ts-loader` setup. It's just the `webpack.config.js` tweaks that will be different.

```
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
    plugins: {
        new ForkTsCheckerWebpackPlugin(PnpWebpackPlugin.forkTsCheckerOptions({
            useTypescriptIncrementalApi: false, // not possible to use this until: https://github.com/microsoft/TypeScript/issues/31056
        })),
    }
    module: {
        rules: [{
            test: /\.ts$/,
            loader: require.resolve('ts-loader'),
            options: PnpWebpackPlugin.tsLoaderOptions({ transpileOnly: true }),
        }],
    },
    resolve: {
        plugins: [ PnpWebpackPlugin, ],
    },
    resolveLoader: {
        plugins: [ PnpWebpackPlugin.moduleLoader(module), ],
    },
};
```

Again if you have any options you want to pass to `ts-loader`, just pass them as parameter of `pnp-webpack-plugin`'s `tsLoaderOptions` function. As we're using `fork-ts-checker-webpack-plugin` we're going to want to stop `ts-loader` doing type checking with the `transpileOnly: true` option.

We're now initialising `fork-ts-checker-webpack-plugin` with `pnp-webpack-plugin`'s `forkTsCheckerOptions` function. Behind the scenes the `forkTsCheckerOptions` function is providing the `fork-ts-checker-webpack-plugin` with the options necessary to switch into Yarn PnP mode.

And that's it! You now have `ts-loader` and `fork-ts-checker-webpack-plugin` functioning with Yarn PnP support!

## Living on the Bleeding Edge

Whilst you can happily develop and build using Yarn PnP, it's worth bearing in mind that this is a new approach. As such, there's some rough edges right now.

If you're interested in Yarn PnP, it's worth taking the v2 of Yarn (Berry) for a spin. You can find it here: [https://github.com/yarnpkg/berry](https://github.com/yarnpkg/berry). It's where most of the Yarn PnP work happens, and it includes zip loading - two birds, one stone!

Because there isn't first class support for Yarn PnP in TypeScript itself yet, you cannot make use of the Watch API through `fork-ts-checker-webpack-plugin`. (You can read about that issue [here](https://github.com/microsoft/TypeScript/issues/31056))

As you've likely noticed, the webpack configuration required makes for a noisy `webpack.config.js`. Further to that, VS Code (which is powered by TypeScript remember) has no support for Yarn PnP yet and so will present resolution errors to you. If you can ignore the sea of red squigglies all over your source files in the editor and just look at your webpack build you'll be fine.

There is a tool called `PnPify` that adds support for PnP to TypeScript (in particular tsc). You can find more information here: [https://yarnpkg.github.io/berry/advanced/pnpify](https://yarnpkg.github.io/berry/advanced/pnpify). For tsc it would be:

```
$> yarn pnpify tsc [...]
```

The gist is that it simulates the existence of `node_modules` by leveraging the data from the PnP file. As such it's not a perfect fix (`pnp-webpack-plugin` is a better integration), but it's a very useful tool to have to unblock yourself when using a project that doesn't support it.

PnPify actually allows us to use TypeScript in VSCode with PnP! Its documentation is here: [https://yarnpkg.github.io/berry/advanced/pnpify#vscode-support](https://yarnpkg.github.io/berry/advanced/pnpify#vscode-support)

All of these hindrances should hopefully be resolved in future. Ideally, one day a good developer experience can be the default experience. In the meantime, you can still dev - just be prepared for the rough edges. Here's some useful resources to track the future of support:

- You can follow more on built in webpack support here: [https://github.com/webpack/enhanced-resolve/issues/162](https://github.com/webpack/enhanced-resolve/issues/162)
- And on built in TypeScript support here: [https://github.com/Microsoft/TypeScript/issues/18896](https://github.com/Microsoft/TypeScript/issues/18896)
- Finally, there it's worth watching the [nodejs/module](https://github.com/nodejs/modules) repository, which debates amongst other things how to properly integrate loaders with Node.

This last one would be nice because:

- We'd stop having to patch require
- We probably wouldn't have to use yarn node if Node itself was able to find the loader somehow (such as if it was listed in the package.json metadata)

Thanks to Maël for his tireless work on Yarn. To my mind Maël is certainly a candidate for the hardest worker in open source. I've been shamelessly borrowing his excellent docs for this post - thanks for writing so excellently Maël!
