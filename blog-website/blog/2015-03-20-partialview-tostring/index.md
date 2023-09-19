---
slug: partialview-tostring
title: 'PartialView.ToString()'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Learn three ways to turn a `PartialViewResult` into a `string` to reuse the result returned by a controller in a JSON payload.'
---

In the name of [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) I found myself puzzling how one could take a `PartialViewResult` and render it as a `string`. Simple, right?

<!--truncate-->

In fact, in my head this was already a solved problem. I mean I've written about this [before](../2012-07-16-rendering-partial-view-to-string/index.md) already! Except I haven't. Not really - what I did back then was link to what someone else had written and say "yay! well done chap - like he said!". It turns out that was a bad move. That blog appears to be gone and so I'm back to where I was. Ug. Lesson learned.

## What are we trying to do?

So, for the second time of asking, here is how to take a `PartialViewResult` and turn it into a `string`. It's an invaluable technique to deal with certain scenarios.

In my own case I have a toolbar in my application that is first pushed into the UI in my `_Layout.cshtml` by means of a trusty `@Html.Action("Toolbar")`. I wanted to be able to re-use the `PartialViewResult` returned by `Toolbar` on my controller inside a `JSON` payload. And despite the title of this post, `PartialView.ToString()`_doesn't_ quite cut the mustard. Obvious really, if it did then why would I be writing this and you be reading this?

The solution is actually fairly simple. And, purely for swank, I'm going to offer it you 3 ways. Whatever's your poison.

## Inheritance (it's so yesterday darling)

Yes there was a time when everything was inheritance based. You were rewarded handsomely for making sure that was the case. However, times have changed and (with good reason) people tend to [favour composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance). So, perhaps just for the memories, let first offer you the inheritance based approach:

```cs
protected string ConvertPartialViewToString(PartialViewResult partialView)
{
  using (var sw = new StringWriter())
  {
    partialView.View = ViewEngines.Engines
      .FindPartialView(ControllerContext, partialView.ViewName).View;

    var vc = new ViewContext(
      ControllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);
    partialView.View.Render(vc, sw);

    var partialViewString = sw.GetStringBuilder().ToString();

    return partialViewString;
  }
}
```

The idea being that the above method is placed onto a base controller which your controllers subclass. Thus using this method inside one of the controllers is as simple as:

```cs
var toolbarHtml = ConvertPartialViewToString(partialViewResult);
```

## Extension method (sexier syntax)

So the next choice is implementing this as an extension method. Here's my static class which adds `ConvertToString` onto `PartialViewResult`:

```cs
using System.IO;
using System.Web.Mvc;

namespace My.Utilities.Extensions
{
  public static class PartialViewResultExtensions
  {
    public static string ConvertToString(this PartialViewResult partialView,
                                              ControllerContext controllerContext)
    {
      using (var sw = new StringWriter())
      {
        partialView.View = ViewEngines.Engines
          .FindPartialView(controllerContext, partialView.ViewName).View;

        var vc = new ViewContext(
          controllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);
        partialView.View.Render(vc, sw);

        var partialViewString = sw.GetStringBuilder().ToString();

        return partialViewString;
      }
    }
  }
}
```

I don't know about you but I do love an extension method - it often makes for much more readable code. In this case we can use:

```cs
var toolbarHtml = partialViewResult.ConvertToString(ControllerContext);
```

Which I think we can all agree is really rather lovely. Perhaps it would be more lovely if I didn't have to pass `ControllerContext` \- but hey! Still quite nice.

## Favouring Composition over Inheritance (testable)

Although ASP.Net MVC was designed to be testable there are times when you think "really? Can it be that hard?". In fact for a well thought through discussion on the topic I advise you read [this](http://volaresystems.com/blog/post/2010/08/19/Dont-mock-HttpContext). (I'm aware of the irony implicit in linking to another blog post in a blog post that I only wrote because I first linked to another blog which vanished.... Infinite recursion anybody?)

The conclusion of the linked blog post is twofold

1. Don't mock HTTPContext
2. Use the [facade pattern](https://en.wikipedia.org/wiki/Facade_pattern) instead

Having testable code is not a optional bauble in my view - it's a necessity. So with my final approach that's exactly what I'll do.

```cs
using System.Web.Mvc;

namespace My.Interfaces
{
  public interface IMvcInternals
  {
    string ConvertPartialViewToString(PartialViewResult partialView, ControllerContext controllerContext);
  }
}

// ....

using System.IO;
using System.Web.Mvc;
using My.Interfaces;

namespace My.Utilities
{
  public class MvcInternals : IMvcInternals
  {
    public string ConvertPartialViewToString(PartialViewResult partialView,
                                             ControllerContext controllerContext)
    {
      using (var sw = new StringWriter())
      {
        partialView.View = ViewEngines.Engines
          .FindPartialView(controllerContext, partialView.ViewName).View;

        var vc = new ViewContext(
          controllerContext, partialView.View, partialView.ViewData, partialView.TempData, sw);
        partialView.View.Render(vc, sw);

        var partialViewString = sw.GetStringBuilder().ToString();

        return partialViewString;
      }
    }
  }
}
```

So here I have a simple interface with a `ConvertPartialViewToString` method on it. This interface can be passed into a controller and then used like this:

```cs
var toolbarHtml = _mvcInternals.ConvertPartialViewToString(partialViewResult, ControllerContext);
```

Ah... that's the sweet mellifluous sound of easily testable code.
