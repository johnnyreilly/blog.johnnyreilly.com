---
slug: prettier-your-csharp-with-dotnet-format-and-lint-staged
title: 'dotnet-format: Prettier your C# with lint-staged & husky'
authors: johnnyreilly
image: ./title-image.png
tags: []
hide_table_of_contents: false
description: 'Standardise C# formatting with `dotnet format` and `lint-staged`. Customise formatting and integrate with `husky` in this guide.'
---

Consistent formatting in a codebase is a good thing. We can achieve this in dotnet using `dotnet format`, used in combination with the npm packages `husky` and `lint-staged`. This post shows how.

![title image reading "dotnet-format: Prettier your CSharp with lint-staged and husky" and the dotnet-format logo](title-image.png)

<!--truncate-->

If you're interested in formatting, you might be interested in **linting**. Whilst we use ESLint in JavaScript, there's Roslyn Analyzers for C# and you can [read about it here](../2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md).

## Why format?

Consistent formatting makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A `git commit` message that would be tragic in so many ways.)

Once we've agreed that we want to have consistent formatting, we want it to be enforced. Enter, stage left, [Prettier](https://prettier.io/), the fantastic tool for formatting code. It rocks; I've been using on my JavaScript / TypeScript for the longest time. But what about C#? Well, there is a [Prettier plugin for C#](https://github.com/warrenseine/prettier-plugin-csharp).... Sort of. It appears to be abandoned and contains the worrying message in the `README/index.md`:

> Please note that this plugin is under active development, and might not be ready to run on production code yet. It will break your code.

Not a ringing endorsement.

## `dotnet-format`: a new hope

[Margarida Pereira](https://twitter.com/margaridagp) recently pointed me in the direction of [`dotnet-format`](https://github.com/dotnet/format) which is a formatter for .NET. It's a .NET tool which:

> is a code formatter for dotnet that applies style preferences to a project or solution. Preferences will be read from an `.editorconfig` file, if present, otherwise a default set of preferences will be used.

It can be installed with:

```shell
dotnet tool install -g dotnet-format
```

The [VS Code C# extension will make use of this formatter](https://github.com/dotnet/format/issues/648#issuecomment-614905524), we just need to set the following in our `settings.json`:

```json
"omnisharp.enableRoslynAnalyzers": true,
"omnisharp.enableEditorConfigSupport": true
```

## Customising our formatting

If we'd like to deviate from the [default formatting options](https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options) then create ourselves an `.editorconfig` file in the root of our project. Let's say we prefer more of the [K & R style](https://en.wikipedia.org/wiki/Indentation_style#K&R_style) approach to braces instead of the C# default of [Allman style](https://en.wikipedia.org/wiki/Indentation_style#Allman_style). To make `dotnet-format` use that we'd set the following:

```ini
# Remove the line below if you want to inherit .editorconfig settings from higher directories
root = true

# See https://github.com/dotnet/format/blob/master/docs/Supported-.editorconfig-options/index.md for reference
[*.cs]
csharp_new_line_before_open_brace = none
csharp_new_line_before_catch = false
csharp_new_line_before_else = false
csharp_new_line_before_finally = false
csharp_new_line_before_members_in_anonymous_types = false
csharp_new_line_before_members_in_object_initializers = false
csharp_new_line_between_query_expression_clauses = true
```

With this in place it's K & R all the way baby!

## `lint-staged` / `husky` integration

It's become somewhat standard to use the marvellous [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) to enforce code quality. To quote the docs:

> Run linters against staged git files and don't let 💩 slip into our code base!

To add this to our (otherwise C# codebase), we're going to need a `package.json` file:

```sh
npm init --yes
```

We'll install `husky` and `lint-staged`:

```sh
npx husky-init && npm install
npm install lint-staged --save-dev
```

We should have a new file living at `.husky/pre-commit` which is our pre-commit hook.

Within that file we should replace `npm test` with `npx lint-staged --relative`. This is the command that will be run on commit. `lint-staged` will be run and we're specifying `relative` so that **relative** file paths will be used. This is important as `dotnet format`'s `--include` accepts "a list of relative file or folder paths to include in formatting". **Absolute paths (the default) won't work - and if we pass them to `dotnet format`, it will not format the files.**

Finally we add the following entry to the `package.json`:

```json
  "lint-staged": {
    "*.cs": "dotnet format --include"
  }
```

This is the task that will be invoked by `lint-staged` against files with a `.cs` suffix on commit. When `lint-staged` runs, it will pass a list of relative file paths to `dotnet format`. So if we'd staged two files it might end up executing a command like this:

`dotnet format --include src/server-app/Server/Controllers/UserController.cs src/server-app/Server/Controllers/WeatherForecastController.cs`

We should end up with a `package.json` that looks something like this:

```json
{
  "name": "app",
  "version": "1.0.0",
  "description": "[![Shared Build Status](https://dev.azure.com/investec/maas/_apis/build/status/shared?repoName=maas)](https://dev.azure.com/investec/maas/_build/latest?definitionId=1128&repoName=maas)",
  "main": "index.js",
  "dependencies": {
    "husky": "^7.0.2"
  },
  "devDependencies": {
    "husky": "^7.0.0",
    "lint-staged": "^11.1.2"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.cs": "dotnet format --include"
  },
  "repository": {
    "type": "git",
    "url": "https://investec@dev.azure.com/investec/maas/_git/maas"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

By and large we don't have to think about this; the important take home is that we're now enforcing standardised formatting for all C# files upon commit. Everything that goes into the codebase will be formatted in a consistent fashion.

## CSharpier - update 16/05/2021

There is an alternative to the CSharp Prettier project. It's being worked on by
[Bela VanderVoort](https://github.com/belav) and it goes by the name of [csharpier](https://github.com/belav/csharpier). When comparing CSharpier and dotnet-format, Bela put it like this:

> I could see CSharpier being the non-configurable super opinionated formatter and dotnet-format being for the people that do want to have options.

Check it out!
