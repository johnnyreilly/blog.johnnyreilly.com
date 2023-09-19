---
slug: what-on-earth-is-jquery-and-why-should
title: 'What on earth is jQuery?  And why should I care?'
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'What is jQuery? Discover the truth about the JavaScript library thats taking the web development world by storm - its simply brilliant!'
---

What on earth is jQuery? What's a jQuery plugin?

<!--truncate-->

These were the questions I was asking myself shortly after discovering that jqGrid was a "jQuery plugin". I'd been vaguely aware of the phrase "jQuery" being increasingly mentioned on various techical websites since about 2009. But for some reason I'd felt no urge to find out what it was. I seem to remember that I read the name "jQuery" and jumped to the perfectly logical (in my head) conclusion that this must be a Java SQL engine of some sort. (After all "j" as a prefix to anything so far had generally been Java and "Query" just rang of databases to me.) Clearly I was wrong - life's full of surprises.

I soon discovered that, contrary to expectations, jQuery had nothing to do with Java \***and**\* nothing to do with databases either. It was in fact a JavaScript library written by the amazing [John Resig](http://ejohn.org/about/). At the time I had no love for JavaScript. I now realise I knew nearly nothing about it but my feeling was that JavaScript was awful - evil even. However, given JavaScripts ubiquity in the world of web it seemed to be a necessary evil.

I took a look at the [jQuery website](http://jquery.com/) and after reading round a bit I noticed that it could be used for [Ajax](http://en.wikipedia.org/wiki/Ajax_%28programming%29) operations. This lead to me reaching the (incorrect) conclusion that jQuery was basically an alternative to the [Microsoft Ajax library](http://en.wikipedia.org/wiki/ASP.NET_AJAX#Microsoft_Ajax_Library) which we were already using to call various Web Services. But I remained frankly suspicious of jQuery. What was the point of this library? Why did it exist?

I read the the [blog](http://weblogs.asp.net/scottgu/archive/2008/09/28/jquery-and-microsoft.aspx) by Scott Gu announcing Microsoft was going to start shipping jQuery with Visual Studio. The Great Gu trusted it. Therefore, I figured, it must be okay... Right?

The thing was, I was quite happy with the Microsoft Ajax library. I was familiar with it. It worked. Why switch? I saw the various operations Scott Gu was doing to divs on the screen using jQuery. I didn't want to do anything like that at all. As I said; I had no love for JavaScript - I viewed it as C#'s simple-minded idiot cousin. My unofficial motto when doing web stuff was "wherever possible, do it on the server".

I think I would have ignored jQuery entirely but for the fact of jqGrid. If I wanted to use jqGrid I had to use jQuery as well. In the end I decided I'd allow it house room just for the sake of jqGrid and I'd just ignore it apart from that. And that's how it was for a while.

Then I had an epiphany. Okay - that's overplaying it. What actually happened was I realised that something we were doing elsewhere could be done faster and easier with jQuery. It's something so ridiculously feeble that I feel vaguely embarrassed sharing it. Anyway.

So, you know the css hover behaviour is only implemented for anchor tags in IE6? No? Well read this [Stack Overflow](http://stackoverflow.com/questions/36605/ie-6-css-hover-non-anchor-tag) entry - it'll clarify. Well, the app that I was working on was an internal web application only used by people with the corporate installation of IE 6 on their desktops. And it was "terribly important" that buttons had hover behaviour. For reasons that now escape me we were doing this by manually adding inline onmouseover / onmouseout event handlers to each input button on the screen in turn in every page in the [Page_Load](http://msdn.microsoft.com/en-us/library/ms178472.aspx) event server side. I think we were aware it wasn't fantastic to have to wire up each button in turn. But it worked and as with so many development situations we had other pressures, other requirements to fulfil and other fish to fry - so we left it at that.

And then it occurred to me... What about using the [jQuery class selector](http://api.jquery.com/class-selector/) in conjunction with the [jQuery hover event](http://api.jquery.com/hover/)? I could have one method that I called on a page which would wire up all of my hover behaviours in one fell swoop. I wouldn't need to do input-by-input wireups anymore! Hallelujah! This is what I did:

The buttons I would like to style:

```html
<input type="button" value="I am a button" class="itIsAButton" />
<input type="button" value="So am I" class="itIsAButton" />
<input type="button" value="Me too" class="itIsAButton" />
```

My CSS (filter, by the way, is just linear gradients in IE 6-9):

```css
.itIsAButton {
  filter: progid:DXImageTransform.Microsoft.Gradient (GradientType=0,StartColorStr='#ededed',EndColorStr='#cdcdcd');
}

.itIsAButton:hover, .itIsAButton_hover /* "_hover" is for IE6 */ {
  filter: progid:DXImageTransform.Microsoft.Gradient (GradientType=0,StartColorStr='#f6f6f6',EndColorStr='#efefef');
}
```

My jQuery:

```js
$(document).ready(function () {
  //Add hover behaviour on picker buttons for IE6
  if ($.browser.msie && parseInt($.browser.version, 10) < 7) {
    var fnButtonHover = function (handlerInOut) {
      var $btn = $(this);
      var sOriginalClass = $btn.prop('class');

      if (handlerInOut.type === 'mouseenter') {
        //If not already hovering class then apply it
        if (sOriginalClass.indexOf('_hover') === -1) {
          $btn.prop('class', sOriginalClass + '_hover');
        }
      } else if (handlerInOut.type === 'mouseleave') {
        //If not already non-hovering class then apply it
        if (sOriginalClass.indexOf('_hover') !== -1) {
          $btn.prop('class', sOriginalClass.split('_')[0]);
        }
      }
    };

    $('.itIsAButton').hover(fnButtonHover);
  }
});
```

And it worked. I didn't really understand this much about this jQuery "thing" at that point but I could now see that it clearly had at least one use. I've come to appreciate that jQuery is one of the best pieces of software I've ever encountered. Over time I may go further into some of the good stuff of jQuery. It is, quite simply, brilliant.
