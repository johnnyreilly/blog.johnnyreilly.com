---
slug: knockout-globalize-valuenumber-binding
title: 'Knockout + Globalize = valueNumber Binding Handler'
authors: johnnyreilly
tags: [globalize]
hide_table_of_contents: false
description: 'Learn how to use Globalize and Knockout to create a "valueNumber" binding handler that makes numeric validation and localization easy.'
---

I’ve long used [Globalize](https://github.com/jquery/globalize/) for my JavaScript number formatting / parsing needs. In a current project I’m using Knockout for the UI. When it came to data-binding numeric values none of the default binding handlers seemed appropriate. What I wanted was a binding handler that:

<!--truncate-->

1. Was specifically purposed for dealing with numeric values
2. Handled the parsing / formatting for the current locale (and I naturally intended to use Globalize for this purpose)

Like so much development we start by standing on the shoulders of giants. In this case it’s the fantastic [Ryan Niemeyer](https://twitter.com/RPNiemeyer) who put up a [post on StackOverflow](http://stackoverflow.com/a/12647270/761388) that got me on the right track.

Essentially his approach provides an “interceptor” mechanism that allows you to validate numeric data entry on input and format numeric data going out as well. Very nice. Into this I plugged Globalize to handle the parsing and formatting. I ended up with the “valueNumber” binding handler:

```js
ko.bindingHandlers.valueNumber = {
  init: function (
    element,
    valueAccessor,
    allBindingsAccessor,
    viewModel,
    bindingContext,
  ) {
    /**
     * Adapted from the KO hasfocus handleElementFocusChange function
     */
    function elementIsFocused() {
      var isFocused = false,
        ownerDoc = element.ownerDocument;
      if ('activeElement' in ownerDoc) {
        var active;
        try {
          active = ownerDoc.activeElement;
        } catch (e) {
          // IE9 throws if you access activeElement during page load
          active = ownerDoc.body;
        }
        isFocused = active === element;
      }

      return isFocused;
    }

    /**
     * Adapted from the KO hasfocus handleElementFocusChange function
     *
     * @param {boolean} isFocused whether the current element has focus
     */
    function handleElementFocusChange(isFocused) {
      elementHasFocus(isFocused);
    }

    var observable = valueAccessor(),
      properties = allBindingsAccessor(),
      elementHasFocus = ko.observable(elementIsFocused()),
      handleElementFocusIn = handleElementFocusChange.bind(null, true),
      handleElementFocusOut = handleElementFocusChange.bind(null, false);

    var interceptor = ko.computed({
      read: function () {
        var currentValue = ko.utils.unwrapObservable(observable);
        if (elementHasFocus()) {
          return !isNaN(currentValue) &&
            currentValue !== null &&
            currentValue !== undefined
            ? currentValue
                .toString()
                .replace('.', Globalize.findClosestCulture().numberFormat['.']) // Displays correct decimal separator for the current culture (so de-DE would format 1.234 as "1,234")
            : null;
        } else {
          var format = properties.numberFormat || 'n2',
            formattedNumber = Globalize.format(currentValue, format);

          return formattedNumber;
        }
      },
      write: function (newValue) {
        var currentValue = ko.utils.unwrapObservable(observable),
          numberValue = Globalize.parseFloat(newValue);

        if (!isNaN(numberValue)) {
          if (numberValue !== currentValue) {
            // The value has changed so update the observable
            observable(numberValue);
          }
        } else if (newValue.length === 0) {
          if (properties.isNullable) {
            // If newValue is a blank string and the isNullable property has been set then nullify the observable
            observable(null);
          } else {
            // If newValue is a blank string and the isNullable property has not been set then set the observable to 0
            observable(0);
          }
        }
      },
    });

    ko.utils.registerEventHandler(element, 'focus', handleElementFocusIn);
    ko.utils.registerEventHandler(element, 'focusin', handleElementFocusIn); // For IE
    ko.utils.registerEventHandler(element, 'blur', handleElementFocusOut);
    ko.utils.registerEventHandler(element, 'focusout', handleElementFocusOut); // For IE

    if (element.tagName.toLowerCase() === 'input') {
      ko.applyBindingsToNode(element, { value: interceptor });
    } else {
      ko.applyBindingsToNode(element, { text: interceptor });
    }
  },
};
```

Using this binding handler you just need to drop in a `valueNumber` into your `data-bind` statement where you might previously have used a `value` binding. The binding also has a couple of nice hooks in place which you might find useful:

<dl><dt>numberFormat (defaults to "n2")</dt><dd>allows you to specify a format to display your number with. Eg, "c2" would display your number as a currency to 2 decimal places, "p1" would display your number as a percentage to 1 decimal place etc</dd><dt>isNullable (defaults to false)</dt><dd>specifies whether your number should be treated as nullable. If it's not then clearing the elements value will set the underlying observable to 0.</dd></dl>

Finally when the element gains focus / becomes active the full underlying value is displayed. (Kind of like Excel - like many an app, the one I'm working on started life as Excel and the users want to keep some of the nice aspects of Excel's UI.) To take a scenario, let's imagine we have an input element which is applying the "n1" format. The underlying value backing this is 1.234. The valueNumber binding displays this as "1.2" when the input does not have focus and when the element gains focus the full "1.234" is displayed. Credit where it’s due, this is thanks to [Robert Westerlund](http://stackoverflow.com/users/1105996/robert-westerlund) who was kind enough to respond to a [question of mine on StackOverflow](http://stackoverflow.com/a/22313546/761388).

Finally, here’s a demo using the "de-DE" locale:

<iframe width="100%" height="400" src="https://jsfiddle.net/johnny_reilly/jRt3k/embedded/result,js,html" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>

## PS Globalize is a-changing

The version of Globalize used in the binding handler is Globalize v0.1.1. This has been available in various forms for quite some time but as I write this the Globalize plugin is in the process of being ported to the [CLDR](http://cldr.unicode.org/). As part of that work it looks like the Globalize API will change. When that gets finalized I’ll try and come back and update this.
