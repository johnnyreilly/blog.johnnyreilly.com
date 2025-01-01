---
slug: slash-command-your-deployment-with-github-actions
title: 'Slash command your deployment with GitHub Actions'
authors: johnnyreilly
tags: [github actions, azure container apps]
image: ./title-image.png
hide_table_of_contents: false
description: 'Slash commands are a great way to interact with your GitHub issues. In this post, we look at how to use slash commands to deploy an Azure Container Apps service with GitHub Actions.'
---

In the world of computing, slash commands have a proud and noble history. They are a way to interact with a system by typing a command into a chat or terminal, usually with a `/` preceding the command; hence the name "slash commands@. [GitHub has its own slash commands](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/about-slash-commands) that you can use in issues and pull requests. They are, in truth, quite limited.

However, through clever use of the GitHub Actions platform, it's possible to build something quite powerful which is "slash-command-shaped". In this post, we'll look at how to implement a `/deploy` slash command which, when invoked in a pull request, will deploy an Azure Container App with GitHub Actions.

![title image reading "Slash command your deployment with GitHub Actions" with the GitHub Actions logo](title-image.png)

The technique we'll use is covering a deployment usecase, as we'll see, it could be adapted to many other scenarios.

<!--truncate-->

## First a bit about nuns

I have an aunt that is a nun, and I've been [overengineering her convent's website for years](../2015-02-11-the-convent-with-continuous-delivery/index.md). Most of the time the site moulders away, but every now and then I get a flurry of requests for minor changes. It deploys thanks to the magic of continuous deployment. But there's only a single environment; production or "main".

Sometimes I'd like to eyeball a change before I've shipped it. Not always, sometimes. A particular case where this is useful, is when [Renovate](https://www.mend.io/renovate/) has submitted a dependency upgrade PR, and I'd like to see the impact without having to install and run it locally somewhere. Or instead of me hitting submit with crossed fingers.

So I decided it was time that the "Convent with Continuous Delivery™️" had a staging environment. And I decided that I'd like to be able to deploy it by entering the slash command `/deploy` in a pull request comment. Like this:

![screenshot of pull request comments](screenshot-pull-request-comments.png)
