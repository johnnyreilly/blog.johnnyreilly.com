---
slug: docusaurus-meta-tags-and-google-discover
title: 'Docusaurus, meta tags and Google Discover'
authors: johnnyreilly
tags: [docusaurus]
image: ./title-image.png
hide_table_of_contents: false
description: 'Boost your websites appearance in Google Discover with high-quality images and `max-image-preview:large` meta tag setting in Docusaurus.'
---

Google Discover is a way that people can find your content. To make your content more attractive, Google encourage using high quality images which are enabled by setting the `max-image-preview:large` meta tag. This post shows you how to achieve that with Docusaurus.

![title image reading "Docusaurus, meta tags and Google Discover" with a Docusaurus logo and the Google Discover phone photo taken from https://developers.google.com/search/docs/advanced/mobile/google-discover](title-image.png)

<!--truncate-->

## Google Discover

I'm an Android user. Google Discover will present articles to me in various places on my phone. [According to the docs](https://developers.google.com/search/docs/advanced/mobile/google-discover):

> With Discover, you can get updates for your interests, like your favorite sports team or news site, without searching for them. You can choose the types of updates you want to see in Discover in the Google app or when you’re browsing the web on your phone.

It turns out that my own content is showing up in Discover. I (ahem) discovered this by looking at the Google search console and noticing a "Discover" tab:

![screenshot of the Google search console featuring a "discover" image](screenshot-of-discover-in-search-console.webp)

As I read up about Discover I noticed this:

> To increase the likelihood of your content appearing in Discover, we recommend the following:
> ...
>
> - Include compelling, high-quality images in your content, especially large images that are more likely to generate visits from Discover. Large images need to be at least 1200 px wide and enabled by the `max-image-preview:large` setting...

I was already trying to include images with my blog posts as described... But `max-image-preview:large` was news to me. [Reading up further](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#max-image-preview) revealed that the "setting" was simply a meta tag to be added to the HTML that looked like this:

```html
<meta name="robots" content="max-image-preview:standard" />
```

Incidentally, applying this setting will affect all forms of search results. So not just Discover, but Google web search, Google Images and Assistant as well. The result of having this meta tag will be that bigger images are displayed in search results, which should make the content more attractive.

## Docusaurus let's get meta

Now we understand what we want (an extra meta tag on all our pages), how do we apply this to Docusaurus?

Well, it's remarkably simple. There's an optional [`metadata`](https://docusaurus.io/docs/api/themes/configuration#metadata) property in `docusaurus.config.js`. This property allows you to configure additional html metadata (and override existing ones). The property is an array of `Metadata`, each entry of which will be directly passed to the `<meta />` tag.

So in our case we'd want to pass an object with `name: 'robots'` and `content: 'max-image-preview:large'` to render our desired meta tag. Which looks like this:

```js
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  //...
  themeConfig: {
    // <meta name="robots" content="max-image-preview:large" />
    metadata: [{ name: 'robots', content: 'max-image-preview:large' }],
    //...
  },
  //...
};
```

With that in place, we find our expected `meta` tag is now part of our rendered HTML:

![screenshot of the meta robots max-image-preview:large tag taken from Chrome Devtools](screenshot-of-meta-tag.png)

## Meta meta

We should now have a more Google Discover-friendly website which is tremendous!

Before signing off, here's a fun fact: the PR that published this blog post is the _same_ PR that added `max-image-preview:standard` to my blog. [Peep it here](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/114) - meta in so many ways 😉
