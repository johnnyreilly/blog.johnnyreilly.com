---
slug: rolling-your-own-confirm-mechanism
title: 'Rolling your own confirm mechanism using Promises and jQuery UI'
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'Learn how to create a custom confirm dialog using jQuery UI’s dialog and promises. The custom dialog is more configurable than the default `window.confirm`.'
---

We're here to talk about the [confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window.confirm) dialog. Or, more specifically, how we can make our own confirm dialog.

<!--truncate-->

JavaScript in the browser has had the `window.confirm` method for the longest time. This method takes a string as an argument and displays it in the form of a dialog, giving the user the option to click on either an "OK" or a "Cancel" button. If the user clicks "OK" the method returns `true`, if the user clicks "Cancel" the method returns `false`.

`window.confirm` is wonderful in one way - it has a simple API which is easy to grok. But regardless of the browser, `window.confirm` is always as ugly as sin. Look at the first picture in this blog post; hideous. Or, put more dispassionately, it's not terribly configurable; want to change the button text? You can't. Want to change the styling of the dialog? You can't. You get the picture.

## Making confirm 2.0

[jQuery UI's dialog](http://jqueryui.com/dialog/#modal-confirmation) has been around for a long time. I've been using it for a long time. But, if you look at the API, you'll see it works in a very different way to `window.confirm` \- basically it's all about the callbacks. My intention was to create a mechanism which allowed me to prompt the user with jQuery UI's tried and tested dialog, but to expose it in a way that embraced the simplicity of the `window.confirm` API.

How to do this? Promises! To quote [Martin Fowler](http://martinfowler.com/bliki/JavascriptPromise.html) (makes you look smart when you do that):

> _"In Javascript, promises are objects which represent the pending result of an asynchronous operation. You can use these to schedule further activity after the asynchronous operation has completed by supplying a callback."_

When we show our dialog we are in asynchronous land; waiting for the user to click "OK" or "Cancel". When they do, we need to act on their response. So if our custom confirm dialog returns a promise of a boolean (`true` when the users click "OK", `false` otherwise) then that should be exactly what we need. I'm going to use [Q](https://github.com/kriskowal/q) for promises. (Nothing particularly special about Q - it's one of many [Promises / A+](https://github.com/promises-aplus/promises-spec/blob/master/implementations/index.md) compliant implementations available.)

Here's my custom confirm dialog:

```js
/**
 * Show a "confirm" dialog to the user (using jQuery UI's dialog)
 *
 * @param {string} message The message to display to the user
 * @param {string} okButtonText OPTIONAL - The OK button text, defaults to "Yes"
 * @param {string} cancelButtonText OPTIONAL - The Cancel button text, defaults to "No"
 * @param {string} title OPTIONAL - The title of the dialog box, defaults to "Confirm..."
 * @returns {Q.Promise<boolean>} A promise of a boolean value
 */
function confirmDialog(message, okButtonText, cancelButtonText, title) {
  okButtonText = okButtonText || 'Yes';
  cancelButtonText = cancelButtonText || 'No';
  title = title || 'Confirm...';

  var deferred = Q.defer();
  $('<div title="' + title + '">' + message + '</div>').dialog({
    modal: true,
    buttons: [
      {
        // The OK button
        text: okButtonText,
        click: function () {
          // Resolve the promise as true indicating the user clicked "OK"
          deferred.resolve(true);
          $(this).dialog('close');
        },
      },
      {
        // The Cancel button
        text: cancelButtonText,
        click: function () {
          $(this).dialog('close');
        },
      },
    ],
    close: function (event, ui) {
      // Destroy the jQuery UI dialog and remove it from the DOM
      $(this).dialog('destroy').remove();

      // If the promise has not yet been resolved (eg the user clicked the close icon)
      // then resolve the promise as false indicating the user did *not* click "OK"
      if (deferred.promise.isPending()) {
        deferred.resolve(false);
      }
    },
  });

  return deferred.promise;
}
```

What's happening here? Well first of all, if `okButtonText`, `cancelButtonText` or `title` have false-y values then they are initialised to defaults. Next, we create a deferred object with Q. Then we create our modal dialog using jQuery UI. There's a few things worth noting about this:

- We're not dependent on the dialog markup being in our HTML from the off. We create a brand new element which gets added to the DOM when the dialog is created. (I draw attention to this as the jQuery UI dialog documentation doesn't mention that you can use this approach - and frankly I prefer it.)
- The "OK" and "Cancel" buttons are initialised with the string values stored in `okButtonText` and `cancelButtonText`. So by default, "Yes" and "No".
- If the user clicks the "OK" button then the promise is resolved with a value of `true`.
- If the dialog closes and the promise has not been resolved then the promise is resolved with a value of `false`. This covers people clicking on the "Cancel" button as well as closing the dialog through other means.

Finally we return the promise from our deferred object.

## Going from `window.confirm` to `confirmDialog`

It's very simple to move from using `window.confirm` to `confirmDialog`. Take this example:

```js
if (window.confirm('Are you sure?')) {
  // Do something
}
```

Becomes:

```js
confirmDialog('Are you sure?').then(function (confirmed) {
  if (confirmed) {
    // Do something
  }
});
```

There's no more to it than that.

## And finally a demo...

With the JSFiddle below you can create your own custom dialogs and see the result of clicking on either the "OK" or "Cancel" buttons.

<iframe width="100%" height="500" src="https://jsfiddle.net/johnny_reilly/ARWL5/embedded/result,js,html,css" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
