---
title: "Using Bootstrap Tooltips to display jQuery Validation error messages"
authors: johnnyreilly
tags: [Tooltip, Bootstrap, jQuery Validation]
hide_table_of_contents: false
---
I love jQuery Validation. I was recently putting together a screen which had a lot of different bits of validation going on. And the default jQuery Validation approach of displaying the validation messages next to the element being validated wasn't working for me. That is to say, because of the amount of elements on the form, the appearance of validation messages was really making a mess of the presentation. So what to do?

 ## Tooltips to the rescue!

I was chatting to [Marc Talary](https://plus.google.com/u/0/116859810359377785616/posts) about this and he had the bright idea of using tooltips to display the error messages. Tooltips would allow the existing presentation of the form to remain as is whilst still displaying the messages to the users. Brilliant idea!

After a certain amount of fiddling I came up with a fairly solid mechanism for getting jQuery Validation to display error messages as tooltips which I'll share here. It's worth saying that for the application that Marc and I were working on we already had [jQuery UI](http://jqueryui.com/) in place and so we decided to use the [jQuery UI tooltip](http://jqueryui.com/tooltip/). This example will use the [Bootstrap tooltip](http://getbootstrap.com/javascript/#tooltips) instead. As much as anything else this demonstrates that you could swap out the tooltip mechanism here with any of your choosing.

<iframe src="https://htmlpreview.github.io/?https://gist.github.com/johnnyreilly/5867188/raw/2543a12fbd5c0aaad1da6793b7a7437492be3baf/DemoTooltip.html" width="100%" height="350"></iframe>

Beautiful isn't it? Now look at the source:

<script src="https://gist.github.com/johnnyreilly/5867188.js?file=DemoTooltip.html"></script>

All the magic is in the JavaScript, specifically the `showErrors` function that's passed as an option to jQuery Validation. Enjoy!


