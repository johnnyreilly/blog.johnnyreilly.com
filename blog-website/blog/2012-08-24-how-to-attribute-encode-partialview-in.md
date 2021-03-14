---
title: "How to attribute encode a PartialView in MVC (Razor)"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://avatars.githubusercontent.com/u/1010525?s=400&u=294033082cfecf8ad1645b4290e362583b33094a&v=4
tags: [asp.net mvc, encode, PartialView, razor, attribute]
hide_table_of_contents: false
---
This post is plagiarism. But I'm plagiarising myself so I don't feel too bad.

 I posted a [question](<http://stackoverflow.com/q/12093005/761388>) on StackOverflow recently asking if there was a simple way to attribute encode a PartialView in Razor / ASP.NET MVC. I ended up answering my own question and since I thought it was a useful solution it might be worth sharing.

## The Question

In the project I was working on I was using PartialViews to store the HTML that would be rendered in a tooltip in my ASP.NET MVC application. (In case you're curious I was using the [jQuery Tools library for my tooltip](<http://jquerytools.org/demos/tooltip/index.html>) effect.)

I had thought that Razor, clever beast that it is, would automatically attribute encode anything sat between quotes in my HTML. Unfortunately this doesn't appear to be the case. In the short term I was able to workaround this by using single quotation marks to encapsulate my PartialViews HTML. See below for an example:

```xml
<div class="tooltip" 
     title='@Html.Partial("_MyTooltipInAPartial")'>
    Some content
</div>
```

Now this worked just fine but I was aware that if any PartialView needed to use single quotation marks I would have a problem. Let's say for a moment that `_MyTooltipInAPartial.cshtml` contained this:

```xml
<span style="color:green">fjkdsjf'lksdjdlks</span>
```

Well when I used my handy little single quote workaround, the following would result:

```xml
<div class="tooltip"
     title='<span style="color:green">fjkdsjf'lksdjdlks</span>'>
    Some content
</div>
```

Which although it doesn't show up so well in the code sample above is definite *"does not compute, does not compute, does not compute \*LOUD EXPLOSION\*"* territory.

## The Answer

This took me back to my original intent which was to encapsulate the HTML in double quotes like this:

```xml
<div class="tooltip" 
     title="@Html.Partial("_MyTooltipInAPartial")">
    Some content
</div>
```

Though with the example discussed above we clearly had a problem whether we used single or double quotes. What to do?

Well the answer wasn't too complicated. After a little pondering I ended up scratching my own itch by writing an HTML helper method called `PartialAttributeEncoded` which made use of `HttpUtility.HtmlAttributeEncode` to HTML attribute encode a PartialView.

Here's the code:

<script src="https://gist.github.com/3449462.js?file=PartialExtensions.cs"></script>

Using the above helper is simplicity itself:

```xml
<div class="tooltip" 
     title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">
    Some content
</div>
```

And, given the example I've been going through, it would provide you with this output:

```xml
<div class="tooltip"
     title="&lt;span style=&quot;color:green&quot;>fjkdsjf&#39;lksdjdlks</span>">
    Some content
</div>
```

Now the HTML in the title attribute above might be an unreadable mess - but it's the unreadable mess you need. That's what the HTML we've been discussing looks like when it's been encoded.

## Final thoughts

I was surprised that Razor didn't handle this out of the box. I wonder if this is something that will come along with a later version? It's worth saying that I experienced this issue when working on an MVC 3 application. It's possible that this issue may actually have been solved with MVC 4 already; I haven't had chance to check yet though.


