---
slug: migrate-rehype-plugins-to-docusaurus-3
title: 'Migrating rehype plugins to Docusaurus 3'
authors: johnnyreilly
image: ./title-image.png
tags: [docusaurus]
description: Learn how to migrate rehype plugins to Docusaurus 3.
hide_table_of_contents: false
---

Docusaurus v3 is on the way. One of the big changes that is coming with Docusaurus v3 is MDX 2.

- [a plugin to improve Core Web Vitals with fetchpriority / lazy loading](../2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md)
- [a plugin to serving Docusaurus images with Cloudinary](../2022-12-26-docusaurus-image-cloudinary-rehype-plugin/index.md)

Descriptions are important for search engine optimisation (SEO) and for accessibility. You can [read up more on the topic here](https://developers.google.com/search/docs/appearance/snippet). I wanted to have descriptions for _all_ my blog posts. But writing around 230 descriptions for my existing posts was not something I wanted to do manually. I wanted to automate it.

![title image reading "Azure Open AI: generate article metadata with TypeScript" with the Azure Open AI / TypeScript logos](title-image.png)

<!--truncate-->

## TypeScript Azure Open AI SDK
