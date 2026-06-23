---
slug: ts-loader-goes-webpack-4-again
title: 'ts-loader goes webpack 4... again!'
authors: johnnyreilly
date: 2026-05-30
tags: [webpack, ts-loader, typescript]
image: ./title-image.png
hide_table_of_contents: false
description: 'TypeScript webpack loader `ts-loader@9.6+` now supports webpack 4.'
---

Back in 2021 I published a post called _[`ts-loader` goes webpack 5](../2021-04-20-ts-loader-goes-webpack-5/index.md)_; a big exciting post about how [`ts-loader`](https://github.com/TypeStrong/ts-loader) was upgraded to directly support webpack 5, and drop support for webpack 4 in v9 of `ts-loader`.

For reasons which I'll get into shortly, as of v9.6.0, `ts-loader` now supports both webpack 5 (as it did already) **and** webpack 4. So if you're a webpack 4 user, you can now use `ts-loader@9`, rather than using `ts-loader@8`.

![title image that reads "ts-loader goes webpack 4... again!" with TypeScript and webpack logos](./title-image.svg)

<!--truncate-->

## Why support webpack 4 again?

It is 2026. `ts-loader@9` was released in 2021. I made the (bold) decision then to drop support for webpack 4 there and then. I would maintain [webpack 4 branch in `ts-loader`](https://github.com/TypeStrong/ts-loader/tree/webpack-4) so I could make any patches that might be necessary over time.

At the time this seemed reasonable; webpack had been evolving quickly. I remember the path from webpack 1 to webpack 4 being pretty swift and figured that would continue. However, five years have passed and webpack 5 is the latest version of webpack still. ([That may change](https://webpack.js.org/blog/2026-02-04-roadmap-2026/#preparing-for-webpack-6).) After webpack 5 shipping, it took people a very long time to make the migration across from 4 to 5. A very, very long time.

Take a look at this screenshot of [webpack major version usage on npmx](https://npmx.dev/package/webpack?modal=versions):

![a graph showing that webpack 4 has 4 million downloads a week](./screenshot-npmx-webpack-versions.webp)

Whilst you might be thinking "wow - people really are using webpack 5!", what you should also be thinking is "wow - webpack 4 still has 4 million downloads a week!" As we can see, webpack 4 has not gone away, and is probably not going to any time soon.

Likewise if you look at the [major version usage for `ts-loader`](https://npmx.dev/package/ts-loader?modal=versions) you'll see this:

![a graph showing that ts-loader 8 has nearly 1 million downloads a week](./screenshot-npmx-ts-loader-versions.webp)

Just as webpack 4 is getting around 4 million downloads a week, `ts-loader@8` is getting just under 1 million downloads a week. (Where these are coming from is a mystery to me BTW - personally I'm using Vite for most of my projects - but let me not digress.)

Occasionally I've found myself patching `ts-loader@8` for the webpack 4 users ([often with community help](https://github.com/TypeStrong/ts-loader/pull/1446)). The TypeScript 6 release contained a change that lead me to [patching `ts-loader@9`](https://github.com/TypeStrong/ts-loader/issues/1678). The TypeScript 6 patch shipped as part of [`ts-loader@9.5.7`](https://github.com/TypeStrong/ts-loader/releases/tag/v9.5.7). Sure enough though, there are also webpack 4 users out there who would like to use TypeScript 6. A PR was raised against ts-loader to backport the patch to `ts-loader@8`: https://github.com/TypeStrong/ts-loader/pull/1695

Since I last patched `ts-loader@8`, we've migrated to [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers). It's a little fiddly, but `ts-loader@9` is on that train. We could port that to `ts-loader@8` as well, but I found myself wondering this: why not just support webpack 4 on `ts-loader@9` instead?

## Let the experiment begin!

So I decided to experiment adding webpack 4 support back. I didn't want to do do it by hand, so I threw GitHub Copilot at the problem:

![screenshot of GitHub Copilot with prompt "Make a plan to make the main branch support webpack 4 as well as webpack 5. There is a branch called webpack-4 which supported both. We would like to achieve this functionality on the main branch with minimal changes"](./screenshot-github-copilot.png)

I was pretty sure that this could be achieved without masses of code changes and without impacting performance. If that wasn't the case, I wouldn't bother.

Copilot zigged and zagged a bit, but it did build a version of `ts-loader` that supported both webpack 4 and 5, and the changes required were not extensive. It did make a few odd choices which I amended. But all in all, a solid job.

As an aside, I did give Claude a few runs at this too, but he seemed to be having an off day - we all have those I guess.

The changes required generally came down to:

- different APIs in webpack 4 as compared to webpack 5
- options in webpack 4 require usage of a dedicated library called `loader-utils`. This is a dependency of webpack 4, and so we've added it to the `peerDependencies` of `ts-loader` and marked it as optional (since it won't be used for webpack 5)
- the execution test pack in `ts-loader` now supports both webpack 4 and webpack 5. We're not going to bother with the comparison test pack for now.

I also upgraded ESLint whilst I was there, and that lead to some general tidy ups. You can see the PR where this all happened here: https://github.com/TypeStrong/ts-loader/pull/1697

## `ts-loader@9.6.0` supports webpack 4

After mulling for a little while, we decided to ship, and [Ashley Claymore](https://github.com/acutmore) released 9.6.0. So if you're using webpack 4, you should now be able to use `ts-loader@9`.

For me, this hopefully means an end to supporting webpack 4 via the dedicated branch, which should make my life easier. I'm not quite sure what will happen to `ts-loader` when TypeScript 7 lands, but if there's work to do on `ts-loader`, ideally it only needs to be done in one place.

Don't take this change as confirmation that `ts-loader` is going get support back for webpacks 3, 2 or 1 as well. It will not! But hopefully it should ease maintainers lives.
