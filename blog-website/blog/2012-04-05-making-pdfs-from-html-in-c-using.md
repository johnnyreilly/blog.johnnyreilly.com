---
title: "Making PDFs from HTML in C# using WKHTMLtoPDF"
authors: johnnyreilly
tags: [wkhtmltopdf, webkit, c#, html, pdf]
hide_table_of_contents: false
---
## Update 03/01/2013

 I've written a subsequent post which builds on the work of this original post. The new post exposes this functionality via a WCF service and can be found [here](http://icanmakethiswork.blogspot.co.uk/2013/01/html-to-pdf-using-wcf-service.html).

## Making PDFs from HTML

I wanted to talk about an approach I've discovered for making PDFs directly from HTML. I realise that in these wild and crazy days of [PDF.js](http://mozilla.github.com/pdf.js/) and the like that techniques like this must seem very old hat. That said, this technique works and more importantly it solves a problem I was faced with but without forcing the users to move the "newest hottest version of X". Much as many of would love to solve problems this way, alas many corporations move slower than that and in the meantime we still have to deliver - we still have to meet requirements. Rather than just say "I did this" I thought I'd record how I got to this point in the first place. I don't know about you but I find the reasoning behind why different technical decisions get made quite an interesting topic...

For some time I've been developing / supporting an application which is used in an intranet environment where the company mandated browser is still IE 6. It was a requirement that there be "print" functionality in this application. As is well known (even by Microsoft themselves) the print functionality in IE 6 was never fantastic. But the requirement for usable printouts remained.

The developers working on the system before me decided to leverage Crystal Reports (remember that?). Essentially there was a reporting component to the application at the time which created custom reports using Crystal and rendered them to the user in the form of PDFs (which have been eminently printable for as long as I care to remember). One of the developers working on the system realised that it would be perfectly possible to create some "reports" within Crystal which were really "print to PDF" screens for the app.

It worked well and this solution stayed in place for a very long time. However, some years down the line the Crystal Reports was discarded as the reporting mechanism for the app. But we were unable to decommission Crystal entirely because we still needed it for printing.

I'd never really liked the Crystal solution for a number of reasons:

1. We needed custom stored procs to drive the Crystal print screens which were near duplicates of the main app procs. This duplication of effort never felt right.
2. We had to switch IDEs whenever we were maintaining our print screens. And the Crystal IDE is not a joy to use.
3. Perhaps most importantly, for certain users we needed to hide bits of information from the print. The version of Crystal we were using did not make the dynamic customisation of our print screens a straightforward proposition. (In its defence we weren't really using it for what it was designed for.) As a result the developers before me had ended up creating various versions of each print screen revealing different levels of information. As you can imagine, this meant that the effort involved in making changes to the print screens had increased exponentially



It occurred to me that it would be good if we could find some way of generating our own PDF reports without using Crystal that would be a step forward. It was shortly after this that I happened upon [WKHTMLtoPDF](http://code.google.com/p/wkhtmltopdf/). This is an open source project which describes itself as a *"Simple shell utility to convert html to pdf using the webkit rendering engine, and qt."* I tested it out on various websites and it worked. It wasn't by any stretch of the imagination a perfect HTML to PDF tool but the quality it produced greatly outstripped the presentation currently in place via Crystal.

This was just the ticket. Using WKHTMLtoPDF I could have simple web pages in the application which could be piped into WKHTMLtoPDF to make a PDF as needed. It could be dynamic - because ASP.NET is dynamic. We wouldn't need to write and maintain custom stored procs anymore. And happily we would no longer need to use Crystal.

Before we could rid ourselves of Crystal though, I needed a way that I could generate these PDFs on the fly within the website. For this I ended up writing a simple wrapper class for WKHTMLtoPDF which could be used to invoke it on the fly. In fact a good portion of this was derived from various contributions on [a post on StackOverflow](http://stackoverflow.com/q/1331926). It ended up looking like this:

<script src="https://gist.github.com/2341776.js?file=PdfGenerator.cs"></script>

With this wrapper I could pass in URLs and extract out PDFs. Here's a couple of examples of me doing just that:

```cs
//Create PDF from a single URL
    var pdfUrl = PdfGenerator.HtmlToPdf(pdfOutputLocation: "~/PDFs/",
        outputFilenamePrefix: "GeneratedPDF",
        urls: new string[] { "http://news.bbc.co.uk" });

    //Create PDF from multiple URLs
    var pdfUrl = PdfGenerator.HtmlToPdf(pdfOutputLocation: "~/PDFs/",
        outputFilenamePrefix: "GeneratedPDF",
        urls: new string[] { "http://www.google.co.uk", "http://news.bbc.co.uk" });
```

As you can see from the second example above it's possible to pipe a number of URLs into the wrapper all to be rendered to a single PDF. Most of the time this was surplus to our requirements but it's good to know it's possible. Take a look at the BBC website PDF generated by the first example:

<iframe src="https://docs.google.com/file/d/0B87K8-qxOZGFYktEWGtXRXJSSS1ZWFR4emFfMmVxZw/preview" width="500" height="500"></iframe>

Pretty good, no? As you can see it's not perfect from looking at the titles (bit squashed) but I deliberately picked a more complicated page to show what WKHTMLtoPDF was capable of. The print screens I had in mind to build would be significantly simpler than this.

Once this was in place I was able to scrap the Crystal solution. It was replaced with a couple of "print to PDF" ASPXs in the main web app which would be customised when rendering to hide the relevant bits of data from the user. These ASPXs would be piped into the HtmlToPdf method as needed and then the user would be redirected to that PDF. If for some reason the PDF failed to render the users would see the straight "print to PDF" ASPX - just not as a PDF if you see what I mean. I should say that it was pretty rare for a PDF to not render but this was my failsafe.

This new solution had a number of upsides from our perspective:

- Development maintenance time (and consequently cost for our customers) for print screens was significantly reduced. This was due to the print screens being part of the main web app. This meant they shared styling etc with all the other web screens and the dynamic nature of ASP.NET made customising a screen on the fly simplicity itself.
- We were now able to regionalise our print screens for the users in the same way as we did with our main web app. This just wasn't realistic with the Crystal solution because of the amount of work involved.
- I guess this is kind of a [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) solution :-)



You can easily make use of the above approach yourself. All you need do is download and install [WKHTMLtoPDF](http://code.google.com/p/wkhtmltopdf/) on your machine. I advise using version 0.9.9 as the later release candidates appear slightly buggy at present.

Couple of gotchas:

1. Make sure that you pass the correct installation path to the HtmlToPdf method if you installed it anywhere other than the default location. You'll see that the class assumes the default if it wasn't passed
2. Ensure that Read and Execute rights are granted to the wkhtmltopdf folder for the relevant process
3. Ensure that Write rights are granted for the location you want to create your PDFs for the relevant process



In our situation we are are invoking this directly in our web application on demand. I have no idea how this would scale - perhaps not well. This is not really an issue for us as our user base is fairly small and this functionality isn't called excessively. I think if this was used much more than it is I'd be tempted to hive off this functionality into a separate app. But this works just dandy for now.


