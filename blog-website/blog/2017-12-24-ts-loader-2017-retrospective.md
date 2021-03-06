---
title: "ts-loader 2017 retrospective"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [Die Hard, TypeScript, ts-loader, Webpack]
hide_table_of_contents: false
---
2017 is drawing to a close, and it's been a big, big year in webpack-land. It's been a big year for `ts-loader` too. At the start of the year v1.3.3 was the latest version available, officially supporting webpack 1. (Old school!) We end the year with `ts-loader` sitting pretty at v3.2.0 and supporting webpack 2 and 3.

 Many releases were shipped and that was down to a whole bunch of folk. People helped out with bug fixes, features, advice and docs improvements. **All of these help.**`ts-loader` wouldn't be where it is without you so thanks to everyone that helped out - you rock!

[![null](<https://avatars.githubusercontent.com/christiantinauer> "@christiantinauer")](<https://github.com/christiantinauer>)[![null](<https://avatars.githubusercontent.com/Pajn> "@Pajn")](<https://github.com/Pajn>)[![null](<https://avatars.githubusercontent.com/maier49> "@maier49")](<https://github.com/maier49>)[![null](<https://avatars.githubusercontent.com/false> "@false")](<https://github.com/false>)[![null](<https://avatars.githubusercontent.com/roddypratt> "@roddypratt")](<https://github.com/roddypratt>)[![null](<https://avatars.githubusercontent.com/ldrick> "@ldrick")](<https://github.com/ldrick>)[![null](<https://avatars.githubusercontent.com/mattlewis92> "@mattlewis92")](<https://github.com/mattlewis92>)[![null](<https://avatars.githubusercontent.com/Venryx> "@Venryx")](<https://github.com/Venryx>)[![null](<https://avatars.githubusercontent.com/WillMartin> "@WillMartin")](<https://github.com/WillMartin>)[![null](<https://avatars.githubusercontent.com/Loilo> "@Loilo")](<https://github.com/Loilo>)[![null](<https://avatars.githubusercontent.com/Brooooooklyn> "@Brooooooklyn")](<https://github.com/Brooooooklyn>)[![null](<https://avatars.githubusercontent.com/mengxy> "@mengxy")](<https://github.com/mengxy>)[![null](<https://avatars.githubusercontent.com/bsouthga> "@bsouthga")](<https://github.com/bsouthga>)[![null](<https://avatars.githubusercontent.com/zinserjan> "@zinserjan")](<https://github.com/zinserjan>)[![null](<https://avatars.githubusercontent.com/sokra> "@sokra")](<https://github.com/sokra>)[![null](<https://avatars.githubusercontent.com/vhqtvn> "@vhqtvn")](<https://github.com/vhqtvn>)[![null](<https://avatars.githubusercontent.com/HerringtonDarkholme> "@HerringtonDarkholme")](<https://github.com/HerringtonDarkholme>)[![null](<https://avatars.githubusercontent.com/johnnyreilly> "@johnnyreilly")](<https://github.com/johnnyreilly>)[![null](<https://avatars.githubusercontent.com/jbrantly> "@jbrantly")](<https://github.com/jbrantly>)[![null](<https://avatars.githubusercontent.com/octref> "@octref")](<https://github.com/octref>)[![null](<https://avatars.githubusercontent.com/rhyek> "@rhyek")](<https://github.com/rhyek>)[![null](<https://avatars.githubusercontent.com/develar> "@develar")](<https://github.com/develar>)[![null](<https://avatars.githubusercontent.com/donaldpipowitch> "@donaldpipowitch")](<https://github.com/donaldpipowitch>)[![null](<https://avatars.githubusercontent.com/schmuli> "@schmuli")](<https://github.com/schmuli>)[![null](<https://avatars.githubusercontent.com/longlho> "@longlho")](<https://github.com/longlho>)[![null](<https://avatars.githubusercontent.com/Igorbek> "@Igorbek")](<https://github.com/Igorbek>)[![null](<https://avatars.githubusercontent.com/aindlq> "@aindlq")](<https://github.com/aindlq>)[![null](<https://avatars.githubusercontent.com/wearymonkey> "@wearymonkey")](<https://github.com/wearymonkey>)[![null](<https://avatars.githubusercontent.com/bancek> "@bancek")](<https://github.com/bancek>)[![null](<https://avatars.githubusercontent.com/mredbishop> "@mredbishop")](<https://github.com/mredbishop>)

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


