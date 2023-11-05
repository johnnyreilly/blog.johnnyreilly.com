---
slug: closedxml-real-sdk-for-excel
title: 'ClosedXML - the real SDK for Excel'
authors: johnnyreilly
tags: [c#]
hide_table_of_contents: false
description: 'Closed XML simplifies Excel document creation for developers with its straightforward API, sitting on top of Open XML. A frustration-solver for many!'
---

Simplicity appeals to me. It always has. Something that is simple is straightforward to comprehend and is consequently easy to use. It's clarity.

<!--truncate-->

## Open XML

So imagine my joy when I first encountered [Open XML](http://msdn.microsoft.com/en-us/office/bb265236.aspx). In Microsofts own words:

ECMA Office Open XML ("Open XML") is an international, open standard for word-processing documents, presentations, and spreadsheets that can be freely implemented by multiple applications on multiple platforms.

What does that actually mean? Well, from my perspective in the work I was doing I needed to be able to programmatically interact with Excel documents from C#. I needed to be able to create spreadsheets, to use existing template spreadsheets which I could populate dynamically in code. I needed to do Excel. And according to Microsoft, the Open XML SDK was how I did this.

What can I say about it? Open XML works. The API functions. You can use this to achieve your aims; and I did (initially). However, there's a but and it's this: it became quickly apparent just how hard Open XML makes you work to achieve relatively simple goals. Things that ought to be, in my head, a doddle require reams and reams of obscure code. Sadly, I feel that Open XML is probably the most frustrating API that I have yet encountered (and I've coded against the old school Lotus Notes API).

## Closed XML - Open XML's DbContext

As I've intimated I found Open XML to be enormously frustrating. I'd regularly find myself thinking I'd achieved my goal. I may have written War and Peace code-wise but it compiled, it looked right - the end was in sight. More fool me. I'd run, sit back watch my Excel doc get created / updated / whatever. Then I'd open it and be presented with some obscure error about a corrupt file. Not great.

As I was Googling around looking for answers to my problem that I discovered an open source project on CodePlex called [Closed XML](http://closedxml.codeplex.com/). I wasn't alone in frustrations with Open XML - there were many of us sharing the same opinion. And some fantastic person had stepped into the breach to save us! In ClosedXMLs own words:

ClosedXML makes it easier for developers to create Excel 2007/2010 files. It provides a nice object oriented way to manipulate the files (similar to VBA) without dealing with the hassles of XML Documents. It can be used by any .NET language like C# and Visual Basic (VB).

Hallelujah!!!

The way it works (as far as I understand) is that ClosedXML sits on top of Open XML and exposes a really straightforward API for you to interact with. I haven't looked into the guts of it but my guess is that it internally uses Open XML to achieve this (as to use ClosedXML you must reference DocumentFormat.OpenXml.dll).

I've found myself thinking of ClosedXML's relationship to Open XML in the same way as I think about Entity Frameworks DbContexts relationship to ObjectContext. They do the same thing but the former in both cases offers a better API. They makes achieving the same goals \***much**\* easier. (Although in fairness to the EF team I should say that ObjectContext was not particularly problematic to use; just DbContext made life even easier.)

## Support - This is how it should be done!

Shortly after I started using ClosedXML I was asked if we could use it to perform a certain task. I tested. We couldn't.

When I discovered this [I raised a ticket](http://closedxml.codeplex.com/workitem/8174) against the project asking if the functionality was likely to be added at any point. I honestly didn't expect to hear back any time soon and was mentally working out ways to get round the issue for now.

To my surprise within _5 hours_ [MDeLeon](http://www.codeplex.com/site/users/view/MDeLeon) the developer behind ClosedXML had released a patch to the source code! By any stretch of the imagination that is fast! As it happened there were a few bugs that needed ironing out and over the course of the next 3 working days MDeLeon performed a number of fixes and left me quickly in the position of having a version of ClosedXML which allowed me to achieve my goal.

So this blog post exists in part to point anyone who is battling Open XML to ClosedXML. It's brilliant, well documented and I'd advise anyone to use it. You won't be disappointed. And in part I wanted to say thanks and well done to MDeLeon who quite made my week! Thank you!

[http://closedxml.codeplex.com/](http://closedxml.codeplex.com/)
