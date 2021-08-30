---
title: "Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on..."
authors: johnnyreilly
tags: [Internationalization, Twitter.Bootstrap.MVC4, Globalize JS, Twitter Bootstrap]
hide_table_of_contents: false
---
[Last time](http://icanmakethiswork.blogspot.co.uk/2013/01/twitterbootstrapmvc4-meet-bootstrap.html) I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation.

 I also discovered that Stefan Petre's Bootstrap Datepicker appears to have been abandoned. Andrew Rowls has taken it on and created a GitHub repository for it [here](https://github.com/eternicode/bootstrap-datepicker). Besides bug fixes he's also introduced the ability for the Bootstrap Datepicker to customised for different cultures.

Since these 2 subjects are linked I tackled them together and thought it might be worth writing up here. You can find the conclusion of my work in a GitHub repository I created [here](https://github.com/johnnyreilly/BootstrapMvcSample).

## Going global down in Acapulco

First step in internationalising any ASP.Net web app is adding the following to the `web.config`:

<script src="https://gist.github.com/4528994.js?file=web.config"></script>

Then I pulled [Globalize](https://github.com/jquery/globalize) and the [Andrew Rowls fork of Bootstrap Datepicker](https://github.com/eternicode/bootstrap-datepicker) into the project (replacing Stefan's original assets). As well as this I pulled in the `jQuery.validate.globalize.js` extension [I wrote about here](http://icanmakethiswork.blogspot.co.uk/2012/09/globalize-and-jquery-validate.html). (This replaces some of the default jQuery Validate functionality for culture-specific functionality based on Globalize.) This extension depends on a meta tag that is generated using the following file (which also handles the serving up of the relevant JavaScript culture bundles, more of which shortly):

<script src="https://gist.github.com/4528994.js?file=GlobalizationHelpers.cs"></script>

## Culture-specific script bundles

With all of my dependancies in place I was now ready to press on. Since both Globalize and the new Bootstrap Datepicker come with their own culture-specific JavaScript files it seemed a good idea to make use of ASP.Nets new bundling functionality. This I did here:

<script src="https://gist.github.com/4528994.js?file=BootstrapBundleConfig.cs"></script>

The code above creates a script bundle for each culture when the application starts up. This script bundle contains the culture-specific Globalize and Bootstrap Datepicker JavaScript files. If further culture-specific components were added to the application it would make sense to include these here as well.

`_BootstrapLayout.basic.cshtml` has been amended to make use of the new bundles and also to include a meta tag that will used to drive regionalisation:

<script src="https://gist.github.com/4528994.js?file=_BootstrapLayout.basic.cshtml"></script>

To illustrate how this works, a German user running a machine with the de-DE culture would be served up the following 2 files:

- `globalize.culture.de-DE.js`
- `bootstrap-datepicker.de.js`



## Where have we got to?

With all this done we have now fixed the validation issues we were experiencing previously. This was done by including the Globalize library, the accept-language meta tag and the jQuery Validate Globalize extensions.

Besides this we've laid the groundwork for introducing internationalised datepickers by introducing Andrew Rowls fork of the Bootstrap Datepicker. That's what we'll do next...

## International Bootstrap Datepicker

The final steps of switching over to using a culture-specific date picker are achieved by making a change to the Scripts section in the `Create.cshtml` file. The existing (and very simple) section should be replaced with this:

<script src="https://gist.github.com/4528994.js?file=Create.cshtml"></script>

The script above takes the region from the accept-language meta tag and attempts to look up an associated "language" for the Bootstrap Datepicker. If it finds one it uses it, if not then the default language of "en" / English will be used.

## Summary

In this post we:

1. fixed the validation issues we'd introduced by marrying up Twitter.Bootstrap.MVC4 and the Bootstrap Datepicker
2. switched over to using the Andrew Rowls fork of Bootstrap Datepicker and made use of the internationalisation functionality it exposes.




