---
slug: in-defence-of-pull-requests
title: 'In defence of pull requests'
authors: johnnyreilly
tags: []
image: ./title-image.png
description: 'Some people feel that pull requests are a barrier to contribution. I disagree.'
hide_table_of_contents: false
---

Not everyone values pull requests. I really do, and this post explains why.

![title image reading "In defence of pull requests"](title-image.png)

<!--truncate-->

[Graeme Lockley](https://twitter.com/lockersmyboy) recently shared [this tweet](https://twitter.com/nhumrich/status/1623435760379768832) with me:

![screenshot of tweet saying "Code reviews and pull requests were invented for open source projects where you want to gatekeep changes from people you don't know and don't trust to change the code safely"](screenshot-tweet-code-reviews-and-pull-requests.webp)

I don't feel the same way; and ended up writing a long screed back to Graeme as to why. I thought I'd share it here too, in only slightly refined format:

> I've seen this idea floating around. There is something to be said for low friction contribution for people that you trust. For that reason I definitely apply more scrutiny to PRs from people that I know / trust less as compared to people I know / trust more. However, to add a little more nuance. Here we go!

## Pull Requests provide a moment for contemplation

A moment to take stock of what's been built, and whether we'd be happy with it landing that way. Because I'm an equal opportunities kinda guy, I apply that to myself. When I raise a PR, before I let others know it's ready for review, I will tend to do a first review myself. It's amazing the different perspective you can have as the consumer of a PR as compared to a producer. I find I change things often before sharing with others as a consequence.

## Pull Requests provide a chance for communication

Engineers are not obligated to communicate about what they do. And famously many of us aren't very good at it either. You become good at things that you practice at. PRs provide an opportunity to express in clear language, the aim of a change and why it is implemented in a certain way. That allows the engineer to practice repeatedly the act of communication, which will make them a more useful engineer to those around them.

Very much related to this, PRs are a teaching opportunity. It's a way to level up the next generation of engineers that are learning from you. What we do is more than the code we write, it's the culture we create.

## Pull Requests provide an opportunity for collaboration

This may shock you, but I don't always get things perfect. My ideas and implementations are often "good starts", but which are wildly improved through collaboration with others. PRs provide a way to collaborate on a change. I value them specifically for that reason.

Unfortunately the prompting tweet is talking about PRs being used on OSS projects; and the nature of work I do that _isn't_ OSS means I can't evidence it. However, I can point you to a [PR I raised on the Docusaurus repo](https://github.com/facebook/docusaurus/pull/8378#discussion_r1044277801) where I was collaborating with the marvellous [Sébastien Lorber](https://github.com/slorber) on a change. I'd say it's a good example of how PRs can be used to collaborate on a change; it's definitely how I want to roll regardless of the project I'm working on.

![screenshot of the linked PR demonstrating collaboration https://github.com/facebook/docusaurus/pull/8378#discussion_r1044277801](screenshot-collaborating-on-github.png)

## Where does automated testing fit in?

Finally, automated testing. If you value automated testing, you must ask yourself the question: where does it fit into the contribution picture? Running automated tests against contributions is a good way to test the value those contributions provide. If you don't run them prior to contribution, then when do you run them? And how do you evidence the results?

## Conclusion

Low friction contribution is a good goal. In the case of very simple pull requests, automating from top to bottom with minimal need for human interaction is a great idea. In fact if you'd like to see an example of this in the wild, it's worth taking a look at the automation the TypeScript team, and in particular [Orta Therox](https://orta.io), applied to the [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) repo.

But, safe to say, I think there's a great deal more nuance to the topic than implied by the raw tweet. Pull requests are to be cherished, not spurned. Yay pull requests!
