---
slug: how-im-structuring-my-javascript-in-web
title: 'Optimally Serving Up JavaScript'
authors: johnnyreilly
tags: [asp.net mvc, javascript, cassette]
hide_table_of_contents: false
description: 'John describes his "JS second" approach to structuring JavaScript and using HtmlHelper to control the order of scripts in web apps for internal use.'
---

I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context.

<!--truncate-->

Over time I've come to adopt a roughly standard approach to how I structure my JavaScript; both the JavaScript itself and how it is placed / rendered in the an HTML document. I wanted to write about the approach I'm using. Partly just to document the approach but also because I often find writing about something crystalises my feelings on the subject in one way or another. I think that most of what I'm doing is sensible and rational but maybe as I write about this I'll come to some firmer conclusions about my direction of travel.

## What are you up to?

Before I get started it's probably worth mentioning the sort of web development I'm generally called to do (as this has obviously influenced my decisions).

Most of my work tends to be on web applications used internally within a company. That is to say, web applications accessible on a Company intranet. Consequently, the user base for my applications tends to be smaller than the Amazons and Googles of this world. It almost invariably sits on the ASP.NET stack in some way. Either classic WebForms or MVC.

## "Render first. JS second."

I took 2 things away from [Steve Souder's article](http://www.stevesouders.com/blog/2010/09/30/render-first-js-second/):

1. Async script loading is better than synchronous script loading
2. Get your screen rendered and \***then**\* execute your JavaScript

I'm not doing any async script loading as yet; although I am thinking of giving it a try at some point. In terms of choosing a loader I'll probably give RequireJS first crack of the whip (purely as it looks like most people are tending it's direction and that can't be without reason).

However - it seems that the concept of async script loading is kind of conflict with one of the other tenets of web wisdom: script bundling. Script bundling, if you're not already aware, is the idea that you should combine all your scripts into a single file and then just serve that. This prevents multiple HTTP requests as each script loads in. Async script loading is obviously okay with multiple HTTP requests, presumably because of the asynchronous non-blocking pattern of loading. So. 2 different ideas. And there's further movement on this front right now as [Microsoft are baking in script bundling to .NET 4.5](http://www.hanselman.com/blog/VisualStudio2012RCIsReleasedTheBigWebRollup.aspx).

Rather than divide myself between these 2 horses I have at the moment tried to follow the "JS second" part of this advice in my own (perhaps slightly old fashioned) way...

## I want to serve you...

I have been making sure that scripts are the last thing served to the screen by using a customised version of [Michael J. Ryan's HtmlHelper](http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx). This lovely helper allows you to add script references as required from a number of different sources (layout page, view, partial view etc - even the controller if you so desired). It's simple to control the ordering of scripts by allowing you to set a priority for each script which determines the render order.

Then as a final step before rendering the `&lt;/body&gt;` tag the scripts can be rendered in one block. By this point the web page is rendered visually and a marginal amount of blocking is, in my view, acceptable.

If anyone is curious - the class below is my own version of Michael's helper. My contribution is the go faster stripes relating to the caching suffix and the ability to specify dependancies using script references rather than using numeric priority mechanism):

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Text;

namespace DummyMvc.Helpers
{
    /// <summary>
    /// This helper makes creation of script tags within a view straightforward.
    /// If the specified file is missing an error is raised at runtime.  A v= suffix
    /// is added to URLs using the VersionHelper to make caching behave as desired
    /// both during development (where we don't want to cache as we make changes to code)
    /// and during production (where we do want to cache to improve the user loading experience)
    ///
    /// There are 2 approaches available using this helper.
    ///
    /// 1. Straight script tag creation using the Script method.
    ///
    /// A usage of:
    ///
    /// @Html.Script("~/Scripts/jquery.js")
    ///
    /// Would immediatedly render a tag as below: (please note the v= suffix to the URL)
    ///
    /// <script src="/Scripts/jquery.tools.min.js?v=634765611410213405" type="text/javascript"></script>
    ///
    /// 2. Script bundling
    ///
    /// This approach allows you to build up the scripts to be rendered across multiple
    /// views / partial views / layout etc and then have them rendered in one hit (ideally
    /// just prior to the body tag being rendered as at this point the screen will be visually
    /// set up for the user and any script loading that causes blocking should not be a presentational
    /// issue). This is heavily based on Michael Ryans work; see links below.
    ///
    /// [Links]
    /// http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx
    /// http://stackoverflow.com/questions/5598167/mvc3-need-help-with-html-helper
    ///
    /// [Usage]
    ///
```
