---
title: 'ESLint your C# in VS Code with Roslyn Analyzers'
authors: johnnyreilly
tags: [Roslyn Analyzers, C#, VS Code, Lint, ESLint]
image: ./title-image.png
hide_table_of_contents: false
---

ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more.

![title image reading "ESLint your C# in VS Code with Roslyn Analyzers" with the C# and VS Code logos`](title-image.png)

## Linting and C#

JavaScript and TypeScript benefit from a tremendous tooling ecosystem which allows us to simply format and lint our codebases as we're editing. Similar tooling exists for C#. [Previously I wrote about using `dotnet-format` to have a Prettier-like experience for formatting our C#](../2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged/index.md). If that last post focussed on formatting C#; looking through the lens of [Prettier](https://prettier.io/), this post focusses on linting; looking through the lens of [ESLint](https://eslint.org/).
