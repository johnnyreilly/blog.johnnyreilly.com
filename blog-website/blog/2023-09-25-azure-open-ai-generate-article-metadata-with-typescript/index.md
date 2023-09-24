---
slug: azure-open-ai-generate-article-metadata-with-typescript
title: 'Azure Open AI: generate article metadata with TypeScript'
authors: johnnyreilly
image: ./title-image.png
tags: [azure, typescript]
description: Use the TypeScript Azure Open AI SDK to generate article metadata.
hide_table_of_contents: false
---

This post grew out of my desire to improve the metadata for my blog posts. I have been blogging for more than ten years, and the majority of my posts lack descriptions. A description is meta tag that sits in a page and describes the contents of the page. This is what this posts description looks like in HTML:

```html
<meta
  name="description"
  content="Use the TypeScript Azure Open AI SDK to generate article metadata."
/>
```

Descriptions are important for search engine optimisation (SEO) and for accessibility. You can [read up more on the topic here](https://developers.google.com/search/docs/appearance/snippet). I wanted to be able to generate descriptions for my blog posts based on the content of the post itself. But writing around 230 descriptions for my existing posts was not something I wanted to do manually. I wanted to automate it.

![title image reading "Azure Open AI: generate article metadata with TypeScript" with the Azure Open AI / TypeScript logos](title-image.png)

<!--truncate-->
