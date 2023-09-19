---
slug: globalizejs-number-and-date
title: 'Globalize.js - number and date localisation made easy'
authors: johnnyreilly
tags: [javascript, globalize]
hide_table_of_contents: false
description: 'Globalize.js is a JavaScript library allowing developers to format and parse numbers and dates in a culture specific fashion for better user experience.'
---

I wanted to write about a JavaScript library which seems to have had very little attention so far. And that surprises me as it's

<!--truncate-->

1. Brilliant!
2. Solves a common problem that faces many app developers who work in the wonderful world of web; myself included

The library is called Globalize.js and can be found on [GitHub here](https://github.com/jquery/globalize). Globalize.js is a simple JavaScript library that allows you to format and parse numbers and dates in culture specific fashion.

## Why does this matter?

Because different countries and cultures do dates and numbers in different ways. Christmas Day this year in England will be `25/12/2012` (dd/MM/yyyy). But for American eyes this should be `12/25/2012` (M/d/yyyy). And for German `25.12.2012` (dd.MM.yyyy). Likewise, if I was to express numerically the value of "one thousand exactly - to 2 decimal places", as a UK citizen I would do it like so: `1,000.00`. But if I was French I'd express it like this: `1.000,00`. You see my point?

## Why does this matter to me?

For a number of years I've been working on applications that are used globally, from London to Frankfurt to Shanghai to New York to Singapore and many other locations besides. The requirement has always been to serve up localised dates and numbers so users experience of the system is more natural. Since our applications are all ASP.NET we've never really had a problem server-side. Microsoft have blessed us with all the goodness of [System.Globalization](http://msdn.microsoft.com/en-us/library/system.globalization.aspx) which covers hundreds of different cultures and localisations. It makes it frankly easy:

```cs
using System.Globalization;

//Produces: "06.05.2012"
new DateTime(2012,5,6).ToString("d", new CultureInfo("de-DE"));

//Produces: "45,56"
45.56M.ToString("n", new CultureInfo("fr-FR"));
```

The problem has always been client-side. If you need to localise dates and numbers on the client what do you do?

## JavaScript Date / Number Localisation - the Status Quo

Well to be frank - it's a bit rubbish really. What's on offer natively at present basically amounts to this:

- [Date.toLocaleDateString](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [Number.ToLocaleString](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/ToLocaleString)

This is better than nothing - but not by much. There's no real control or flexibility here. If you don't like the native localisation format or you want something slightly different then tough. This is all you've got to play with.

For the longest time this didn't matter too much. Up until relatively recently the world of web was far more about the thin client and the fat server. It would be quite standard to have all HTML generated on the server. And, as we've seen .NET (and many other back end enviroments as well) give you all the flexiblility you might desire given this approach.

[But the times they are a-changing](http://www.youtube.com/watch?v=k2sYIIjS-cQ). And given the ongoing explosion of HTML 5 the rich client is very definitely with us. So we need tools.

## Microsoft doing \*good things\*

Hands up who remembers when Microsoft first shipped it's [ASP.NET AJAX](http://msdn.microsoft.com/en-us/magazine/cc163300.aspx) library back in 2007?

Well a small part of this was the extensions ASP.NET AJAX added to JavaScripts native Date and Number objects.... These extensions allowed the localisation of Dates and Numbers to the current UI culture and the subsequent string parsing of these back into Dates / Numbers. These extensions pretty much gave JavaScript the functionality that the server already had in `System.Globalization`. (not quite like-for-like but near enough the mark)

I'm not aware of a great fuss ever being made about this - a fact I find surprising since one would imagine this is a common need. There's good documentation about this on MSDN - here's some useful links:

- [Ajax Script Globalization and Localization](http://msdn.microsoft.com/en-us/library/bb386572.aspx)
- [Walkthrough: Globalizing a Date by Using Client Script](http://msdn.microsoft.com/en-us/library/bb386581.aspx)
- [JavaScript Base Type Extensions](http://msdn.microsoft.com/en-us/library/bb397506.aspx)
- [Date.parseLocale](http://msdn.microsoft.com/en-us/library/bb397521.aspx)
- [Date.localeFormat](http://msdn.microsoft.com/en-us/library/bb383816.aspx)
- [Number.localeFormat](http://msdn.microsoft.com/en-us/library/bb310813.aspx)
- [Number.parseLocale](http://msdn.microsoft.com/en-us/library/bb310985.aspx)

When our team became aware of this we started to make use of it in our web applications. I imagine we weren't alone...

## Microsoft doing \*even better things\* (Scott Gu to the rescue!)

I started to think about this again when MVC reared it's lovely head.

Like many, I found I preferred the separation of concerns / testability etc that MVC allowed. As such, our team was planning to, over time, migrate our ASP.NET WebForms applications over to MVC. However, before we could even begin to do this we had a problem. Our JavaScript localisation was dependant on the ScriptManager. The [ScriptManager](http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.aspx) is very much a WebForms construct.

What to do? To the users it wouldn't be acceptable to remove the localisation functionality from the web apps. The architecture of an application is, to a certain extent, meaningless from the users perspective - they're only interested in what directly impacts them. That makes sense, even if it was a problem for us.

Fortunately the Great Gu had it in hand. Lo and behold the [this post](http://forum.jquery.com/topic/proposal-for-a-globalization-plugin-jquery-glob-js) appeared on the jQuery forum and the following post appeared on Guthrie's blog:

[http://weblogs.asp.net/scottgu/archive/2010/06/10/jquery-globalization-plugin-from-microsoft.aspx](http://weblogs.asp.net/scottgu/archive/2010/06/10/jquery-globalization-plugin-from-microsoft.aspx)

Yes that's right. Microsoft were giving back to the jQuery community by contributing a jQuery globalisation plug-in. They'd basically taken the work done with ASP.NET AJAX Date / Number extensions, jQuery-plug-in-ified it and put it out there. Fantastic!

Using this we could localise / globalise dates and numbers whether we were working in WebForms or in MVC. Or anything else for that matter. If we were suddenly seized with a desire to re-write our apps in PHP we'd \***still**\* be able to use Globalize.js on the client to handle our regionalisation of dates and numbers.

## History takes a funny course...

Now for my part I would have expected that this announcement to be followed in short order by dancing in the streets and widespread adoption. Surprisingly, not so. All went quiet on the globalisation front for some time and then out of the blue the following comment appeared on the jQuery forum by [Richard D. Worth](http://rdworth.org/blog/) (he of jQuery UI fame):

[http://blog.jquery.com/2011/04/16/official-plugins-a-change-in-the-roadmap/#comment-527484](http://blog.jquery.com/2011/04/16/official-plugins-a-change-in-the-roadmap/#comment-527484)

The long and short of which was:

- The jQuery UI team were now taking care of (the re-named) Globalize.js library as the grid control they were developing had a need for some of Globalize.js's goodness. Consequently a home for Globalize.js appeared on the jQuery UI website: [http://wiki.jqueryui.com/Globalize](http://wiki.jqueryui.com/Globalize)
- The source of Globalize.js moved to this location on GitHub: [https://github.com/jquery/globalize/](https://github.com/jquery/globalize/)
- Perhaps most significantly, the jQuery globalisation plug-in as developed by Microsoft had now been made a standalone JavaScript library. This was clearly brilliant news for Node.js developers as they would now be able to take advantage of this and perform localisation / globalisation server-side - they wouldn't need to have jQuery along for the ride. Also, this would be presumably be good news for users of other client side JavaScript libraries like Dojo / YUI etc.

Globalize.js clearly has a rosy future in front of it. Using the new Globalize.js library was still simplicity itself. Here's some examples of localising dates / numbers using the German culture:

```js
<script
  src="/Scripts/Globalize/globalize.js"
  type="text/javascript"></script>
<script
  src="/Scripts/Globalize/cultures/globalize.culture.de-DE.js"
  type="text/javascript"></script>

Globalize.culture("de-DE");

//"2012-05-06" - ISO 8601 format
Globalize.format(new Date(2012,4,6), "yyyy-MM-dd");

//"06.05.2012" - standard German short date format of dd.MM.yyyy
Globalize.format(new Date(2012,4,6), Globalize.culture().calendar.patterns.d);

//"4.576,3" - a number rendered to 1 decimal place
Globalize.format(4576.34, "n1");
```

## Stick a fork in it - it's done

The entry for Globalize.js on the jQuery UI site reads as follows:

> _"version: 0.1.0a1 (not a jQuery UI version number, as this is a standalone utility) status: in development (part of Grid project)"_

I held back from making use of the library for some time, deterred by the "in development" status. However, I had a bit of dialog with one of the jQuery UI team (I forget exactly who) who advised that the API was unlikely to change further and that the codebase was actually pretty stable. Our team did some testing of Globalize.js and found this very much to be case. Everything worked just as we expected and hoped. We're now using Globalize.js in a production environment with no problems reported; it's been doing a grand job.

In my opinion, Number / Date localisation on the client is ready for primetime right now - it works! Unfortunately, because Globalize.js has been officially linked in with the jQuery UI grid project it seems unlikely that this will officially ship until the grid does. Looking at the jQuery UI [roadmap](http://wiki.jqueryui.com/Roadmap) the grid is currently slated to release with jQuery UI 2.1. There isn't yet a release date for jQuery UI 1.9 and so it could be a long time before the grid actually sees the light of day.

I'm hoping that the jQuery UI team will be persuaded to "officially" release Globalize.js long before the grid actually ships. Obviously people can use Globalize.js as is right now (as we are) but it seems a shame that many others will be missing out on using this excellent functionality, deterred by the "in development" status. Either way, [the campaign to release Globalise.js officially starts here!](http://www.youtube.com/watch?v=qEMytPF8YuY)

## The Future?

There are plans to bake globalisation right into JavaScript natively with EcmaScript 5.1. There's a good post on the topic [here](http://generatedcontent.org/post/59403168016/esintlapi). And here's a couple of historical links worth reading too:

[http://norbertlindenberg.com/2012/02/ecmascript-internationalization-api/](http://norbertlindenberg.com/2012/02/ecmascript-internationalization-api/)[http://wiki.ecmascript.org/doku.php?id=globalization:specification_drafts](http://wiki.ecmascript.org/doku.php?id=globalization:specification_drafts)
