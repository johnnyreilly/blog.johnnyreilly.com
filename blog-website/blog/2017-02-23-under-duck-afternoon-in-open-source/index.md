---
slug: under-duck-afternoon-in-open-source
title: 'Under the Duck: An Afternoon in Open Source'
authors: johnnyreilly
tags: [ts-loader, webpack]
hide_table_of_contents: false
description: 'A minute-by-minute account of how open source developers fixed an issue with ts-loader and webpack, demonstrating the collaborative nature of the community.'
---

Have you ever wondered what happens behind the scenes of open source projects? One that I'm involved with is [ts-loader](https://github.com/typestrong/ts-loader); a TypeScript loader for webpack. Yesterday was an interesting day in the life of ts-loader and webpack; things unexpectedly broke. Oh and don't worry, they're fixed now.

<!--truncate-->

How things panned out reflects well on the webpack community. I thought it might be instructive to take a look at the legs furiously paddling underneath the duck of open source. What follows is a minute by minute account of my life on the afternoon of Wednesday 22nd February 2017:

### 3:55pm

I'm sat at my desk in the City of London. I have to leave at 4pm to go to the dentist. I'm working away on a project which is built and bundled using ts-loader and webpack. However, having just npm installed and tried to spin up webpack in watch mode, I discover that everything is broken. Watch mode is not working - there's an error being thrown in ts-loader. It's to do with a webpack property called `mtimes`. ts-loader depends upon it and it looks like it is no longer always passed through. Go figure.

### 4:01pm

I've got to go. I'm 15 minutes from Bank station. So, I grab my bag and scarper out the door. On my phone I notice [an issue](https://github.com/TypeStrong/ts-loader/issues/479) has been raised - other people are being affected by the problem too. As I trot down the various alleys that lead to the station I wonder whether I can work around this issue. Using GitHub to fork, edit code and submit a PR on a mobile phone is possible. Just. But it's certainly not easy...

[My PR is in](https://github.com/TypeStrong/ts-loader/pull/481), the various test packs are starting to execute somewhere out there in Travis and Appveyor-land. Then I notice [Ed Bishop](https://github.com/mredbishop) has submitted a [near identical PR](https://github.com/TypeStrong/ts-loader/pull/480). Yay Ed! I'm always keen to encourage people to contribute and so I intend to merge that PR rather than my own.

### 4:12pm

Rubbish. The Waterloo and City Line is out of action. I need to get across London to reach Waterloo or I'll miss my appointment. It's time to start running....

<iframe width="560" height="315" src="https://www.youtube.com/embed/4IBGernmtKA" frameBorder="0" allowFullScreen=""></iframe>

### 4:15pm

It's rather nagging at me that behaviour has changed without warning. This has been reliably in place the entire time I've been involved with ts-loader / webpack. Why now? I don't see any obvious mentions on the webpack GitHub repo. So I head over to the webpack Slack channel and ask: (conversation slightly abridged)

> #### johnny_reilly
>
> Hey all, has something happened to `mtimes`? Behaviour seems to have changed - now undefined occasionally during watch mode. A PR has been raised against ts-loader to work around this [https://github.com/TypeStrong/ts-loader/pull/480#issuecomment-281714600](https://github.com/TypeStrong/ts-loader/pull/480#issuecomment-281714600)
>
> However I'm wondering if this should actually be merged given behaviour has changed unexpectedly
>
> #### sokra
>
> ah...
>
> i removed it. I thought it was unused.
>
> #### johnny_reilly
>
> It's definitely not!
>
> #### sokra
>
> it's not in the public API^^
>
> Any reason why you are not using `getTimes()`?
>
> ...
>
> #### johnny_reilly
>
> Okay, I'm on a train and won't be near a computer for a while. ts-loader is presently broken because it depends on mtimes. Would it be possible for you to add this back at least for now. I'm aware many people depend on ts-loader and are now broken. #### sokra
>
> sure, I readd it but deprecate it.
>
> ...
>
> #### sean.larkin
>
> @sokra is this the change you just made for that watchpack bug fix? Or unlrelated, just wanted to track if I didn't already have the change/issue #### sokra
>
> [https://github.com/webpack/watchpack/pull/48](https://github.com/webpack/watchpack/pull/48)
>
> #### johnny_reilly
>
> This is what the present code does:
>
> ```js
> const watcher =
>   watching.compiler.watchFileSystem.watcher ||
>   watching.compiler.watchFileSystem.wfs.watcher;
> ```
>
> And then `.mtimes`
>
> Should I be able to do `.getTimes()` instead?
>
> #### sokra
>
> actually you can't rely on `watchFileSystem` being `NodeJsWatchFileSystem`. But this is another topic
>
> ...
>
> but yes
>
> #### johnny_reilly
>
> Thanks @sokra - when I get to a keyboard I'll swap `mtimes` for `getTimes()` and report back.

### 5:28pm

Despite various trains being out of action / missing in action I've made it to the dentists; phew! I go in for my checkup and plan to take a look at the issue later that evening. In the meantime I've hoping that Tobias ([Sokra](https://twitter.com/wsokra)) will get chance to republish so that ts-loader users aren't too impacted.

### 6:00pm

Done at the dentist and I'm heading home. Whilst I've been opening wide and squinting at the ceiling, [TypeScript 2.2 has shipped](https://blogs.msdn.microsoft.com/typescript/2017/02/22/announcing-typescript-2-2/). Whilst this is super exciting, according to Greenkeeper, [the new version has broken the build](https://github.com/TypeStrong/ts-loader/pull/483). Arrrrghhhh...

I start to look into this and realise we're not broken because of TypeScript 2.2; we were broken because of the `mtimes`. Tobias has now re-added `mtimes` and published. With that in place I requeue a build and.... drum roll.... we're green!

The good news just keeps on coming as [Luka Zakrajšek](https://twitter.com/bancek) has submitted a [PR which uses `getTimes()` in place of `mtimes`](https://github.com/TypeStrong/ts-loader/pull/482). And the tests pass. Awesome! MERGE. I just need to cut a release and we're done.

### 6:15pm

I'm home. My youngest son has been suffering from chicken pox all week and as a result my wife has been in isolation, taking care of him. We chat whilst the boys watch Paw Patrol as the bath runs. I flick open the laptop and start doing the various housekeeping tasks around cutting a release. This is interrupted by various bathtime / bedtime activities and I abandon work for now.

### 7:30pm

The boys are down and I get on with the release; updating the changelog, bumping the version number and running the tests. For various reasons this takes longer than it normally does.

### 8:30pm

Finally we're there; ts-loader 2.0.1 ships: [https://github.com/TypeStrong/ts-loader/releases/tag/v2.0.1](https://github.com/TypeStrong/ts-loader/releases/tag/v2.0.1).

I'm tremendously grateful to everyone that helped out - thank you all!

> ts-loader 2.0.1 has shipped; thanks [@wsokra](https://twitter.com/wSokra)[@bancek](https://twitter.com/bancek) and @mredbishop [https://t.co/I00c7sJyFo](https://t.co/I00c7sJyFo)[\#typescript](https://twitter.com/hashtag/typescript?src=hash)
>
> [— John Reilly (@johnny_reilly) February 22, 2017](https://twitter.com/johnny_reilly/status/834515296077627392)
