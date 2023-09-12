---
slug: death-to-compatibility-mode
title: 'Death to compatibility mode'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'John discusses compatibility mode in Internet Explorer and suggests using custom HTTP headers or meta tags to prevent rendering and CSS issues.'
---

For just over 10 years my bread and butter has been the development and maintenance of line of business apps. More particularly, web apps built on the Microsoft stack of love ([© Scott Hanselman](https://channel9.msdn.com/Events/MIX/MIX11/FRM02)). These sort of apps are typically accessed via the company intranet and since "bring your own device" is still a relatively new innovation these apps are invariably built for everyones favourite browser: Internet Explorer. As we all know, enterprises are generally not that speedy when it comes to upgrades. So we're basically talking IE 9 at best, but more often than not, IE 8.

<!--truncate-->

Now, unlike many people, I don't regard IE as a work of evil. I spent a fair number of years working for an organization which had IE 6 as the only installed browser on company desktops. (In fact, this was still the case as late as 2012!) Now, because JavaScript is so marvellously flexible I was still able to do a great deal with the help of a number of [shivs / shims](http://paulirish.com/2011/the-history-of-the-html5-shiv/).

But rendering and CSS - well that's another matter. Because here we're at the mercy of "compatibility mode". Perhaps a quick history lesson is in order. What is this "compatibility mode" of which you speak?

## A Brief History

Well it all started when Microsoft released IE 8. To quote them:

> _A fundamental problem discussed during each and every Internet Explorer release is balancing new features and functionality with site compatibility for the existing Web. On the one hand, new features and functionality push the Web forward. On the other hand, the Web is a large expanse; requiring every legacy page to support the "latest and greatest" browser version immediately at product launch just isn't feasible. Internet Explorer 8 addresses this challenge by introducing compatibility modes which gives a way to introduce new features and stricter compliance to standards while enabling it to be backward compliant._ \- excerpted from [understanding compatibility modes in Internet Explorer 8](https://blogs.msdn.com/b/askie/archive/2009/03/23/understanding-compatibility-modes-in-internet-explorer-8.aspx).

## There's the rub

Sounds fair enough? Of course it does. Microsoft have generally bent over backwards to facilitate backwards compatibility. Quite right too - good business sense and all that. However, one of the choices made around backwards compatibility I've come to regard as somewhat irksome. Later down in the article you'll find this doozy: (emphasis mine)

> _"**for Intranet pages, 7 (IE 7 Standards) rendering mode is used by default** and can be changed."_

For whatever reason, this decision was not particularly well promoted. As a result, a fair number of devs I've encountered have little or no knowledge of compatibility mode. Certainly it came as a surprise to me. Here was I, developing away on my desktop. I'd fire up the app hosted on my machine and test on my local install of IE 8. All would look new and shiny (well non-anchor tags would have `:hover` support). Happy and content, I'd push to our test system and browse to it. Wait, what's happened? Where's the new style rendering? What's up with my CSS? This is a bug right?

Obviously I know now it's not a bug it's a "feature". And I have learned how to get round the intranet default of compatibility mode through cunning deployment of meta tags and custom http headers. Recently compatibility mode has come to bite me for the second time (in this case I was building for IE 9 and was left wondering where all my rounded corners had vanished to when I deployed...).

For my own sanity I thought it might be good to document the various ways that exist to solve this particular problem. Just to clarify terms, "solve" in this context means "force IE to render in the most standards compliant / like other browsers fashion it can muster". You can use compatibility mode to do more than just that and if you're interested in more about this then I recommend [this Stack Overflow answer](http://stackoverflow.com/a/6771584/761388).

## Solution 1: Custom HTTP Header through web.config

If you're running IIS7 or greater then, for my money, this is the simplest and most pain free solution. All you need do is include the following snippet in your web config file:

```xml
<?xml version="1.0"?>
<configuration>

  <!-- ... -->

  <system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="X-UA-Compatible" value="IE=edge" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>

  <!-- ... -->

<configuration>
```

This will make IIS serve up the above custom response HTTP header with each page.

## Solution 2: Custom HTTP Header the hard way

Maybe you're running II6 and so you making a change to the web.config won't make a difference. That's fine, you can still get the same behaviour by going to the HTTP headers tab in IIS (see below) and adding the `X-UA-Compatible: IE=edge` header by hand.

Or, if you don't have access to IIS (don't laugh - it happens) you can fall back to doing this in code like this:

```cs
Response.AppendHeader("X-UA-Compatible", "IE=edge");
```

Obviously there's a whole raft of ways you could get this in, using `Application_BeginRequest` in `Global.asax.cs` would probably as good an approach as any.

## Solution 3: Meta Tags are go!

The final approach uses meta tags. And, in my experience it is the most quirky approach - it doesn't always seem to work. First up, what do we do? Well, in each page served we include the following meta tag like this:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- See how the meta tag is the first inside the head?  That's *important* -->
  </head>
  <body></body>
</html>
```

Having crawled over the WWW equivalent of broken glass I now know why this \***sometimes**\* doesn't work. (And credit where it's due the answer came from [here](http://stackoverflow.com/a/3960197/761388).) It's all down to the positioning of the meta tag:

> _The X-UA-compatible header is not case sensitive; however, it must appear in the Web page's header (the HEAD section) before all other elements, except for the title element and other meta elements._ \- excerpted from [specifying legacy document modes](<http://msdn.microsoft.com/en-gb/library/jj676915(v=vs.85).aspx>)

That's right, get your meta tag in the wrong place and things won't work. And you won't know why. Lovely. But get it right and it's all gravy. This remains the most unsatisfactory approach in my book though.

## And for bonus points: `IFRAME`s!

Before I finish off I thought it worth sharing a little known feature of `IFRAME`s. If page is running in compatibility mode and it contains an `IFRAME` then the page loaded in that `IFRAME` will **also run in compatibility mode**. No ifs, no buts.

In the case that I encountered this behaviour, the application was being hosted in an `IFRAME` inside Sharepoint. Because of the way our Sharepoint was configured it ended up that the only real game in town for us was the meta tags approach - which happily worked once we'd correctly placed our meta tag.

Again, it's lamentable that this behaviour isn't better documented - hopefully the act of writing this here will mean that it becomes a little better known. There's probably a good reason for this behaviour, though I'm frankly, I don't know what it is. If anyone does, I'd be interested.

## That's it

Armed with the above I hope you have less compatibility mode pain than I have. The following blog entry is worth a read by the way:

[https://blogs.msdn.com/b/ie/archive/2009/02/16/just-the-facts-recap-of-compatibility-view.aspx](https://blogs.msdn.com/b/ie/archive/2009/02/16/just-the-facts-recap-of-compatibility-view.aspx)

Finally, I have an open question about compatibility mode. I _think_ (but I don't know) that even in compatibility mode IE runs using the same JavaScript engine. However I suspect it has a different DOM to play with. If anyone knows a little more about this and wants to let me know that'd be fantastic.
