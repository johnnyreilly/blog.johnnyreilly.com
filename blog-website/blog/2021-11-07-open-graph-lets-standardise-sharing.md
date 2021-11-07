---
title: 'Open Graph: let's standardise sharing previews'
authors: johnnyreilly
tags: [Open Graph]
image: blog/2021-11-07-open-graph-lets-standardise-sharing/title-image.png
hide_table_of_contents: false
---

The Open Graph protocol has become the standard mechanism for sharing rich content on the web. Whilst the mechanism is roughly standardised, the rendering is not. It's like the web in the year 2000. Back then, a single piece of HTML could be rendered in many different ways, depending upon the browser. The same statement is true now for Open Graph sharing. Sharing can look very different depending upon the platform which is displaying the preview. This post looks at what implementing Open Graph tags for sharing previews looks like and also an examines the different platform rendering issue.

![title image reading "NSwag generated C# client: Open API property name clashes and decimal types rather than double" with a C# logo and Open API logos](../static/blog/2021-11-07-open-graph-lets-standardise-sharing/title-image.png)

## Open Graph protocol and sharing

The [Open Graph protocol](https://ogp.me/) came out of Facebook and it describes itself thusly:

> The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

What Open Graph is all about, is meta tags. Adding meta tags to an HTML page to explicitly define pieces of standardised information. Now there's many purposes for this, and we're interested in just one: sharing.

You may have noticed, that when you share a URL, the platform on which you're sharing it may display a kind of "preview" of the link. Here's an example of sharing a link to a blog on Twitter:

[![screenshot of tweet demonstrating sharing](../static/blog/2021-11-07-open-graph-lets-standardise-sharing/screenshot-of-tweet-demonstrating-sharing.png)](https://twitter.com/johnny_reilly/status/1454092877722800131)

Sharing a link has automagically generated a preview "card" at the bottom of the tweet. It contains an image, it has the title of the blog and it has some description of the post as well.

Twitter made this card using a combination of Open Graph metatags (and some custom tags) which my blog surfaces.

This looks pretty fabulous and it gives the reader of that tweet some fairly rich information about what might be in that post. It potentially saves readers a click if it's obvious that the post isn't particularly interesting to them. Conversely, it makes it more likely that the reader will click if it does seem intriguing. Sharing previews are an asset.

## Open Graph meta tags

Now that we understand what sharing previews give us, let's understand how it works. The [Open Graph](https://ogp.me/#metadata) website has a great walkthrough of the minimum requirement for Open Graph:

> - `og:title` - The title of your object as it should appear within the graph, e.g., "The Rock".
> - `og:type` - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
> - `og:image` - An image URL which should represent your object within the graph.
> - `og:url` - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
>
> As an example, the following is the Open Graph protocol markup for The Rock on IMDB:
>
> ```html
> <html prefix="og: https://ogp.me/ns#">
>   <head>
>     <title>The Rock (1996)</title>
>     <meta property="og:title" content="The Rock" />
>     <meta property="og:type" content="video.movie" />
>     <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
>     <meta
>       property="og:image"
>       content="https://ia.media-imdb.com/images/rock.jpg"
>     />
>     ...
>   </head>
>   ...
> </html>
> ```

```

Whilst social media sharing previews cover similar ground to this, the requirements are actually subtly different. The required tags to place in your head are:

- `og:title` - The title of your page
- `og:description` - A description of the content of that page
- `og:image` - An image URL which should appear in the social media share.
- `og:url` - The canonical URL of your web page.
- `twitter:card` - A [custom tag for Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#started) which will be one of "summary", "summary_large_image", "app", or "player". Probably "summary" or "summary_large_image" for most use cases.

So to get to the point of social previews, we need to implement four Open Graph protocol meta tags (and one extra tag for Twitter).

With this understanding in place; we can take a look at what it would look like to add sharing previews to a website. We'll make ourselves a React website with:

```

npx create-react-app demo

```

Please note, nothing that we're doing here is React specific; it's applicable to all websites regardless of the technology they're built with. We're going to add [`react-helmet`](https://github.com/nfl/react-helmet) as a dependency:

```

yarn add react-helmet

```

This will to allow us to add meta tags to the `head` element easily.




## When platforms diverge

Now we have a sense of what sharing previews look like and what powers them. So far we've looked just at Twitter for examples of sharing previews. However, support for Open Graph sharing previews is widespread. Examples of other places where you can use them include: Facebook, Polywork, Slack, Teams, Linked In, Outlook.com, Discord... The list is now very long indeed.

However, each platform implements sharing previews according to their own standard. What does mean? Well, a link shared on Twitter will look different to an image shared on Outlook.com. For example:

![screenshot of an email being sent in outlook with a share preview card to the same blog showing the untruncated title](../static/blog/2021-11-07-open-graph-lets-standardise-sharing/screenshot-of-email-demonstrating-sharing-with-a-non-cropped-image.png)

Above I'm sharing a link to a blog post. The image is to the left, the title and description is to the right. Now let's look at the same link shared on Twitter:

[![screenshot of a tweet where the image in the share preview card has been cropped making the title unreadable](../static/blog/2021-11-07-open-graph-lets-standardise-sharing/screenshot-of-tweet-demonstrating-sharing-with-a-cropped-image.png)](https://twitter.com/AzureWeekly/status/1436733027489652743)

Here the image is above the title and the description. More distressingly, the image has been cropped which renders the title slightly unreadable.

https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#twitter-cards-and-open-graph
```
