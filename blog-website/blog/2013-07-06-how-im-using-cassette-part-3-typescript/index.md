---
slug: how-im-using-cassette-part-3-typescript
title: "How I'm Using Cassette part 3:Cassette and TypeScript Integration"
authors: johnnyreilly
tags: [typescript, javascript, asp.net]
hide_table_of_contents: false
---

The modern web is JavaScript. There's no two ways about it. HTML 5 has new CSS, new HTML but the most important aspect of it from an application development point of view is JavaScript. It's the engine. Without it HTML 5 wouldn't be the exciting application platform that it is. Half the posts on [Hacker News](https://news.ycombinator.com/) would vanish.

<!--truncate-->

It's easy to break a JavaScript application. One false keypress and you can mysteriously turn a fully functioning app into toast. And not know why. There's tools you can use to help yourself - [JSHint / JSLint](../2012-04-23-jshint-customising-your-hurt-feelings/index.md) but whilst these make error detection a little easier it remains very easy to shoot yourself in the foot with JavaScript. Because of this I've come to really rather love [TypeScript](http://www.typescriptlang.org/). If you didn't already know, TypeScript can be summed up as JavaScript with optional static typing. It's a **_superset_** of JavaScript - JavaScript with go-faster stripes. When run through the compiler TypeScript is [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) into JavaScript. And importantly, if you have bugs in your code, the compiler should catch them at this point and let you know.

Now very few of us are working on greenfield applications. Most of us have existing applications to maintain and support. Happily, TypeScript fits very well with this purely because TypeScript is a superset of JavaScript. That is to say: all JavaScript is valid TypeScript in the same way that all CSS is valid [LESS](http://lesscss.org/). This means that you can take an existing `.js` file, rename it to have a `.ts` suffix, run the TypeScript compiler over it and out will pop your JavaScript file just as it was before. You're then free to enrich your TypeScript file with the relevant type annotations at your own pace. Increasing the robustness of your codebase is a choice left to you.

The project I am working on has recently started to incorporate TypeScript. It's an ASP.Net MVC 4 application which makes use of [Knockout](http://knockoutjs.com/). The reason we started to incorporate TypeScript is because certain parts of the app, particularly the Knockout parts, were becoming more complex. This complexity wasn't really an issue when we were writing the relevant JavaScript. However, when it came to refactoring and handing files from one team member to another we realised it was very easy to introduce bugs into the codebase, particularly around the JavaScript. Hence TypeScript.

## Cassette and TypeScript

Enough of the pre-amble. The project was making use of Cassette for serving up its CSS and JavaScript. Because Cassette rocks. One of the reasons we use it is that we're making extensive use of [Cassette's ability to serve scripts in dependency order](../2013-06-06-how-im-using-cassette-part-2/index.md). So if we were to move to using TypeScript it was important that TypeScript and Cassette would play well together.

I'm happy to report that Cassettes and TypeScript do work well together, but there are a few things that you need to get up and running. Or, to be a little clearer, if you want to make use of Cassette's in-file Asset Referencing then you'll need to follow these steps. If you don't need Asset Referencing then you'll be fine using Cassette with TypeScript generated JavaScript as is \***provided**\* you ensure the TypeScript compiler is not preserving comments in the generated JavaScript.

## The Fly in the Ointment: Asset References

TypeScript is designed to allow you to break up your application into modules. However, the referencing mechanism which allows you to reference one TypeScript file / module from another is exactly the same as the existing Visual Studio XML reference comments mechanism that was originally introduced to drive JavaScript Intellisense in Visual Studio. To quote the [TypeScript spec](http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf):

- _A comment of the form /// <reference path="…"/> adds a dependency on the source file specified in the path argument. The path is resolved relative to the directory of the containing source file._
- _An external import declaration that specifies a relative external module name (section 11.2.1) resolves the name relative to the directory of the containing source file. If a source file with the resulting path and file extension ‘.ts’ exists, that file is added as a dependency. Otherwise, if a source file with the resulting path and file extension ‘.d.ts’ exists, that file is added as a dependency._

The problem is that [Cassette \***also**\* supports Visual Studio XML reference comments to drive Asset References](http://getcassette.net/documentation/v1/AssetReferences). The upshot of this is, that Cassette will parse the `/// &lt;reference path="*.ts"/&gt;`s and will attempt to serve up the TypeScript files in the browser... Calamity!

## Pulling the Fly from the Ointment

Again I'm going to take the demo from last time ([the References branch of my CassetteDemo project](https://github.com/johnnyreilly/CassetteDemo/tree/References)) and build on top of it. First of all, we need to update the Cassette package. This is because to get Cassette working with TypeScript you need to be running at least Cassette 2.1. So let's let NuGet do it's thing:

`Update-Package Cassette.Aspnet`

And whilst we're at it let's grab the jQuery TypeScript typings - we'll need them later:

`Install-Package jquery.TypeScript.DefinitelyTyped`

Now we need to add a couple of classes to the project. First of all this:

```cs
using System;
using Cassette.Scripts;

namespace CassetteDemo
{
    public class ParseJavaScriptNotTypeScriptReferences : ParseJavaScriptReferences
    {
        protected override bool ShouldAddReference(string referencePath)
        {
            return !referencePath.EndsWith(".ts", StringComparison.OrdinalIgnoreCase); // Will exclude TypeScript files from being served
        }
    }
}
```

Which subclasses `ParseJavaScriptReferences` and ensures TypeScript files are excluded when JavaScript references are being parsed. And to make sure that Cassette makes use of `ParseJavaScriptNotTypeScriptReferences` in place of `ParseJavaScriptReferences` we need this:

```cs
using Cassette.BundleProcessing;
using Cassette.Scripts;

namespace CassetteDemo
{
    public class InsertIntoPipelineParseJavaScriptNotTypeScriptReferences : IBundlePipelineModifier<ScriptBundle>
    {
        public IBundlePipeline<ScriptBundle> Modify(IBundlePipeline<ScriptBundle> pipeline)
        {
            var positionOfJavaScriptReferenceParser = pipeline.IndexOf<ParseJavaScriptReferences>();

            pipeline.RemoveAt(positionOfJavaScriptReferenceParser);
            pipeline.Insert<ParseJavaScriptNotTypeScriptReferences>(positionOfJavaScriptReferenceParser);
            return pipeline;
        }
    }
}
```

Now we're in a position to use TypeScript with Cassette. To demonstrate this let's take the `Index.js` and rename it to `Index.ts`. And now it's TypeScript. However before it can compile it needs to know what jQuery is - so we drag in the jQuery typings from [Definitely Typed](http://github.com/borisyankov/DefinitelyTyped). And now it can compile from this:

```ts
/// <reference path="../../typings/jquery/jquery.d.ts" />
// @reference ~/bundles/core

$(document).ready(function () {
  var $body = $('#body');

  $body.fadeOut(1000, function () {
    $body
      .html(
        '<div style="width: 150px; margin: 0 auto;">I made it all go away...</div>',
      )
      .fadeIn();
  });
});
```

To this: (Please note that I get the TypeScript compiler to preserve my comments in order that I can continue to use Cassettes Asset Referencing)

```js
/// <reference path="../../typings/jquery/jquery.d.ts" />
// @reference ~/bundles/core
$(document).ready(function () {
  var $body = $('#body');

  $body.fadeOut(1000, function () {
    $body
      .html(
        '<div style="width: 150px; margin: 0 auto;">I made it all go away...</div>',
      )
      .fadeIn();
  });
});
//@ sourceMappingURL=Index.js.map
```

As you can see the output JavaScript has both the TypeScript and the Cassette references in place. However thanks to `ParseJavaScriptNotTypeScriptReferences` those TypeScript references will be ignored by Cassette.

So that's it - we're home free. Before I finish off I'd like to say thanks to Cassette's [Andrew Davey](http://twitter.com/andrewdavey) who [set me on the right path](https://groups.google.com/forum/?fromgroups=#!topic/cassette/SM3Rxh48D7Q) when trying to work out how to do this. A thousand thank yous Andrew!

And finally, again as last time you can see what I've done in this post by just looking at the repository on [GitHub](https://github.com/johnnyreilly/CassetteDemo/tree/TypeScript). The changes I made are on the TypeScript branch of that particular repository.
