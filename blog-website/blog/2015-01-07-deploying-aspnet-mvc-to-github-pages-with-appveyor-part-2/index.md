---
slug: deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2
title: 'Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2'
authors: johnnyreilly
tags:
  [
    GitHub Personal Access Token,
    Continuous Integration,
    powershell,
    github pages,
    AppVeyor,
  ]
hide_table_of_contents: false
description: 'To save time, automating open source projects is key. Using AppVeyor and creating static sites with tools like Wget can help update documentation.'
---

"Automation, automation, automation." Those were and are Tony Blair's priorities for keeping open source projects well maintained.

<!--truncate-->

OK, that's not quite true... But what is certainly true is that maintaining an open source project takes time. And there's only so much free time that anyone has. For that reason, wherever you can it makes sense to _AUTOMATE_!

[Last time](../2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1/index.md) we looked at how you can take an essentially static ASP.Net MVC site (in this case my jVUNDemo documentation site) and generate an entirely static version using Wget. This static site has been pushed to [GitHub Pages](https://pages.github.com/) and is serving as the documentation for [jQuery Validation Unobtrusive Native](http://johnnyreilly.github.io/jQuery.Validation.Unobtrusive.Native/) (and for bonus points is costing me no money at all).

So what next? Well, automation clearly! If I make a change to jQuery Validation Unobtrusive Native then AppVeyor already bounds in and performs a [continuous integration build](https://ci.appveyor.com/project/JohnReilly/jquery-validation-unobtrusive-native) for me. It picks up the [latest source](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native) from GitHub, pulls in my dependencies, performs a build and runs my tests. Lovely.

So the obvious thing to do is to take this process and plug in the generation of my static site and the publication thereof to GitHub pages. The minute a change is made to my project the documentation should be updated without me having to break sweat. That's the goal.

## GitHub Personal Access Token

In order to complete our chosen mission we're going to need a GitHub Personal Access Token. We're going to use it when we clone, update and push our GitHub Pages branch. To get one we biff over to Settings / Applications in GitHub and click the "Generate New Token" button.

![](GitHubApplicationSettings.webp)

The token I'm using for my project has the following scopes selected:

![](GitHub-Personal-Access-Token.webp)

## `appveyor.yml`

With our token in hand we turn our attention to AppVeyor build configuration. This is possible using a file called [`appveyor.yml`](http://www.appveyor.com/docs/build-configuration) stored in the root of your repo. You can also use the AppVeyor web UI to do this. However, for the purposes of ease of demonstration I'm using the file approach. The [jQuery Validation Unobtrusive Native `appveyor.yml`](https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native/blob/master/appveyor.yml) looks like this:

```yml

```
