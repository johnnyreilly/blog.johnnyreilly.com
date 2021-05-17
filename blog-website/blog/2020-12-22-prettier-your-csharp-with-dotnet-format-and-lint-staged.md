---
title: "dotnet-format: Prettier your CSharp with lint-staged"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [Prettier, dotnet-format, CSharpier]
hide_table_of_contents: false
---
Consistent formatting is a good thing. It makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A `git commit` message that would be tragic in so many ways.)

Once you've agreed that you want to have consistent formatting, you want it to be enforced. Enter, stage left, [Prettier](https://prettier.io/), the fantastic tool for formatting code. It rocks; I've been using on my JavaScript / TypeScript for the longest time. But what about C#? Well, there is a [Prettier plugin for C#](https://github.com/warrenseine/prettier-plugin-csharp).... Sort of. It appears to be abandoned and contains the worrying message in the `README.md`:

> Please note that this plugin is under active development, and might not be ready to run on production code yet. It will break your code.

Not a ringing endorsement.

## `dotnet-format`: a new hope

[Margarida Pereira](https://twitter.com/margaridagp) recently pointed me in the direction of [`dotnet-format`](https://github.com/dotnet/format) which is a formatter for .NET. It's a .NET tool which:

> is a code formatter for dotnet that applies style preferences to a project or solution. Preferences will be read from an `.editorconfig` file, if present, otherwise a default set of preferences will be used.

It can be installed with:

```shell
dotnet tool install -g dotnet-format
```

The [VS Code C# extension will make use of this formatter](https://github.com/dotnet/format/issues/648#issuecomment-614905524), you just need to set the following in your `settings.json`:

```json
"omnisharp.enableRoslynAnalyzers": true,
    "omnisharp.enableEditorConfigSupport": true
```

## Customising your formatting

If you'd like to deviate from the [default formatting options](https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options) then create yourself a `.editorconfig` file in the root of your project. Let's say you prefer more of the [K & R style](https://en.wikipedia.org/wiki/Indentation_style#K&R_style) approach to braces instead of the C# default of [Allman style](https://en.wikipedia.org/wiki/Indentation_style#Allman_style). To make `dotnet-format` use that you'd set the following:

```ini
# Remove the line below if you want to inherit .editorconfig settings from higher directories
root = true

# See https://github.com/dotnet/format/blob/master/docs/Supported-.editorconfig-options.md for reference
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

## `lint-staged` integration

It's become somewhat standard to use the marvellous [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) to enforce code quality. To quote the docs:

> Run linters against staged git files and don't let 💩 slip into your code base!

So, before I happened upon `dotnet-format` I was already enforcing TypeScript / JavaScript style with the following entry in my `package.json`:

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js,ts,tsx}": "prettier --write"
}
```

The above configuration runs Prettier against files which have been staged for commit, provided they have the suffix `.js` or `.ts` or `.tsx`. How can we get `dotnet-format` in the mix also? Like so:

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged --relative"
    }
},
"lint-staged": {
    "*.cs": "dotnet format --include",
    "*.{js,ts,tsx}": "prettier --write"
}
```

We've done two things here. First, we've changed the `lint-staged` command to include the parameter `--relative`. This is because `dotnet-format` only deals with relative paths. Prettier is pretty flexible, so we can make this change without breaking anything.

Secondly we've added the `*.cs` task of `dotnet format --include`. This is the task that will be run on commit, when `lint-staged` runs, it will pass a list of relative file paths to `dotnet format`, the `--include` accepts `a list of relative file or folder paths to include in formatting`. So if you'd staged two files it might end up executing a command like this:

`dotnet format --include src/server-app/Server/Controllers/UserController.cs src/server-app/Server/Controllers/WeatherForecastController.cs`

By and large we don't have to think about this; the important take home is that we're now enforcing standardised formatting for all C# files upon commit. Everything that goes into the codebase will be formatted in a consistent fashion.

## CSharpier - update 16/05/2021

There is an alternative to the CSharp Prettier project. It's being worked on by 
[Bela VanderVoort](https://github.com/belav) and it goes by the name of [csharpier](https://github.com/belav/csharpier). When comparing CSharpier and dotnet-format, Bela put it like this:

> I could see CSharpier being the non-configurable super opinionated formatter and dotnet-format being for the people that do want to have options.

Check it out!