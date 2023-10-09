---
slug: docusaurus-3-how-to-migrate-rehype-plugins
title: 'Docusaurus 3: how to migrate rehype plugins'
authors: johnnyreilly
image: ./title-image.png
tags: [docusaurus]
description: Learn how to migrate rehype plugins to Docusaurus 3.
hide_table_of_contents: false
---

Docusaurus v3 is on the way. One of the big changes that is coming with Docusaurus v3 is MDX 2. I use MDX 1 in my blog and I have a number of rehype plugins that I use to improve the experience of my blog. I have:

- [a plugin to improve Core Web Vitals with fetchpriority / lazy loading](../2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md)
- [a plugin to serving Docusaurus images with Cloudinary](../2022-12-26-docusaurus-image-cloudinary-rehype-plugin/index.md)

I wanted to migrate these plugins to Docusaurus v3. This post is about how I did that - and if you've got a rehype plugin it could probably provide some guidance on the changes you'd need to make.

![title image reading "Migrating rehype plugins to Docusaurus 3" with the Docusaurus logos](title-image.png)

<!--truncate-->

## What needs to change?

## Migrating the `fetchpriority` plugin

## Migrating the `cloudinary` plugin
