---
title: 'Image Optimisation with the TinyPNG API'
authors: johnnyreilly
tags: [image optimisation, TinyPNG, API]
image: ./title-image.webp
hide_table_of_contents: false
---

Image optimisation can be automated with the TinyPNG API. This post demonstrates how to do that.

![title image reading "Image Optimisation with the TinyPNG API" with TinyPNG and Lighthouse logos](title-image.webp)

## The problem

Images are a big part of the web. They're also a big part of the web's payload. If you're not careful, you can end up with a site that's slow to load and expensive to host. I run Lighthouse on my blog and I'm always looking for ways to improve the performance of the site. One of the things that Lighthouse flags is image optimisation. It's a good idea to optimise your images; to make sure they're not unhelpfully large.

It's also a good idea to automate that process.
