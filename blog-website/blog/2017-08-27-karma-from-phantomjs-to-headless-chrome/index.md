---
slug: karma-from-phantomjs-to-headless-chrome
title: 'Karma: From PhantomJS to Headless Chrome'
authors: johnnyreilly
tags: [automated testing]
hide_table_of_contents: false
description: 'Replace PhantomJS with new Chrome Headless to run Chrome without a UI. Migrate a test and add Chrome to your build environment.'
---

Like pretty much everyone else I've been using PhantomJS to run my JavaScript (or compiled-to-JS) unit tests. It's been great. So when I heard the news that [PhantomJS was dead](https://news.ycombinator.com/item?id=14105489) I was genuinely sad. However, the King is dead.... Long live the King! For there is a new hope; it's called [Chrome Headless ](https://developers.google.com/web/updates/2017/04/headless-chrome). It's not a separate version of Chrome; rather the ability to run Chrome without a UI is now baked into Google's favourite browser as of v59. (For those history buffs I might as well be clear: the main reason PhantomJS died is because Chrome Headless was in the works.)

<!--truncate-->

## Making the Switch

As long as you're running Chrome v59 or greater then you can switch. I've just made ts-loader's execution test pack run with Chrome Headless instead of PhantomJS and I've rarely been happier. Honest. Some context: the execution test pack runs Jasmine unit tests via the [Karma test runner](https://karma-runner.github.io/1.0/index.html). The move was surprisingly easy and you can see just how minimal it was in the PR [here](https://github.com/TypeStrong/ts-loader/pull/611/files). If you want to migrate a test that runs tests via Karma then this will take you through what you need to do.

## `package.json`

You no longer need `phantomjs-prebuilt` as a dev dependency of your project. That's the PhantomJS browser disappearing in the rear view mirror. Next we need to replace `karma-phantomjs-launcher` with `karma-chrome-launcher`. These packages are responsible for firing up the browser that the tests are run in and we no longer want to invoke PhantomJS; we're Chrome all the way baby.

## `karma.conf.js`

You need to tell Karma to use Chrome Headless instead of PhantomJS. You do that by replacing

```js
browsers: [ 'PhantomJS' ],
```

with

```js
browsers: [ 'ChromeHeadless' ],
```

That's it; job done!

## Continuous Integration

There's always one more thing isn't there? Yup, ts-loader has CI builds that run on [Windows with AppVeyor](https://ci.appveyor.com/project/JohnReilly/ts-loader/branch/master) and [Linux with Travis](https://travis-ci.org/TypeStrong/ts-loader). The AppVeyor build went green on the first run; that's because Chrome is installed by default in the AppVeyor build environment. (yay!)

Travis went red. (boooo!) Travis doesn't have Chrome installed by default. But it's no biggie; you just need to tweak your `.travis.yml` like so:

```yml
dist: trusty
addons:
  chrome: stable
```

This includes Chrome in the Travis build environment. Green. Boom!
