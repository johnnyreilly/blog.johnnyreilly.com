---
slug: gulp-npm-long-paths-and-visual-studio-fight
title: 'Gulp, npm, long paths and Visual Studio.... Fight!'
authors: johnnyreilly
tags: [visual studio, node.js]
hide_table_of_contents: false
description: 'Installing gulp-angular-templatecache plugin caused issues with Visual Studio. A temporary solution is to install lodash.bind at root level.'
---

## How I managed to gulp-angular-templatecache working inside Visual Studio

Every now and then something bites you unexpectedly. After a certain amount of pain, the answer comes to you and you know you want to save others from falling into the same deathtrap.

There I was minding my own business and having a play with a Gulp plugin called [gulp-angular-templatecache](https://www.npmjs.com/package/gulp-angular-templatecache). If you're not aware of it, it "Concatenates and registers AngularJS templates in the $templateCache". I was planning to use it so that all the views in an [Angular app of mine](https://github.com/johnnyreilly/proverb-offline) were loaded up-front rather than on demand. (It's a first step in making an "offline-first" version of that particular app.)

<!--truncate-->

I digress already. No sooner had I tapped in:

```ps
npm install gulp-angular-templatecache --saveDev
```

Then I noticed my Visual Studio project was no longer compiling. It was dying a death on build with this error:

```ps
ASPNETCOMPILER : error ASPRUNTIME: The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters.
```

I was dimly aware that there were issues with the nested [node_modules](https://github.com/joyent/node/issues/6960) leading to Windows-killing paths. This sounded just like that.... And it was! `gulp-angular-templatecache` had a dependency on `gulp-footer` which had a dependency on `lodash.assign` which had a dependency on `lodash._basecreatecallback` which had.... You see where I'm going? It seems that the lovely lodash has created the path from hell.

For reasons that aren't particularly clear this kills Visual Studio's build process. This is slightly surprising given that our rogue path is sat in the `node_modules` directory which isn't part of the project in Visual Studio. That being the case you'd imagine that you could do what you liked there. But no, it seems VS is a delicate flower and we must be careful not to offend. Strange.

## It's Workaround Time!

After a _great deal_ of digging I found the answer nestled in the middle of an [answer on Stack Overflow](http://stackoverflow.com/a/24144479/761388). To quote:

> If you will add "lodash.bind" module to your project's package.json as dependency it will be installed in one level with gulp and not as gulp's dependency

That's right, I just needed to tap enter this at the root of my project:

```ps
npm install lodash.bind --saveDev
```

And all was sweetness and light once more - no more complaints from VS.

## The Future

It looks like lodash are [on course to address this issue](https://github.com/lodash/lodash-cli/issues/23). So one day this this workaround won't be necessary anymore which is good.

However, the general long path issue concerning node / npm hasn't vanished for Windows users. Given VS 2015 is planning to make Gulp and Grunt 1st class citizens of Visual Studio I'm going to guess that sort of issue is likely to arise again and again for other packages. I'm hoping that means that someone will actually fix the underlying path issues that upset Windows with npm.

It sounds like npm are planning to take [some steps](https://github.com/joyent/node/issues/6960#issuecomment-46704998) which is great. But I can't be alone in having a slightly nagging feeling that Windows isn't quite a first class citizen for node / io / npm yet. I really hope it will become one.
