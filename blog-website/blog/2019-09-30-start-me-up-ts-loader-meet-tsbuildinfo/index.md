---
slug: start-me-up-ts-loader-meet-tsbuildinfo
title: 'Start Me Up: ts-loader meet .tsbuildinfo'
authors: johnnyreilly
tags: [ts-loader, typescript]
hide_table_of_contents: false
description: 'TypeScript 3.4 introduced `.tsbuildinfo` files for faster compilations. With TypeScript 3.6, APIs landed to enable third party tool integration.'
---

With TypeScript 3.4, [a new behaviour landed and a magical new file type appeared; `.tsbuildinfo`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)

<!--truncate-->

> TypeScript 3.4 introduces a new flag called `--incremental` which tells TypeScript to save information about the project graph from the last compilation. The next time TypeScript is invoked with `--incremental`, it will use that information to detect the least costly way to type-check and emit changes to your project.
>
> ...
>
> These `.tsbuildinfo` files can be safely deleted and don’t have any impact on our code at runtime - they’re purely used to make compilations faster.

This was all very exciting, but until the release of TypeScript 3.6 there were no APIs available to allow third party tools like `ts-loader` to hook into them. The wait is over! Because with TypeScript 3.6 the APIs landed: [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#apis-to-support---build-and---incremental](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#apis-to-support---build-and---incremental)

This was the handiwork of the very excellent [@sheetalkamat](https://twitter.com/sheetalkamat) of the TypeScript team - you can see her PR here: [https://github.com/microsoft/TypeScript/pull/31432](https://github.com/microsoft/TypeScript/pull/31432)

What's more, Sheetal took the PR for a test drive using `ts-loader`, and her hard work has just shipped with [`v6.2.0`](https://github.com/TypeStrong/ts-loader/releases/tag/v6.2.0):

- [https://github.com/TypeStrong/ts-loader/pull/1012](https://github.com/TypeStrong/ts-loader/pull/1012)
- [https://github.com/TypeStrong/ts-loader/pull/1017](https://github.com/TypeStrong/ts-loader/pull/1017)

If you're a `ts-loader` user, and you're using TypeScript 3.6+ then you can get the benefit of this now. That is, if you make use of the `experimentalWatchApi: true` option. With this set:

1. ts-loader will both emit and consume the `.tsbuildinfo` artefact.

2. This applies both when a project has `tsconfig.json` options `composite` or `incremental` set to `true`.

3. The net result of people using this should be faster cold starts in build time where a previous compilation has taken place.

## `ts-loader v7.0.0`

We would love for you to take this new functionality for a spin. Partly because we think it will make your life better. And partly because we're planning to make using the watch API the default behaviour of `ts-loader` when we come to ship `v7.0.0`.

If you can take this for a spin before we make that change we'd be so grateful. Thanks so much to Sheetal for persevering away on this feature. It's amazing work and so very appreciated.
