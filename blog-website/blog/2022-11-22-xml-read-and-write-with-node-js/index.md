---
slug: xml-read-and-write-with-node-js
title: 'XML: read and write with Node.js'
authors: johnnyreilly
tags: [node.js, docusaurus]
image: ./title-image.png
description: 'This post demonstrates reading and writing XML in Node.js using fast-xml-parser. We will use the Docusauruses XML sitemap as an example.'
hide_table_of_contents: false
---

This post demonstrates reading and writing XML in Node.js using `fast-xml-parser`. We'll use the Docusauruses XML sitemap as an example.

![title image reading "XML: read and write with Node.js" with XML and Docusaurus logos](title-image.png)

<!--truncate-->

## Updated 03/05/2023

This post talks about manipulating the Docusaurus sitemap as an example of how to work on XML with Node.js.

It's worth noting that Docusaurus has offered a way to [configure the sitemap as of Docusaurus 3.3](https://docusaurus.io/blog/releases/3.3#createsitemapitems) which [I worked on](https://github.com/facebook/docusaurus/pull/10083).

However, the techniques described here are still useful for working with XML in Node.js.

## Docusaurus sitemap

I was prompted to write this post by wanting to edit the sitemap on my Docusaurus blog. I wanted to remove the `/page/` and `/tag/` routes from the sitemap. They effectively serve as duplicate content and I don't want them to be indexed by search engines. (A little more is required to remove them from search engines - see the section at the end of the post.)

I was able to find the sitemap in the `build` folder of my Docusaurus site. It's called `sitemap.xml` and it's in the root of the `build` folder. It looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://johnnyreilly.com/2022/09/20/react-usesearchparamsstate</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://johnnyreilly.com/page/10</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://johnnyreilly.com/tags/ajax</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <!-- ... -->
</urlset>
```

## `fast-xml-parser`

After experimenting with a few different XML parsers I settled on [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser). It's fast, it's simple and it's well maintained. It also handles XML namespaces and attributes well. (This appears to be rare in XML parsers.)

Let's scaffold up an example project alongside our Docusaurus site:

```bash
mkdir trim-xml
cd trim-xml
npx typescript --init
yarn init
yarn add @types/node fast-xml-parser ts-node typescript
```

And in the `package.json` file add a `start` script:

```json
{
  "scripts": {
    "start": "ts-node index.ts"
  }
}
```

Finally, create an empty `index.ts` file.

## Reading XML

Our Docusaurus sitemap is in the `build` folder of our Docusaurus site. Let's read it in and parse it into a JavaScript object:

```ts
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';

interface Sitemap {
  urlset: {
    url: { loc: string; changefreq: string; priority: number }[];
  };
}

async function trimXML() {
  const sitemapPath = path.resolve(
    '..',
    'blog-website',
    'build',
    'sitemap.xml',
  );

  console.log(`Loading ${sitemapPath}`);
  const sitemapXml = await fs.promises.readFile(sitemapPath, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  let sitemap: Sitemap = parser.parse(sitemapXml);

  console.log(sitemap);
}

trimXML();
```

We're using the `XMLParser` class to parse the XML into a JavaScript object. We're also using the `ignoreAttributes` option to ensure that attributes are included in the parsed object. When we run this we get the following output:

```bash
Loading /home/john/code/github/blog.johnnyreilly.com/blog-website/build/sitemap.xml
{
  '?xml': { '@_version': '1.0', '@_encoding': 'UTF-8' },
  urlset: {
    url: [
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      ... 1481 more items
    ],
    '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    '@_xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
    '@_xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
    '@_xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
    '@_xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
  }
}
```

As we can see, the `fast-xml-parser` library has parsed the XML into a JavaScript object. We can see that the `urlset` element has an array of `url` elements. Each `url` element has a `loc`, `changefreq` and `priority` element. We can also see that the `urlset` element has a number of attributes. This matches the XML we saw earlier and the interface we defined.

## Filtering and writing XML

Now that we have the XML parsed into a JavaScript object we can filter it just like we would any other JavaScript object. We have all the power of JavaScript at our fingertips!

As I mentioned earlier, I want to remove all the URLs that represent duplicate content. This includes "pagination" URLs. These are URLs that are used to navigate between pages of content. For example, the URL `https://johnnyreilly.com/page/10` is a pagination URL. I want to remove these URLs from the sitemap. I also want to get rid of the "tags" URLs. These are URLs that are used to navigate between posts that have a particular tag. For example, the URL `https://johnnyreilly.com/tags/ajax` is a tag URL. I want to remove these URLs from the sitemap too.

This is simplicity itself now we're in JavaScript land. We can use the `filter` method on the `url` array to remove the URLs we don't want:

```ts
const rootUrl = 'https://johnnyreilly.com';
const filteredUrls = sitemap.urlset.url.filter(
  (url) =>
    url.loc !== `${rootUrl}/tags` &&
    !url.loc.startsWith(rootUrl + '/tags/') &&
    !url.loc.startsWith(rootUrl + '/page/'),
);
```

We can then update the `url` array with the filtered URLs:

```ts
sitemap.urlset.url = filteredUrls;
```

Finally, we can write the XML back out to a file:

```ts
const builder = new XMLBuilder({
  ignoreAttributes: false,
});
const xml = builder.buildObject(sitemap);

const outputPath = path.resolve('sitemap.xml');
await fs.promises.writeFile(outputPath, xml);
```

Note again that we're using the `ignoreAttributes` option to ensure that attributes are included in the XML.

Let's put it all together into a single file:

```ts
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';

interface Sitemap {
  urlset: {
    url: { loc: string; changefreq: string; priority: number }[];
  };
}

async function trimXML() {
  const sitemapPath = path.resolve(
    '..',
    'blog-website',
    'build',
    'sitemap.xml',
  );

  console.log(`Loading ${sitemapPath}`);
  const sitemapXml = await fs.promises.readFile(sitemapPath, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  let sitemap: Sitemap = parser.parse(sitemapXml);

  const rootUrl = 'https://johnnyreilly.com';
  const filteredUrls = sitemap.urlset.url.filter(
    (url) =>
      url.loc !== `${rootUrl}/tags` &&
      !url.loc.startsWith(rootUrl + '/tags/') &&
      !url.loc.startsWith(rootUrl + '/page/'),
  );

  console.log(
    `Reducing ${sitemap.urlset.url.length} urls to ${filteredUrls.length} urls`,
  );

  sitemap.urlset.url = filteredUrls;

  const builder = new XMLBuilder({ format: false, ignoreAttributes: false });
  const shorterSitemapXml = builder.build(sitemap);

  console.log(`Saving ${sitemapPath}`);
  await fs.promises.writeFile(sitemapPath, shorterSitemapXml);
}

trimXML();
```

With that we're done. We can run the script and see the result:

```bash
Loading /github/workspace/blog-website/build/sitemap.xml
Reducing 1598 urls to 281 urls
Saving /github/workspace/blog-website/build/sitemap.xml
```

## Conclusion

In this post we've seen how to use the `fast-xml-parser` library to parse XML into a JavaScript object, operate upon that object and then write it back out to XML.

If you'd to see how I'm using this directly on my blog, it's probably worth looking at [this PR](https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/344).

## PS `noindex`

This is unrelated to XML processing, but I didn't want to miss this out. [Merely editing the sitemap isn't enough to remove them from search engines](https://developers.google.com/search/docs/crawling-indexing/remove-information). We're also going to serve a `noindex` response header for those routes by adjusting the [`staticwebapp.config.json` file of our Static Web App](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration):

```json
{
  // ...
  "routes": [
    // ...
    {
      "route": "/tags/*",
      "headers": {
        "X-Robots-Tag": "noindex"
      }
    },
    {
      "route": "/page/*",
      "headers": {
        "X-Robots-Tag": "noindex"
      }
    }
  ]
  // ...
}
```
