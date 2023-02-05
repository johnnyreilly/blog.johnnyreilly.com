---
slug: docusaurus-blogs-adding-breadcrumb-structured-data
title: 'Docusaurus blogs: adding breadcrumb Structured Data'
authors: johnnyreilly
tags: [Docusaurus, RSS]
image: ./title-image.png
description: 'Docusaurus blogs can add breadcrumb Structured Data to their blog posts. This post shows how to do it in the JSON-LD format.'
hide_table_of_contents: false
---

A new API landed in Docusaurus 2.3.0 - it's called `createFeedItems`. It's a great API that allows you to tweak the Atom / RSS / JSON feeds for your blog. This post shows how to use it with the git commit date.

![title image reading "Docusaurus blogs: adding breadcrumb Structured Data" with the Docusaurus logo](title-image.png)

<!--truncate-->

https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/416

added JSON-LD breadcrumbs to blog posts and archive pages:

https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

npm run swizzle @docusaurus/theme-classic BlogArchivePage -- --wrap --danger
npm run swizzle @docusaurus/theme-classic BlogPostPage -- --wrap --danger

https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/416

Added multiple breadcrumb lists to blog posts to include tags as well

https://github.com/johnnyreilly/blog.johnnyreilly.com/commit/e69633ca6cc6cae98cd405580e9659594ac92f8a
