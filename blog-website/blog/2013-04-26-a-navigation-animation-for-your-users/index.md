---
slug: a-navigation-animation-for-your-users
title: 'A navigation animation (for your users delectation)'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Adding a CSS animation or GIF can help users navigating an app in an iframe get visual feedback despite the lack of browser feedback tics.'
---

## The Vexation

<!--truncate-->

The current application I'm working on lives within an `iframe`. A side effect of that is that my users no longer get the visual feedback that they're used to as they navigate around the site. By "visual feedback" what I mean are the little visual tics that are displayed in the browser when you're in the process of navigating from one screen to the next.

When an application is nested in an `iframe` it seems that these visual tics aren't propogated up to the top frame of the browser as the user navigates around. Clicking on links results in a short lag whilst nothing appears to be happening and then, BANG!, a new page is rendered. This is not a great user experience. There's nothing to indicate that the link has been clicked on and the browser is doing something. Well, not in Internet Explorer at least - Chrome (my browser of choice) appears to do just that. But that's really by the by, the people using my app will be using the corporate browser, IE; so I need to think about them.

Now I'm fully aware that this is more in the region of nice-to-have rather than absolute necessity. That said, my experience is that when users think an application isn't responding fast enough their action point is usually "click it again, and maybe once more for luck". To prevent this from happening, I wanted to give the users back some kind of steer when they were in the process of navigation, `iframe` or no `iframe`.

## The Agreeable Resolution

To that end, I've come up with something that I feel does the job, and does it well. I've taken a CSS animation courtesy of the good folk at [CSS Load](http://cssload.net/) and embedded it in the layout of my application. This animation is hidden from view until the user navigates to another page. At that point, the CSS animation appears in the header of the screen and remains in place until the new screen is rendered.

<!-- <p>And because they haven't yet invented the animated screenshot here's what the CSS animation looks like in full flight:</p> <style>#navigationAnimation {   margin: 7px;   clear: both; }   #circleG {   width: 46.666666666666664px;   height: 20px; }   .circleG {   background-color: #ffffff;   float: left;   height: 10px;   margin-left: 5px;   width: 10px;   -moz-border-radius: 7px;   -webkit-border-radius: 7px;   border-radius: 7px;   -moz-animation-name: bounce_circleG;   -moz-animation-duration: 0.6000000000000001s;   -moz-animation-iteration-count: infinite;   -moz-animation-direction: linear;   -webkit-animation-name: bounce_circleG;   -webkit-animation-duration: 0.6000000000000001s;   -webkit-animation-iteration-count: infinite;   -webkit-animation-direction: linear;   -ms-animation-name: bounce_circleG;   -ms-animation-duration: 0.6000000000000001s;   -ms-animation-iteration-count: infinite;   -ms-animation-direction: linear;   animation-name: bounce_circleG;   animation-duration: 0.6000000000000001s;   animation-iteration-count: infinite;   animation-direction: linear; }   #circleG_1 {   -moz-animation-delay: 0.12000000000000002s;   -webkit-animation-delay: 0.12000000000000002s;   -ms-animation-delay: 0.12000000000000002s;   animation-delay: 0.12000000000000002s; }   #circleG_2 {   -moz-animation-delay: 0.28s;   -webkit-animation-delay: 0.28s;   -ms-animation-delay: 0.28s;   animation-delay: 0.28s; }   #circleG_3 {   -moz-animation-delay: 0.36s;   -webkit-animation-delay: 0.36s;   -ms-animation-delay: 0.36s;   animation-delay: 0.36s; }   @-moz-keyframes bounce_circleG {   50% {     background-color: #000000;   } }   @-webkit-keyframes bounce_circleG {   50% {     background-color: #000000;   } }   @-ms-keyframes bounce_circleG {   50% {     background-color: #000000;   } }   @keyframes bounce_circleG {   50% {     background-color: #000000;   } }   </style> <div id="navigationAnimation">    <div id="circleG">        <div id="circleG_1" class="circleG"></div>        <div id="circleG_2" class="circleG"></div>        <div id="circleG_3" class="circleG"></div>    </div></div> <p>Beautiful don't you think?</p>-->

## How's that work then guv?

You're no doubt dazzled by the glory of it all. How was it accomplished? Well, it was actually a great deal easier than you might think. First of all we have the html:

```html
<div class="float-right hidden" id="navigationAnimation">
  <div id="circleG">
    <div id="circleG_1" class="circleG"></div>
    <div id="circleG_2" class="circleG"></div>
    <div id="circleG_3" class="circleG"></div>
  </div>
</div>
```

Apart from the outer `div` tag (#navigationAnimation) all of this is the HTML taken from [CSS Load](http://cssload.net/). If you wanted to use a different navigation animation you could easily replace the inner HTML with something else instead. Next up is the CSS, again courtesy of CSS Load (and it's this that turns this simple HTML into sumptuous animated goodness):

```css
#navigationAnimation {
  margin-top: 7px;
}

#circleG {
  width: 46.666666666666664px;
}

.circleG {
  background-color: #ffffff;
  float: left;
  height: 10px;
  margin-left: 5px;
  width: 10px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  border-radius: 7px;
  -moz-animation-name: bounce_circleG;
  -moz-animation-duration: 0.6000000000000001s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-direction: linear;
  -webkit-animation-name: bounce_circleG;
  -webkit-animation-duration: 0.6000000000000001s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: linear;
  -ms-animation-name: bounce_circleG;
  -ms-animation-duration: 0.6000000000000001s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-direction: linear;
  animation-name: bounce_circleG;
  animation-duration: 0.6000000000000001s;
  animation-iteration-count: infinite;
  animation-direction: linear;
}

#circleG_1 {
  -moz-animation-delay: 0.12000000000000002s;
  -webkit-animation-delay: 0.12000000000000002s;
  -ms-animation-delay: 0.12000000000000002s;
  animation-delay: 0.12000000000000002s;
}

#circleG_2 {
  -moz-animation-delay: 0.28s;
  -webkit-animation-delay: 0.28s;
  -ms-animation-delay: 0.28s;
  animation-delay: 0.28s;
}

#circleG_3 {
  -moz-animation-delay: 0.36s;
  -webkit-animation-delay: 0.36s;
  -ms-animation-delay: 0.36s;
  animation-delay: 0.36s;
}

@-moz-keyframes bounce_circleG {
  50% {
    background-color: #000000;
  }
}

@-webkit-keyframes bounce_circleG {
  50% {
    background-color: #000000;
  }
}

@-ms-keyframes bounce_circleG {
  50% {
    background-color: #000000;
  }
}

@keyframes bounce_circleG {
  50% {
    background-color: #000000;
  }
}

/* classes below are not part of CSS animation */

.hidden {
  display: none;
}

.float-right {
  float: right;
  margin-left: 1em;
}
```

And finally we have the JavaScript which is responsible for showing animation when the user starts navigating:

```js
/*!
 * Initialise the navigation animation
 */
$(document).ready(function () {
  var navigationAnimationVisible, navigationFallback, $navigationAnimation;

  // initialises the navigation animation (including fallback for browsers without CSS animations)
  function initialiseNavigationAnimation() {
    navigationAnimationVisible = false;
    $navigationAnimation = $('#navigationAnimation');
    navigationFallback =
      '<img src="/images/navigationAnimation.gif" width="43" height="11" />';

    // fallback - initial call to ensure the image is cached before subsequent re-use (present flash to users of unloaded gif)
    if (!Modernizr.cssanimations) {
      $navigationAnimation.html(navigationFallback);
    }
  }

  // Show or hide the navigation animation
  function showNavigating(makeVisible) {
    if (makeVisible && !navigationAnimationVisible) {
      // Show
      $navigationAnimation.removeClass('hidden');
      navigationAnimationVisible = true;
    } else if (!makeVisible && navigationAnimationVisible) {
      // Hide
      $navigationAnimation.addClass('hidden');
      navigationAnimationVisible = false;
    }
  }

  // Initialise
  initialiseNavigationAnimation();

  // Show navigation animation on screen change
  $(window).on('beforeunload', function () {
    // fallback
    if (!Modernizr.cssanimations) {
      $navigationAnimation.html(navigationFallback);
    }

    showNavigating(true);
  });
});
```

It's helped along with a little jQuery here but this could easily be accomplished with vanilla JS if you fancied. The approach works by hooking into the [beforeunload](https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/beforeunload) event that fires when "_the window, the document and its resources are about to be unloaded_". There's a little bit more to the functionality in the JavaScript abover which I go into in the PPS below. Essentially that covers backwards compatibility with earlier versions of IE.

I've coded this up in a manner that lends itself to re-use. I can imagine that you might also want to make use of the navigation animation if, for example, you had an expensive AJAX operation on a page and you didn't want the users to despair. So the navigation animation could become a kind of a generic "I am doing something" animation instead - I leave it to your disgression.

## Oh, and a final PS

I had initially planned to use an old school animated GIF instead of a CSS animation. The thing that stopped me taking this course of action is that, to quote an [answer on Stack Overflow](http://stackoverflow.com/a/780617/761388) "_IE assumes that the clicking of a link heralds a new navigation where the current page contents will be replaced. As part of the process for perparing for that it halts the code that animates the GIFs._". So I needed animation that stayed animated. And lo, there were CSS animations...

## Better make that a PPS - catering for IE 9 and earlier

I spoke a touch too soon when I expounded on how CSS animations were going to get me out of a hole. Unfortunately, and to my lasting regret, they aren't supported in IE 9. And yes, at least for now that is what the users have. To get round this I've delved a little bit further and discovered a frankly hacky way to make animated gifs stay animated after beforeunload has fired. It works by rendering an animated gif to the screen when beforeunload is fired. Why this works I couldn't say - but if you're interested to research more then take a look at [this answer on Stack Overflow](http://stackoverflow.com/a/1904931/761388). In my case I've found an animated gif on [AjaxLoad](http://www.ajaxload.info/) which looks pretty similar to the CSS animation:

This is now saved away as `navigationAnimation.gif` in the application. The JavaScript uses Modernizr to detect if CSS animations are in play. If they're not then the animated gif is rendered to the screen in place of the CSS animation HTML. Ugly, but it seems to work well; I think this will work on IE 6 - 9. The CSS animations will work on IE 10+.
