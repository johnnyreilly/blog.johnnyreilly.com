---
slug: typescript-20-es2016-and-babel
title: 'TypeScript 2.0, ES2016 and Babel'
authors: johnnyreilly
tags: [typescript, javascript]
hide_table_of_contents: false
description: 'Upgrading from ES2015 to ES2016 using TypeScript compiler and Babel can be done in a few steps, including a change to tsconfig.json.'
---

[TypeScript 2.0 has shipped!](https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/) Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES "old school". You can see how [here](../2015-12-16-es6-typescript-babel-react-flux-karma/index.md).

<!--truncate-->

Merely upgrading my `package.json` to use `"typescript": "^2.0.3"` from `"typescript": "^1.8.10"` was painless. TypeScript now supports ES2016 (the previous major release 1.8 supported ES2015). I wanted to move on from writing ES2015 to writing ES2016 using my chosen build process. Fortunately, it's supported. Phew. However, due to some advances in ecmascript feature modularisation within the TypeScript compiler the upgrade path is slightly different. I figured that I'd just be able to update the [`target`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) in my `tsconfig.json` to `"es2016"` from `"es2015"`, add in the ES2016 preset for Babel and jobs a good 'un. Not so. There were a few more steps to follow. Here's the recipe:

## `tsconfig.json` changes

Well, there's no `"es2016"` target for TypeScript. You carry on with a target of `"es2015"`. What I need is a new entry: `"lib": ["dom", "es2015", "es2016"]`. This tells the compiler that we're expecting to be emitting to an environment which supports a browser (`"dom"`), and both ES2016 and ES2015. Our "environment" is Babel and it's going to pick up the baton from this point. My complete `tsconfig.json` looks like this:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "lib": ["dom", "es2015", "es2016"],
    "jsx": "preserve",
    "module": "es2015",
    "moduleResolution": "node",
    "noEmitOnError": false,
    "noImplicitAny": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "suppressImplicitAnyIndexErrors": true,
    "target": "es2015"
  }
}
```

## Babel changes

I needed the Babel preset for ES2016; with a quick [`npm install --save-dev babel-preset-es2016`](https://www.npmjs.com/package/babel-preset-es2016) that was sorted. Now just to kick webpack into gear...

## webpack changes

My webpack config plugs together TypeScript and Babel with the help of [ts-loader](https://www.npmjs.com/package/ts-loader) and [babel-loader](https://www.npmjs.com/package/babel-loader). It allows the transpilation of my (few) JavaScript files so I can write ES2015. However, mainly it allows the transpilation of my (many) TypeScript files so I can write ES2015-flavoured TypeScript. I'll now tweak the `loaders` so they cater for ES2016 as well.

```js
var webpack = require('webpack');

module.exports = {
  // ....

  module: {
    loaders: [
      {
        // Now transpiling ES2016 TS
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader:
          'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader',
      },
      {
        // Now transpiling ES2016 JS
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2016', 'es2015', 'react'],
        },
      },
    ],
  },

  // ....
};
```

## Wake Up and Smell the Jasmine

And we're there; it works. How do I know? Well; here's the proof:

```ts
it('Array.prototype.includes works', () => {
  const result = [1, 2, 3].includes(2);
  expect(result).toBe(true);
});

it('Exponentiation operator works', () => {
  expect(1 ** 2 === Math.pow(1, 2)).toBe(true);
});
```

Much love to the TypeScript team for an awesome job; I can't wait to get stuck into some of the exciting new features of TypeScript 2.0. `strictNullChecks` FTW!
