---
slug: typescript-eslint-no-unused-vars
title: 'ESLint no-unused-vars _ ignore prefix'
authors: johnnyreilly
tags: [typescript, javascript]
image: ./title-image.png
description: 'ESLints no-unused-vars is more flexible than TypeScript noUnusedLocals and noUnusedParameters. Here is how to make respect the TypeScript default of ignoring variables prefixed with _'
hide_table_of_contents: false
---

I'm a longtime user of TypeScripts [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig#noUnusedLocals) and [`noUnusedParameters`](https://www.typescriptlang.org/tsconfig#noUnusedParameters) settings. I've always found them to be a great way to ensure that I'm not leaving unused variables in my code. However, I've recently been working on a project where we're using ESLint alongside TypeScript and specifically the [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars) rule, which provides similar functionality to TypeScripts `noUnusedLocals` and `noUnusedParameters` settings. One thing that I missed when using the ESLint option is that you can ignore unused variables by simply prefixing a variable with the `_` character. That's right, sometimes I want to declare a variable that I know I'm not going to use, and I want to do that without getting a warning from the linter.

It turns out you can get ESLint respect the TypeScript default of ignoring variables prefixed with `_`, it just needs a little configuration. This post is a quick guide to how to do that.

![title image reading "From TypeScript noUnusedLocals and noUnusedParameters to ESLint no-unused-vars (with `_` prefix)" with the ESLint and TypeScript logo](title-image.png)

<!--truncate-->

## When would you want to ignore unused variables?

There are various reasons why I find that I want to ignore unused variables. Here are a few:

- I'm writing a function that I know will be used in the future, but I'm not using all of the parameters yet.
- An ignored variable can be a form of documentation. It can be a way to say "I know this is here, but I'm not using it right now".

Not everyone will agree with these reasons, but I find them to be valid in certain situations.

Just to offer the counterpoint, let me quote [Brad Zacher](https://github.com/bradzacher) who works on TypeScript ESLint:

> On the one hand it is nice to have a short-hand to ignore things.
> On the other hand it is terrible having a short-hand to ignore things - it's a single character that's easy to miss in code review - so it's easy to sneak into a commit.
>
> For example I recently reviewed a PR where someone innocently did something like
>
> ```javascript
> import { promisify } from 'node:util';
> import { exec as _exec } from 'node:child_process';
>
> const exec = promisify(_exec);
> ```
>
> And they didn't realise that doing this would define a variable that would never get flagged if it's unused! Really bad!

Brad has a valid point, but let's say you've decided to `--ignore-pattern 'brad'` use the `_` prefix anyway to ignore unused variables, here's how you can do it.

## The TypeScript settings

```json
    "noUnusedLocals": false,
    "noUnusedParameters": false
```

## The ESLint settings

```js
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true, // not necessary but useful
      },
    ],
  }
```

discussion: https://github.com/typescript-eslint/typescript-eslint/issues/8464
