---
slug: migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native
title: 'Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native'
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'Migrating from jquery.validation.unobtrusive.js to jQuery.Validation.Unobtrusive.Native is easy, with only minor tweaks to HTML and JS needed.'
---

So, you're looking at [jQuery.Validation.Unobtrusive.Native](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native). You're thinking to yourself "Yeah, I'd really like to use the native unobtrusive support in jQuery Validation. But I've already got this app which is using [jquery.validate.unobtrusive.js](https://www.nuget.org/packages/jQuery.Validation.Unobtrusive/) \- actually how easy is switching over?" Well I'm here to tell you that it's pretty straightforward - here's a walkthrough of how it might be done.

<!--truncate-->

## I need something to migrate

So let's File > New Project ourselves a new MVC 4 application using the Internet Application template. I've picked this template as I know it ships with account registration / login screens in place which make use of jquery.validate.unobtrusive.js. To demo this just run the project, click the "Log in" link and then click the "Log in" button.

What you've just witnessed is jquery.validate.unobtrusive.js doing its thing. Both the `UserName` and `Password` properties on the `LoginModel` are decorated with the `Required` data annotation which, in the above scenario, causes the validation to be triggered on the client thanks to MVC rendering data attributes in the HTML which jquery.validate.unobtrusive.js picks up on. The question is, how can we take the log in screen above and migrate it across to to using jQuery.Validation.Unobtrusive.Native?

## Hit me up NuGet!

Time to dive into NuGet and install jQuery.Validation.Unobtrusive.Native. We'll install the MVC 4 version using this command:

```shell
Install-Package jQuery.Validation.Unobtrusive.Native.MVC4
```

What has this done to my project? Well 2 things

1. It's upgraded jQuery Validation ([jquery.validate.js](http://jqueryvalidation.org/)) from v1.10.0 (the version that is currently part of the MVC 4 template) to v1.11.1 (the latest and greatest jQuery Validation as of the time of writing)
2. It's added a reference to the jQuery.Validation.Unobtrusive.Native.MVC4 assembly, like so:

In case you were wondering, doing this hasn't broken the existing jquery.validate.unobtrusive.js - if you head back to the Log in screen you'll still see the same behaviour as before.

## Migrating...

We need to switch our TextBox and Password helpers over to using jQuery.Validation.Unobtrusive.Native, which we achieve by simply passing a second argument of `true` to `useNativeUnobtrusiveAttributes`. So we go from this:

```cs
// ...
@Html.TextBoxFor(m => m.UserName)
// ...
@Html.PasswordFor(m => m.Password)
// ...
```

To this:

```cs
// ...
@Html.TextBoxFor(m => m.UserName, true)
// ...
@Html.PasswordFor(m => m.Password, true)
// ...
```

With these minor tweaks in place the natively supported jQuery Validation data attributes will be rendered into the textbox / password elements instead of the jquery.validate.unobtrusive.js ones.

Next lets do the JavaScript. If you take a look at the bottom of the `Login.cshtml` view you'll see this:

```cs
@section Scripts {
    @Scripts.Render("~/bundles/jqueryval")
}
```

Which renders the following scripts:

```html
<script src="/Scripts/jquery.unobtrusive-ajax.js"></script>
<script src="/Scripts/jquery.validate.js"></script>
<script src="/Scripts/jquery.validate.unobtrusive.js"></script>
```

In our brave new world we're only going to need jquery.validate.js - so let's create ourselves a new bundle in `BundleConfig.cs` which only contains that single file:

```cs
bundles.Add(new ScriptBundle("~/bundles/jqueryvalnative")
    .Include("~/Scripts/jquery.validate.js"));
```

To finish off our migrated screen we need to do 2 things. First we need to switch over the `Login.cshtml` view to only render the jquery.validate.js script (in the form of our new bundle). Secondly, the other thing that jquery.validate.unobtrusive.js did was to trigger validation for the current form. So we need to do that ourselves now. So our finished Scripts section looks like this:

```html
@section Scripts { @Scripts.Render("~/bundles/jqueryvalnative")
<script>
  $('form').validate();
</script>
}
```

Which renders the following script:

```html
<script src="/Scripts/jquery.validate.js"></script>
<script>
  $('form').validate();
</script>
```

And, pretty much, that's it. If you run the app now and go to the Log in screen and try to log in without credentials.

Which is functionally exactly the same as previously. The eagle eyed will notice some styling differences but that's all it comes down to really; style. And if you were so inclined you could easily style this up as you liked using CSS and the options you can pass to jQuery Validation (in fact a quick rummage through jquery.validate.unobtrusive.js should give you everything you need).

## Rounding off

Before I sign off I'd like to illustrate how little we've had to change the code to start using jQuery.Validation.Unobtrusive.Native.

As you see, it takes very little effort to migrate from one approach to the other. And it's \***your**\* choice. If you want to have one screen that uses jQuery.Validation.Unobtrusive.Native and one screen that uses jquery.validation.unobtrusive.js then you can! Including jQuery.Validation.Unobtrusive.Native in your project gives you the **option** to use it. It doesn't force you to, you can do so as you need to and when you want to. It's down to you.
