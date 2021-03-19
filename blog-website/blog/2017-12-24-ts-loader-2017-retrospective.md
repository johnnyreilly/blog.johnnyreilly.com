---
title: "ts-loader 2017 retrospective"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [Die Hard, TypeScript, ts-loader, Webpack]
hide_table_of_contents: false
---
2017 is drawing to a close, and it's been a big, big year in webpack-land. It's been a big year for `ts-loader` too. At the start of the year v1.3.3 was the latest version available, officially supporting webpack 1. (Old school!) We end the year with `ts-loader` sitting pretty at v3.2.0 and supporting webpack 2 and 3.

 Many releases were shipped and that was down to a whole bunch of folk. People helped out with bug fixes, features, advice and docs improvements. **All of these help.**`ts-loader` wouldn't be where it is without you so thanks to everyone that helped out - you rock!

![](https://avatars.githubusercontent.com/christiantinauer)

![](https://avatars.githubusercontent.com/Pajn)

![](https://avatars.githubusercontent.com/maier49)

![](https://avatars.githubusercontent.com/false)

![](https://avatars.githubusercontent.com/roddypratt)

![](https://avatars.githubusercontent.com/ldrick)

![](https://avatars.githubusercontent.com/mattlewis92)

![](https://avatars.githubusercontent.com/Venryx)

![](https://avatars.githubusercontent.com/WillMartin)

![](https://avatars.githubusercontent.com/Loilo)

![](https://avatars.githubusercontent.com/Brooooooklyn)

![](https://avatars.githubusercontent.com/mengxy)

![](https://avatars.githubusercontent.com/bsouthga)

![](https://avatars.githubusercontent.com/zinserjan)

![](https://avatars.githubusercontent.com/sokra)

![](https://avatars.githubusercontent.com/vhqtvn)

![](https://avatars.githubusercontent.com/HerringtonDarkholme)

![](https://avatars.githubusercontent.com/johnnyreilly)

![](https://avatars.githubusercontent.com/jbrantly)

![](https://avatars.githubusercontent.com/octref)

![](https://avatars.githubusercontent.com/rhyek)

![](https://avatars.githubusercontent.com/develar)

![](https://avatars.githubusercontent.com/donaldpipowitch)

![](https://avatars.githubusercontent.com/schmuli)

![](https://avatars.githubusercontent.com/longlho)

![](https://avatars.githubusercontent.com/Igorbek)

![](https://avatars.githubusercontent.com/aindlq)

![](https://avatars.githubusercontent.com/wearymonkey)

![](https://avatars.githubusercontent.com/bancek)

![](https://avatars.githubusercontent.com/mredbishop)



I'm really grateful to all of you. Thanks so much! (Apologies for those I've missed anyone out - I know there's more still.)

## `fork-ts-checker-webpack-plugin` build speed improvements

Alongside other's direct contributions to `ts-loader`, other projects improved the experience of using `ts-loader`. [Piotr Oleś](<https://github.com/piotr-oles>) dropped his `<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>` this year which nicely increased build speed when used with `ts-loader`.



That opened up the possibility of adding [HappyPack](<https://github.com/amireh/happypack>) support. I had the good fortune to work with webpack's [Tobias Koppers](<https://github.com/sokra>) and ExtraHop's [Alex Birmingham](<https://github.com/abirmingham>) on [improving TypeScript build speed further](<https://www.extrahop.com/company/blog/2017/extrahop-webpack-accelerating-build-times/>).

So what does the future hold?

## ts-loader 4.0 (Live webpack or Die Hard)

The web marches on and webpack gallops alongside. Here's what's in the pipeline for ts-loader in 2018:

### Start using the new watch API

[A new watch API is being made available in the TypeScript API](<https://github.com/Microsoft/TypeScript/pull/20234>). We have [a PR](<https://github.com/TypeStrong/ts-loader/pull/685>) from the amazing [Sheetal Nandi](<https://github.com/sheetalkamat>) which adds support to ts-loader. Given that's quite a big PR we want to merge that before anything else lands. The watch API is still being finalised but once it lands in TypeScript we'll look to merge the PR and ship a new version of `ts-loader`.

### Drop custom module resolution

Historically `ts-loader` has had it's own module resolution mechanism in place. We're going to look to move to use the TypeScript mechanism instead. The old module resolution be deprecated but will remain available behind a flag for a time. In future we'll look to drop the old mechanism entirely.

### Drop support for TypeScript 2.3 and below

The codebase can be made simpler if we drop support for older versions of TypeScript so that's what we plan to do with our next breaking changes release.

### webpack v4 is in alpha now

If any changes need to happen to ts-loader to support webpack 4 then they will be. Personally I'm planning to help out with `<a href="https://github.com/Realytics/fork-ts-checker-webpack-plugin">fork-ts-checker-webpack-plugin</a>` as there will likely be some changes required there.

### `contextAsConfigBasePath` will be replaced with a `context`

The option that landed in the last month doesn't quite achieve the aims of the original PR's author [Christian Tinauer](<https://github.com/christiantinauer>). Consequently it's going to be replaced with a new option. This is queued up and ready to go [here](<https://github.com/TypeStrong/ts-loader/pull/688>).

### `reportFiles` option to be added

[Michel Rasschaert](<https://github.com/freeman>) is presently working on adding a `reportFiles` option to `ts-loader`. You can see the PR in progress [here](<https://github.com/TypeStrong/ts-loader/pull/701>).

## Merry Christmas!

You can expect to see the first releases of ts-loader 4.0 in 2018. In the meantime, I'd like to wish you Merry Christmas and a Happy New Year! And once more, thanks and thanks again to all you generous people who help build `ts-loader`. You're wonderful and so I'm glad you do what you do... joyeux Noel!


