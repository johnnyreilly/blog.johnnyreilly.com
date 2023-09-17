---
slug: nuget-and-webmatrix-how-to-install
title: 'NuGet and WebMatrix: How to install a specific version of a package'
authors: johnnyreilly
tags: [jquery]
hide_table_of_contents: false
description: 'WebMatrix lacks NuGet command line, but users can still install a specific version manually by following the necessary steps - a bit of a challenge.'
---

I've recently been experimenting with WebMatrix. If you haven't heard of it, WebMatrix is Microsoft's _["free, lightweight, cloud-connected web development tool"](http://www.microsoft.com/web/webmatrix/)_. All marketing aside, it's pretty cool. You can whip up a site in next to no time, it has source control, publishing abilities, intellisense. Much good stuff. And one thing it has, that I genuinely hadn't expected is [NuGet](https://www.nuget.org/). Brilliant!

<!--truncate-->

But like any free product there are disadvantages. As a long time Visual Studio user I've become very used to the power of the NuGet command line. I've been spoiled. You don't have this in WebMatrix. You have a nice UI.

Looks great right? However, if you want to install a specific version of a NuGet package... well let's see what happens...

As you're probably aware jQuery currently exists in 2 branches; the 1.10.x branch which supports IE 6-8 and the 2.0.x branch which doesn't. However there is only 1 jQuery inside NuGet. Let's click on install and see if we can select a specific version.

Hmmm.... As you can see it's 2.0.3 or bust. We can't select a specific version; we're forced to go with the latest and greatest which is a problem if you need to support IE 6-8. So the obvious strategy if you're in this particular camp is to forego NuGet entirely. Go old school. And we could. But let's say we want to keep using NuGet, mindful that a little while down the road we'll be ready to do that upgrade. Can it be done? Let's find out.

## NuGet, by hook or by crook

I've created a new site in WebMatrix using the Empty Site template.

Lovely.

Now to get me some jQuery 1.10.2 goodness. To the console Batman! We've already got the NuGet command line installed (if you haven't you could get it from [here](http://nuget.org/nuget.exe)) and so we follow these steps:

- At the `C:\` prompt we enter `nuget install jQuery -Version 1.10.2` and down comes jQuery 1.10.2.
- We move `C:\jQuery.1.10.2` to `C:\Users\me\Documents\My Web Sites\Empty Site\App_Data\packages\jQuery.1.10.2`.
- Then we delete the `C:\Users\me\Documents\My Web Sites\Empty Site\App_Data\packages\jQuery.1.10.2\Tools` subfolder.
- We move `C:\Users\me\Documents\My Web Sites\Empty Site\App_Data\packages\jQuery.1.10.2\Content\Scripts` to `C:\Users\me\Documents\My Web Sites\Empty Site\Scripts`.
- And finally we delete the `C:\Users\me\Documents\My Web Sites\Empty Site\App_Data\packages\jQuery.1.10.2\Content` folder.

If we go to NuGet and select updates you'll see that jQuery is now considered "installed" and an update is available. So, in short, our plan worked - yay!

## Now for bonus points

Just to prove that you can upgrade using the WebMatrix tooling following our manual install let's do it. Click "Update", then "Yes" and finally "I Accept" to the EULA. You'll now see we're now on jQuery 2.0.3.

## Rounding off

In my example I'm only looking at a simple JavaScript library. But the same principal should be able to be applied to any NuGet package as far as I'm aware. Hope that helps!
