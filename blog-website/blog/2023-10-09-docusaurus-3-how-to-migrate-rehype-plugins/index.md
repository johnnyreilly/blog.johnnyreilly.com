---
slug: docusaurus-3-how-to-migrate-rehype-plugins
title: 'Docusaurus 3: how to migrate rehype plugins'
authors: johnnyreilly
image: ./title-image.png
tags: [docusaurus]
description: Learn how to migrate rehype plugins to Docusaurus 3.
hide_table_of_contents: false
---

Docusaurus v3 is on the way. One of the big changes that is coming with Docusaurus 3 is MDX 3. My blog has been built with Docusaurus 2 and I have a number of rehype plugins that I use to improve the experience of the blog. These include:

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
function imageFetchPriorityRehypePlugin() {
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

module.exports = imageFetchPriorityRehypePlugin;
```

The new plugin looks like this:

```js title="image-fetch-priority-rehype-plugin.mjs"
// @ts-check
import { visit } from 'unist-util-visit';

/**
 * Create a rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 * @returns rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 */
export default function imageFetchPriorityRehypePlugin() {
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

Further to that, the old plugin used `module.exports = imageFetchPriorityRehypePlugin` to expose functionality and the new plugin uses `export default imageFetchPriorityRehypePlugin`.

### Different AST

The abstract syntax tree (AST) is different. MDX 1 and MDX 3 make different ASTs and we must migrate to the new one. Interestingly, it seems to be slightly simpler in some ways. MDX 1 surfaced both `element` / `img` nodes and `jsx` nodes. By contrast, MDX 3 appears to surface just `mdxJsxTextElement` which are similar to MDX 1's `jsx` nodes, but come with their own AST representation of expression based attributes in the `data` property.

The logic of the new plugin is similar to the old plugin, but the code is different to cater for the different AST.

And that's it - we have a new `fetchpriority` plugin that works with Docusaurus 3 and MDX 3!

## Migrating the `cloudinary` plugin

Firstly, let's remind ourselves what the `cloudinary` plugin does. It takes an image URL and transforms it into a Cloudinary URL. So like this:

```diff
-https://my.website.com/cat.gif
+https://res.cloudinary.com/demo/image/fetch/https://my.website.com/cat.gif
```

And at runtime, Cloudinary's [Fetch mechanism](https://cloudinary.com/documentation/fetch_remote_images#fetch_and_deliver_remote_files) will handle transforming the image into a format that is optimised for the browser that is requesting it.

It turns out that the `fetchpriority` plugin is a much more straightforward migration than the `cloudinary` plugin. And the reason for that is related to the aforementioned AST changes. Let's start with the old plugin:

```js title="cloudinary-rehype-plugin.js"
//@ts-check
const visit = require('unist-util-visit');

/**
 * Create a rehype plugin that will replace image URLs with Cloudinary URLs
 * @param {*} options cloudName your Cloudinary’s cloud name eg demo, baseUrl the base URL of your website eg https://johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
function imageCloudinaryRehypePlugin(
  /** @type {{ cloudName: string; baseUrl: string }} */ options,
) {
  const { cloudName, baseUrl } = options;
  const srcRegex = / src={(.*)}/;

  /** @type {import('unified').Plugin<[], import('hast').Root>} */
  return (tree) => {
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

        const url = node['properties'].src;

        node[
          'properties'
        ].src = `https://res.cloudinary.com/${cloudName}/image/fetch/${url}`;
      } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {
        // handles nodes like this:

        // {
        //   type: 'jsx',
        //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
        // }

        const match = node['value'].match(srcRegex);
        if (match) {
          const urlOrRequire = match[1];
          node['value'] = node['value'].replace(
            srcRegex,
            ` src={${`\`https://res.cloudinary.com/${cloudName}/image/fetch/${baseUrl}\$\{${urlOrRequire}\}\``}}`,
          );
        }
      }
    });
  };
}

module.exports = imageCloudinaryRehypePlugin;
```

The old plugin had two kinds of nodes it had to deal with, `element` and `jsx`. The new plugin will have to deal with just one kind of node, `mdxJsxTextElement`. (Just the same as with the `fetchpriority` plugin.)

Now you may have noticed that the JSX node in the old plugin has a slightly more complex `src` attribute:

```jsx
<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />`
```

That `src` attribute is a JavaScript expression. It's not a string. It's a JavaScript expression that will be evaluated later by webpack, and will return the path to the image in the final (webpack-based) Docusaurus build.

So transformation into a Cloudinary URL for JSX nodes is a little tougher. In the MDX 1 plugin, we needed to wrap the `require` expression in backticks and prefix it with `https://res.cloudinary.com/${cloudName}/image/fetch/${baseUrl}` where `${baseUrl}` is the base URL of our website. We also need to prefix the expression with a `$` to indicate that it's a JavaScript expression. Tough to read but it works.

Rereading that paragraph, I realise it's hard to understand. Perhaps easier to see it in action. Here's what we want our plugin to do to the JSX node above:

```diff
-require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-azure-portal-bring-your-own-certificates.webp").default
+`https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com${require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-azure-portal-bring-your-own-certificates.webp").default}`
```

It turns out it's even tougher doing this with MDX 3 as compared to MDX 1. This is because MDX 3's AST includes all kinds of metadata around the `mdxJsxAttributeValueExpression`:

```js
{
  type: 'mdxJsxAttribute',
  name: 'src',
  value: {
    type: 'mdxJsxAttributeValueExpression',
    value: 'require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-azure-portal-bring-your-own-certificates.webp").default',
    data: [Object] // <--- There's a lot of metadata in here!
  }
},
```

The `data` object above is a full on AST representation of the `require` expression. And to make a plugin that works with MDX 3, we need to use that AST representation to build up the new `src` attribute. This involves some string manipulation and some AST traversal. It's not pretty but it works.

Here's the new plugin:

```js title="cloudinary-rehype-plugin.mjs"
//@ts-check
import { visit } from 'unist-util-visit';
import * as acorn from 'acorn';
import { mdxJsx } from 'micromark-extension-mdx-jsx';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxJsxFromMarkdown, mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import { toMarkdown } from 'mdast-util-to-markdown';

/**
 * @typedef {object} Params a label and an href
 * @property {string} cloudName your Cloudinary’s cloud name eg demo
 * @property {string} baseUrl the base URL of your website eg https://johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 */

/**
 * Create a rehype plugin that will replace image URLs with Cloudinary URLs
 * @param {Params} params
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
export default function imageCloudinaryRehypePlugin({ cloudName, baseUrl }) {
  const imageCloudinaryRehypeVisitor = imageCloudinaryRehypeVisitor({
    cloudName,
    baseUrl,
  });
  return (tree) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    visit(tree, ['mdxJsxTextElement'], imageCloudinaryRehypeVisitor);
  };
}
/**
 * Create a rehype visitor that will replace image URLs with Cloudinary URLs - exposed for testing purposes
 * @param {Params} params
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
export function imageCloudinaryRehypeVisitor({ cloudName, baseUrl }) {
  const srcRegex = / src=\{(.*)\}/;
  return function imageCloudinaryRehypeVisitor(node) {
    const imgWithAttributes = node;
    if (
      imgWithAttributes.type === 'mdxJsxTextElement' &&
      imgWithAttributes.name === 'img'
    ) {
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
      const srcIndex = imgWithAttributes.attributes.findIndex(
        (attr) => attr.name === 'src',
      );
      const requireAttribute = imgWithAttributes.attributes[srcIndex].value;
      if (typeof requireAttribute !== 'string') {
        const asMarkdown = toMarkdown(imgWithAttributes, {
          extensions: [mdxJsxToMarkdown()],
        });

        // <img
        //    alt="screenshot of typescript playground saying &#39;ComponentThatReturnsANumber&#39; cannot be used as a JSX component. Its return type &#39;number&#39; is not a valid JSX element.(2786)"
        //    src={require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-typescript-playground.png").default}
        //    width="690" height="298" />

        const match = asMarkdown.match(srcRegex);
        if (match) {
          const urlOrRequire = match[1];
          const cloudinaryRequireString = `\`https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${baseUrl}\$\{${urlOrRequire}\}\``;

          const newMarkdown = asMarkdown.replace(
            srcRegex,
            ` src={${cloudinaryRequireString}}`,
          );

          // <img
          //    alt="screenshot of typescript playground saying &#39;ComponentThatReturnsANumber&#39; cannot be used as a JSX component. Its return type &#39;number&#39; is not a valid JSX element.(2786)"
          //    src={`https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com${require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-typescript-playground.png").default}`}
          //    width="690" height="298" />
          const tree = fromMarkdown(newMarkdown, {
            extensions: [mdxJsx({ acorn, addResult: true })],
            mdastExtensions: [mdxJsxFromMarkdown()],
          });

          const newSrcAttributeIndex = tree.children[0]['attributes'].findIndex(
            (attr) => attr.name === 'src',
          );

          if (newSrcAttributeIndex !== -1) {
            imgWithAttributes.attributes[srcIndex] =
              tree.children[0]['attributes'][newSrcAttributeIndex];
          }
        }
      }
    }
  };
}
```

Much is happening here. Let's go through it.

### CommonJS to ES Module

This amounts to the same changes as the `fetchpriority` plugin. The old plugin has the name `cloudinary-rehype-plugin.js` and the new plugin has the name `cloudinary-rehype-plugin.mjs`. This is because the new plugin is an ES Module and the old plugin is CommonJS. Related to this, the old plugin used `module.exports = imageCloudinaryRehypePlugin` to expose functionality and the new plugin uses `export default imageCloudinaryRehypePlugin`.

### Different AST

We're dealing with a different AST and just need to tackle the `mdxJsxTextElement` which are similar to MDX 1's `jsx` nodes, but come with their own AST representation of expression based attributes in the `data` property.

The hardest part of this (and it is hard / confusing) is dealing with the `require` expression in the `src` attribute. What we do is:

1. Convert the `mdxJsxTextElement` to back to markdown - this is the full `img` element in its AST form
2. Use a regex to find the `require` expression in the `src` attribute of the markdown
3. Transform the `require` expression to a Cloudinary URL using the same mechanism as with the MDX 1 plugin
4. Convert the markdown back to an `mdxJsxTextElement` using a technique adapted from [`mdast-util-mdx-jsx`](https://github.com/syntax-tree/mdast-util-mdx-jsx#use)
5. Replace the `src` attribute with the new `src` attribute including the updated `require` expression AST in the `mdxJsxAttributeValueExpression` attributes `data` property.

If you were to compare the MDX 1 plugin with the MDX 3 plugin, 2 and 3 from the above points are the same. Points 1, 4 and 5 are new.

With this in place we have a new plugin that works with Docusaurus 3 and MDX 3!

## `rehype-cloudinary-docusaurus@2`

You may recall that I published an npm package named [`rehype-cloudinary-docusaurus`](https://www.npmjs.com/package/rehype-cloudinary-docusaurus) which packages up the plugin to make it easy for people to use. I've updated that package to use the new plugin and it is available now. You can see the [pull request here](https://github.com/johnnyreilly/rehype-cloudinary-docusaurus/pull/9). The new version is `3.0.0`.
