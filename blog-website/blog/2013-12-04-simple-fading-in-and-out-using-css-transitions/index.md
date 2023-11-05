---
slug: simple-fading-in-and-out-using-css-transitions
title: 'Simple fading in and out using CSS transitions and classes'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Learn to create a fade effect with CSS transitions for improved animation and battery life. Warning: display: none behaves differently than jQuery.'
---

Caveat emptor folks... Let me start off by putting my hands up and saying I am no expert on CSS. And furthermore let me say that this blog post is essentially the distillation of a heady session of googling on the topic of CSS transitions. The credit for the technique detailed here belongs to many others, I'm just documenting it for my own benefit (and for anyone who stumbles upon this).

<!--truncate-->

## What do we want to do?

Most web developers have likely reached at some point for jQuery's [`fadeIn`](http://api.jquery.com/fadeIn/) and [`fadeOut`](http://api.jquery.com/fadeOut/) awesomeness. What could be cooler than fading in or out your UI, right?

Behind the scenes of `fadeIn` and `fadeOut` JavaScript is doing an awful lot of work to create that animation. And in our modern world we simply don't need to do that work anymore; it's gone native and is covered by [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions).

Added to the "[because it's there](http://en.wikipedia.org/wiki/George_Mallory)" reason for using CSS transitions to do fading there is a more important reason; let me quote [HTML5 rocks](http://www.html5rocks.com/en/tutorials/speed/html5/#toc-css3-transitions):

> "_CSS Transitions make style animation trivial for everyone, but they also are a smart performance feature. Because a CSS transition is managed by the browser, the fidelity of its animation can be greatly improved, and in many cases hardware accelerated. Currently WebKit (Chrome, Safari, iOS) have hardware accelerated CSS transforms, but it's coming quickly to other browsers and platforms._"

Added to this, if you have mobile users then the usage of native functionality (as opposed to doing it manually in JavaScript) actually saves battery life.

## I'm sold - let's do it!

This is the CSS we'll need:

```css
.fader {
  -moz-transition: opacity 0.7s linear;
  -o-transition: opacity 0.7s linear;
  -webkit-transition: opacity 0.7s linear;
  transition: opacity 0.7s linear;
}

.fader.fadedOut {
  opacity: 0;
}
```

Note we have 2 CSS classes:

- `fader` \- if this class is applied to an element then when the opacity of that element is changed it will be an animated change. The duration of the transition and the timing function used are customisable - in this case it takes 0.7 seconds and is linear.
- `fadedOut` \- when used in conjunction with `fader` this class creates a fading in or fading out effect as it is removed or applied respectively. (This relies upon the default value of opacity being 1.)

Let's see it in action:

<iframe width="100%" height="200" src="https://jsfiddle.net/johnny_reilly/86amq/embedded/result,js,html,css" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>

It goes without saying that one day in the not too distant future (I hope) we'll be able to leave behind the horrible world of vendor prefixes. Then we'll be down to just the single `transition` statement. One day...

## Now, a warning...

Unfortunately the technique detailed above differs from [`fadeIn`](http://api.jquery.com/fadeIn/) and [`fadeOut`](http://api.jquery.com/fadeOut/) in one important way. When the `fadeOut` animation completes it sets removes the element from the flow of the DOM using `display: none`. However, display is not a property that can be animated and so you can't include this in your CSS transition. If removing the element from the flow of the DOM is something you need then you'll need to bear this in mind. If anyone has any suggestions for an nice way to approach this I'd love to hear from you.

## A halfway there solution to the `display: none`

Andrew Davey tweeted me the suggestion below:

> [@johnny_reilly](https://twitter.com/johnny_reilly) Yep, transitions are sweet. You could use the transitionend event to remove the element from the DOM [http://t.co/Q1oWy3g8Lp](http://t.co/Q1oWy3g8Lp)
>
> — Andrew Davey (@andrewdavey) [December 5, 2013](https://twitter.com/andrewdavey/statuses/408545283606212608)

<script async="" src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

So I thought I'd give it a go. However, whilst we've a `transitionend` event to play with we don't have a corresponding `transitionstart` or `transitionbegin`. So I tried this:

```js
$('#showHideButton').click(function () {
  var $alertDiv = $('#alertDiv');
  if ($alertDiv.hasClass('fadedOut')) {
    $alertDiv.removeClass('fadedOut').css('display', '');
  } else {
    $('#alertDiv').addClass('fadedOut');
  }
});

$(document).on(
  'webkitTransitionEnd transitionend oTransitionEnd',
  '.fader',
  function (evnt) {
    var $faded = $(evnt.target);
    if ($faded.hasClass('fadedOut')) {
      $faded.css('display', 'none');
    }
  },
);
```

Essentially, on the `transitionend` event `display: none` is applied to the element in question. Groovy. In the absence of a `transitionstart` or `transitionbegin`, when removing the `fadeOut` class I'm first manually clearing out the `display: none`. Whilst this works in terms of adding it back into the flow of the DOM it takes away all the `fadeIn` gorgeousness. So it's not quite the fully featured solution you might hope for. But it's a start.
