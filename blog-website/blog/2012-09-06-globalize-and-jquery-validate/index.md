---
slug: globalize-and-jquery-validate
title: 'Globalize and jQuery Validation'
authors: johnnyreilly
tags: [asp.net mvc, Globalize, jQuery Validation]
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
    <!
```
