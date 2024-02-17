---
slug: typescript-eslint-no-unused-vars
title: 'From TypeScript noUnusedLocals and noUnusedParameters to ESLint no-unused-vars (with `_` prefix)'
authors: johnnyreilly
tags: [typescript, javascript]
image: ./title-image.png
description: 'ESLints no-unused-vars is more flexible than TypeScript noUnusedLocals and noUnusedParameters. Here is how to make respect the TypeScript default of ignoring variables prefixed with _'
hide_table_of_contents: false
---

I really like type imports that are unambiguous. For this reason, I've made use of the `"importsNotUsedAsValues": "error"` option in `tsconfig.json` for a while now. This option has been deprecated in TypeScript 5.0.0, and will be removed in TypeScript 5.5.0. This post will look at what you can do instead.

![title image reading "From TypeScript noUnusedLocals and noUnusedParameters to ESLint no-unused-vars (with `_` prefix)" with the ESLint and TypeScript logo](title-image.png)

<!--truncate-->

https://github.com/typescript-eslint/typescript-eslint/issues/8464

```json
    "noUnusedLocals": false,
    "noUnusedParameters": false
```

```js
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  }
```
