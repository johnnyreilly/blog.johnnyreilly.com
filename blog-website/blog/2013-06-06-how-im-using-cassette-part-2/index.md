---
slug: how-im-using-cassette-part-2
title: "How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order"
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Cassettes script dependency order feature is the most useful, managing script order manually is tedious. Use server-side or JavaScript asset references.'
---

[Last time](../2013-05-04-how-im-using-cassette/index.md) I wrote about Cassette I was talking about how to generally get up and running. How to use Cassette within an ASP.Net MVC project. What I want to write about now is (in my eyes) the most useful feature of Cassette by a country mile. This is Cassettes ability to ensure scripts are served in dependency order.

<!--truncate-->

## Why does this matter?

You might well ask. If we go back 10 years or so then really this wasn't a problem. No-one was doing a great deal with JavaScript. And if they did anything it tended to be code snippets in amongst the HTML; nothing adventurous. But unless you've had your head in the sand for the last 3 years then you will have clearly noticed that JavaScript is in rude health and being used for all kinds of things you'd never have imagined. In fact some would have it that it's the [assembly language of the web](http://www.hanselman.com/blog/JavaScriptisAssemblyLanguagefortheWebPart2MadnessorjustInsanity.aspx).

For my part, I've been doing more and more with JavaScript. And as I do more and more with it I seek to modularise my code; ([like any good developer would](http://en.wikipedia.org/wiki/Separation_of_concerns)) breaking it up into discrete areas of functionality. I aim to only serve up the JavaScript that I need on a given page. And that would be all well and good but for one of the languages shortcomings. Modules. JavaScript doesn't yet have a good module loading story to tell. (Apparently one's coming in [EcmaScript 6](http://wiki.ecmascript.org/doku.php?id=harmony:modules)). (I don't want to get diverted into this topic as it's a big area. But if you're interested then you can read up a little on different approaches being used [here](http://requirejs.org/docs/whyamd.html#today). The ongoing contest between RequireJS and CommonJS frankly makes me want to keep my distance for now.)

## It Depends

Back to my point, JavaScripts native handling of script dependencies is non-existent. It's real "here be dragons" territory. If you serve up, for example, Slave.js that depends on things set up in Master.js before you've actually served up Master.js, well it's not a delightful debugging experience. The errors tend be obscure and it's not always obvious what the correct ordering should be.

Naturally this creates something of a headache around my own JavaScript modules. A certain amount of jiggery-pokery is required to ensure that scripts are served in the correct order so that they run as expected. And as your application becomes more complicated / modular, the number of problems around this area increase exponentially. It's **really** tedious. I don't want to be thinking about managing that as I'm developing - I want to be focused on solving the problem at hand.

In short, what I want to do is reference a script file somewhere in my server-side pipeline. I could be in a view, a layout, a controller, a partial view, a HTML helper... - I just want to know that that script is going to turn up at the client in the right place in the HTML so it works. Always. And I don't want to have to think about it any further than that.

## Enter Cassette, riding a white horse

And this is where Cassette takes the pain away. To quote the documentation:

> "_Some assets must be included in a page before others. For example, your code may use jQuery, so the jQuery script must be included first. Cassette will sort all assets based on references they declare._"

Just the ticket!

## Declaring References Server-Side

What does this look like in reality? Let's build on what I did last time to demonstrate how I make use of Asset References to ensure my scripts turn up in the order I require.

In my `_Layout.cshtml` file I'm going to remove the following reference from the head of the file:

`Bundles.Reference("~/bundles/core");`

I'm pulling this out of my layout page because it's presence means that **every** page MVC serves up is also serving up jQuery and jQuery UI (which is what `~/bundles/core` is). If a page doesn't actually make use of jQuery and / or jQuery UI then there's no point in doing this.

"_But wait!_", I hear you cry, "_Haven't you just caused a bug with your reckless action? I distinctly recall that the `Login.cshtml` page has the following code in place:_"

`Bundles.Reference("~/bundles/validate");`

"_And now with your foolhardy, nay, reckless attitude to the `~/bundles/core` bundle you've broken your Login screen. How can jQuery Validation be expected to work if there's no jQuery there to extend?_"

Well, I understand your concerns but really you needn't worry - Cassette's got my back. Look closely at the code below:

```cs
// A bundle of the core scripts that will likely be used on every page of the app
bundles.Add<ScriptBundle>("~/bundles/core",
                          new[]
                              {
                                  "~/Scripts/jquery-1.8.2.js",
                                  "~/Scripts/jquery-ui-1.8.24.js"
                              });

// Validation scripts; only likely necessary on data entry screens
bundles.Add<ScriptBundle>("~/bundles/validate",
                          new[]
                              {
                                  "~/Scripts/jquery.validate.js",
                                  "~/Scripts/jquery.validate.unobtrusive.js"
                              },
                          bundle => bundle.AddReference("~/bundles/core")
    );
```

See it? The `~/bundles/validate` bundle declares a reference to the `~/bundles/core` bundle. The upshot of this is, that if you tell Cassette to reference `~/bundles/validate` it will ensure that before it renders that bundle it first renders any bundles that bundle depends on (in this case the `~/bundles/core` bundle).

This is a very simple demonstration of the feature but I can't underplay just how useful I find this.

## Declaring References in your JavaScript itself

And the good news doesn't stop there. Let's say you **don't** want to maintain your references in a separate file. You'd rather declare references inside your JavaScript files themselves. Well - you can. Cassette caters for this through the usage of [Asset References](http://getcassette.net/documentation/v1/AssetReferences).

Let's demo this. First of all add the following file at this location in the project: `~/Scripts/Views/Home/Index.js`

```js
// @reference ~/bundles/core

$(document).ready(function () {
  var $body = $('#body');

  $body.fadeOut(1000, function () {
    $body
      .html(
        '<div style="width: 150px; margin: 0 auto;">' +
          'I made it all go away...</div>',
      )
      .fadeIn();
  });
});
```

The eagle-eyed amongst you will have noticed

1. I'm mirroring the MVC folder structure inside the Scripts directory. (There's nothing special about that by the way - it's just a file structure I've come to find useful. It's very easy to find the script associated with a View if the scripts share the same organisational approach as the Views.).
2. The purpose of the script is very simple, it fades out the main body of the screen, re-writes the HTML in that tag and then fades back in. It's purpose is just to do something that is obvious to the user - so they can see the evidence of JavaScript executing.
3. Lastly and most importantly, do you notice that `// @reference ~/bundles/core` is the first line of the file? This is our script reference. It's this that Cassette will be reading to pick up references.

To make sure Cassette is picking up our brand new file let's take a look at `CassetteConfiguration.cs` and uncomment the line of code below:

`bundles.AddPerIndividualFile<scriptbundle>("~/Scripts/Views");</scriptbundle>`

With this in place Cassette will render out a bundle for each script in the Views subdirectory. Let's see if it works. Add the following reference to our new JavaScript file in `~/Views/Home/Index.cshtml`:

`Bundles.Reference("~/Scripts/Views/Home/Index.js");`

Now `Index.js` is served up by Cassette. And more importantly before `Index.js` was served the referenced `~/bundles/core` was served too.

## Avoiding the Gotcha

There is a gotcha which I've discovered whilst using Cassette's Asset References. Strictly speaking it's a Visual Studio gotcha rather than a Cassette gotcha. It concerns Cassette's support for Visual Studio XML style reference comments. In the example above I could have written this:

`/// &lt;reference path="~/bundles/core" /&gt;`

Instead of this:

`// @reference ~/bundles/core`

It would fulfil exactly the same purpose and would work identically. But there's a problem. Using Visual Studio XML style reference comments to refer to Cassette bundles appears to trash the Visual Studios JavaScript Intellisense. You'll lose the Intellisense that's driven by `~/Scripts/_references.js` in VS 2012. So if you value your Intellisense (and I do) my advice is to stick to using the standard Cassette references style instead.

## Go Forth and Reference

There is also support in Cassette for CSS referencing (as well as other types of referencing relating to LESS and even CoffeeScript). I haven't made use of CSS referencing myself as, in stark contrast to my JS, my CSS is generally one bundle of styles which I'm happy to be rendered on each page. But it's nice to know the option is there if I wanted it.

Finally, as last time you can see what I've done in this post by just looking at the repository on [GitHub](https://github.com/johnnyreilly/CassetteDemo/tree/References). The changes I made are on the References branch of that particular repository.

<!-- I don't want to serve up a monster JavaScript payload with each screen refresh.  Quite besides anything else, if I did that each screen refresh would be slower as more JavaScript was served up and parsed - the UX would suffer.  I don't want that.  I want *<strong>performance</strong>*! -->
