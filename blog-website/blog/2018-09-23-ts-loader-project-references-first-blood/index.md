---
slug: ts-loader-project-references-first-blood
title: 'ts-loader Project References: First Blood'
authors: johnnyreilly
tags: [ts-loader, webpack, typescript]
hide_table_of_contents: false
description: 'ts-loader now supports TypeScripts project references. However, composite projects built with `outDir` on Windows cannot be consumed by ts-loader... yet'
---

So [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) eh? They shipped with [TypeScript 3](https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references). We've just shipped initial support for project references in [`ts-loader v5.2.0`](https://github.com/TypeStrong/ts-loader/releases/tag/v5.2.0). All the hard work was done by the amazing [Andrew Branch](https://twitter.com/atcb). In fact I'd recommend taking a gander at [the PR](https://github.com/TypeStrong/ts-loader/pull/817). Yay Andrew!

<!--truncate-->

This post will take us through the nature of the support for project references in ts-loader now and what we hope the future will bring. It <strike>rips off shamelessly</strike>

borrows from the [`README/index.md`](https://github.com/TypeStrong/ts-loader#projectreferences-boolean-defaultfalse) documentation that Andrew wrote as part of the PR. Because I am not above stealing.

## TL;DR

Using project references currently requires building referenced projects outside of ts-loader. We don’t want to keep it that way, but we’re releasing what we’ve got now. To try it out, you’ll need to pass `projectReferences: true` to `loaderOptions`.

## Like `tsc`, but _not_ like `tsc --build`

ts-loader has partial support for [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in that it will _load_ dependent composite projects that are already built, but will not currently _build/rebuild_ those upstream projects. The best way to explain exactly what this means is through an example. Say you have a project with a project reference pointing to the `lib/` directory:

```sh
tsconfig.json
app.ts
lib/
  tsconfig.json
  niftyUtil.ts
```

And we’ll assume that the root `tsconfig.json` has `{ "references": { "path": "lib" } }`, which means that any import of a file that’s part of the `lib` sub-project is treated as a reference to another project, not just a reference to a TypeScript file. Before discussing how ts-loader handles this, it’s helpful to review at a really basic level what `tsc` itself does here. If you were to run `tsc` on this tiny example project, the build would fail with the error:

```sh
error TS6305: Output file 'lib/niftyUtil.d.ts' has not been built from source file 'lib/niftyUtil.ts'.
```

Using project references actually instructs `tsc`_not_ to build anything that’s part of another project from source, but rather to look for any `.d.ts` and `.js` files that have already been generated from a previous build. Since we’ve never built the project in `lib` before, those files don’t exist, so building the root project fails. Still just thinking about how `tsc` works, there are two options to make the build succeed: either run `tsc -p lib/tsconfig.json`_first_, or simply run `tsc --build`, which will figure out that `lib` hasn’t been built and build it first for you.

Ok, so how is that relevant to ts-loader? Because the best way to think about what ts-loader does with project references is that it acts like `tsc`, but _not_ like `tsc --build`. If you run ts-loader on a project that’s using project references, and any upstream project hasn’t been built, you’ll get the exact same `error TS6305` that you would get with `tsc`. If you modify a source file in an upstream project and don’t rebuild that project, `ts-loader` won’t have any idea that you’ve changed anything—it will still be looking at the output from the last time you _built_ that file.

## “Hey, don’t you think that sounds kind of useless and terrible?”

Well, sort of. You can consider it a work-in-progress. It’s true that on its own, as of today, ts-loader doesn’t have everything you need to take advantage of project references in webpack. In practice, though, _consuming_ upstream projects and _building_ upstream projects are somewhat separate concerns. Building them will likely come in a future release. For background, see the [original issue](https://github.com/TypeStrong/ts-loader/issues/815).

## `outDir` Windows problemo.

At the moment, composite projects built using the [`outDir` compiler option](https://www.typescriptlang.org/docs/handbook/compiler-options.html) cannot be consumed using ts-loader on Windows. If you try to, ts-loader throws a "`has not been built from source file`" error. [You can see Andrew and I puzzling over it in the PR.](https://github.com/TypeStrong/ts-loader/pull/817#issuecomment-422245998) We don't know why yet; it's possible there's a bug in `tsc`. It's more likely there's a bug in `ts-loader`. Hopefully it's going to get solved at some point. (Hey, maybe you're the one to solve it!) Either way, we didn't want to hold back from releasing. So if you're building on Windows then avoid building `composite` projects using `outDir`.
