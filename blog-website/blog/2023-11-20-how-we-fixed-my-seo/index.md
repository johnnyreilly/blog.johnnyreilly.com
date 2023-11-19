---
slug: how-we-fixed-my-seo
title: 'How we fixed my SEO'
authors: johnnyreilly
tags: [seo]
image: ./title-image.png
description: In October 2022 traffic to my blog dropped like a stone. Growtika collaborated with me to fix it. This is what we did.
hide_table_of_contents: false
---

This is a follow up to my ["How I ruined my SEO"](../2023-01-15-how-i-ruined-my-seo/index.md) post. That was about how my site stopped ranking in Google's search results around October 2022. This post is about how [Growtika](https://growtika.com/) and I worked together to fix it.

As we'll see, the art of SEO (Search Engine Optimisation) is a mysterious one. We made a number of changes that we believe helped. All told, my site spent about a year out in the cold - barely surfacing in search results. But in October 2023 it started ranking again. And it's been ranking ever since.

This post is a biggie; so buckle up!

![title image reading "How we fixed my SEO" with images of graphs trending upwards in the background](title-image.png)

<!--truncate-->

## Growtika steps up!

I wrote ["How I ruined my SEO"](../2023-01-15-how-i-ruined-my-seo/index.md) almost as self therapy. I was frustrated that my blog's traffic had dropped. I knew it didn't really matter; my motivation for writing my blog is, in large part, about creating a long term memory for myself. But I was still frustrated. I write things that I know people find useful, and so it was suboptimal that my posts were no longer being found.

I should include myself in that. When I'm trying to remember how to do something, and I know I once knew how to do it, I'll often Google it. So it was frustrating that my own blog was no longer being found by me. I was missing me. Vanity, I know.

I shared the post on Hacker News, not really expecting much to happen. But it ranked, and in amongst the conversation that followed, [someone named Growtika offered to help](https://news.ycombinator.com/item?id=34389421#34390189).

![The Growtika company logo](growtika-logo.png)

I hadn't heard of [Growtika](https://growtika.com/) before; SEO is not my world. But it turned out that Growtika specialise in helping organisations with that. Out of the goodness of their hearts, they offered to assist me. Never one to look a gift horse in the mouth, I leapt at the offer.

## The mysterious SEO feedback loop

I spent some time with Growtika talking through my blog. They made some suggestions around getting my blog to align with best practices. They also schooled me on some of the basics of SEO. I was very much a novice in this area, and so I was grateful for the education.

Here's the thing: SEO is a mystery. Or at least, it's not fully understood. Like Coke haven't published their recipe, Google doesn't publish its (ever evolving) algorithm. They do publish [SEO guidelines](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), but they are just that: guidelines. And so, whilst there are best practices, there is no guarantee that following them will result in success.

What's more, the feedback loop for changes is **long**. It's not like fixing a program with a bug, where you tweak the code, run the tests and see if it's fixed. It's more like making a change to a program, and then waiting weeks or months to see if it's fixed. And if it's not, you have to wait again to see if the next change you make fixes it.

Cause and effect are just not as obvious as you might like, when it comes to SEO. So whilst I'm going to share what we did, I can't say for sure what actually lead to the improvement in my blog's SEO. I'm confident that they were all good things to do. But I be certain which of them made the difference.

## Growtika's suggestions

Over time Growtika worked with me, making suggestions of changes we might make that could improve my SEO. I'm going to go through the suggestions over the rest of the post. I'll also share some of the rationale.

### Updated profile and about page

There's a concept used by Google for ranking known as Experience, Expertise, Authoritativeness, and Trust (E-E-A-T). It's about how much Google trusts the content on your site. Growtika suggested that I update the profile on my blog and the about page to demonstrate my expertise and authority on topics.

On each blog post I have a profile that looks like this:

![picture of the profile image of this blog's author](screenshot-profile-picture.webp)

I used to have no text next to my profile; it was just a link that said "John Reilly" which lead to my Twitter profile page. At Growtika's behest I added a title to demonstrate my expertise and authority on topics, and also I switched the link to my about page instead of Twitter.

The about page itself was also updated to include a richer bio and a list of places where my blog has been featured. This was to demonstrate my expertise and authority on topics. We even snuck in some structured data - more on that later!

### Remove or `noindex` unnecessary pages

My blog is built using [Docusaurus](https://docusaurus.io/). Docusaurus has a number of pages that are generated by default that duplicate content. There are "pagination" pages which allow you to navigate click by click through the whole history of a blog.

Also there are "tags" (or category) pages that reproduce blog posts under tags that have been added to blog posts:

![screenshot of tags](screenshot-tags.png)

In both cases, these pages duplicate content. Rather frustratingly, the pages also feature `canonical` link tags which rather suggest that they are the canonical source of the content:

![screenshot of a canonical tag which reads: link rel="canonical" href="https://johnnyreilly.com/page/2"](screenshot-not-helpful-canonical.png)

Growtika spotted that some of these pagination or tags pages were being prioritised over original blog posts. They suggested that I remove or `noindex` the pagination and tags pages to provide a clear signal to search engines about which pages were the most important. I chose to `noindex` them. My blog is hosted on [Azure Static Web Apps](../2023-02-01-migrating-from-github-pages-to-azure-static-web-apps/index.md) and so I was able to achieve this fairly easily by adding the following to my `staticwebapp.config.json` file:

```json title="staticwebapp.config.json"
{
  "route": "/page/*",
  "headers": {
    "X-Robots-Tag": "noindex"
  }
},
{
  "route": "/tags/*",
  "headers": {
    "X-Robots-Tag": "noindex"
  }
},
```

This meant that the pagination and tags pages (which were served up under URLs beginning `/page/` and `/tags/` respectively) were still available, but search engines were encouraged [not to index them by the `X-Robots-Tag: noindex` header](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) that these pages now served.

Growtika also encouraged me to do something of a tag rationalisation. I had a lot of tags, and many of them were not used on more than one blog post. I removed a lot of tags and also added a number of tags to blog posts that were missing them. This was to help search engines understand the content of my blog posts.

### `sitemap.xml` and `robots.txt`

Alongside `noindex`ing the pagination and tags pages, Growtika suggested that I take a look at my `sitemap.xml` - this is automatically generated by Docusaurus. They suggested that I remove the pagination and tags pages from the `sitemap.xml` as it's a little confusing to `noindex` a page and then include it in the `sitemap.xml`.

Further to that, I write posts for other websites sometimes and cross post it on my own blog, with a canonical pointing to the original post. Growtika suggested that I remove these posts from the `sitemap.xml` as they are not the canonical source of the content.

I've a number of post processing steps that run in my blogs build step and I included this filtering in it. In the end it amounted to [filtering an XML file; which is pretty straightforward - I wrote about it to demonstrate](../2022-11-22-xml-read-and-write-with-node-js/index.md).

As well as filtering my `sitemap.xml`, I went a little further and added `lastmod` timestamps to the `sitemap.xml` based on the git commit date of the markdown file that the blog post was generated from. This was to help search engines understand the how recent of the content on my blog is. [I wrote about how I did this](../2022-11-25-adding-lastmod-to-sitemap-git-commit-date/index.md). Google have subsequently announced that they use [`lastmod` as a signal for scheduling re-crawling URLs](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping#the-lastmod-element) and so this turns out to have been a helpful change to make.

Alongside this, I added a `robots.txt` to my blog. These are files that search engines use to understand the structure of a site and what they should and should not index. I didn't previously have one and the one I added was pretty rudimentary:

```text title="robots.txt"
User-agent: *
Allow: /

Sitemap: https://johnnyreilly.com/sitemap.xml
```

I don't know how much this helped, but it certainly didn't hurt.

### Structured data

One of the most intriguing suggestions that Growtika made was to build on the structured data support in my site. Structured data is a way of providing metadata about a page in a machine readable format. It's a way of providing a clear signal to search engines about the content of a page; it makes their lives easier.

As it turned out, I already had some structured data support in my blog; [I'd written about how to add it previously](../2021-10-15-structured-data-seo-and-react/index.md). But Growtika suggested that I add more structured data to my blog. They suggested that I add:

#### FAQs with Structured Data

One of the experiments we ran was to add FAQs to a post, and with that, the equivalent FAQ Structured Data. The intent being to see if this would help with the SEO for that post. So, because I'm super meta, I wrote a [post about how to do that](../2023-04-08-docusaurus-structured-data-faqs-mdx/index.md) **which included** FAQs and the equivalent structured data.

I also added FAQ structured data to another post and Growtika resubmitted it to Google for indexing. Then two things happened. Firstly, the page was indexed:

![screenshot showing the page featuring in search results](screenshot-faqs-structured-data-indexed.webp)

And then the page started featuring FAQs in the search results:

![screenshot showing the page featuring in search results and showing FAQs as well](screenshot-faqs-structured-data.webp)

I've included the reactions at the bottom of each screenshot above - we were quite excited!

#### Site wide structured data

Beyond adding individual structured data to each page and post, Growtika suggested that I add site wide structured data. This would proclaim from the rooftops about the nature of my site.

So I decided to add site wide structured data of the following types: (there are many types of structured data which you can read about at https://schema.org/ and [which Google document](https://developers.google.com/search/docs/appearance/structured-data/search-gallery))

- Website
- Organisation / Brand
- Person

You can see how the structured data is implemented in [this PR](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/676). We used the [`headTags` API in Docusaurus](https://docusaurus.io/docs/api/docusaurus-config#headTags) to add site wide JSON-LD structured data. Funnily enough, [I contributed the `headTags` API to Docusaurus](https://github.com/facebook/docusaurus/pull/8151) long before I thought I'd end up using it for this!

In this change we are _heavily_ inspired by the work [Yoast have done with structured data](https://yoast.com/rich-results-schema-structured-data-story/).

With this in place, every page that search engines index on my blog will have structured data that describes the site as a whole.

#### Breadcrumbs with Structured Data

Finally Growtika suggested that I add breadcrumbs to my blog posts. Breadcrumbs are a way of indicating to search engines where a page sits in the hierarchy of a site. [I wrote about how I did this](../2023-02-05-docusaurus-blogs-adding-breadcrumb-structured-data/index.md). It's worth noting that the approach outlined in that post I've subsequently simplified. Originally I added a breadcrumb for the page structure and also one per tag on the post. I've since removed the tag breadcrumbs as they were not adding much value. Less is more.

### Do backlinks better!

I mentioned in ["How I ruined my SEO"](../2023-01-15-how-i-ruined-my-seo/index.md) that I had a number of backlinks to my blog. I also mentioned that I had broken a number of the backlinks by my carelessness. Growtika suggested that I fix the broken backlinks and also that I do a better job of backlinks in general.

I'd already implemented support for dynamic redirects on my blog. What this meant was, if someone linked through to a non-existent page on my blog, rather than having just a 404 Not Found, I could do some fairly sophisticated work to redirect them to the correct URL. Thus protecting (and unbreaking previously broken) backlinks. By the way, using Azure Static Web Apps as my hosting mechanism really helped me out here as the dynamic redirect mechanism I had was super powerful - I wasn't limited to regexes. If you want see how I did that [have a read of this](../2022-12-22-azure-static-web-apps-dynamic-redirects-azure-functions/index.md).

Growtika said what I had was good, but I could do better. They suggested that I:

- exhaustively fix all my broken backlinks; getting them all to redirect to the correct place. Tedious, but worth it.
- add a redirect from my old blog domain to my new one (blog.johnnyreilly.com -> johnnyreilly.com)
- redirect **only once**. I had a number of redirects that were chained together. 301 leading to 301 leading to 301 (yes!) and only then leading to a 200. Growtika suggested that I redirect only once. This was to ensure that search engines didn't have to follow a chain of redirects to get to the content they were looking for. Search engines don't like that by all accounts; you lose "link juice" the more redirects there are. Also, multi redirects make my website work harder than it needs to.

Again, less is more! With these changes made, I had a much better backlink story.

### Remove date from urls

It used to be the case that the URLs for my blog posts always featured the date of publication. This was a hangover from when I used to use Blogger as my blogging platform. I'd migrated from Blogger to Docusaurus, and I'd kept the date in the URL. It so happens that Docusaurus has a similar behaviour too.

Growtika suggested that I remove the date from the URL. This was to make the URLs shorter and more readable. It was also to make the URLs more stable; if I ever changed the date of a blog post, the URL would change. This would break any backlinks to the blog post.

I must admit, I didn't really want to make this change. I rather liked having the date in the URL. But, in Growtika we trust. I did it.

Where you used to go to:

https://johnnyreilly.com/2019/10/08/definitely-typed-movie

You now go to:

https://johnnyreilly.com/definitely-typed-the-movie

And of course, we made sure the redirect mechanism was in place to ensure that the old URLs still worked. You can test it if you like!

![screenshot of 301 redirect from the old url to the dateless one](screenshot-301-redirect.webp)

To implement this we used the [`slug feature of Docusaurus`](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#slug). If you want to see the mega PR that implemented this on nearly 300 blog posts [it's here](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/423/files). You won't be surprised to learn I scripted this change - life's too short to do boring things by hand.

### Improving site performance

Another aspect which factors into SEO is performance. Google has a [Core Web Vitals](https://web.dev/articles/vitals) measurement which is about evaluating the performance of websites. It covers how fast a website loads, how responsive it is / how quickly it becomes interactive.

The thing that was hurting my blog's performance was images. The images on my blog were generally not optimised at all. They were also not lazy loaded. This meant that the images were slowing down the loading of my blog, and this reflected in my [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) scores.

I took a number of actions to improve the site image performance.

#### Improved performance using TinyPNG's image optimisation API

The first, and most obvious, was to optimise the images on my blog. There's many ways you can do this; I chose to use [TinyPNG's API](https://tinypng.com/developers). I wrote about [how I did this](../2023-01-22-image-optimisation-tinypng-api/index.md). Ultimately I wrote a script that optimised all the images on my blog, and wrote allowed me to run it on demand for the images of a particular post.

This shrunk the file size of images my site served significantly, and improved the performance of my blog.

I also [added Lighthouse to my blog's build step](../2022-03-20-lighthouse-meet-github-actions/index.md), so I could get some performance measurements being surfaced into my PRs. This made it easy to catch regressions where I might accidentally add unoptimised images to my blog.

#### Improved performance using Cloudinary's on demand image transformation CDN

Having tackled the low hanging fruit of images not being optimal in the first place, I then went further. Cloudinary offer a [CDN that can transform images on demand](https://cloudinary.com/documentation/image_transformations). This means that you can serve the same image in different sizes, formats and qualities depending on the device that is requesting it. This is a great way to improve performance.

I was able to plug the Cloudinary CDN into my blog using by building a the [`rehype-cloudinary-docusaurus` plugin](https://github.com/johnnyreilly/rehype-cloudinary-docusaurus) which can be used to integrate Cloudinary into Docusaurus. You can [read more about how it works here](../2022-12-26-docusaurus-image-cloudinary-rehype-plugin/index.md).

Now when my blog serves an image, it serves the optimal image for the device that is requesting it. This improves the performance of my blog. (And you can do this too if you're using Docusaurus!)

In fact I went a little further and scripted the patching of my [Open Graph images](../2021-12-12-open-graph-sharing-previews-guide/index.md) to make use of Cloudinary too. This meant that the images that were shared on social media were also optimised for the device that was requesting them. I don't think this helped with SEO, but I'd noticed that large / slow loading Open Graph images aren't always used by platforms that support the Open Graph protocol. With this in place, this became much less of an issue.

Incidentally, Cloudinary got wind of this change and invited me onto their [DevJams live stream to talk about it](https://youtube.com/watch?v=G4WTEEwI6Qs). I was very flattered to be asked and it was a lot of fun!

#### Improved performance using `fetchpriority="high"` and `loading="lazy"`

So far we'd handled the performance of images on my blog by optimising them and serving them in an optimal way. But there was more we could do. We could also make sure that the images on my blog were loaded in an optimal way.

We did this by adding `fetchpriority="high"` to the first image on each blog post; the "title" image if you will. This is a hint to the browser that the image is important and should be loaded as soon as possible. We also added `loading="lazy"` to all the other images on the blog post. This is a hint to the browser that those images (the "below the fold" images) are not as important and can be loaded later if and when they are required.

The effect of these two combined, is that when a browser lands on a blog post it loads the first image as soon as possible, and then stops. The upshot of this is that the Largest Contentful Paint (LCP) is loaded as soon as possible and then the browser **isn't** immediately going to load the rest of the images. They may be loaded... Or they may not - it depends on whether people scroll down to that image. This translates into improved perceived performance / user experience.

[I've written about this was implemented in depth here](../2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md).

### Internal linking / footer links

Growtika advised that it was worth taking a look at our internal linking strategy. This is about how we link to other pages on our blog from within our blog posts. The idea is that we should link to other pages on our blog that are relevant to the topic of the blog post. This helps search engines understand the structure of our blog and the relationships between the pages.

This was something that I did a little, but I didn't really think about. I'm now much more intentional around internal linking. I'm very much an editor of my content, and as I'm editing my posts / writing new posts I'll take a look at whether I'm linking to other relevant posts on my blog.

Alongside that, Growtika suggested that the footer of my site was a prime place to add links to significant posts on my site, and also to give an indication of topics that this site seeks to cover.

A picture is worth a thousand words, so here's what the footer of my site used to look like:

![screenshot of the site with very few links or much at all in the footer](screenshot-footer-before.webp)

And here is what it looks like now:

![screenshot of the site with a good number of links in the footer](screenshot-footer-after.png)

As you can see, the difference is significant. With the new enhanced footer I can call out particular articles around themes that I cover, I can highlight popular articles, and I can also highlight articles that I think are particularly important. This is both about helping search engines understand what I consider to be important in my site, it's also helpful for humans that might scroll that far down. And goshdarnit, I think it looks rather fine too!

### Add meta description to blog posts

blog-website/blog/2023-09-25-azure-open-ai-generate-article-metadata-with-typescript/index.md

### Improve crawlability

rename archive to blog

we made sure your site follow all the guidelines

- not needed pages were removed or marked as noindex
- improved crawlability
- added bio and author box to make the site follow the E-E-A-T algorithm update
- improved the internal links to strategic articles
- cleaned subdomain and everything that's not needed
- follow the new sitemap guidelines
- docosaurus by default have the tagging system and every tag page just copied all the content from the article without canonical tag, we changed it to avoid having the same content on hundreds of pages
- improved the about me page
- meta optimization
- robots txt
- optimized the speed (i think it was done at one point you can check, not sure haha)

https://reportcontent.google.com/forms/dmca_search?hl=en&utm_source=wmx&utm_medium=deprecation-pane&utm_content=legal-removal-request

DMCA takedown request for my own content

not sharing their details as I dont like them

![screenshot of screen acknowledging my report](screenshot-google-webmasters-report.webp)

## Add custom 404 page with "Back to Homepage" link

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/57d722905204d48e0e0512e5e7f4798b30880157

https://github.com/facebook/docusaurus/discussions/6030

Added privacy policy https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/743e80f0205cafc7e1ef90c9e9b6da7f1e810b43

## Reported to webmaster tools

It turns out there's a kind of Stack Overflow for SEO called [webmaster tools / Search Console help](https://support.google.com/webmasters/community?hl=en). Growtika encouraged me to put a report up there which I did:

https://support.google.com/webmasters/thread/197869844?hl=en

There wasn't any response so I resubmitted a week later with a little more detail: https://support.google.com/webmasters/thread/199296507?hl=en

I then received two responses; one friendly but essentially just saying "wait and see". The other response wasn't so friendly, but it turned out that poster has something of a pattern of unhelpfulness.

Either way, whilst we tried to get help from the community here, we rather drew a blank I'm afraid.

8 recent posts, 20 posts per page:
https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/56ff7b76efc74e43494daa2ebe55b86f9806b5b5
