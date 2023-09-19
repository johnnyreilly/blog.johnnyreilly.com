---
slug: twitterbootstrapmvc4-meet-bootstrap_14
title: 'Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...'
authors: johnnyreilly
tags: [globalize, javascript]
hide_table_of_contents: false
description: 'Learn how to internationalize ASP.NET web apps using Globalize and Bootstrap Datepicker in this developers comprehensive step by step guide.'
---

[Last time](../2013-01-09-twitterbootstrapmvc4-meet-bootstrap/index.md) I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation.

<!--truncate-->

I also discovered that Stefan Petre's Bootstrap Datepicker appears to have been abandoned. Andrew Rowls has taken it on and created a GitHub repository for it [here](https://github.com/eternicode/bootstrap-datepicker). Besides bug fixes he's also introduced the ability for the Bootstrap Datepicker to customised for different cultures.

Since these 2 subjects are linked I tackled them together and thought it might be worth writing up here. You can find the conclusion of my work in a GitHub repository I created [here](https://github.com/johnnyreilly/BootstrapMvcSample).

## Going global down in Acapulco

First step in internationalising any ASP.Net web app is adding the following to the `web.config`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.web>

    <!-- Other stuff here... -->

    <globalization
      culture="auto"
      uiCulture="auto"
      enableClientBasedCulture="true" />
  </system.web>

  <!-- ...and here -->

</configuration>
```

Then I pulled [Globalize](https://github.com/jquery/globalize) and the [Andrew Rowls fork of Bootstrap Datepicker](https://github.com/eternicode/bootstrap-datepicker) into the project (replacing Stefan's original assets). As well as this I pulled in the `jQuery.validate.globalize.js` extension [I wrote about here](../2012-09-06-globalize-and-jquery-validate/index.md). (This replaces some of the default jQuery Validate functionality for culture-specific functionality based on Globalize.) This extension depends on a meta tag that is generated using the following file (which also handles the serving up of the relevant JavaScript culture bundles, more of which shortly):

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Globalization;
using System.Linq;
using System.Web;

namespace System.Web.Mvc
{
    public static class GlobalizationHelpers
    {
        /// <summary>
        /// Taken from Scott Hanselman's blog post: http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx
        /// </summary>
        /// <typeparam name="t"></typeparam>
        /// <param name="htmlHelper"></param>
        /// <returns></returns>
        public static IHtmlString MetaAcceptLanguage<t>(this HtmlHelper<t> htmlHelper)
        {
            var acceptLanguage = HttpUtility.HtmlAttributeEncode(CultureInfo.CurrentUICulture.ToString());
            return new HtmlString(string.Format("<meta name=\"accept-language\" content=\"{0}\" />", acceptLanguage));
        }

        /// <summary>
        /// Return the JavaScript bundle for this users culture
        /// </summary>
        /// <typeparam name="t"></typeparam>
        /// <param name="htmlHelper"></param>
        /// <returns>a culture bundle that looks something like this: "~/js-culture.en-GB"</returns>
        public static string JsCultureBundle<t>(this HtmlHelper<t> htmlHelper)
        {
            return "~/js-culture." + CultureInfo.CurrentUICulture.ToString();
        }
    }
}
```

## Culture-specific script bundles

With all of my dependancies in place I was now ready to press on. Since both Globalize and the new Bootstrap Datepicker come with their own culture-specific JavaScript files it seemed a good idea to make use of ASP.Nets new bundling functionality. This I did here:

```cs
using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Globalization;
using System.IO;
using System.Linq;

namespace BootstrapSupport
{
    public class BootstrapBundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js").Include(
                "~/Scripts/jquery-*",
                "~/Scripts/globalize.js", //The Globalize library
                "~/Scripts/bootstrap.js",
                "~/Scripts/bootstrap-datepicker.js", //This is the brand new internationalised Bootstrap Datepicker
                "~/Scripts/jquery.validate.js",
                "~/Scripts/jquery.validate.unobtrusive.js",
                "~/Scripts/jquery.validate.unobtrusive-custom-for-bootstrap.js",
                "~/Scripts/jquery.validate.globalize.js" //My jQuery Validate extension which depends on Globalize
                ));

            //Create culture specific bundles which contain the JavaScript files that should be served for each culture
            foreach (var culture in CultureInfo.GetCultures(CultureTypes.AllCultures))
            {
                bundles.Add(new ScriptBundle("~/js-culture." + culture.Name).Include( //example bundle name would be "~/js-culture.en-GB"
                    DetermineCultureFile(culture, "~/Scripts/globalize-cultures/globalize.culture.{0}.js"),             //The Globalize locale-specific JavaScript file
                    DetermineCultureFile(culture, "~/Scripts/bootstrap-datepicker-locales/bootstrap-datepicker.{0}.js") //The Bootstrap Datepicker locale-specific JavaScript file
                ));
            }

            bundles.Add(new StyleBundle("~/content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-datepicker.css"
                ));

            bundles.Add(new StyleBundle("~/content/css-responsive").Include(
                "~/Content/bootstrap-responsive.css"
                ));
        }

        /// <summary>
        /// Given the supplied culture, determine the most appropriate Globalize culture script file that should be served up
        /// </summary>
        /// <param name="culture"></param>
        /// <param name="filePattern">a file pattern, eg "~/Scripts/globalize-cultures/globalize.culture.{0}.js"</param>
        /// <param name="defaultCulture">Default culture string to use (eg "en-GB") if one cannot be found for the supplied culture</param>
        /// <returns></returns>
        private static string DetermineCultureFile(CultureInfo culture,
            string filePattern,
            string defaultCulture = "en-GB" // I'm a Brit and this is my default
            )
        {
            //Determine culture - GUI culture for preference, user selected culture as fallback
            var regionalisedFileToUse = string.Format(filePattern, defaultCulture);

            //Try to pick a more appropriate regionalisation if there is one
            if (File.Exists(HttpContext.Current.Server.MapPath(string.Format(filePattern, culture.Name)))) //First try for a globalize.culture.en-GB.js style file
                regionalisedFileToUse = string.Format(filePattern, culture.Name);
            else if (File.Exists(HttpContext.Current.Server.MapPath(string.Format(filePattern, culture.TwoLetterISOLanguageName)))) //That failed; now try for a globalize.culture.en.js style file
                regionalisedFileToUse = string.Format(filePattern, culture.TwoLetterISOLanguageName);

            return regionalisedFileToUse;
        }

    }
}
```

The code above creates a script bundle for each culture when the application starts up. This script bundle contains the culture-specific Globalize and Bootstrap Datepicker JavaScript files. If further culture-specific components were added to the application it would make sense to include these here as well.

`_BootstrapLayout.basic.cshtml` has been amended to make use of the new bundles and also to include a meta tag that will used to drive regionalisation:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Existing head content goes here -->

    <!-- Added to the head to serve a meta tag like this: <meta name="accept-language" content="en-GB" /> -->
    @Html.MetaAcceptLanguage()

    <!-- Existing head content continues here -->
  </head>
  <body>
    <!-- Existing body content goes here -->

    <!-- Replaces the existing @Scripts.Render -->
    @Scripts.Render( "~/js", Html.JsCultureBundle() //Serves up the
    "~/js-culture.de-DE" bundle for example )

    <!-- Existing body content continues here -->
  </body>
</html>
```

To illustrate how this works, a German user running a machine with the de-DE culture would be served up the following 2 files:

- `globalize.culture.de-DE.js`
- `bootstrap-datepicker.de.js`

## Where have we got to?

With all this done we have now fixed the validation issues we were experiencing previously. This was done by including the Globalize library, the accept-language meta tag and the jQuery Validate Globalize extensions.

Besides this we've laid the groundwork for introducing internationalised datepickers by introducing Andrew Rowls fork of the Bootstrap Datepicker. That's what we'll do next...

## International Bootstrap Datepicker

The final steps of switching over to using a culture-specific date picker are achieved by making a change to the Scripts section in the `Create.cshtml` file. The existing (and very simple) section should be replaced with this:

```cs
@section Scripts {
<script type="text/javascript">
    var currentCulture = $("meta[name='accept-language']").prop("content"),
        language;
    // Set Globalize to the current culture driven by the meta tag (if any)
    if (currentCulture) {
        language = (currentCulture in $.fn.datepicker.dates)
            ? currentCulture //a language exists which looks like "zh-CN" so we'll use it
            : currentCulture.split("-")[0]; //we'll try for a language that looks like "de" and use it if it exists (otherwise it will fall back to the default)
    }
    //Initialise any date pickers
    $('.datepicker').datepicker({ language: language });
</script>
}
```

The script above takes the region from the accept-language meta tag and attempts to look up an associated "language" for the Bootstrap Datepicker. If it finds one it uses it, if not then the default language of "en" / English will be used.

## Summary

In this post we:

1. fixed the validation issues we'd introduced by marrying up Twitter.Bootstrap.MVC4 and the Bootstrap Datepicker
2. switched over to using the Andrew Rowls fork of Bootstrap Datepicker and made use of the internationalisation functionality it exposes.
