---
slug: xsdxml-schema-generator-xsdexe-taking
title: 'XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML'
authors: johnnyreilly
tags: [XSD, LINQ to XML]
hide_table_of_contents: false
description: 'Discover how to use XSD for validating XML and generating C# classes from XSD files, including an online tool to simplify the task.'
---

## Is it 2003 again?!?

I've just discovered Xsd.exe. It's not new. Or shiny. And in fact it's been around since .NET 1.1. Truth be told, I've been aware of it for years but up until now I've not had need of it. But now now I've investigated it a bit I've found that it, combined with the XSD/XML Schema Generator can make for a nice tool to add to the utility belt.

Granted XML has long since stopped being sexy. But if you need it, as I did recently, then this is for you.

<!--truncate-->

## To the XML Batman!

Now XML is nothing new to me (or I imagine anyone who's been developing within the last 10 years). But most of the time when I use XML I'm barely aware that it's going on - by and large it's XML doing the heavy lifting underneath my web services. But the glory of this situation is, I never have to think about it. It just works. All I have to deal with are nice strongly typed objects which makes writing robust code a doddle.

I recently came upon a situation where I was working with XML in the raw; that is to say strings. I was going to be supplied with strings of XML which would represent various objects. It would be my job to take the supplied XML, extract out the data I needed and proceed accordingly.

## We Don't Need No Validation...

I lied!

In order to write something reliable I needed to be able to validate that the supplied XML was as I expected. So, [XSD](<http://en.wikipedia.org/wiki/XML_Schema_(W3C)>) time. If you're familiar with XML then you're probably equally familar with XSD which, to quote Wikipedia _"can be used to express a set of rules to which an XML document must conform in order to be considered 'valid'"_.

Now I've written my fair share of XSDs over the years and I've generally found it a slightly tedious exercise. So I was delighted to discover an online tool to simplify the task. It's called the [XSD/XML Schema Generator](http://www.freeformatter.com/xsd-generator.html). What this marvellous tool does is allow you to enter an example of your XML which it then uses to reverse engineer an XSD.

Here's an example. I plugged in this:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<contact type="personal">
  <firstName>John</firstName>
  <lastName>Reilly</lastName>
  <heightInInches>76</heightInInches>
</contact>
```

And pulled out this:

```xsd
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="contact">
    <xs:complexType>
      <xs:sequence>
        <xs:element type="xs:string" name="firstName"/>
        <xs:element type="xs:string" name="lastName"/>
        <xs:element type="xs:byte" name="heightInInches"/>
      </xs:sequence>
      <xs:attribute type="xs:string" name="type"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

Fantastic! It doesn't matter if the tool gets something slightly wrong; you can tweak the generated XSD to your hearts content. This is great because it does the hard work for you, allowing you to step back, mop your brow and then heartily approve the results. This tool is a labour saving device. Put simply, it's a dishwasher.

## Tools of the Trade

How to get to the actual data? I was initially planning to break out the [`XDocument`](<http://msdn.microsoft.com/en-us/library/system.xml.linq.xdocument(v=vs.100).aspx>), plug in my XSD and use the `Validate` method. Which would do the job just dandy.

However I resisted. As much as I like LINQ to XML I turned to use [Xsd.exe](<http://msdn.microsoft.com/en-us/library/x6c1kb0s(v=vs.100).aspx>) instead. As I've mentioned, this tool is as old as the hills. But there's gold in them thar hills, listen: _"The XML Schema Definition (Xsd.exe) tool generates XML schema or common language runtime classes from XDR, XML, and XSD files, or from classes in a runtime assembly."_

Excited? Thought not. But what this means is we can hurl our XSD at this tool and it will toss back a nicely formatted C# class for me to use. Good stuff! So how's it done? Well MSDN is roughly as informative as it ever is (which is to say, not terribly) but fortunately there's not a great deal to it. You fire up the Visual Studio Command Prompt (and I advise doing this in Administrator mode to escape permissions pain). Then you enter a command to generate your class. Here's an example using the Contact.xsd file we generated earlier:

`xsd.exe "C:\\Contact.xsd" /classes /out:"C:\\" /namespace:"MyNameSpace"`

And you're left with the lovely Contact.cs class:

```cs
//
```
