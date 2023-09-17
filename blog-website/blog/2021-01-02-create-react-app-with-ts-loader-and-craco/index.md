---
slug: create-react-app-with-ts-loader-and-craco
title: 'Create React App with ts-loader and CRACO'
authors: johnnyreilly
tags: [fork-ts-checker-webpack-plugin, ts-loader, typescript]
hide_table_of_contents: false
description: 'Create React App now supports TypeScript with React, using Babel webpack loader or `ts-loader`. You can use CRACO to customize configurations.'
---

[Create React App](https://create-react-app.dev/) is a fantastic way to get up and running building a web app with React. It also supports using TypeScript with React. Simply entering the following:

<!--truncate-->

```shell
npx create-react-app my-app --template typescript
```

Will give you a great TypeScript React project to get building with. There's two parts to the TypeScript support that exist:

1. Transpilation AKA "turning our TypeScript into JavaScript". Back since [Babel 7 launched, Babel has enjoyed great support for transpiling TypeScript into JavaScript](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/). Create React App leverages this; using the Babel webpack loader, [babel-loader](https://github.com/babel/babel-loader), for transpilation.
2. Type checking AKA "seeing if our code compiles". Create React App uses the [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) to run the TypeScript type checker on a separate process and report any issues that may exist.

This is a great setup and works very well for the majority of use cases. However, what if we'd like to tweak this setup? What if we'd like to swap out `babel-loader` for `ts-loader` for compilation purposes? Can we do that?

Yes you can! And that's what we're going to do using a tool named [`CRACO`](https://github.com/gsoft-inc/craco) \- the pithy shortening of "Create React App Configuration Override". This is a tool that allows us to:

> Get all the benefits of create-react-app and customization without using 'eject' by adding a single `craco.config.js` file at the root of your application and customize your eslint, babel, postcss configurations and many more.

## ~~`babel-loader`~~ `ts-loader`

So let's do the swap. First of all we're going to need to add `CRACO` and `ts-loader` to our project:

```shell
npm install @craco/craco ts-loader --save-dev
```

Then we'll swap over our various `scripts` in our `package.json` to use `CRACO`:

```json
"start": "craco start",
"build": "craco build",
"test": "craco test",
```

Finally we'll add a `craco.config.js` file to the root of our project. This is where we swap out `babel-loader` for `ts-loader`:

```js
const {
  addAfterLoader,
  removeLoaders,
  loaderByName,
  getLoaders,
  throwUnexpectedConfigError,
} = require('@craco/craco');

const throwError = (message) =>
  throwUnexpectedConfigError({
    packageName: 'craco',
    githubRepo: 'gsoft-inc/craco',
    message,
    githubIssueQuery: 'webpack',
  });

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      const { hasFoundAny, matches } = getLoaders(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (!hasFoundAny) throwError('failed to find babel-loader');

      console.log('removing babel-loader');
      const { hasRemovedAny, removedCount } = removeLoaders(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (!hasRemovedAny) throwError('no babel-loader to remove');
      if (removedCount !== 2)
        throwError('had expected to remove 2 babel loader instances');

      console.log('adding ts-loader');

      const tsLoader = {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: paths.appSrc,
        loader: require.resolve('ts-loader'),
        options: { transpileOnly: true },
      };

      const { isAdded: tsLoaderIsAdded } = addAfterLoader(
        webpackConfig,
        loaderByName('url-loader'),
        tsLoader,
      );
      if (!tsLoaderIsAdded) throwError('failed to add ts-loader');
      console.log('added ts-loader');

      console.log('adding non-application JS babel-loader back');
      const { isAdded: babelLoaderIsAdded } = addAfterLoader(
        webpackConfig,
        loaderByName('ts-loader'),
        matches[1].loader, // babel-loader
      );
      if (!babelLoaderIsAdded)
        throwError('failed to add back babel-loader for non-application JS');
      console.log('added non-application JS babel-loader back');

      return webpackConfig;
    },
  },
};
```

So what's happening here? The script looks for `babel-loader` usages in the default Create React App config. There will be two; one for TypeScript / JavaScript application code (we want to replace this) and one for non application JavaScript code. I'm actually not too clear what non application JavaScript code there is or can be, but we'll leave it in place; it may be important.

You cannot remove a _single_ loader using `CRACO`, so instead we'll remove both and we'll add back the non application JavaScript `babel-loader`. We'll also add `ts-loader` with the `transpileOnly: true` option set (to ensure `ts-loader` doesn't do type checking).

Now the next time we run `npm start` we'll have Create React App running using `ts-loader` and _without_ having ejected. If we want to adjust the options of `ts-loader` further then we're completely at liberty to do so, adjusting the `options` in our `craco.config.js`.

If you value debugging your original source code rather than the transpiled JavaScript, remember to set the `"sourceMap": true` property in your `tsconfig.json`.

Finally, if we wanted to go even further, we could remove the `fork-ts-checker-webpack-plugin` and move `ts-loader` to use `transpileOnly: false` so it performs type checking also. However, generally it may be better to stay with the setup with post outlines for performance reasons.
