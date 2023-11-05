---
slug: jquery-validate-native-unobtrusive-validation
title: 'jQuery Validation - Native Unobtrusive Validation Support!'
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'Use HTML5 data attributes with jQuery Validation to simplify code and achieve validation unobtrusively. Ideal for dynamically added DOM elements.'
---

Did you know that jQuery Validation natively supports the use of [HTML 5 data attributes](http://ejohn.org/blog/html-5-data-attributes/) to drive validation unobtrusively? Neither did I - I haven't seen any documentation for it. However, I was reading the [jQuery Validation test suite](https://github.com/jzaefferer/jquery-validation/blob/master/test/index.html) and that's what I spotted being used in some of the tests.

<!--truncate-->

I was quite keen to give it a try as I've found the Microsoft produced [unobtrusive extensions](http://nuget.org/packages/jQuery.Validation.Unobtrusive/) both fantastic and frustrating in nearly equal measure. Fantastic because they work and they're [integrated nicely with MVC](../2012-08-06-jquery-unobtrusive-validation/index.md). Frustrating, because they don't allow you do all the things that jQuery Validate in the raw does.

So when I realised that there was native alternative available I was delighted. Enough with the fine words - what we want is a demo:

<iframe src="https://htmlpreview.github.io/?http://gist.github.com/johnnyreilly/5867188/raw/272b1b42f4773fe6df843550b3e3d457013522a8/Demo.html" width="100%" height="575"></iframe>

Not particularly exciting? Not noticably different to any other jQuery Validate demo you've ever seen? Fair enough. Now look at the source:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link
      href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css"
      rel="stylesheet"
    />
    <style>
      form {
        padding: 10px;
      }
      .error {
        color: red;
      }
    </style>
  </head>
  <body>
    <form>
      <label for="RequiredDateDemo"
        >A date is required (eg "15 June 2012"):</label
      >
      <input
        data-msg-date="The field RequiredDateDemo must be a date."
        data-msg-required="The RequiredDateDemo field is required."
        data-rule-date="true"
        data-rule-required="true"
        id="RequiredDateDemo"
        name="RequiredDateDemo"
        type="text"
        value=""
      />

      <hr />

      <label for="StringLengthAndRequiredDemo"
        >A string is required between 5 and 10 characters long:</label
      >
      <input
        data-msg-maxlength="The field StringLengthAndRequiredDemo must be a string with a minimum length of 5 and a maximum length of 10."
        data-msg-minlength="The field StringLengthAndRequiredDemo must be a string with a minimum length of 5 and a maximum length of 10."
        data-msg-required="The StringLengthAndRequiredDemo field is required."
        data-rule-maxlength="10"
        data-rule-minlength="5"
        data-rule-required="true"
        id="StringLengthAndRequiredDemo"
        name="StringLengthAndRequiredDemo"
        type="text"
        value=""
      />

      <hr />

      <label for="RangeAndNumberDemo"
        >Must be a number between -20 and 40:</label
      >
      <input
        data-msg-number="The field RangeAndNumberDemo must be a number."
        data-msg-range="The field RangeAndNumberDemo must be between -20 and 40."
        data-rule-number="true"
        data-rule-range="[-20,40]"
        id="RangeAndNumberDemo"
        name="RangeAndNumberDemo"
        type="text"
        value="-21"
      />

      <hr />

      <label for="RangeAndNumberDemo">An option must be selected:</label>
      <select
        data-msg-required="The DropDownRequiredDemo field is required."
        data-rule-required="true"
        id="DropDownRequiredDemo"
        name="DropDownRequiredDemo"
      >
        <option value="">Please select</option>
        <option value="An Option">An Option</option>
      </select>

      <hr />

      <button type="submit">Validate</button>
    </form>

    <script
      src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.js"
      type="text/javascript"
    ></script>
    <script
      src="http://ajax.aspnetcdn.com/ajax/jQuery.validate/1.11.1/jquery.validate.js"
      type="text/javascript"
    ></script>
    <script type="text/javascript">
      var $form = $('form');
      $form.validate();
      $form.submit(function (event) {
        if ($form.validate().valid()) {
          event.preventDefault();

          alert('Valid!');
        }
      });
    </script>
  </body>
</html>
```

Do you see what I see? Data attributes (both `data-rule-*` and `data-msg-*`s) being used to drive the validation unobtrusively! And if you look at the JavaScript files referenced you will see \***no sign**\* of `jquery.validate.unobtrusive.js` \- this is all raw jQuery Validate. Nothing else.

## Why is this useful?

First of all, I'm of the opinion that it makes intuitive sense to have the validation information relevant to various DOM elements stored directly with those DOM elements. There will be occasions where you may not want to use this approach but, in the main, I think it's very sensible. It saves you bouncing back and forth between your HTML and your JavaScript and it means when you read the HTML you know there and then what validation applies to your form.

I think this particularly applies when it comes to adding elements to the DOM dynamically. If I use data attributes to drive my validation and I dynamically add elements then jQuery Validate will parse the validation rules for me. I won't have to subsequently apply validation to those new elements once they've been added to the DOM. 1 step instead of 2. It makes for simpler code and that's always a win.

## Wrapping up

For myself I'm in the early stages of experimenting with this but I thought it might be good to get something out there to show how this works. If anyone knows of any official documentation for this please do let me know - I'd love to have a read of it. Maybe it's been out there all along and it's just my Googling powers are inadequate.

## Updated 09/08/2012

If you're using ASP.Net MVC 3+ and this post has been of interest to you then you might want to take a look at [this](../2013-08-08-announcing-jquery-validation/index.md).
