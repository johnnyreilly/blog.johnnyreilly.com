---
slug: hottowel-angular-meet-typescript
title: 'HotTowel-Angular meet TypeScript'
authors: johnnyreilly
tags: [angularjs, typescript]
hide_table_of_contents: false
description: 'Johnny Reilly creates a bare-bones port of the Hot Towel Angular SPA Template to TypeScript in order to demonstrate the ease of transition.'
---

I've recently ported John Papa's popular [Hot Towel Angular SPA Template](https://github.com/johnpapa/HotTowel-Angular) to TypeScript. Why? [Because it was there.](http://en.wikipedia.org/wiki/George_Mallory)

<!--truncate-->

If you'd like to read more about HotTowel-Angular then have a read of [John Papa's post](http://www.johnpapa.net/hot-towel-angular/). You can find my port on GitHub [here](https://github.com/johnnyreilly/HotTowel-Angular-TypeScript).

## What is this port you speak of?

It is **intentionally** a "bare bones" port of the HotTowel-Angular JavaScript code across to TypeScript. It's essentially the same code as John's - just with added type annotations (and yes it is `noImplicitAny` compliant).

You could, if you wanted to, go much further. You could start using a whole host of TypeScripts functionality: modules / classes / arrow functions... the whole shebang. But my port is deliberately not that; I didn't want to scare your horses... I wanted you to see how easy it is to move from JS to TS. And I'm standing on the shoulders of that great giant [John Papa](https://twitter.com/john_papa) for that purpose.

If you wanted an example of how you might go further in an Angular port to TypeScript then you could take a look at my [previous post](../2014-06-01-migrating-from-angularjs-to-angularts/index.md) on the topic.

## What's in the repo?

The repo contains the contents of HotTowel-Angular's app folder, with each JavaScript file converted over to TypeScript. The compiled JavaScript files are also included so that you can compare just how similar the compiled JavaScript is to John's original code.

In fact there are only 2 differences in the end:

### 1\. sidebar.js's `getNavRoutes`

...had the filtering changed from this:

```ts
return r.config.settings && r.config.settings.nav;
```

to this:

```ts
return r.config.settings && r.config.settings.nav ? true : false;
```

This was necessary as TypeScript insists that the array `filter` predicate returns a `boolean`. John's original method returns a number (`nav`'s value to be clear) which actually seems to work fine. My assumption is that JavaScript's filter method is happy with a truth-y / false-y test which John's implementation would satisfy.

### 2\. common.js's `$broadcast`

...had to be given a rest parameter to satisfy the TS compiler. John's original method exposed no parameters as it just forwards on whatever arguments are passed to it. This means that `$broadcast` has a bit of unused code in the head of the generated method:

```js
var args = [];
for (var _i = 0; _i < arguments.length - 0; _i++) {
  args[_i] = arguments[_i + 0];
}
```

## If you want to use this

Then simply follow the instructions for installing [HotTowel-Angular](https://github.com/johnpapa/HotTowel-Angular) and then drop this repo's app folder over the one just created when HotTowel-Angular was installed. If you're using Visual Studio then make sure that you include the new TS files into your project and give them the `BuildAction` of `TypeScriptCompile`.

You'll need the following NuGet packages for the relevant DefinitelyTyped Typings:

```ps
Install-Package angularjs.TypeScript.DefinitelyTyped
    Install-Package angular-ui-bootstrap.TypeScript.DefinitelyTyped
    Install-Package jquery.TypeScript.DefinitelyTyped
    Install-Package spin.TypeScript.DefinitelyTyped
    Install-Package toastr.TypeScript.DefinitelyTyped
```

And you're good to go. If you're not using Visual Studio then you may need to add in some `&lt;reference path="angular.d.ts" /&gt;` etc. statements to the TypeScript files as well.

If you're interested in the specific versions of the typings that I used then you can find them in the `packages.config` of the repo.

## Thanks

To John Papa for creating HotTowel-Angular. Much love.

And my mum too... Just because.
