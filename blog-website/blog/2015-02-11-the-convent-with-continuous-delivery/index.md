---
slug: the-convent-with-continuous-delivery
title: 'The Convent with Continuous Delivery'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Programmer has open-sourced the Poor Clares Arundel website, making tweaks and site updating easier, with continuous delivery and collaboration.'
---

I've done it. I've open sourced the [website that I maintain for my aunt what is a nun](http://www.poorclaresarundel.org/). Because I think we can all agree that nuns need open source and continuous integration about as much as anyone else.

<!--truncate-->

For a long time now I've been maintaining a website for one of my (many) aunts that is a Poor Clare. ([That's a subtype of "nun" you OO enthusiasts.](https://en.wikipedia.org/wiki/Subtyping)) It's not a terribly exciting site - it's mostly static content. It's built with a combination of AngularJS / TypeScript / Bootstrap and ASP.Net MVC. It's hosted on [Azure Websites](http://azure.microsoft.com/en-us/documentation/services/websites/). In fact I have written about it (slightly more cagily) before [here](../2014-06-01-migrating-from-angularjs-to-angularts/index.md).

I'll say up front: presentation-wise the site is not a work of art. However the nuns seem pretty happy with it. (Or perhaps secretly they're forgiving me the shonkiness and sparing my feelings - who can say?) If I put my mind to it the site could look much more lovely. But there's only so much time I can spare - and that's actually one of the reasons I've set up Continuous Delivery.

## Why on earth did you bother?

Well, you'd be surprised how often tweaks can be requested. Sometimes it appears to be forgotten for months at a time, and then all of a sudden my inbox is daily filled with a list of minor alterations. You know, slight text changes and the like.

So what I was generally doing was getting home of an evening, waiting until the children were in bed, chomping down some food and then firing up Visual Studio to make the changes and hit "Publish". Yes that's right; I was essentially using Visual Studio to edit text files and push a website out to Azure. The very definition of using a sledgehammer to crack a nut I think we can all agree.

It occurred to me that if I had Continuous Delivery set up then I could make these tweaks and not have to worry about the site being published. Which would be nice. I wouldn't need Visual Studio anymore - any text editor would do. Also nice. Finally, if the source control was accessible online then I could probably get away with doing most tweaks on my mobile phone whilst I was travelling home. Timesaver!

## How did you go about it?

Since [Visual Studio Online (then "Team Foundation Service")](http://www.visualstudioonline.com) was released I have been using it to host the source code. So the obvious solution was to use the tools offered there to do the deployment. However, this wasn't the smooth experience you might have hoped for. I had quite a frustrating afternoon trying things out before deciding it was becoming more trouble than it was worth. VSO appeared to make it supremely hard to customise builds.

Just recently though I have been having the most wonderful experience with [AppVeyor](http://www.appveyor.com/). AppVeyor market themselves as _"#1 Continuous Delivery service for Windows"_ \- I think they're right. Their build process is entirely flexible and customisable. It is, in short, a joy to use. (The support is fantastic too - very helpful indeed. Go [Feodor](https://github.com/FeodorFitsner)!)

If you look just below the header you'll read a very important sentence: _"Free for open-source projects"_. You hear that? By the time I'd finished reading that sentence I'd decided that the Poor Clares website was about to become an open source project.

And now it is.

## Where is it?

The source on [GitHub](https://github.com/johnnyreilly/poorclaresarundel). The builds and deployment are taken care of by [AppVeyor](https://ci.appveyor.com/project/JohnReilly/poorclaresarundel).

## Will you take pull requests?

If they're serious, then yes, certainly! My long term plan is to try and get the nuns set up as collaborators in GitHub. That way they can make their own minor tweaks without me getting involved.

On another front, I do wonder if open-sourcing Poor Clares, Arundel might have other hidden benefits. There's a number of things I'm not too keen on in the code. Up until now I think my attitude was possibly "it works so that's good enough". It was only me aware of the shortcomings. Now it's public I'll probably have more of an incentive to tidy up the rough edges. That's the theory anyway - Embarrassment Driven Development anyone? :-)
