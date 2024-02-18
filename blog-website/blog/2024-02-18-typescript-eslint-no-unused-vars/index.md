---
slug: typescript-eslint-no-unused-vars
title: 'ESLint no-unused-vars: _ ignore prefix'
authors: johnnyreilly
tags: [typescript, javascript, ESLint]
image: ./title-image.png
description: 'ESLints no-unused-vars is more flexible than TypeScript noUnusedLocals and noUnusedParameters. Here is how to make respect the TypeScript default of ignoring variables prefixed with _'
hide_table_of_contents: false
---

I'm a longtime user of TypeScripts [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig#noUnusedLocals) and [`noUnusedParameters`](https://www.typescriptlang.org/tsconfig#noUnusedParameters) settings. I generally like to avoid leaving unused variables in my code; these compiler options help me.

However, I use ESLint alongside TypeScript the [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars) rule, which provides similar functionality to TypeScripts `noUnusedLocals` and `noUnusedParameters` settings, but has more power and more flexibility. For instance, `no-unused-vars` can catch unused error variables; TypeScript's `noUnusedLocals` and `noUnusedParameters` cannot.

One thing that I missed when switching to the ESLint option is that you can ignore unused variables, by simply prefixing a variable with the `_` character. That's right, sometimes I want to declare a variable that I know I'm not going to use, and I want to do that without getting shouted at by the linter.

It turns out you can get ESLint respect the TypeScript default of ignoring variables prefixed with `_`, it just needs a little configuration. This post is a quick guide to how to do that.

![title image reading "From TypeScript noUnusedLocals and noUnusedParameters to ESLint no-unused-vars (with `_` prefix)" with the ESLint and TypeScript logo](title-image.png)

<!--truncate-->

## When would you want to ignore unused variables?

There are various scenarios when I want to ignore unused variables. Here are a few:

- I'm writing a function that I know will be used in the future, but I'm not using all of the parameters yet.
- An ignored variable can be a form of documentation. It can be a way to say "I know this is here, but I'm not using it right now".

Not everyone will agree with these reasons, but they work for me in certain situations.

Just to offer the counterpoint, let me quote [Brad Zacher](https://github.com/bradzacher) who works on TypeScript ESLint:

> On the one hand it is nice to have a short-hand to ignore things.
>
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

Brad has a valid point, but let's say you've decided to `--ignore-pattern 'brad'`, and want to make use of the `_` prefix anyway. (Sorry Brad!) Here's how you can do it.

## The TypeScript settings

I mentioned that I like to use TypeScript's `noUnusedLocals` and `noUnusedParameters` settings. Here's how I configure them in my `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

However, we're moving to ESLint so we'll explicitly turn these off in our `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

## The ESLint settings

With those off in TypeScript, we can now configure ESLint to respect the `_` prefix. Here's how you can do that in your `.eslintrc.json`:

```json
{
  "rules": {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ]
  }
}
```

The `argsIgnorePattern`, `caughtErrorsIgnorePattern`, `destructuredArrayIgnorePattern`, and `varsIgnorePattern` settings are the ones that respect the `_` prefix. You have to set them all to `^_` to make it work. `^_` is a regular expression that matches any string that starts with an underscore. So if you actually had a different convention for ignoring variables, you could change this to match your convention.

Incidentally, you have to explicitly set `caughtErrors` to `"all"` to make the `caughtErrorsIgnorePattern` setting work. This is because the default value of `caughtErrors` is `"none"`. There's an `ignoreRestSiblings` setting specified above that we'll get to in a minute. First of all, let's see how the linting we've activated works in practice. Here's some code that demonstrates the settings in action:

```ts
export function demoTheProblems(
  unusedAndReportedArg: boolean,
  _unusedButIgnoredArg: boolean, // argsIgnorePattern
  someArray: string[],
) {
  try {
    const unusedAndReportedVar = true;
    const _unusedAndButIgnoredVar = false; // varsIgnorePattern

    const [
      unusedAndReportedDestructuredArray,
      _unusedButIgnoredDestructuredArray, // destructuredArrayIgnorePattern
    ] = someArray;

    // caughtErrors
  } catch (unusedAndReportedErr) {
    // ...
  }
  try {
    // caughtErrorsIgnorePattern
  } catch (_unusedButIgnoredErr) {
    // ...
  }
}
```

In this code, the `unusedAndReportedArg`, `unusedAndReportedVar`, `unusedAndReportedDestructuredArray`, and `unusedAndReportedErr` variables are all reported as unused. ESLint considers them errors and shouts about them.

By contrast, the `_unusedButIgnoredArg`, `_unusedAndButIgnoredVar`, `_unusedButIgnoredDestructuredArray`, and `_unusedButIgnoredErr` variables are all ignored, because they are prefixed with an underscore. ESLint notices them but lets them past.

Perfect! This is exactly what we wanted.

### The `ignoreRestSiblings` setting

The `ignoreRestSiblings` setting is also useful; it allows you to ignore the rest of the siblings in a destructured array.

https://typescript-eslint.io/play/#ts=5.3.3&fileType=.tsx&code=KYDwDg9gTgLgBAMwK4DsDGMCWEVwCbAC2EAKgBbAAKUEARgDZEDOAFALABQccmAgoQFUUSJsDy8UeAErBIsMQC44tCBEYBDFABpO3APp9Bw0XgBCSGAEkA5imiLlqjSk4BKOAG9dcGFACent7caDhM8IZCImIS0rLQMNFMAOrA9PRwALw%2BUEjAANxBcCEoYXAG-JEmMeYwAHIQ8FkI6vSiBRychd4AvkXqMGhkcCygaO5eXNxwAPTTcAB0iz2c3Z0cQA&eslintrc=N4KABGBEBOCuA2BTAzpAXGUEKQAIBcBPABxQGNoBLY-AWhXkoDt8B6Jge1tidmUQAmtAG4BDaKgwBtcNhyJo0DtEgAaWXKxzskcQHNkAST2doiAAqj8%2BBU3RQAegH01G7ZDKjYegBb4AoorKklCi8PCu2jqe3n6BShLGphZWNtB2GJDOkVFQAij4cGT4sGYCAIKKooRJyinWtvZZLuq5UGKJJnWWDelN2a25kJRdZgBKBQDKlABGjEwG9oWwiG4QAL5uALqym%2BtAA&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkRsAqkQK4noAmAMrNAIaplKAM35sANOBp1GLNuwAKvTL3jo8WQWBED0kgL4g9QA&tokens=false

## Conclusion

Many thanks to Brad Zacher for his input on this post. You can read our discussion on the TypeScript ESLint GitHub repo [here](https://github.com/typescript-eslint/typescript-eslint/issues/8464).
