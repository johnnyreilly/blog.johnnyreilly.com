---
slug: dynamic-import-ive-been-await-ing-you
title: "Dynamic import: I've been awaiting you..."
authors: johnnyreilly
tags: [webpack, typescript]
hide_table_of_contents: false
description: 'TypeScript 2.4 gains asynchronous, dynamic import expression for modules with no browser support. Webpack2 supports this feature.'
---

One of the most exciting features to ship with TypeScript 2.4 was support for the dynamic import expression. To quote the [release blog post](https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/#dynamic-import-expressions):

<!--truncate-->

> Dynamic `import` expressions are a new feature in ECMAScript that allows you to asynchronously request a module at any arbitrary point in your program. These modules come back as `Promise`s of the module itself, and can be `await`\-ed in an async function, or can be given a callback with `.then`.
>
> ...
>
> Many bundlers have support for automatically splitting output bundles (a.k.a. “code splitting”) based on these `import()` expressions, so consider using this new feature with the `esnext` module target. Note that this feature won’t work with the `es2015` module target, since the feature is anticipated for ES2018 or later.

As the post makes clear, this adds support for a very bleeding edge ECMAScript feature. This is not fully standardised yet; it's currently at [stage 3](https://github.com/tc39/proposals) on the TC39 proposals list. That means it's at the [Candidate](https://tc39.github.io/process-document/) stage and is unlikely to change further. If you'd like to read more about it then take a look at the official proposal [here](https://github.com/tc39/proposal-dynamic-import).

Whilst this is super-new, we are still able to use this feature. We just have to jump through a few hoops first.

## TypeScript Setup

First of all, you need to install TypeScript 2.4. With that in place you need to make some adjustments to your `tsconfig.json` in order that the relevant compiler switches are flipped. What do you need? First of all you need to be targeting ECMAScript 2015 as a minimum. That's important specifically because ES2015 contained `Promise`s which is what dynamic `import`s produce. The second thing you need is to target the module type of `esnext`. You're likely targeting `es2015` now, `esnext` is that **plus** dynamic `import`s.

Here's a `tsconfig.json` I made earlier which has the relevant settings set:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "lib": ["dom", "es2015"],
    "target": "es2015",
    "module": "esnext",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": false,
    "preserveConstEnums": true,
    "sourceMap": true,
    "skipLibCheck": true
  }
}
```

## Babel Setup

At the time of writing, browser support for dynamic `import` is non-existent. This will likely be the case for some time but it needn't hold us back. Babel can step in here and compile our super-new JS into JS that will run in our browsers today.

You'll need to decide for yourself how much you want Babel to do for you. In my case I'm targeting old school browsers which don't yet support ES2015. You may not need to. However, the one thing that you'll certainly need is the [Syntax Dynamic Import](https://babeljs.io/docs/plugins/syntax-dynamic-import/) plugin. It's this that allows Babel to process dynamic `import` statements.

These are the options I'm passing to Babel:

```js
var babelOptions = {
  plugins: ['syntax-dynamic-import'],
  presets: [
    [
      'es2015',
      {
        modules: false,
      },
    ],
  ],
};
```

You're also going to need something that actually execute the `import`s. In my case I'm using webpack...

## webpack

webpack 2 supports [`import()`](https://webpack.js.org/api/module-methods/#import-). So if you webpack set up with [ts-loader](https://github.com/TypeStrong/ts-loader) (or awesome-typescript-loader etc), chaining into [babel-loader](https://github.com/babel/babel-loader) you should find you have a setup that supports dynamic `import`. That means a `webpack.config.js` that looks something like this:

```js
var path = require('path');
var webpack = require('webpack');

var babelOptions = {
  plugins: ['syntax-dynamic-import'],
  presets: [
    [
      'es2015',
      {
        modules: false,
      },
    ],
  ],
};

module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
```

## ts-loader example

I'm one of the maintainers of [ts-loader](https://github.com/TypeStrong/ts-loader) which is a TypeScript loader for webpack. When support for dynamic `import`s landed I wanted to add a test to cover usage of the new syntax with ts-loader.

We have 2 test packs for ts-loader, one of which is our "execution" test pack. It is so named because it works by spinning up webpack with ts-loader and then using [karma](https://github.com/karma-runner/karma) to execute a set of tests. Each "test" in our execution test pack is actually a mini-project with its own test suite (generally [jasmine](https://jasmine.github.io/) but that's entirely configurabe). Each complete with its own `webpack.config.js`, `karma.conf.js` and either a `typings.json` or `package.json` for bringing in dependencies. So it's a full test of whether code slung with ts-loader and webpack actually executes when the output is plugged into a browser.

This is the test pack for dynamic `import`s:

```js
import a from "../src/a";
import b from "../src/b";

describe("app", () => {
  it("a to be 'a' and b to be 'b' (classic)", () => {
    expect(a).toBe("a");
    expect(b).toBe("b");
  });

  it("import results in a module with a default export", done => {
    import("../src/c").then(c => {
      // .default is the default export
      expect(c.default).toBe("c");

      done();
    }
  });

  it("import results in a module with an export", done => {
    import("../src/d").then(d => {
      // .default is the default export
      expect(d.d).toBe("d");

      done();
    }
  });

  it("await import results in a module with a default export", async done => {
    const c = await import("../src/c");

    // .default is the default export
    expect(c.default).toBe("c");

    done();
  });

  it("await import results in a module with an export", async done => {
    const d = await import("../src/d");

    expect(d.d).toBe("d");

    done();
  });
});
```

As you can see, it's possible to use the dynamic `import` as a `Promise` directly. Alternatively, it's possible to consume the imported module using TypeScripts support for `async` / `await`. For my money the latter option makes for much clearer code.

If you're looking for a complete example of how to use the new syntax then you could do worse than taking the existing test pack and tweaking it to your own ends. The only change you'd need to make is to strip out the `resolveLoader` statements in `webpack.config.js` and `karma.conf.js`. (They exist to lock the test in case to the freshly built ts-loader stored locally. You'll not need this.)

You can find the test in question [here](https://github.com/TypeStrong/ts-loader/tree/master/test/execution-tests/2.4.1_babel-importCodeSplitting). Happy code splitting!
