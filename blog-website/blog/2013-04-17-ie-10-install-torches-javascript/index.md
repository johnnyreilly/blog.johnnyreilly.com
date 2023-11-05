---
slug: ie-10-install-torches-javascript
title: 'IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)'
authors: johnnyreilly
tags: [visual studio, javascript]
hide_table_of_contents: false
description: 'Learn how to fix missing Script Documents when debugging JavaScript in Visual Studio 2012, likely caused by auto-updating from IE9 to IE10.'
---

OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on...

<!--truncate-->

## The Symptoms

1. I'm not hitting my JavaScript breakpoints when I hit F5 in Visual Studio.
2. [Script Documents](http://msdn.microsoft.com/en-us/library/bb385621.aspx) is missing from the Solution Explorer when I'm debugging in Visual Studio.

## The Cure

In the end, after a great deal of frustration, I happened upon [this answer](http://stackoverflow.com/a/15908391/761388) on Stack Overflow. It set me in the right direction.

I was seeing exactly the same as this list but with **TWO** instances of Internet Explorer in the list instead of one. Odd, I know.

I fixed this up by selecting Google Chrome as my target instead of IE, running it and then setting it back to IE. And interestingly, when I went to set it back to IE there was only one instance of Internet Explorer in the list again.

## The Probable Cause

My machine was auto updated from IE 9 to IE 10 just the other day. I \***think**\* my JavaScript debugging issue appeared at the same time. This would explain to me why I had two instances of "Internet Explorer" in my list. Not certain but I'd say the evidence is fairly compelling.

Painful Microsoft. Painful
