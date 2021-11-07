---
title: 'Open Graph: let's standardise sharing'
authors: johnnyreilly
tags: [Open Graph]
image: blog/2021-10-31-nswag-generated-c-sharp-client-property-name-clash/title-image.png
hide_table_of_contents: false
---

The Open Graph protocol has become the standard mechanism for sharing rich content on the web. Whilst the mechanism is roughly standardised, the rendering is not. It's like the web in the year 2000. Back then, a single piece of HTML could be rendered in many different ways, depending upon the browser. The same statement is true now for Open Graph sharing. Sharing can look very different depending upon the platform which is displaying the share. This post is a discussion of that issue.

![title image reading "NSwag generated C# client: Open API property name clashes and decimal types rather than double" with a C# logo and Open API logos](../static/blog/2021-10-31-nswag-generated-c-sharp-client-property-name-clash/title-image.png)

## Open Graph protocol and sharing

The [Open Graph protocol](https://ogp.me/) came out of Facebook and it describes itself thusly:

> The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

What Open Graph is all about, is meta tags. Adding meta tags to an HTML page to explicitly define pieces of standardised information. Now there's many purposes for this, and we're interested in just one: sharing.

You may have noticed, that when you share a URL, the platform on which you're sharing it may display a kind of "preview" of the link. Here's an example of sharing a link to a blog on Twitter:

[![screenshot of tweet demonstrating sharing](../static/blog/2021-11-07-open-graph-lets-standardise-sharing/screenshot-of-tweet-demonstrating-sharing.png)](https://twitter.com/johnny_reilly/status/1454092877722800131)

Sharing a link has automagically generated a preview "card" at the bottom of the tweet. It contains an image, it has the title of the blog and it has some description of the post as well.

Twitter made this using a combination of Open Graph metatags (and some custom tags) which my blog surfaces.

This looks pretty fabulous and it gives the reader of that tweet some fairly rich information about what might be in that post. It potentially saves readers a click if it's obvious that the post isn't particularly interesting to them. Conversely, it makes it more likely that the reader will click if it does seem intriguing. Sharing previews are an asset.

https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#twitter-cards-and-open-graph
