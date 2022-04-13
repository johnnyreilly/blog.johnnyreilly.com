---
title: 'Upgrading to React 18 with TypeScript'
authors: johnnyreilly
tags: [React, TypeScript, Definitely Typed]
image: ./title-image.png
hide_table_of_contents: false
---

The upgrade of the React type definitions to support React 18 involved some significant breaking changes. This post digs into that and examines what the upgrade path looks like.

![title image reading "Upgrading to React 18 with TypeScript" with the React, TypeScript and Definitely Typed logos`](title-image.png)

## React 18 and Definitely Typed

After a significant period of time in alpha / beta, [React 18 shipped on March 29th 2022](https://reactjs.org/blog/2022/03/29/react-v18.html). Right back since the first alpha was released, [support has been available in TypeScript](https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/). This has been made possible through [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped), the repository for high quality TypeScript type definitions. It's particularly down to the fine work of [Sebastian Silbermann](https://twitter.com/sebsilbermann).

Now that React 18 has shipped, [the type definitions for React 18 were updated in this pull request](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210). Many projects have been, and will be, broken by this change. This post will look at what that breakage can look like and how to resolve it. Before we do that, let's first consider the problem of Definitely Typed and [semantic versioning](http://semver.org/) and they [take it seriously](https://docs.npmjs.com/getting-started/semantic-versioning).

## Definitely Typed and semantic versioning

People are used to the idea of semantic versioning in the software they consume. They expect a major version bump to indicate breaking changes. This is exactly what React has just done by moving from v17 to v18.

**Definitely Typed does not support semantic versioning.**

This is not out of spite. This is because DT intentionally publishes type definitions to npm, under the scope of `@types`. So, for example, the type definitions of React are published to [`@types/react`](https://www.npmjs.com/package/@types/react).

It's important to be aware that npm is built on top of semantic versioning. To make consumption of type definitions easier, the versioning of a type definition package will seek to emulate the versioning of the npm package it supports. So for [`react`](https://www.npmjs.com/package/react)'s version `18.0.0`, the corresponding type definition would be [`@types/react`](https://www.npmjs.com/package/@types/react)'s latest version is `18.0.0`.

If there's a breaking change to the `"@types/react"` type definition (or any other for that matter) then the new version published will not increment the major version number. It does this to maintain the simpler consumption model of types through npm.

## React 18 - breaking type changes

All that said, for very widely used type definitions, it's not unusual to at least make an effort towards minimising breaking changes where that is possible.

As an aside, it's interesting to know that the Definitely Typed automation tooling splits type definitions into three categories: ["Well-liked by everyone", "Popular" and "Critical"](https://github.com/DefinitelyTyped/dt-mergebot/blob/5485345b210a4baf8e63376a930554bf2b7dd311/src/basic.ts#L11-L14). Thanks [Andrew Branch for sharing that](https://twitter.com/atcb/status/1438559981838626817). React is considered "Critical".

When Sebastian submitted [a pull request to upgrade the TypeScript React type definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210), the opportunity was taken to make breaking changes. These were not all directly related to React 18. Many were fixing long standing issues with the React type definitions.
