---
slug: globalize-and-jquery-validate
title: 'Globalize and jQuery Validation'
authors: johnnyreilly
tags: [globalize, asp.net, jquery]
hide_table_of_contents: false
description: 'A jQuery plugin has been replaced by Globalize and makes locale specific number and date formatting easy with Javascript; a tutorial on how to use it.'
---

## Updated 05/10/2015

If you're after a version of this that works with Globalize 1.x then take a look [here](../2015-10-05-jquery-validation-globalize-hits-10/index.md).

## Updated 27/08/2013

To make it easier for people to use the approach detailed in this post I have created a repository for `jquery.validate.globalize.js` on GitHub [here](https://github.com/johnnyreilly/jquery-validation-globalize).

This is also available as a nuget package [here](https://www.nuget.org/packages/jQuery.Validation.Globalize/).

To see a good demo take a look [here](http://jqueryvalidationunobtrusivenative.azurewebsites.net/AdvancedDemo/Globalize).

<!--truncate-->

## Background

[I've written before about a great little library called Globalize](../2012-05-07-globalizejs-number-and-date/index.md) which makes locale specific number / date formatting simple within JavaScript. And I've just stumbled upon an [old post written by Scott Hanselman about the business of Globalisation / Internationalisation / Localisation within ASP.NET](http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx). It's a great post and I recommend reading it (I'm using many of the approaches he discusses).

## jQuery Global is dead... Long live Globalize!

However, there's one tweak I would make to Scotts suggestions and that's to use Globalize in place of the jQuery Global plugin. The jQuery Global plugin has now effectively been reborn as Globalize (with no dependancy on jQuery). As far as I can tell jQuery Global is now disappearing from the web - certainly the link in Scotts post is dead now at least. I've ~~ripped off~~ been inspired by the "Globalized jQuery Unobtrusive Validation" section of Scotts article and made `jquery.validate.globalize.js`.

And for what it's worth `jquery.validate.globalize.js` applies equally to standard jQuery Validation as well as to jQuery Unobtrusive Validation. I say that as the above JavaScript is effectively a monkey patch to the number / date / range / min / max methods of jQuery.validate.js which forces these methods to use Globalize's parsing support instead.

Here's the JavaScript:

```js
(function ($, Globalize) {
  // Clone original methods we want to call into
  var originalMethods = {
    min: $.validator.methods.min,
    max: $.validator.methods.max,
    range: $.validator.methods.range,
  };

  // Tell the validator that we want numbers parsed using Globalize

  $.validator.methods.number = function (value, element) {
    var val = Globalize.parseFloat(value);
    return this.optional(element) || $.isNumeric(val);
  };

  // Tell the validator that we want dates parsed using Globalize

  $.validator.methods.date = function (value, element) {
    var val = Globalize.parseDate(value);
    return this.optional(element) || val;
  };

  // Tell the validator that we want numbers parsed using Globalize,
  // then call into original implementation with parsed value

  $.validator.methods.min = function (value, element, param) {
    var val = Globalize.parseFloat(value);
    return originalMethods.min.call(this, val, element, param);
  };

  $.validator.methods.max = function (value, element, param) {
    var val = Globalize.parseFloat(value);
    return originalMethods.max.call(this, val, element, param);
  };

  $.validator.methods.range = function (value, element, param) {
    var val = Globalize.parseFloat(value);
    return originalMethods.range.call(this, val, element, param);
  };
})(jQuery, Globalize);

$(document).ready(function () {
  // Set Globalize to the current culture driven by the html lang property
  var currentCulture = $('html').prop('lang');
  if (currentCulture) {
    Globalize.culture(currentCulture);
  }
});
```

The above script does 2 things. Firstly it monkey patches jquery.validate.js to make use of Globalize.js number and date parsing in place of the defaults. Secondly it initialises Globalize to relevant current culture driven by the `html lang` property. So if the html tag looked like this:

```html
<html lang="de-DE">
  ...
</html>
```

Then Globalize would be initialised with the "de-DE" culture assuming that culture was available and had been served up to the client. (By the way, the Globalize initialisation logic has only been placed in the code above to demonstrate that Globalize needs to be initialised to the culture. It's more likely that this initialisation step would sit elsewhere in a "proper" app.)

## Wait, where's `html lang` getting set?

In Scott's article he created a `MetaAcceptLanguage` helper to generate a META tag like this: `&lt;meta name="accept-language" content="en-GB" /&gt;` which he used to drive Globalizes specified culture.

Rather than generating a meta tag I've chosen to use the `lang` attribute of the `html` tag to specify the culture. I've chosen to do this as it's more in line with the [W3C spec](http://www.w3.org/TR/i18n-html-tech-lang/#ri20030510.102829377). But it should be noted this is just a different way of achieving exactly the same end.

So how's it getting set? Well, it's no great shakes; in my `_Layout.cshtml` file my html tag looks like this:

```html
<html lang="@System.Globalization.CultureInfo.CurrentUICulture.Name"></html>
```

And in my `web.config` I have following setting set:

```xml
<configuration>
  <system.web>
    <globalization culture="auto" uiCulture="auto" />
    <!--- Other stuff.... -->
  </system.web>
</configuration>
```

With both of these set this means I get `&lt;html lang="de-DE"&gt;` or `&lt;html lang="en-GB"&gt;` etc. depending on a users culture.

## Serving up the right Globalize culture files

In order that I send the correct Globalize culture to the client I've come up with this static class which provides the user with the relevant culture URL (falling back to the en-GB culture if it can't find one based your culture):

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.IO;
using System.Globalization;

namespace My.Helpers
{
    /// <summary>
    /// Static class that is a store for commonly used filenames
    /// (so if the files are updated they only need to be amended in a single place)
    /// </summary>
    public static class GlobalizeUrls
    {

        /// <summary>
        /// URL for Globalize: https://github.com/jquery/globalize
        /// </summary>
        public static string Globalize { get { return "~/Scripts/globalize.js"; } }

        /// <summary>
        /// URL for the specific Globalize culture
        /// </summary>
        public static string GlobalizeCulture
        {
            get
            {
                //Determine culture - GUI culture for preference, user selected culture as fallback
                var currentCulture = CultureInfo.CurrentCulture;
                var filePattern = "~/scripts/globalize/globalize.culture.{0}.js";
                var regionalisedFileToUse = string.Format(filePattern, "en-GB"); //Default localisation to use

                //Try to pick a more appropriate regionalisation
                if (File.Exists(HostingEnvironment.MapPath(string.Format(filePattern, currentCulture.Name)))) //First try for a globalize.culture.en-GB.js style file
                    regionalisedFileToUse = string.Format(filePattern, currentCulture.Name);
                else if (File.Exists(HostingEnvironment.MapPath(string.Format(filePattern, currentCulture.TwoLetterISOLanguageName)))) //That failed; now try for a globalize.culture.en.js style file
                    regionalisedFileToUse = string.Format(filePattern, currentCulture.TwoLetterISOLanguageName);

                return regionalisedFileToUse;
            }
        }
    }
}
```

## Putting it all together

To make use of all of this together you'll need to have the `html lang` attribute set as described earlier and some scripts output in your layout page like this:

```html
<script src="@Url.Content("~/Scripts/jquery.js")" type="text/javascript"></script>
<script src="@Url.Content(GlobalizeUrls.Globalize)" type="text/javascript"></script>
<script src="@Url.Content(GlobalizeUrls.GlobalizeCulture)" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/jquery.validate.js")" type="text/javascript"></script>
<script src="@Url.Content("~/scripts/jquery.validate.globalize.js")" type="text/javascript"></script>

@* Only serve the following script if you need it: *@
<script src="@Url.Content("~/scripts/jquery.validate.unobtrusive.js")" type="text/javascript"></script>
```

Which will render something like this:

```html
<script src="/Scripts/jquery.js" type="text/javascript"></script>
<script src="/Scripts/globalize.js" type="text/javascript"></script>
<script
  src="/scripts/globalize/globalize.culture.en-GB.js"
  type="text/javascript"
></script>
<script src="/Scripts/jquery.validate.js" type="text/javascript"></script>
<script
  src="/Scripts/jquery.validate.globalize.js"
  type="text/javascript"
></script>
<script
  src="/Scripts/jquery.validate.unobtrusive.js"
  type="text/javascript"
></script>
```

This will load up jQuery, Globalize, your Globalize culture, jQuery Validate, jQuery Validates unobtrusive extensions (which you don't need if you're not using them) and the jQuery Validate Globalize script which will set up culture aware validation.

Finally and just to re-iterate, it's highly worthwhile to give [Scott Hanselman's original article a look](http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx). Most all the ideas in here were taken wholesale from him!
