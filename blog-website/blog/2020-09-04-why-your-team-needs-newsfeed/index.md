---
slug: why-your-team-needs-newsfeed
title: 'Why your team needs a newsfeed'
authors: johnnyreilly
hide_table_of_contents: false
description: 'A newsfeed was built to narrow the gap between an online platform team and their users. It generates real-time stories in Markdown with links.'
---

I'm part of a team that builds an online platform. I'm often preoccupied by how to narrow the gap between our users and "us" - the people that build the platform. It's important we understand how people use and interact with what we've built. If we don't then we're liable to waste our time and energy building the wrong things. Or the wrong amount of the right things.

<!--truncate-->

On a recent holiday I spent a certain amount of time pondering how to narrow the gap between our user and us. We have lots of things that help us; we use various analytics tools like [mixpanel](https://mixpanel.com/), we've got a mini analytics platform of our own, we have teams notifications that pop up client feedback and so on. They are all great, but they're somewhat disparate; they don't give us a clear insight as to who uses our platform and how they do so. The information is there, but it's tough to grok. It doesn't make for a joined up story.

Reaching around for how to solve this I had an idea: what if our platform had a newsfeed? The kind of thing that social media platforms the likes of Twitter and Facebook have used to great effect; a stream of mini-activities which show how the community interacts with the product. People logging in and browsing around, using features on the platform. If we could see this in near real time we'd be brought closer to our users; we'd have something that would help us have real empathy and understanding. We'd see our product as the stories of users interacting with it.

## How do you build a newsfeed?

This was an experiment that seemed worth pursuing. So I decided to build a proof of concept and see what happened. Now I intended to put the "M" into MVP with this; I went in with a number of intentional constraints:

1. The news feed wouldn't auto update (users have the F5 key for that)
2. We'd host the newsfeed in our own mini analytics platform (which is already used by the team to understand how people use the platform)
3. News stories wouldn't be stored anywhere; we'd generate them on the fly by querying various databases / APIs. The cost of this would be that our news stories wouldn't be "persistent"; you wouldn't be able to address them with a URL; there'd be no way to build "like" or "share" functionality.

All of the above constraints are, importantly, reversable decisions. If we want auto update it could be built later. If we want the newsfeed to live somewhere else we could move it. If we wanted news stories to be persisted then we could do that.

## Implementation

With these constraints in mind, I turned my attention to the implementation. I built a `NewsFeedService` that would be queried for news stories. The interface I decided to build looked like this:

```
NewsFeedService.getNewsFeed(from: Date, to: Date): NewsFeed

type NewsFeed {
    startedAt: Date;
    ended at: Date;
    stories: NewsStory[];
}

type NewsStory {
    /** When the story happened */
    happenedAt: Date;
    /** A code that represents the type of story this is; eg USER_SESSION */
    storyCode: string
    /** The story details in markdown format */
    story: string;
}
```

Each query to `NewsFeedService.getNewsFeed` would query various databases / APIs related to our product, looking for interesting events. Whether it be users logging in, users performing some kind of action, whatever. For each interested event a news story like this would be produced:

> Jane Smith logged in at 10:03am for 25 minutes. They placed [an order](https://my-glorious-platform.io/orders/janes-order) worth £3,000.

Now the killer feature here is [Markdown](https://en.wikipedia.org/wiki/Markdown#:~:text=Markdown%20is%20a%20lightweight%20markup,using%20a%20plain%20text%20editor.). Our stories are written in Markdown. Why is Markdown cool? Well [to quote the creators of Markdown](https://web.archive.org/web/20040402182332/http://daringfireball.net/projects/markdown/):

> Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

This crucially includes the ability to include links. This was significant because I want us to be able to be able to click on pieces of information in the stories and be taken to the relevant place in the platform to see more details. Just as you see status updates on, for example, Twitter which lead you on to more details:

> This is the history of [@DefinitelyTyped](https://twitter.com/DefinitelyTyped?ref_src=twsrc%5Etfw): [https://t.co/AY6s3bWnKP](https://t.co/AY6s3bWnKP) Thanks to [@SeaRyanC](https://twitter.com/SeaRyanC?ref_src=twsrc%5Etfw) & [@drosenwasser](https://twitter.com/drosenwasser?ref_src=twsrc%5Etfw) of the [@typescript](https://twitter.com/typescript?ref_src=twsrc%5Etfw) team, [@blakeembrey](https://twitter.com/blakeembrey?ref_src=twsrc%5Etfw) inventor of typings, [@vvakame](https://twitter.com/vvakame?ref_src=twsrc%5Etfw), [@\_stevefenton](https://twitter.com/_stevefenton?ref_src=twsrc%5Etfw), [@basarat](https://twitter.com/basarat?ref_src=twsrc%5Etfw), and of course [@borisyankov](https://twitter.com/borisyankov?ref_src=twsrc%5Etfw) for telling me their parts of the story❤️🌻
>
> — John Reilly (@johnny_reilly) [October 8, 2019](https://twitter.com/johnny_reilly/status/1181542739994976256?ref_src=twsrc%5Etfw)

Again consider this example news story:

> Jane Smith logged in at 10:03am for 25 minutes. They placed [an order](https://my-glorious-platform.io/orders/janes-order) worth £3,000.

Consider that story but without a link. It's not the same is it? A newsfeed without links would be missing a trick. Markdown gives us links. And happily due to my extensive work down the open source mines, I speak it like a native.

The first consumer of the newsfeed was to be our own mini analytics platform, which is a React app. Converting the markdown stories to React is a solved problem thanks to the wonderful [react-markdown](https://github.com/rexxars/react-markdown). You can simply sling Markdown at it and out comes HTML. Et voilà a news feed!

## What's next?

So that's it! We've built a (primitive) news feed. We can now see in real time how are users are getting on. We're closer to them, we understand them better as a consequence. If we want to take it further there's a number of things we could do:

1. We could make the feed auto-update
2. We could push news stories to other destinations. Markdown is a gloriously portable format which can be used in a variety of environments. For instance the likes of Slack and [Teams](../2019-12-18-teams-notification-webhooks/index.md) accept it and apps like these are generally open on people's desktops and phones all the time anyway. Another way to narrow the gap between us and and our users.

It's very exciting!
