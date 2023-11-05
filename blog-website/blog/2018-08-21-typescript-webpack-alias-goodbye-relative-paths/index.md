---
slug: typescript-webpack-alias-goodbye-relative-paths
title: 'Using TypeScript and webpack alias: goodbye relative paths'
authors: johnnyreilly
tags: [webpack, typescript]
hide_table_of_contents: false
description: 'Use TypeScript with webpack alias to avoid long relative paths in imports. Try `path mapping` or `resolve.alias`. Use `tsconfig-paths-webpack-plugin`.'
---

This post shows how you can use TypeScript with webpack `alias` to move away from using relative paths in your `import` statements.

<!--truncate-->

## Long relative paths

I write a lot of TypeScript. Because I like modularity, I split up my codebases into discreet modules and `import` from them as necessary.

Take a look at this `import`:

```ts
import * as utils from '../../../../../../../shared/utils';
```

Now take a look at this import:

```ts
import * as utils from 'shared/utils';
```

Which do you prefer? If the answer was "the first" then read no further. You have all you need, go forth and be happy. If the answer was "the second" then stick around; I can help!

## TypeScript

There's been a solution for this in TypeScript-land for some time. You can read the detail [in the "path mapping" docs here](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping).

Let's take a slightly simpler example; we have a folder structure that looks like this:

```console
projectRoot
├── components
│ └── page.tsx (imports '../shared/utils')
├── shared
│ ├── folder1
│ └── folder2
│ └── utils.ts
└── tsconfig.json
```

We would like `page.tsx` to import `'shared/utils'` instead of `'../shared/utils'`. We can, if we augment our `tsconfig.json` with the following properties:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "components/*": ["components/*"],
      "shared/*": ["shared/*"]
    }
  }
}
```

Then we can use option 2. We can happily write:

```ts
import * as utils from 'shared/utils';
```

My code compiles, yay.... Ship it!

Let's not get over-excited. Actually, we're only part-way there; you can compile this code with the TypeScript compiler.... But is that enough?

I bundle my TypeScript with [ts-loader](https://github.com/TypeStrong/ts-loader) and webpack. If I try and use my new exciting import statement above with my build system then disappointment is in my future. webpack will be all like "import whuuuuuuuut?"

You see, webpack doesn't know what we told the TypeScript compiler in the `tsconfig.json`. Why would it? It was our little secret.

## webpack `resolve.alias` to the rescue!

This same functionality has existed in webpack for a long time; actually much longer than it has existed in TypeScript. It's the [`resolve.alias`](https://webpack.js.org/configuration/resolve/#resolve-alias) functionality.

So, looking at that I should be able to augment my `webpack.config.js` like so:

```js
module.exports = {
  //...
  resolve: {
    alias: {
      components: path.resolve(process.cwd(), 'components/'),
      shared: path.resolve(process.cwd(), 'shared/'),
    },
  },
};
```

And now both webpack and TypeScript are up to speed with how to resolve modules.

## DRY with the [`tsconfig-paths-webpack-plugin`](https://github.com/dividab/tsconfig-paths-webpack-plugin)

When I look at the `tsconfig.json` and the `webpack.config.js` something occurs to me: I don't like to repeat myself. As well as that, I don't like to repeat myself. It's so... Repetitive.

The declarations you make in the `tsconfig.json` are re-stated in the `webpack.config.js`. Who wants to maintain two sets of code where one would do? Not me.

Fortunately, you don't have to. There's the [`tsconfig-paths-webpack-plugin`](https://github.com/dividab/tsconfig-paths-webpack-plugin) for webpack which will do the job for you. You can replace your verbose `resolve.alias` with this:

```ts
module.exports = {
  //...
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        /*configFile: "./path/to/tsconfig.json" */
      }),
    ],
  },
};
```

This does the hard graft of reading your `tsconfig.json` and translating path mappings into webpack `alias`es. From this point forward, you need only edit the `tsconfig.json` and everything else will just work.

Thanks to [Jonas Kello](https://github.com/jonaskello), author of the plugin; it's tremendous! Thanks also to [Sean Larkin](https://twitter.com/TheLarkInn) and [Stanislav Panferov](https://github.com/s-panferov) (of [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader)) who together worked on the original plugin that I understand the `tsconfig-paths-webpack-plugin` is based on. Great work!
