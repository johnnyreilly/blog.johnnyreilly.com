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

I've implemented an approach to tackle this on my blog:

https://johnnyreilly.com/2023/01/18/docusaurus-improve-core-web-vitals-fetchpriority

It does 2 things:

- swizzles the img component to opt out of lazy loading
- implements a rehype plugin which sets `fetchpriority` on the first image and lazy loading on the rest

It would be good to get this into Docusaurus if it makes sense - the question is: does it? And if it does, what sort of implementation makes sense?

noindex tags

Daniel Zuccon

Noindex /tags/
Google doesn’t really like this content anymore. It’s super “thin” and doesn’t add much
value to users landing on your site. It also adds hundreds of pages Google needs to index
for not much gain.

Fix link to https://johnnyreilly.com https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/ec6dcc9ea7e173bed01c7dba870b6aaaa2bd102e

reported to webmaster tools

https://support.google.com/webmasters/thread/197869844?hl=en

Where has this blog featured? section in about

https://support.google.com/webmasters/community?hl=en

The search engine traffic dropped significantly in the second half of October 2022 to my personal technical blog: https://blog.johnnyreilly.com. I think this may be cause by the spam algorithm change rolled out at the same time.

I'm not sure why my site might be considered spam because I've been blogging for 10 years and putting out good content which is regularly featured in various newsletters.

Since the drop off in traffic I started doing a number of things to try and remediate.

- I realised that over time I'd renamed a number of posts and changed the URL. I've now fixed this and added a 301 redirect to the old URL. I've also added a canonical tag to the new URL. I've also been watching the logs to see if there are any 404s which I can fix.

- I migrated from https://blog.johnnyreilly.com to https://johnnyreilly.com on 31st December 2022. I followed the google guidelines on this with regards to 301s and using the change of address tool in the search console.

- Resubmitted the sitemap

- Added robots.txt file

- Cleaned unused subdomains

- Added profile bio to my blog posts, leading to about page with details that should help with the E-E-A-T algorithm update

- added a privacy policy

- added a "back to home page" link to the 404 page

- implemented fetchpriority on the LCP image / removed lazy loading from it. https://johnnyreilly.com/2023/01/18/docusaurus-improve-core-web-vitals-fetchpriority

- added `X-Robots-Tag: noindex` header to `/tags/` / `/pages/` pages on my Docusaurus site as they duplicate content

- my RSS feeds were serving so much content they effectively broke the RSS reader. I've now fixed this by truncating them to the latest 20 posts.

I wrote some of this up in a post here: https://johnnyreilly.com/2023/01/15/how-i-ruined-my-seo - it trended on Hacker News at the weekend.

added JSON-LD breadcrumbs to blog posts and archive pages:

https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

npm run swizzle @docusaurus/theme-classic BlogArchivePage -- --wrap --danger
npm run swizzle @docusaurus/theme-classic BlogPostPage -- --wrap --danger

https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/416/files
