---
title: 'Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker'
authors: johnnyreilly
tags:
  [
    asp.net mvc,
    Twitter.Bootstrap.MVC4,
    Responsive,
    Twitter Bootstrap,
    Bootstrap Datepicker,
  ]
hide_table_of_contents: false
---

## Update 14/01/2013

Since I wrote this I've taken things on a little further - to read about that go [here](http://icanmakethiswork.blogspot.co.uk/2013/01/twitterbootstrapmvc4-meet-bootstrap_14.html).

## Getting Responsive

It's the new year, it's time for new things. Long on my list of "things to do" was getting up to speed with [Responsive web design](http://en.wikipedia.org/wiki/Responsive_web_design). No doubt like everyone else I've been hearing more and more about this over the last year (by the way there was a [good article on Mashable](http://mashable.com/2012/12/11/responsive-web-design/) about this last month). RWD (in case you don't already know) is pretty much about having web interfaces that format their presentation based on the device they're running to provide a good user experience. (I kind of think of it as a [write once, run anywhere](http://en.wikipedia.org/wiki/Write_once,_run_anywhere) approach - though hopefully without the negative connotations...)

Rather than diving straight in myself I'd heard at a user group that it might be worth taking [Twitter Bootstrap](http://twitter.github.com/bootstrap/) as a baseline. I'm a <strike>lazy</strike>

busy fellow so this sounded ideal.

## I like ASP.Net MVC...

... and this flavoured my investigations. I quickly stumbled on an [article written by Eric Hexter](http://lostechies.com/erichexter/2012/11/20/twitter-bootstrap-mvc4-the-template-nuget-package-for-asp-net-mvc4-projects/). Eric had brought together Twitter Bootstrap and ASP.Net MVC 4 in a [NuGet package](http://nuget.org/packages/twitter.bootstrap.mvc4). Excellent work chap!

To get up and running with Eric's work was a straightforward proposition. I...

1. Created new MVC 4 application in Visual Studio called “BootstrapMvcSample” using the “Empty” Project Template.
2. Executed the following commands at the NuGet Package Manager Console: - `Install-Package twitter.bootstrap.mvc4`
   - `Install-Package twitter.bootstrap.mvc4.sample`

Check out the responsive goodness I had when I ran it:

![](https://4.bp.blogspot.com/-2ytMlGLGRpo/UO1mqfi7yQI/AAAAAAAAAYs/RRuVGbr8nAg/s400/TwitterBootstrapFullSize.png)

![](https://3.bp.blogspot.com/-780OCEuXoLw/UO1maRJ-CZI/AAAAAAAAAYg/chBHgYMAIJk/s400/TwitterBootstrapTitchyTiny.png)

This is just 1 page, with `@media` queries doing the heavy lifting.

## Bootstrap Datepicker

The eagle-eyed amongst you will have noticed that the edit screen above features a date field. I've long been a fan of datepickers to allow users to enter a date in an application in an intuitive fashion. Until native browser datepickers become the norm we'll be relying on some kind of component. Up until now my datepicker of choice has been the [jQuery UI one](http://jqueryui.com/datepicker/). Based on a quick Google it seemed that jQuery UI and Twitter Bootstrap were not necessarily natural bedfellows. (Though [Addy Osmani's jQuery UI Bootstrap](http://addyosmani.github.com/jquery-ui-bootstrap/) shows some promise...)

Since I feared ending up down a blind alley I found myself casting around for a Twitter Bootstrap datepicker. I quickly happened upon [Stefan Petre's Bootstrap Datepicker](http://www.eyecon.ro/bootstrap-datepicker/) which looked just the ticket.

## Shake hands and play nice...

Incorporating the Bootstrap Datepicker into Twitter.Bootstrap.MVC4 was actually a pretty straightforward affair. I added the following datepicker assets to the ASP.Net MVC project as follows:

- `bootstrap-datepicker.js` was added to `~\Scripts`.
- `datepicker.css` was added to `~\Content`. I renamed this file to `bootstrap-datepicker.css` to stay in line with the other css files.

Once this was done I amended the `BootstrapBundleConfig.cs` bundles to include these assets. Once this was done the bundle file looked like this:

<script src="https://gist.github.com/4529746.js?file=BootstrapBundleConfig.cs"></script>

I then created this folder:`~\Views\Shared\EditorTemplates`. To this folder I added the following `Date.cshtml` Partial to hold the datepicker EditorTemplate: (Having this in place meant that properties with the `[DataType(DataType.Date)]` attribute would automatically use this EditorTemplate when rendering an editor - I understand `[UIHint]` attributes can be used to the same end.)

<script src="https://gist.github.com/4529746.js?file=Date.cshtml"></script>

And finally I amended the `Create.cshtml` View (which perhaps more accurately might be called the Edit View?) to include a bit of JavaScript at the bottom to initialise any datepickers on the screen.

<script src="https://gist.github.com/4529746.js?file=Create.cshtml"></script>

Et voilà - it works!

![](https://4.bp.blogspot.com/-_SfaYN2dfuk/UO2JmrqO_gI/AAAAAAAAAZA/Y904hmwcqaI/s400/TwitterBootstrapDatepicker.png)

My thanks to [Eric Hexter](https://twitter.com/ehexter) and Stefan Petre for doing all the hard work!

## Still to do

I haven't really tested how this all fits together (if at all) with browsers running a non-English culture. There may still be a little tinkering require to get that working...
