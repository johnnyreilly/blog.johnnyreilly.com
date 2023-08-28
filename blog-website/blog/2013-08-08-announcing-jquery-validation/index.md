---
slug: announcing-jquery-validation
title: 'Announcing jQuery Validation Unobtrusive Native...'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'jQuery Validation Unobtrusive Native bridges data attributes and jQuery Validations native support. The ASP.Net MVC HTML extension is available on GitHub.'
---

I've been busy working on an open source project called **[jQuery Validation Unobtrusive Native](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native)**. [To see it in action take a look here](https://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/).

<!--truncate-->

## A Little Background

I noticed a little while ago that jQuery Validation was now providing native support for validation driven by HTML 5 data attributes. As you may be aware, Microsoft shipped [jquery.validate.unobtrusive.js](http://bradwilson.typepad.com/blog/2010/10/mvc3-unobtrusive-validation.html) back with MVC 3. ([I have written about it before.](../2012-08-06-jquery-unobtrusive-validation/index.md)) It provided a way to apply data model validations to the client side using a combination of jQuery Validation and HTML 5 data attributes.

The principal of this was and is fantastic. But since that time the jQuery Validation project has implemented its own support for driving validation unobtrusively (shipping with [jQuery Validation 1.11.0](http://jquery.bassistance.de/validate/changelog.txt)). I've been looking at a way to directly use the native support instead of jquery.validate.unobtrusive.js.

## So... What is jQuery Validation Unobtrusive Native?

jQuery Validation Unobtrusive Native is a collection of ASP.Net MVC HTML helper extensions. These make use of jQuery Validation's native support for validation driven by HTML 5 data attributes. The advantages of the native support over jquery.validate.unobtrusive.js are:

- Dynamically created form elements are parsed automatically. jquery.validate.unobtrusive.js does not support this whilst jQuery Validation does. [Take a look at a demo using Knockout.](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/AdvancedDemo/Knockout.html)
- jquery.validate.unobtrusive.js restricts how you use jQuery Validation. If you want to use showErrors or something similar then you may find that you need to go native (or at least you may find that significantly easier than working with the jquery.validate.unobtrusive.js defaults)...
- Send less code to your browser, make your browser to do less work and even get a (marginal) performance benefit .

This project intends to be a bridge between MVC's inbuilt support for driving validation from data attributes and jQuery Validation's native support for the same. This is achieved by hooking into the MVC data attribute creation mechanism and using it to generate the data attributes natively supported by jQuery Validation.

## Future Plans

So far the basic set of the HtmlHelpers and their associated unobtrusive mappings have been implemented. If any have been missed then let me know. As time goes by I intend to:

- fill in any missing gaps there may be
- maintain MVC 3, 4 (and when the time comes 5+) versions of this on Nuget
- not all data annotations generate client data attributes - if it makes sense I may look to implement some of these where it seems sensible. (eg the [MinLengthAttribute](http://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.minlengthattribute.aspx) annotation could be mapped to [minlength](http://jqueryvalidation.org/minlength-method/) validation...)
- get the unit test coverage to a good level and finally (and perhaps most importantly)
- create some really useful [demos and documentation](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/Demo.html).

Help is appreciated so feel free to pitch in! You can find the project on GitHub [here](http://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native)...
