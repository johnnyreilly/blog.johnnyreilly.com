---
slug: making-ie-10s-clear-field-x-button-and
title: "Making IE 10's clear field (X) button and jQuery UI autocomplete play nice"
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'IE 10 installed w/o notice on Johns machine, causing issues with jQuery UI auto-complete loading gifs which have been resolved with a CSS fix.'
---

This morning when I logged on I was surprised to discover IE 10 had been installed onto my machine. I hadn't taken any action to trigger this myself and so I’m assuming that this was part of the general Windows Update mechanism. I know [Microsoft had planned to push IE 10 out through this mechanism](http://technet.microsoft.com/en-us/ie/jj898508.aspx).

<!--truncate-->

I was a little surprised that my work desktop had been upgraded without any notice. And I was initially rather concerned given that most of my users have IE 9 and now I didn't have a test harness on my development machine any more. (I've generally found that having the majority users browser on your own machine is a good idea.) However, I wasn't too concerned as I didn’t think it would makes much of a difference to my development experience. I say that because IE10, as far as I understand, is basically IE 9 + more advanced CSS 3 and extra HTML 5 features. The rendering of my existing content developed for the IE 9 target should look pixel for pixel identical in IE 10. That’s the theory anyway.

However, I have found one exception to this rule already. IE 10 provides clear field buttons in text boxes.

Unhappily I found these were clashing with our jQuery UI auto complete loading gif.

I know; ugly isn't it? Happily I was able to resolve this with a CSS ~~hack~~

fix which looks like this:

```css
/* jQuery auto completes add the class below when loading */
.ui-autocomplete-loading {
  background: url('/images/ajax_loader.gif') no-repeat right 0.5em center;
}

/* How'd you like them apples IE 10? */
.ui-autocomplete-loading::-ms-clear {
  display: none;
}
```

And now the jQuery UI autocomplete looks like we expect during the loading phase.

But happily when the autocomplete is not in the loading phase we still have access to the IE 10 clear field button. This works because the CSS selector above only applies to the _ui-autocomplete-loading_ class (which is only applied to the textbox when the loading is taking place).
