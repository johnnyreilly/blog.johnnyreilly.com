---
slug: html-to-pdf-using-wcf-service
title: 'HTML to PDF using a WCF Service'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'This ASP.NET WCF service creates PDFs from HTML and is remotely fired with wkhtmltopdf, using `webHttpBinding` for simple service calls.'
---

## TL; DR - "Talk is cheap. Show me the code."

<!--truncate-->

Some time ago I wrote a [post which demonstrated how you could make PDFs from HTML](../2012-04-05-making-pdfs-from-html-in-c-using/index.md) using C# and [wkhtmltopdf](http://code.google.com/p/wkhtmltopdf/). To my lasting surprise this has been the most popular post I've written. I recently put together an ASP.NET WCF service which exposed this functionality which I thought might be worth sharing. The code can be found on GitHub [here](https://github.com/johnnyreilly/PdfMakerWcfService).

## A little more detail

I should say up front that I'm still a little ambivalent about how sensible an idea this is. Behind the scenes this WCF service is remotely firing up wkhtmltopdf using `System.Diagnostics.Process`. I feel a little wary about recommending this as a solution for a variety of not particularly defined reasons. However, I have to say I've found this pretty stable and reliable. Bottom line it seems to work and work consistently. But I though I should include a caveat emptor; there is probably a better approach than this available. Anyway...

There isn't actually a great deal to say about this WCF service. It should (hopefully) just do what it says on the tin. Putting it together didn't involve a great deal of work; essentially it takes the code from the initial blog post and just wraps it in a WCF service called `PdfMaker`. The service exposes 2 methods:

1. `GetPdf` \- given a supplied URL this method creates a PDF and then returns it as a Stream to the client
2. `GetPdfUrl` \- given a supplied URL this method creates a PDF and then returns the location of it to the client

Both of these methods also set a Location header in the response indicating the location of the created PDF.

## That which binds us

The service uses `webHttpBinding`. This is commonly employed when people want to expose a RESTful WCF service. The reason I've used this binding is I wanted a simple "in" when calling the service. I wanted to be able to call the service via AJAX as well as directly by browsing to the service and supplying a URL-encoded URL like this:

`http://localhost:59002/PdfMaker.svc/GetPdf?url=http%3A%2F%2Fnews.ycombinator.com/`You may wonder why I'm using [http://news.ycombinator.com](http://news.ycombinator.com) for the example above. I chose this as Hacker News is a very simple site; very few resources and a small page size. This means the service has less work to do when creating the PDF; it's a quick demo.

I should say that this service is arguably \*\*not\*\* completely RESTful as each GET operation behind the scenes attempts to create a new PDF (arguably a side-effect). These should probably be POST operations as they create a new resource each time they're hit. However, if they were I wouldn't be able to just enter a URL into a browser for testing and that's really useful. So tough, I shake my fist at the devotees of pure REST on this occasion. (If I should be attacked in the street shortly after this blog is posted then the police should be advised this is good line of inquiry...)

## Good behaviour

It's worth noting that `automaticFormatSelectionEnabled` set to true on the behaviour so that content negotiation is enabled. Obviously for the `GetPdf` action this is rather meaningless as it's a stream that's passed back. However, for the `GetPdfUrl` action the returned string can either be JSON or XML. The Fiddler screenshots below demonstrate this in action.

## Test Harness

As a final touch I added in a test harness in the form of `Demo.aspx`. Here's an example of the output generated when pointing at Hacker News:

<iframe src="https://docs.google.com/file/d/0B87K8-qxOZGFMGNCUWRneUFsVFU/preview" width="500" height="500"></iframe>

And that's it. If there was a need this service could be easily extended to leverage the [various options](http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf-0.9.9-doc.html) that wkhtmltopdf makes available. Hope people find it useful.
