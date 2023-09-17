---
slug: how-to-attribute-encode-partialview-in
title: 'How to attribute encode a PartialView in MVC (Razor)'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Find out how to attribute encode PartialView HTML in Razor/ASP.Net MVC with the HTML helper method `PartialAttributeEncoded`.'
---

This post is plagiarism. But I'm plagiarising myself so I don't feel too bad.

<!--truncate-->

I posted a [question](http://stackoverflow.com/q/12093005/761388) on StackOverflow recently asking if there was a simple way to attribute encode a PartialView in Razor / ASP.NET MVC. I ended up answering my own question and since I thought it was a useful solution it might be worth sharing.

## The Question

In the project I was working on I was using PartialViews to store the HTML that would be rendered in a tooltip in my ASP.NET MVC application. (In case you're curious I was using the [jQuery Tools library for my tooltip](http://jquerytools.org/demos/tooltip/index.html) effect.)

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

Which although it doesn't show up so well in the code sample above is definite _"does not compute, does not compute, does not compute \*LOUD EXPLOSION\*"_ territory.

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

```cs
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace My.Helpers
{
    /// <summary>
    /// MVC HtmlHelper extension methods - html element extensions
    /// </summary>
    public static class PartialExtensions
    {
        /// <summary>
        /// Allows a partial to be rendered within quotation marks.
        /// I use this with jQuery tooltips where we store the tooltip HMTL within a partial.
        /// See example usage below:
        /// <div class="tooltip" title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">Some content</div>
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="partialViewName"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        public static MvcHtmlString PartialAttributeEncoded(
          this HtmlHelper helper,
          string partialViewName,
          object model = null
        )
        {
            //Create partial using the relevant overload (only implemented ones I used)
            var partialString = (model == null)
                ? helper.Partial(partialViewName)
                : helper.Partial(partialViewName, model);

            //Attribute encode the partial string - note that we have to .ToString() this to get back from an MvcHtmlString
            var partialStringAttributeEncoded = HttpUtility.HtmlAttributeEncode(partialString.ToString());

            //Turn this back into an MvcHtmlString
            var partialMvcStringAttributeEncoded = MvcHtmlString.Create(partialStringAttributeEncoded);

            return partialMvcStringAttributeEncoded;
        }
    }
}
```

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
