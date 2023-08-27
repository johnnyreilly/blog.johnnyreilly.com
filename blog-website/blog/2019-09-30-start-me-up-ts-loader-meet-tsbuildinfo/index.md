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

This was all very exciting, but until the release of TypeScript 3.6 there were no APIs available to allow third party tools like `ts-loader` to hook into them. The wait is over! Because with TypeScript 3.6 the APIs landed: [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html#apis-to-support
