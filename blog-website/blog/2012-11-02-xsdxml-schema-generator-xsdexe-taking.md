---
title: "XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: img/profile.jpg
tags: [Xsd.exe, XSD/XML Schema Generator, LINQ to XML]
hide_table_of_contents: false
---
## Is it 2003 again?!?

 I've just discovered Xsd.exe. It's not new. Or shiny. And in fact it's been around since .NET 1.1. Truth be told, I've been aware of it for years but up until now I've not had need of it. But now now I've investigated it a bit I've found that it, combined with the XSD/XML Schema Generator can make for a nice tool to add to the utility belt.

Granted XML has long since stopped being sexy. But if you need it, as I did recently, then this is for you.

## To the XML Batman!

Now XML is nothing new to me (or I imagine anyone who's been developing within the last 10 years). But most of the time when I use XML I'm barely aware that it's going on - by and large it's XML doing the heavy lifting underneath my web services. But the glory of this situation is, I never have to think about it. It just works. All I have to deal with are nice strongly typed objects which makes writing robust code a doddle.

I recently came upon a situation where I was working with XML in the raw; that is to say strings. I was going to be supplied with strings of XML which would represent various objects. It would be my job to take the supplied XML, extract out the data I needed and proceed accordingly.

## We Don't Need No Validation...

I lied!

In order to write something reliable I needed to be able to validate that the supplied XML was as I expected. So, [XSD](<http://en.wikipedia.org/wiki/XML_Schema_(W3C)>) time. If you're familiar with XML then you're probably equally familar with XSD which, to quote Wikipedia *"can be used to express a set of rules to which an XML document must conform in order to be considered 'valid'"*.

Now I've written my fair share of XSDs over the years and I've generally found it a slightly tedious exercise. So I was delighted to discover an online tool to simplify the task. It's called the [XSD/XML Schema Generator](<http://www.freeformatter.com/xsd-generator.html>). What this marvellous tool does is allow you to enter an example of your XML which it then uses to reverse engineer an XSD.

Here's an example. I plugged in this:

<script src="https://gist.github.com/4000326.js?file=contact.xml"></script>

And pulled out this:

<script src="https://gist.github.com/4000326.js?file=contact.xsd"></script>

Fantastic! It doesn't matter if the tool gets something slightly wrong; you can tweak the generated XSD to your hearts content. This is great because it does the hard work for you, allowing you to step back, mop your brow and then heartily approve the results. This tool is a labour saving device. Put simply, it's a dishwasher.

## Tools of the Trade

How to get to the actual data? I was initially planning to break out the [`XDocument`](<http://msdn.microsoft.com/en-us/library/system.xml.linq.xdocument(v=vs.100).aspx>), plug in my XSD and use the `Validate` method. Which would do the job just dandy.

However I resisted. As much as I like LINQ to XML I turned to use [Xsd.exe](<http://msdn.microsoft.com/en-us/library/x6c1kb0s(v=vs.100).aspx>) instead. As I've mentioned, this tool is as old as the hills. But there's gold in them thar hills, listen: *"The XML Schema Definition (Xsd.exe) tool generates XML schema or common language runtime classes from XDR, XML, and XSD files, or from classes in a runtime assembly."*

Excited? Thought not. But what this means is we can hurl our XSD at this tool and it will toss back a nicely formatted C# class for me to use. Good stuff! So how's it done? Well MSDN is roughly as informative as it ever is (which is to say, not terribly) but fortunately there's not a great deal to it. You fire up the Visual Studio Command Prompt (and I advise doing this in Administrator mode to escape permissions pain). Then you enter a command to generate your class. Here's an example using the Contact.xsd file we generated earlier:

`xsd.exe "C:\\Contact.xsd" /classes /out:"C:\\" /namespace:"MyNameSpace"`Generation looks like this:

![](http://1.bp.blogspot.com/-TR-eaxshZo8/UJPclxs8JjI/AAAAAAAAAWg/TNKZuyi-8NU/s400/XsdInAction.png)

And you're left with the lovely Contact.cs class:

<script src="https://gist.github.com/4000326.js?file=Contact.cs"></script>

## Justify Your Actions

But why is this good stuff? Indeed why is this more interesting than the newer, and hence obviously cooler, LINQ to XML? Well for my money it's the following reasons that are important:

1. Intellisense - I have always loved this. Call me lazy but I think intellisense frees up the mind to think about what problem you're actually trying to solve. Xsd.exe's generated classes give me that; I don't need to hold the whole data structure in my head as I code.
2. Terse code - I'm passionate about less code. I think that a noble aim in software development is to write as little code as possible in order to achieve your aims. I say this as generally I have found that writing a minimal amount of code expresses the intention of the code in a far clearer fashion. In service of that aim Xsd.exe's generated classes allow me to write less code than would be required with LINQ to XML.
3. To quote Scott Hanselman "[successful compilation is just the first unit test](<http://www.hanselman.com/blog/NuGetPackageOfTheWeek6DynamicMalleableEnjoyableExpandoObjectsWithClay.aspx>)". That it is but it's a doozy. If I'm making changes to the code and I've been using LINQ to XML I'm not going to see the benefits of strong typing that I would with Xsd.exe's generated classes. I like learning if I've broken the build sooner rather than later; strong typing gives me that safety net.

<!-- -->

## Serialization / Deserialization Helper

As you read this you're no doubt thinking "but wait he's shown us how to create XSDs from XML and classes from XSDs but how do we take XML and turn it into objects? And how do we turn those objects back into XML?"

See how I read your mind just there? It's a gift. Well, I've written a little static helper class for the very purpose:

<script src="https://gist.github.com/4000326.js?file=XmlConverter.cs"></script>

And here's an example of how to use it:

<script src="https://gist.github.com/4000326.js?file=XmlConverterUsage.cs"></script>

I was tempted to name my methods in tribute to Crockford's JSON (namely `ToXML` becoming `stringify` and `ToObject` becoming `parse`). Maybe later.

And that's us done. Whilst it's no doubt unfashionable I think that this is a very useful approach indeed and I commend it to the interweb!

## Update - using Xsd.exe to generate XSD from XML

I was chatting to a friend about this blog post and he mentioned that you can actually use Xsd.exe to generate XSD files from XML as well. He's quite right - this feature does exist. To go back to our example from earlier we can execute the following command:

`xsd.exe "C:\\Contact.xml" /out:"C:\\" `And this will generate the following file:

<script src="https://gist.github.com/4000326.js?file=Generated by XSD contact.xsd"></script>

However, the XSD generated above is very much a "Microsoft XSD"; it's an XSD which features MS properties and so on. It's fine but I think that generally I prefer my XSDs to be as vanilla as possible. To that end I'm likely to stick to using the XSD/XML Schema Generator as it doesn't appear to be possible to get Xsd.exe to generate "vanilla XSD".

Thanks to Ajay for bringing it to my attention though.


