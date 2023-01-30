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

title / url changed:

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/240adb439de0232697e1d458c0341fd679420d64

Add custom 404 page with "Back to Homepage" link

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/57d722905204d48e0e0512e5e7f4798b30880157

https://github.com/facebook/docusaurus/discussions/6030

Added privacy policy https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/743e80f0205cafc7e1ef90c9e9b6da7f1e810b43

fetchpriority on LCP image / no lazy loading

[I've implemented an approach to tackle this on my blog](../2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md):

It does 2 things:

- swizzles the img component to opt out of lazy loading
- implements a rehype plugin which sets `fetchpriority` on the first image and lazy loading on the rest

It would be good to get this into Docusaurus if it makes sense - the question is: does it? And if it does, what sort of implementation makes sense?

added JSON-LD breadcrumbs to blog posts and archive pages:

https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

npm run swizzle @docusaurus/theme-classic BlogArchivePage -- --wrap --danger
npm run swizzle @docusaurus/theme-classic BlogPostPage -- --wrap --danger

https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/416/files

Added multiple breadcrumb lists to blog posts to include tags as well

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/e69633ca6cc6cae98cd405580e9659594ac92f8a

start truncate to have summaries and reduce duplicate content https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/419

rationalise tags:
- https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/420
- https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/418

Fix link to https://johnnyreilly.com https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/ec6dcc9ea7e173bed01c7dba870b6aaaa2bd102e

reported to webmaster tools

https://support.google.com/webmasters/thread/197869844?hl=en

Where has this blog featured? section in about

https://support.google.com/webmasters/community?hl=en

No response so resubmitted a week later: https://support.google.com/webmasters/thread/199296507?hl=en
