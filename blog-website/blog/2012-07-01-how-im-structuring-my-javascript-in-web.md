---
title: "Optimally Serving Up JavaScript"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [asp.net mvc, html helper, javascript, cassette]
hide_table_of_contents: false
---
I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context.

 Over time I've come to adopt a roughly standard approach to how I structure my JavaScript; both the JavaScript itself and how it is placed / rendered in the an HTML document. I wanted to write about the approach I'm using. Partly just to document the approach but also because I often find writing about something crystalises my feelings on the subject in one way or another. I think that most of what I'm doing is sensible and rational but maybe as I write about this I'll come to some firmer conclusions about my direction of travel.

## What are you up to?

Before I get started it's probably worth mentioning the sort of web development I'm generally called to do (as this has obviously influenced my decisions).

Most of my work tends to be on web applications used internally within a company. That is to say, web applications accessible on a Company intranet. Consequently, the user base for my applications tends to be smaller than the Amazons and Googles of this world. It almost invariably sits on the ASP.NET stack in some way. Either classic WebForms or MVC.

## "Render first. JS second."

I took 2 things away from [Steve Souder's article](<http://www.stevesouders.com/blog/2010/09/30/render-first-js-second/>):

1. Async script loading is better than synchronous script loading
2. Get your screen rendered and \***then**\* execute your JavaScript

<!-- -->

I'm not doing any async script loading as yet; although I am thinking of giving it a try at some point. In terms of choosing a loader I'll probably give RequireJS first crack of the whip (purely as it looks like most people are tending it's direction and that can't be without reason).

However - it seems that the concept of async script loading is kind of conflict with one of the other tenets of web wisdom: script bundling. Script bundling, if you're not already aware, is the idea that you should combine all your scripts into a single file and then just serve that. This prevents multiple HTTP requests as each script loads in. Async script loading is obviously okay with multiple HTTP requests, presumably because of the asynchronous non-blocking pattern of loading. So. 2 different ideas. And there's further movement on this front right now as [Microsoft are baking in script bundling to .NET 4.5](<http://www.hanselman.com/blog/VisualStudio2012RCIsReleasedTheBigWebRollup.aspx>).

Rather than divide myself between these 2 horses I have at the moment tried to follow the "JS second" part of this advice in my own (perhaps slightly old fashioned) way...

## I want to serve you...

I have been making sure that scripts are the last thing served to the screen by using a customised version of [Michael J. Ryan's HtmlHelper](<http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx>). This lovely helper allows you to add script references as required from a number of different sources (layout page, view, partial view etc - even the controller if you so desired). It's simple to control the ordering of scripts by allowing you to set a priority for each script which determines the render order.

Then as a final step before rendering the `&lt;/body&gt;` tag the scripts can be rendered in one block. By this point the web page is rendered visually and a marginal amount of blocking is, in my view, acceptable.

If anyone is curious - the class below is my own version of Michael's helper. My contribution is the go faster stripes relating to the caching suffix and the ability to specify dependancies using script references rather than using numeric priority mechanism):

<script src="https://gist.github.com/3019159.js?file=ScriptExtensions.cs"></script>

## Minification - I want to serve you less...

Another tweak I made to the script helper meant that when compiling either the debug or production (minified) versions of common JS files will be included if available. This means in a production environment the users get minified JS files so faster loading. And in a development environment we get the full JS files which make debugging more straightforward.

What I haven't started doing is minifying my own JS files as yet. I know I'm being somewhat inconsistent here by sometimes serving minified files and sometimes not. I'm not proud. Part of my rationale for this that since most of my users use my apps on a daily basis they will for the most part be using cached JS files. Obviously there'll be slightly slower load times the first time they go to a page but nothing that significant I hope.

I have thought of starting to do my own minification as a build step but have held off for now. Again this is something being baked into .NET 4.5; another reason why I have held off doing this a different way for now.

Update

It now looks like this Microsofts optimisations have become [this Nuget package](<http://nuget.org/packages/Microsoft.AspNet.Web.Optimization>). It's early days (well it was released on 15th August 2012 and I'm writing this on the 16th) but I think this looks not to be tied to MVC 4 or .NET 4.5 in which case I could use it in my current MVC 3 projects. I hope so...

By the way there's a [nice rundown of how to use this by K. Scott Allen of Pluralsight](<http://www.pluralsight.com/training/Courses/TableOfContents/mvc4#mvc4-m3-optimization>). It's fantastic. Recommended.

Update 2

Having done a little asking around I now understand that this \***can**\* be used with MVC 3 / .NET 4.0. Excellent!

One rather nice alternative script serving mechanism I've seen (but not yet used) is Andrew Davey's [Cassette](<http://getcassette.net>) which I mean to take for a test drive soon. This looks fantastic (and is available as a [Nuget package](<http://nuget.org/packages/Cassette>) \- 10 points!).

## CDNs (they want to serve you)

I've never professionally made use of CDNs at all. There are [clearly good reasons why you should](<http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/>) but most of those good reasons relate most to public facing web apps.

As I've said, the applications I tend to work on sit behind firewalls and it's not always guaranteed what my users can see from the grand old world of web beyond. (Indeed what they see can change on hour by hour basis sometimes...) Combined with that, because my apps are only accessible by a select few I don't face the pressure to reduce load on the server that public web apps can face.

So while CDN's are clearly a good thing. I don't use them at present. And that's unlikely to change in the short term.

## TL:DR

1. I don't use CDNs - they're clearly useful but they don't suit my particular needs
2. I serve each JavaScript file individually just before the body tag. I don't bundle.
3. I don't minify my own scripts (though clearly it wouldn't be hard) but I do serve the minified versions of 3rd party libraries (eg jQuery) in a Production environment.
4. I don't use async script loaders at present. I may in future; we shall see.

<!-- -->

I expect some of the above may change (well, possibly not point #1) but this general approach is working well for me at present.

I haven't touched at all on how I'm structuring my JavaScript code itself. Perhaps next time.


