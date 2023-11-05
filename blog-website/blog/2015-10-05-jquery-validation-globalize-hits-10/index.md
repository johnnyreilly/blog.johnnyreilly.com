---
slug: jquery-validation-globalize-hits-10
title: 'jQuery Validation Globalize hits 1.0'
authors: johnnyreilly
tags: [globalize, jquery]
hide_table_of_contents: false
description: 'jQuery Validation Globalize plugin now supports Globalize 1.x, with minor code changes. Users can customize date parsing format.'
---

This is just a quick post - the tl;dr is this: jQuery Validation Globalize has been ported to Globalize 1.x. Yay! In one of those twists of fate I'm not actually using this plugin in my day job anymore but I thought it might be useful to other people. So here you go. You can read more about this plugin in an [older post](../2012-09-06-globalize-and-jquery-validate/index.md) and you can see a demo of it in action [here](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/AdvancedDemo/Globalize.html).

<!--truncate-->

The code did not change drastically - essentially it was just a question of swapping `parseFloat` for `parseNumber` and `parseDate` for a slightly different `parseDate`. So, we went from this:

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
    return this.optional(element) || val instanceof Date;
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
```

To this:

```js
(function ($, Globalize) {
  // Clone original methods we want to call into
  var originalMethods = {
    min: $.validator.methods.min,
    max: $.validator.methods.max,
    range: $.validator.methods.range,
  };

  // Globalize options - initially just the date format used for parsing
  // Users can customise this to suit them
  $.validator.methods.dateGlobalizeOptions = {
    dateParseFormat: { skeleton: 'yMd' },
  };

  // Tell the validator that we want numbers parsed using Globalize
  $.validator.methods.number = function (value, element) {
    var val = Globalize.parseNumber(value);
    return this.optional(element) || $.isNumeric(val);
  };

  // Tell the validator that we want dates parsed using Globalize
  $.validator.methods.date = function (value, element) {
    var val = Globalize.parseDate(
      value,
      $.validator.methods.dateGlobalizeOptions.dateParseFormat,
    );
    return this.optional(element) || val instanceof Date;
  };

  // Tell the validator that we want numbers parsed using Globalize,
  // then call into original implementation with parsed value

  $.validator.methods.min = function (value, element, param) {
    var val = Globalize.parseNumber(value);
    return originalMethods.min.call(this, val, element, param);
  };

  $.validator.methods.max = function (value, element, param) {
    var val = Globalize.parseNumber(value);
    return originalMethods.max.call(this, val, element, param);
  };

  $.validator.methods.range = function (value, element, param) {
    var val = Globalize.parseNumber(value);
    return originalMethods.range.call(this, val, element, param);
  };
})(jQuery, Globalize);
```

All of which is pretty self-explanatory. The only thing I'd like to draw out is that Globalize 0.1.x didn't force you to specify a date parsing format and, as I recall, would attempt various methods of parsing. For that reason jQuery Validation Globalize 1.0 exposes a `$.validator.methods.dateGlobalizeOptions` which allows you to specify the data parsing format you want to use. This means, should you be using a different format than the out of the box one then you can tweak it like so:

```js
$.validator.methods.dateGlobalizeOptions.dateParseFormat = // your data parsing format goes here...
```

Theoretically, this functionality could be tweaked to allow the user to specify multiple possible date parsing formats to attempt. I'm not certain if that's a good idea though, so it remains unimplemented for now.
