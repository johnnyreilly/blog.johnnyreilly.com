---
title: 'How I fixed my SEO'
authors: johnnyreilly
tags: [SEO]
image: ./title-image.png
hide_table_of_contents: false
---

In October 2022 traffic to my blog dropped like a stone. What happened? Somehow I ruined my SEO. Don't be me. I'll tell you what I got up to and hopefully you can avoid doing the same.

![title image reading "How I ruined my SEO" with an image of a tire fire in the background](title-image.png)

## What I did

[robots.txt added](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/405)

https://reportcontent.google.com/forms/dmca_search?hl=en&utm_source=wmx&utm_medium=deprecation-pane&utm_content=legal-removal-request

DMCA takedown request for my own content

not sharing their details as I dont like them

## Profile title and link changed

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/240adb439de0232697e1d458c0341fd679420d64

I used to have no title next to my profile, and the link was to my blog.  Growtika suggested adding a title to demostrate my expertise and authority on topics, and also linking to my about page instead of Twitter. This also gave me the chance to power up my about page. JSON-LD structured data support etc

## Add custom 404 page with "Back to Homepage" link

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/57d722905204d48e0e0512e5e7f4798b30880157

https://github.com/facebook/docusaurus/discussions/6030

Added privacy policy https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/743e80f0205cafc7e1ef90c9e9b6da7f1e810b43

## Improve performance with fetchpriority on LCP image / no lazy loading

[I've implemented an approach to tackle this on my blog](../2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md):

It does 2 things:

- swizzles the img component to opt out of lazy loading
- implements a rehype plugin which sets `fetchpriority` on the first image and lazy loading on the rest

It would be good to get this into Docusaurus if it makes sense - the question is: does it? And if it does, what sort of implementation makes sense?

## JSON-LD breadcrumbs

https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/425

## Reduce duplicate content

start using truncate to have summaries and reduce duplicate content https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/419

rationalise tags:
- https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/420
- https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/418

## remove date from urls with `slug`

https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/423

## Added a "Where has this blog featured? section" in about


Fix link to https://johnnyreilly.com https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/ec6dcc9ea7e173bed01c7dba870b6aaaa2bd102e

## Reported to webmaster tools

It turns out there's a kind of Stack Overflow for SEO called [webmaster tools / Search Console help](https://support.google.com/webmasters/community?hl=en
). Growtika encouraged me to put a report up there which I did:

https://support.google.com/webmasters/thread/197869844?hl=en

There wasn't any response so I resubmitted a week later with a little more detail: https://support.google.com/webmasters/thread/199296507?hl=en

I then received two responses; one friendly but essentially just saying "wait and see".  The other response wasn't so friendly, but it turned out that poster has something of a pattern of unhelpfulness.

Either way, whilst we tried to get help from the community here, we rather drew a blank I'm afraid.

8 recent posts, 20 posts per page:
https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/56ff7b76efc74e43494daa2ebe55b86f9806b5b5

## Redirect URLs but once

This PR moves the redirect mechanism to redirect only once, and to fully qualified URLs.  Aligned with this, we'll also remove the redirect from blog.johnnyreilly.com -> johnnyreilly.com that sits in Cloudflare. https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/471

