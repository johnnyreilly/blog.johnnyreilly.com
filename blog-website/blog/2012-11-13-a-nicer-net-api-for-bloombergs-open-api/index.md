---
title: "Getting up to speed with Bloomberg's Open API..."
authors: johnnyreilly
tags: [.NET, c#, Bloomberg, Open API]
hide_table_of_contents: false
---

A good portion of any devs life is usually spent playing with APIs. If you need to integrate some other system into the system you're working on (and it's rare to come upon a situation where this doesn't happen at some point) then it's API time.

Some APIs are well documented and nice to use. Some aren't. I recently spent a goodly period of time investigating [Bloomberg's Open API](http://www.openbloomberg.com/open-api/) and it was a slightly painful experience. So much so that I thought it best to write up my own experiences and maybe I can save others time and a bit of pain.

Also, as I investigated the Bloomberg Open API I found myself coming up with my own little mini-C#-API. (It's generally a sure sign you've found an API you don't love if you end up writing your own wrapper.) This mini API did the heavy lifting for me and just handed back nicely structured data to deal with. I have included this wrapper here as well.

## Research

The initial plan was to, through code, extract Libor and Euribor rates from Bloomberg. I had access to a Bloomberg terminal and I had access to the internet - what could stop me? After digging around for a little while I found some useful resources that could be accessed from the Bloomberg terminal:

1. Typing “`WAPI&lt;GO&gt;`” into Bloomberg lead me to the Bloomberg API documentation.
2. Typing “`DOCS 2055451&lt;GO&gt;`” into Bloomberg (I know - it's a bit cryptic) provided me with samples of how to use the Bloomberg API in VBA

![](https://4.bp.blogspot.com/-mZxP0-jXRIo/UKJ8y8Gs5AI/AAAAAAAAAW0/qNyIN9hGBiQ/s400/bloombergwapidocumentation.gif)

To go with this I found some useful documentation of the Bloomberg Open API [here](http://www.openbloomberg.com/files/2012/10/blpapi-developers-guide.pdf) and I found the .NET Bloomberg Open API itself [here](http://www.openbloomberg.com/open-api/).

## Hello World?

The first goal when getting up to speed with an API is getting it to do something. Anything. Just stick a fork into it and see if it croaks. Sticking a fork into Open API was achieved by taking the 30-odd example apps included in the Bloomberg Open API and running each in turn on the Bloomberg box until I had my "he's alive!!" moment. (I did find it surprising that not all of the examples worked - I don't know if there's a good reason for this...)

However, when I tried to write my own C# console application to interrogate the Open API it wasn't as plain sailing as I'd hoped. I'd write something that looked correct, compiled successfully and deploy it onto the Bloomberg terminal only to have it die a sad death whenever I tried to fire it off.

I generally find the fastest way to get up and running with an API is to debug it. To make calls to the API and then examine, field by field and method by method, what is actually there. This wasn't really an option with my console app though. I was using a shared Bloomberg terminal with very limited access. No Visual Studio on the box and no remote debugging enabled.

It was then that I had something of a eureka moment. I realised that the code in the VBA samples I'd downloaded from Bloomberg looked quite similar to the C# code samples that shipped with Open API. Hmmmm.... Shortly after this I found myself sat at the Bloomberg machine debugging the Bloomberg API using the VBA IDE in Excel. (For the record, these debugging tools are aren't too bad at all - they're nowhere near as slick as their VS counterparts but they do the job.) This was my [Rosetta Stone](http://en.wikipedia.org/wiki/Rosetta_Stone) \- I could take what I'd learned from the VBA samples and translate that into equivalent C# / .NET code (bearing in mind what I'd learned from debugging in Excel and in fact sometimes bringing along the VBA comments themselves if they provided some useful insight).

## He's the Bloomberg, I'm the Wrapper

So I'm off and romping... I have something that works. Hallelujah! Now that that hurdle had been crossed I found myself examining the actual Bloomberg API code itself. It functioned just fine but it did a couple of things that I wasn't too keen on:

1. The Bloomberg API came with custom data types. I didn't want to use these unless it was absolutely necessary - I just wanted to stick to the standard .NET types. This way if I needed to hand data onto another application I wouldn't be making each of these applications dependant on the Bloomberg Open API.
2. To get the data out of the Bloomberg API there was an awful lot of boilerplate. Code which handled the possibilities of very large responses that might be split into several packages. Code which walked the element tree returned from Bloomberg parsing out the data. It wasn't a beacon of simplicity.

I wanted an API that I could simply invoke with security codes and required fields. And in return I wanted to be passed nicely structured data. As I've already mentioned a desire to not introduce unnecessary dependencies I thought it might well suit to make use of nested Dictionaries. I came up with a simple C# Console project / application which had a reference to the Bloomberg Open API. It contained the following class; essentially my wrapper for Open API operations: (please note this is deliberately a very "bare-bones" implementation)

<script src="https://gist.github.com/4065815.js?file=BloombergApi.cs"></script>

The project also contained this class which demonstrates how I made use of my wrapper:

<script src="https://gist.github.com/4065815.js?file=NicerBloombergApiDemo.cs"></script>

And here's what the output looked like:

![](https://1.bp.blogspot.com/-1ghUYqbl0AE/UKJ_3vsuKqI/AAAAAAAAAXI/pPKR5dup48U/s400/Bloomberg.png)

This covered my bases. It was simple, it was easy to consume and it didn't require any custom types. My mini-API is only really catering for my own needs (unsurprisingly). However, there's lots more to the Bloomberg Open API and I may end up taking this further in the future if I encounter use cases that my current API doesn't cover.

## Update (07/12/2012)

Finally, a PS. I found in the [Open API FAQs](http://www.openbloomberg.com/faq/) that _"Testing any of that functionality currently requires a valid Bloomberg Desktop API (DAPI), Server API (SAPI) or Managed B-Pipe subscription. Bloomberg is planning on releasing a stand-alone simulator which will not require a subscription."_ There isn't any word yet on this stand-alone simulator. I emailed Bloomberg at [open-tech@bloomberg.net](mailto:open-tech@bloomberg.net) to ask about this. They kindly replied that _"Unfortunately it is not yet available. We understand that this makes testing API applications somewhat impractical, so we're continuing to work on this tool."_ Fingers crossed for something we can test soon!

## Note to self (because I keep forgetting)

If you're looking to investigate what data is available about a security in Bloomberg it's worth typing “`FLDS&lt;GO&gt;`” into Bloomberg. This is the Bloomberg Fields Finder. Likewise, if you're trying to find a security you could try typing “`SECF&lt;GO&gt;`” into Bloomberg as this is the Security Finder.
