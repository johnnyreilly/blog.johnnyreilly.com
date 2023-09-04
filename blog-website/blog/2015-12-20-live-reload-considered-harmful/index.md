---
slug: live-reload-considered-harmful
title: 'Live Reload Considered Harmful'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Live Reload is a popular development tool that refreshes web pages automatically, however, its usefulness is questionable. It can disrupt app design.'
---

I've seen it go by many names; [live reload](http://livereload.com/), hot reload, [browser sync](https://browsersync.io/)... the list goes on. It's been the subject of a million demos. It's the focus of a thousand npm packages. Someone tweaks a file and... wait for it... _doesn't have to refresh their browser to see the changes_... The future is now!

<!--truncate-->

Forgive me the sarcasm, but I have come to the conclusion that whilst live reload is impressive... for my own purposes, it is not actually that useful. It certainly shouldn't be the default goto that it seems to have become.

Hear me out people, I may be the voice crying out in the wilderness but I'm right dammit.

![](tumblr_mxjpcobvcg...6_r2_250-4abb938.gif)

## Why is Live Reload a Thing?

What is live reload? Well having to hit F5 after you've made a change... That seems like such hard work right? To quote [Phil Haack](http://haacked.com/archive/2011/12/13/better-git-with-powershell.aspx/):

> ... we’re software developers.... It’s time to AWW TOE MATE!

Yup, automation. Anything that a developer can theoretically automate.... will be automated. Usually this is a good thing but automation can be addictive. And on this occasion it's time for an intervention.

What else could be the attraction? Well, this is speculation but I would say that the implementation actually has something to do with it. Live reload is almost invariably powered by [WebSockets](https://en.wikipedia.org/wiki/WebSocket) and they are certainly cool. Developers I know what you are like. You're attracted by the new shiny thing. You can't resist the allure of WS. And there with live reload idling away in the background you're all bleeding edge. I can say all this because this is exactly what I am like.

## Why is Live Reload a BAD Thing?

Well the OCD part of me is instinctively repelled by the extra `script` tag of alien code that live reload foists upon your app. How very dare that `&lt;script src="http://localhost:35729/livereload.js?snipver=1"&gt;&lt;/script&gt;` push its way into my pristine DOM. It's an outrage.

Perhaps a more convincing rationale is how useful it is to have 2 different versions of your app up on screen at the same time. I like to try things out when I'm working. I get a screen working one way and then I tweak and play with my implementation. I have the app of 10 minutes ago sat side by side with the newly adjusted one. Assess, compare and and declare a winner. That's so useful and live reload does away with it. That's a problem.

Finally, I'm an obsessive 'Ctrl-S'-er. I've been burned by unsaved changes too many times. I'm saving every couple of keypresses. With live reload that usually means I have the noise of a dead application in the corner of my eye as LR obsessively forces the latest brokenness upon me. That sucks.

I've no doubt there are situations where live reload is useful. But for my money that's the exception rather than the rule. Let the madness end now. Just say "no", kids.
