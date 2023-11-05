---
slug: using-bootstrap-tooltips-to-display
title: 'Using Bootstrap Tooltips to display jQuery Validation error messages'
authors: johnnyreilly
tags: [javascript, jquery]
hide_table_of_contents: false
description: 'Using tooltips can be a better approach than displaying validation messages next to the element being validated in jQuery Validation.'
---

I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?

<!--truncate-->

## Tooltips to the rescue!

I was chatting to [Marc Talary](https://plus.google.com/u/0/116859810359377785616/posts) about this and he had the bright idea of using tooltips to display the error messages. Tooltips would allow the existing presentation of the form to remain as is whilst still displaying the messages to the users. Brilliant idea!

After a certain amount of fiddling I came up with a fairly solid mechanism for getting jQuery Validation to display error messages as tooltips which I'll share here. It's worth saying that for the application that Marc and I were working on we already had [jQuery UI](http://jqueryui.com/) in place and so we decided to use the [jQuery UI tooltip](http://jqueryui.com/tooltip/). This example will use the [Bootstrap tooltip](http://getbootstrap.com/javascript/#tooltips) instead. As much as anything else this demonstrates that you could swap out the tooltip mechanism here with any of your choosing.

<iframe src="https://htmlpreview.github.io/?https://gist.github.com/johnnyreilly/5867188/raw/2543a12fbd5c0aaad1da6793b7a7437492be3baf/DemoTooltip.html" width="100%" height="350"></iframe>

Beautiful isn't it? Now look at the source:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link
      href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css"
      rel="stylesheet"
    />
    <style>
      form {
        padding: 10px;
      }
      .error {
        border: 1px solid #b94a48 !important;
        background-color: #fee !important;
      }
    </style>
  </head>
  <body>
    <form>
      <div class="row">
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
      </div>

      <div class="row">
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
      </div>

      <div class="row">
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
      </div>

      <div class="row">
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
      </div>

      <div class="row">
        <button type="submit">Validate</button>
      </div>
    </form>

    <script
      src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.js"
      type="text/javascript"
    ></script>
    <script
      src="//ajax.aspnetcdn.com/ajax/jQuery.validate/1.11.1/jquery.validate.js"
      type="text/javascript"
    ></script>
    <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
    <script type="text/javascript">
      $('form').validate({
        showErrors: function (errorMap, errorList) {
          // Clean up any tooltips for valid elements
          $.each(this.validElements(), function (index, element) {
            var $element = $(element);

            $element
              .data('title', '') // Clear the title - there is no error associated anymore
              .removeClass('error')
              .tooltip('destroy');
          });

          // Create new tooltips for invalid elements
          $.each(errorList, function (index, error) {
            var $element = $(error.element);

            $element
              .tooltip('destroy') // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
              .data('title', error.message)
              .addClass('error')
              .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
          });
        },

        submitHandler: function (form) {
          alert('This is a valid form!');
        },
      });
    </script>
  </body>
</html>
```

All the magic is in the JavaScript, specifically the `showErrors` function that's passed as an option to jQuery Validation. Enjoy!
