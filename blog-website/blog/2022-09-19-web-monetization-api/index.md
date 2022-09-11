---
title: 'Getting started with the Web Monetization API'
authors: johnnyreilly
tags: [Web Monetization]
image: ./title-image.png
hide_table_of_contents: false
---

The Web Monetization API is a JavaScript browser API that allows the creation of a payment stream from the user agent to the website. This post walks through getting started adding it to a site.

![title image reading "Web Monetization API - getting started" with the Web Monetization logo](title-image.png)

## The Web Monetization API

I recently attended the [HalfStack at the Beach](https://halfstackconf.com/newquay/) conference and heard a talk from [Alex Lakatos](https://twitter.com/avolakatos) on the Web Monetization API. I hadn't heard about this previously, and I learned that it was a new way to monetize a website. My blog already features a [Buy Me a Coffee](https://www.buymeacoffee.com/qUBm0Wh) link, which allows generous people to send me small amounts of money if they've found something I've written useful. The Web Monetization API appears to be that, but built into the browser and proposed proposed as a W3C standard at the [Web Platform Incubator Community Group](https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785).

I was intrigued. Alex was kind enough to share some links with me, and I decided to take the Web Monetization API for a spin, and see what it was like. So this post is going to be exactly that. I'm a noob; I don't know how to use the Web Monetization API (or much about it TBH). Over the course of this post I'll try and integrate it into my blog. As I do that I'll share what I'm doing and how I found things; to try to provide a useful resource (and some feedback) on what adoption feels like.

Alex shared a link to https://webmonetization.org/ - in there I found a [quick start](https://webmonetization.org/docs/getting-started) which I decided to work through.

## Wallet

The first thing to do is [setting up a wallet](https://webmonetization.org/docs/getting-started#1-set-up-a-web-monetized-wallet). I imagine that this is comparable to having a bank account in a bank. There appear to be two options for this:

- [uphold](https://wallet.uphold.com/)
- [gatehub](https://gatehub.net/)

[Right now, uphold offers a greater number of features](https://webmonetization.org/docs/ilp-wallets/#digital-wallets), so I'll create a wallet with them.

## Uphold

The signup process was pretty straightforward. I got slightly confused was seeing this prompt:

![screenshot reading "How will you use Uphold? ... Trade cryptocurrencies, Currency conversion, Deposit or withdraw cryptocurrencies, Transfers between users"](./screenshot-uphold-purpose.png)

I wasn't entirely sure what I needed. The Web Monetization API seemed most likely to be about transfers between users, so I went with that.

When it asked this question:

![screenshot reading "International payments/transfers Tell us where you'll be moving money. Select from the regions below."](./screenshot-uphold-transfers.png)

I opted to accept all regions. After the usual signup process, I was able to see able to see my new (empty) account:

![screenshot of the dashboard of uphold with a balance of £0](./screenshot-uphold-dashboard.png)

## Payment pointer

The next thing we need to do is acquire our payment pointer. I found this tricky to track down and eventually Alex showed me where to go. On the right hand side of the dashboard, there is an "anything to anything" section:

![gif of the payment pointer found in uphold](./payment-pointer.gif)

Clicking on the "copy" button copies the payment pointer to the clipboard. I'll need this later. In my case that is: `$ilp.uphold.com/LwQQhXdpwxeJ`.

You might be looking at the payment pointer and thinking, "that looks kinda URL-y" ... And you'd be be right! Because `$ilp.uphold.com/LwQQhXdpwxeJ` is equivalent to this URL: `https://ilp.uphold.com/LwQQhXdpwxeJ`. We just swap out the `$` for `https://`.

## Monetization link tag

The next thing to do is to make a `link` tag using the payment pointer. This is the tag that will tell the browser that the page supports Web Monetization. The tag looks like this:

```html
<link rel="monetization" content="https://ilp.uphold.com/LwQQhXdpwxeJ" />
```

As you can see, the content attribute is the payment pointer I just acquired, in its "https" form.

## Docusaurus link tag

The final step here would be adding this link tag to the pages served up by my site. I'm using Docusaurus for my blog, so I'll need to add it to the [`docusaurus.config.js` file](https://docusaurus.io/docs/next/seo#global-metadata).

The syntax for adding an extra link tag in the head comes in the form of a mini plugin:

```js
module.exports = {
  plugins: [
    function extraHeadTagsPlugin(context, options) {
      return {
        name: 'extra-head-tags-plugin',
        injectHtmlTags({ content }) {
          return {
            headTags: [
              {
                tagName: 'link',
                attributes: {
                  rel: 'monetization',
                  href: 'https://ilp.uphold.com/LwQQhXdpwxeJ',
                },
                // This will become <link rel="monetization" content="https://ilp.uphold.com/LwQQhXdpwxeJ" /> in the generated HTML
              },
            ],
          };
        },
      };
    },
  ],
};
```

It's possible the code required to add this link will become simpler [if this pull request lands](https://github.com/facebook/docusaurus/pull/8077). Until then, we will need to use a plugin.

## Hello world Web Monetization API?

With this done, my site is web monetized! Or at least... I think it is... What does that mean? Well, I wasn't entirely sure. I reached out to Alex again, showed him my site and said "does this work?" He said:

![screenshot of conversation with Alex on Twitter, him saying "Hey John. That's it! I just sent you a little tip on uphold, if you've set that up correctly, you'll see it in your account"](screenshot-am-i-doing-it-right-alex.png)

And sure enough, I found Alex had indeed sent me the princely sum of 83 pence ($1) on Uphold... It had worked!

## Coil

It turned out that Alex had used a browser extension called [Coil](https://coil.com/) to send me the money. It's a browser extension that allows you to send money to websites that support Web Monetization. It's a bit like a browser based Patreon or Buy Me a Coffee. But slightly different; [to quote their docs](https://help.coil.com/docs/general-info/intro-to-coil/index.html#how-is-coil-different-from-other-membership-services-like-patreon-and-flattr):

> With services like Patreon, you select which creators to support, then pay each creator separately, depending on the membership plans they offer. Coil streams payments in real time to any web monetized sites you visit.

So people can explicitly tip a website using Coil, or they can just use Coil to browse the web and the website will get a small amount of money from Coil. For years I've heard whispers of "micropayments are the missing piece of the web" - this seemed to be solving that problem and I was intrigued.

I'd set up an Uphold account so I could receive money from other people. Coil is like the flipside of that; it would let me send money to other people. You need that money to come from somewhere. It turned out that I could set up a Coil account using the Uphold account I'd just created:

![screenshot of entering my uphold payment pointer into my coil account](screenshot-setting-up-coil.png)

So that's what I did. I entered my payment pointer into Coil and now I can send money to other people's sites that support Web Monetization. But what does that look like? Well, I decided to try it out on my own site. I installed the [Coil browser extension](https://coil.com/) and then went to my site and gave it a whirl:

![GIF of tipping myself $1 using Coil](tipping-with-coil.gif)

I went to my blog and sure enough, I was able to send a tip to myself. When I flipped over to my Uphold account, I could see that the money was on its way!

![screenshot of uphold including details of an incoming payment of $1 or 93 pence](screenshot-uphold-incoming-tip.png)

Just as Alex had been able to send me $1 on September 4th, I was able to send myself $1 on September 10th! (Incidentally, the shift in amount from 83 pence to 93 pence between transactions is purely due to the changing value exchange rate between GBP and USD. At present the Pound is decreasing in value against the Dollar, so the amount of money I received in GBP when I tipped myself $1 worked out to be more than when Alex did.)

## Conclusion

In this post we have got to know the Web Monetization API, we've used it to monetize our own site and we've used it to tip ourselves. We've also seen how Coil works and how it can be used to tip other people's sites. I'm excited to see how this develops. It feels like a way to support people who are making things we care about on the web.

Thanks so much to [Alex Lakatos](https://twitter.com/avolakatos) for telling me about this in the first place and for answering all my questions!
