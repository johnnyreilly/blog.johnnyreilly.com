---
slug: adding-lastmod-to-sitemap-git-commit-date
title: 'Adding lastmod to sitemap based on git commits'
authors: johnnyreilly
tags: [node.js, docusaurus]
image: ./title-image.png
description: 'This post demonstrates enriching an XML sitemap with `lastmod` timestamps based on git commits.'
hide_table_of_contents: false
---

This post demonstrates enriching an XML sitemap with `lastmod` timestamps based on git commits. The sitemap being enriched in this post was generated automatically by Docusaurus. The techniques used are predicated on the way Docusaurus works; in that it is file based. You could easily use this technique for another file based website solution; but you would need tweaks to target the relevant files you would use to drive your `lastmod`.

If you're interested in applying the same technique to your RSS / Atom / JSON feeds in Docusaurus, [you may find this post interesting](../2023-01-28-docusaurus-createfeeditems-api-git-commit-date/index.md).

![title image reading "Adding lastmod to sitemap based on git commits" with XML and Docusaurus logos](title-image.png)

<!--truncate-->

## Updated 30/03/2024 - this is built into Docusaurus 3.2

I'm delighted to say that [Docusaurus 3.2 has this functionality built in](https://docusaurus.io/blog/releases/3.2#sitemap-lastmod). So you don't need this anymore!

## Reading git log in Node.js

[In the last post I showed how to manipulate XML in Node.js, and filter our sitemap](../2022-11-22-xml-read-and-write-with-node-js/index.md). In this post we'll build upon what we did last time, read the git log in Node.js and use that to power a `lastmod` property.

The `lastmod` property ([documented here](https://sitemaps.org/protocol.html#lastmoddef)) is a optional, and if supplied, should be date of last modification of a page in a W3C Datetime format. (This allows `YYYY-MM-DD`.)

To read the git log in Node.js we'll use the [simple-git](https://www.npmjs.com/package/simple-git) package. It's a great package that makes it easy to read the git log. Other stuff too - but that's what we care about today.

```shell
yarn add simple-git
```

To work with `simple-git` we need to create a `Git` instance. We can do that like so:

```ts
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

function getSimpleGit(): SimpleGit {
  const baseDir = path.resolve(process.cwd(), '..');

  const options: Partial<SimpleGitOptions> = {
    baseDir,
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
  };

  const git = simpleGit(options);

  return git;
}
```

## From sitemap to git log

It's worth pausing to consider what our sitemap looks like:

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
  <!-- ... -->
</urlset>
```

If you look at the URL (`loc`) you can see that it's fairly easy to determine the path to the original markdown file. If we take the URL `https://johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants`, we can see that the path to the markdown file is `blog-website/blog/2012-01-07-standing-on-shoulders-of-giants/index.md`.

As long as we don't have a custom slug in play (and I rarely do), we have a reliable way to get from blog post URL (`loc`) to markdown file. With that we can use `simple-git` to get the git log for that file. We can then use that to populate the `lastmod` property.

```ts
const dateBlogUrlRegEx = /(\d\d\d\d\/\d\d\/\d\d)\/(.+)/;

async function enrichUrlsWithLastmod(
  filteredUrls: SitemapUrl[],
): Promise<SitemapUrl[]> {
  const git = getSimpleGit();

  const urls: SitemapUrl[] = [];
  for (const url of filteredUrls) {
    if (urls.includes(url)) {
      continue;
    }

    try {
      // example url.loc: https://johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants
      const pathWithoutRootUrl = url.loc.replace(rootUrl + '/', ''); // eg 2012/01/07/standing-on-shoulders-of-giants

      const match = pathWithoutRootUrl.match(dateBlogUrlRegEx);

      if (!match || !match[1] || !match[2]) {
        urls.push(url);
        continue;
      }

      const date = match[1].replaceAll('/', '-'); // eg 2012-01-07
      const slug = match[2]; // eg standing-on-shoulders-of-giants

      const file = `blog-website/blog/${date}-${slug}/index.md`;
      const log = await git.log({
        file,
      });

      const lastmod = log.latest?.date.substring(0, 10);
      urls.push(lastmod ? { ...url, lastmod } : url);
      console.log(url.loc, lastmod);
    } catch (e) {
      console.log('file date not looked up', url.loc, e);
      urls.push(url);
    }
  }
  return urls;
}
```

Above we're using a regular expression to extract the date and slug from the URL. We then use those to construct the path to the markdown file. We then use `simple-git` to get the git log for that file. We then use the latest commit date to populate the `lastmod` property, and push that onto the `urls` array.

Finally we return the `urls` array and write that to the sitemap before we write it out:

```ts
sitemap.urlset.url = await enrichUrlsWithLastmod(filteredUrls);
```

Our new sitemap looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
    <lastmod>2021-12-19</lastmod>
  </url>
  <url>
    <loc>https://johnnyreilly.com/2012/01/14/jqgrid-its-just-far-better-grid</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
    <lastmod>2022-11-03</lastmod>
  </url>
  <!-- ... -->
</urlset>
```

You see the `lastmod` property has been populated for URLs based upon the most recent commit for that file. Yay!

## GitHub Actions - `fetch_depth`

You might think we were done (I thought we were done), but we're not. We're not done because we're using GitHub Actions to build the site.

When I tested this locally, it worked fine. However, when I pushed it to GitHub Actions, it surfaced a `latest.date` which wasn't populated with the value you'd hope. The reason was that the `fetch_depth` was set to 1 (the default). This meant that the git log wasn't providing the information we'd hope for. By changing the `fetch_depth` to 0 the situation is resolved.

```yaml
- uses: actions/checkout@v3
  with:
    # Number of commits to fetch. 0 indicates all history for all branches and tags.
    # Default: 1
    fetch-depth: 0
```

## Updated 12th November 2023: Google's view on `lastmod`, `changefreq` and `priority`

Google have announced that they [use `lastmod` as a specific signal for triggering recrawling](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping#the-lastmod-element). It goes on to say that it doesn't use the `changefreq` or `priority` elements to trigger recrawling of URLs.

So if you want to have a sitemap that triggers reindexing well, having an accurate `lastmod` will help.

## Conclusion

This post demonstrates how you can enrich a `lastmod`less sitemap to have one that is driven by git commit date. I hope it helps!
