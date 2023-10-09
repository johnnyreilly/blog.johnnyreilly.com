---
slug: docusaurus-3-how-to-migrate-rehype-plugins
title: 'Docusaurus 3: how to migrate rehype plugins'
authors: johnnyreilly
image: ./title-image.png
tags: [docusaurus]
description: Learn how to migrate rehype plugins to Docusaurus 3.
hide_table_of_contents: false
---

Docusaurus v3 is on the way. One of the big changes that is coming with Docusaurus 3 is MDX 2. I use MDX 1 in my blog and I have a number of rehype plugins that I use to improve the experience of my blog. I have:

- [a plugin to improve Core Web Vitals with fetchpriority / lazy loading](../2023-01-18-docusaurus-improve-core-web-vitals-fetchpriority/index.md)
- [a plugin to serving Docusaurus images with Cloudinary](../2022-12-26-docusaurus-image-cloudinary-rehype-plugin/index.md)

I wanted to migrate these plugins to Docusaurus 3. This post is about how I did that - and if you've got a rehype plugin it could probably provide some guidance on the changes you'd need to make.

![title image reading "Migrating rehype plugins to Docusaurus 3" with the Docusaurus logos](title-image.png)

<!--truncate-->

## What needs to change?

The Docusaurus team put out a blog post on preparing for the Docusaurus 3 migration. [Part of that post mentions MDX plugins](https://docusaurus.io/blog/preparing-your-site-for-docusaurus-v3#mdx-plugins):

> All the official packages (Unified, Remark, Rehype...) in the MDX ecosystem are now **ES Modules** only and do not support CommonJS anymore.

This affects how you write your plugins. It also has a bearing on how you import your plugins, given that the Docusaurus configuration file itself is still CommonJS. The post adds:

> If you created custom Remark or Rehype plugins, you may need to refactor those, or eventually rewrite them completely, due to how the new AST is structured.

This turned out to be the case for me. I had to rewrite my plugins completely. I'll go through each of them in turn.

## Migrating the `fetchpriority` plugin

The `fetchpriority` plugin is a rehype plugin that I wrote to improve the Core Web Vitals of my blog. It does this by making the first image on a page eager loaded with `fetchpriority="high"` and lazy loading all other images. The Docusaurus 2 / MDX 1 code looked like this:

```js title="image-fetch-priority-rehype-plugin.js"
// @ts-check
const visit = require('unist-util-visit');

/**
 * Create a rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 * @returns rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 */
function imageFetchPriorityRehypePluginFactory() {
  /** @type {Map<string, string>} */ const files = new Map();

  /** @type {import('unified').Transformer} */
  return (tree, vfile) => {
    visit(tree, ['element', 'jsx'], (node) => {
      if (node.type === 'element' && node['tagName'] === 'img') {
        // handles nodes like this:
        // {
        //   type: 'element',
        //   tagName: 'img',
        //   properties: {
        //     src: 'https://some.website.com/cat.gif',
        //     alt: null
        //   },
        //   ...
        // }

        const key = `img|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const fetchpriorityThisImage =
          !imageAlreadyProcessed ||
          imageAlreadyProcessed === node['properties']['src'];

        if (!imageAlreadyProcessed) {
          files.set(key, node['properties']['src']);
        }

        if (fetchpriorityThisImage) {
          node['properties'].fetchpriority = 'high';
          node['properties'].loading = 'eager';
        } else {
          node['properties'].loading = 'lazy';
        }
      } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {
        // handles nodes like this:

        // {
        //   type: 'jsx',
        //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
        // }

        // if (!vfile.history[0].includes('blog/2023-01-15')) return;

        const key = `jsx|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const fetchpriorityThisImage =
          !imageAlreadyProcessed || imageAlreadyProcessed === node['value'];

        if (!imageAlreadyProcessed) {
          files.set(key, node['value']);
        }

        if (fetchpriorityThisImage) {
          node['value'] = node['value'].replace(
            /<img /g,
            '<img loading="eager" fetchpriority="high" ',
          );
        } else {
          node['value'] = node['value'].replace(
            /<img /g,
            '<img loading="lazy" ',
          );
        }
      }
    });
  };
}

module.exports = imageFetchPriorityRehypePluginFactory;
```

The new plugin looks like this:

```js title="image-fetch-priority-rehype-plugin.mjs"
// @ts-check
import { visit } from 'unist-util-visit';

/**
 * Create a rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 * @returns rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 */
export default function imageFetchPriorityRehypePluginFactory() {
  /** @type {Map<string, string>} */ const files = new Map();

  /** @type {import('unified').Transformer} */
  return (tree, vfile) => {
    visit(tree, ['mdxJsxTextElement'], (node) => {
      if (node.type === 'mdxJsxTextElement' && node['name'] === 'img') {
        // handles nodes like this:
        // {
        //   type: 'mdxJsxTextElement',
        //   name: 'img',
        //   attributes: [
        //     {
        //       type: 'mdxJsxAttribute',
        //       name: 'alt',
        //       value: 'title image reading &quot;Azure Container Apps, Bicep, managed certificates and custom domains&quot; with the Azure Container App logos'
        //     },
        //     {
        //       type: 'mdxJsxAttribute',
        //       name: 'src',
        //       value: {
        //         type: 'mdxJsxAttributeValueExpression',
        //         value: 'require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-azure-portal-bring-your-own-certificates.webp").default',
        //         data: [Object]
        //       }
        //     },
        //     { type: 'mdxJsxAttribute', name: 'width', value: '800' },
        //     { type: 'mdxJsxAttribute', name: 'height', value: '450' }
        //   ],
        //   children: []
        // }

        const srcIndex = node['attributes'].findIndex(
          (attr) => attr.name === 'src',
        );
        const requireString = node['attributes'][srcIndex].value.value;

        const key = `jsx|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const fetchpriorityThisImage =
          !imageAlreadyProcessed || imageAlreadyProcessed === requireString;

        if (!imageAlreadyProcessed) {
          files.set(key, requireString);
        }

        // expect to be -1
        const loadingIndex = node['attributes'].findIndex(
          (attr) => attr.name === 'loading',
        );

        if (fetchpriorityThisImage) {
          // expect to be -1
          const fetchpriorityIndex = node['attributes'].findIndex(
            (attr) => attr.name === 'fetchpriority',
          );
          if (loadingIndex > -1) {
            node['attributes'][loadingIndex].value = 'eager';
          } else {
            node['attributes'].push({
              type: 'mdxJsxAttribute',
              name: 'loading',
              value: 'eager',
            });
          }

          if (fetchpriorityIndex > -1) {
            node['attributes'][fetchpriorityIndex].value = 'high';
          } else {
            node['attributes'].push({
              type: 'mdxJsxAttribute',
              name: 'fetchpriority',
              value: 'high',
            });
          }
        } else {
          if (loadingIndex > -1) {
            node['attributes'][loadingIndex].value = 'lazy';
          } else {
            node['attributes'].push({
              type: 'mdxJsxAttribute',
              name: 'loading',
              value: 'lazy',
            });
          }
        }
      }
    });
  };
}
```

What's different? Well, a number of things; let's go through them.

### CommonJS to ES Module

You'll note the old plugin has the name `image-fetch-priority-rehype-plugin.js` and the new plugin has the name `image-fetch-priority-rehype-plugin.mjs`. This is because the new plugin is an ES Module and the old plugin is CommonJS.

Further to that, the old plugin used `module.exports = imageFetchPriorityRehypePluginFactory` to expose functionality and the new plugin uses `export default imageFetchPriorityRehypePluginFactory`.

### Different AST

The abstract syntax tree (AST) is different. MDX 1 and MDX 2 make different ASTs and we must migrate to the new one. Interestingly, it seems to be slightly simpler in some ways, as MDX 1 surfaced both `element` / `img` nodes and `jsx` nodes and MDX surfaces just `mdxJsxTextElement`.

The logic of the new plugin is similar to the old plugin, but the code is different to cater for the different AST.

And that's it - we have a new plugin that works with Docusaurus 3 and MDX 2.

## Migrating the `cloudinary` plugin

It turns out that the `fetchpriority` plugin is a much more straightforward migration than the `cloudinary` plugin.
