---
slug: typescript-eslint-no-unused-vars
title: 'ESLint no-unused-vars: _ ignore prefix'
authors: johnnyreilly
tags: [typescript, javascript, eslint]
image: ./title-image.png
description: 'ESLints no-unused-vars is more flexible than TypeScript noUnusedLocals and noUnusedParameters. Here is how to make respect the TypeScript default of ignoring variables prefixed with _'
hide_table_of_contents: false
---

I'm a longtime user of TypeScripts [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig#noUnusedLocals) and [`noUnusedParameters`](https://www.typescriptlang.org/tsconfig#noUnusedParameters) settings. I like to avoid leaving unused variables in my code; these compiler options help me do that.

I use ESLint alongside TypeScript. The [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars) rule provides similar functionality to TypeScripts `noUnusedLocals` and `noUnusedParameters` settings, but has more power and more flexibility. For instance, `no-unused-vars` can catch unused error variables; TypeScript's `noUnusedLocals` and `noUnusedParameters` cannot.

One thing that I missed when switching to the ESLint option is that, with `noUnusedLocals` and `noUnusedParameters`, you can simply ignore unused variables by prefixing a variable with the `_` character. That's right, sometimes I want to declare a variable that I know I'm not going to use, and I want to do that without getting shouted at by the linter.

It turns out you can get ESLint to respect the TypeScript default of ignoring variables prefixed with `_`; [it's just not the default configuration for `no-unused-vars`](https://github.com/typescript-eslint/typescript-eslint/issues/8464#issuecomment-1943325441). But with a little configuration we can have it. This post is a quick guide to how to implement that configuration.

![title image reading "From TypeScript noUnusedLocals and noUnusedParameters to ESLint no-unused-vars (with `_` prefix)" with the ESLint and TypeScript logo](title-image.png)

<!--truncate-->

## When would you want to ignore unused variables?

There are various scenarios when I want to ignore unused variables. Here are a few:

- I'm writing a function but I'm not using all of the parameters yet. I plan to use them later, but I want to declare them now so I don't forget about them.
- An ignored variable can be a form of documentation. It can be a way to say "I know this is here, but I'm not using it intentionally".

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

I mentioned that I like to use the TypeScript `noUnusedLocals` and `noUnusedParameters` settings. Here's how they would be configured in a `tsconfig.json`:

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

Given we're moving to ESLint so we'll explicitly turn these off in our `tsconfig.json` so we can use ESLint to do the same job:

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
        "args": "all",
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

Incidentally, you have to explicitly set `args` to `"all"` and `caughtErrors` to `"all"` to make the `argsIgnorePattern`/`caughtErrorsIgnorePattern` settings work. If you don't, the settings are ignored.

There's an `ignoreRestSiblings` setting specified above that we'll get to in a minute. First of all, let's see how the linting we've activated works in practice. Here's some code that demonstrates the settings in action:

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

If we run ESLint on this code, we get the following output:

```bash
   2:3   error  'unusedAndReportedArg' is defined but never used. Allowed unused args must match /^_/u                                                             @typescript-eslint/no-unused-vars
   7:11  error  'unusedAndReportedVar' is assigned a value but never used. Allowed unused vars must match /^_/u                                                    @typescript-eslint/no-unused-vars
  11:7   error  'unusedAndReportedDestructuredArray' is assigned a value but never used. Allowed unused elements of array destructuring patterns must match /^_/u  @typescript-eslint/no-unused-vars
  15:12  error  'unusedAndReportedErr' is defined but never used. Allowed unused args must match /^_/u                                                             @typescript-eslint/no-unused-vars
```

Perfect! This is exactly what we wanted. You can see this in action in the [playground](https://typescript-eslint.io/play/#ts=5.3.3&fileType=.tsx&code=KYDwDg9gTgLgBAMwK4DsDGMCWEVwCbAC2EAKgBbAAKUEARgDZEDOAFALABQccqSTweAIIo8AJWCRYAwVADmALji0IERgEMUAGk7cA%2Br354AQkhgBJWSmjS5i5auAbNcAPQu4auUwtWoVNTAwwFAoOnBMEITAMlBqAJ6KTDBQmCiyANoAupwAlHAA3mHJcQVh3Gg4STwofNIi4pJBeABqnnAAvHDJSMAA3GVwFShV%2BjWGwsamPtYtbZ0IavT8va7uAG6e3pbWlAFBIZwDQ1XpA9wGdWIS0E0AIsBJUEgYSH5CULFx2lzcv6O1k3M2ze90ezxgrxsn1W%2BAe3Rebxi8Wmfl2gWCoR%2B3EyHXCkWiH3i-Q4YQAvoMAmgyHAWBchPVrlI8ABRD55fIwtBqJCyMgwVk0KBMAZuOAAOglZKKUBKhR%2B5K5MCpNP%2BhhMQN8AgF7M53N5-I%2B0C2mrR%2B0xvxhErFUo4pM4QA&eslintrc=N4KABGBEBOCuA2BTAzpAXGUEKQAIBcBPABxQGNoBLY-AWhXkoDt8B6Jge1tidmUQAmtAG4BDaKgwBtcNhyJo0DtEgAaWXKxzskcQHNJUUfHhqN23dAMBJPZ2iIACqPz4FTdFAB6AfTPadMlFYPQALfABRRWVDXRN-AKggkPCopQlbeycXN2gPDEhfBIDIARR8ODJ8WAcBAEFFUUJM5WzXd09Cv3VEqDEMu1bndrzOop7EyEpBhwAlcoBlSgAjRiYDTwrYRHMIAF9zAF1ZA72gA&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkRsAqkQK4noAmAMrNAIaplKAM35sANOBp1GLNuwAKvTL3jo8WQWBED0kgL4g9QA&tokens=false).

### The `ignoreRestSiblings` setting

The [`ignoreRestSiblings`](https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings) setting is also useful. You may find the need to use the rest operator in a destructuring assignment to omit properties from an object and hold onto the rest. Here's an example:

```ts
const { formattedDate, date, ...totals } = payload;
```

In this case I don't want to use `formattedDate` or `date` but I do want to use `totals`. I can use the `ignoreRestSiblings` setting to ignore the unused variables without even needing a `_` prefix or similar. So I do.

## Conclusion

I hope this post has been helpful. I've shown you how to configure ESLint to respect the TypeScript default of ignoring variables prefixed with `_`.

Many thanks to Brad Zacher for his input on this post. You can read our discussion on the TypeScript ESLint GitHub repo [here](https://github.com/typescript-eslint/typescript-eslint/issues/8464).
