import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import {
  getBlogPathFromUrl,
  getGitLastUpdatedFromFilePath,
} from './getGitLastUpdated';
import type { SitemapUrl, Sitemap, AtomFeed, RssItem, RssFeed } from './types';

const rootUrl = 'https://johnnyreilly.com';

async function enrichUrlsWithLastmod(
  filteredUrls: SitemapUrl[]
): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [];
  for (const url of filteredUrls) {
    if (urls.includes(url)) {
      continue;
    }

    try {
      const blogFilePath = getBlogPathFromUrl(rootUrl, url.loc);
      if (!blogFilePath) {
        urls.push(url);
        continue;
      }
      const lastmod = await getGitLastUpdatedFromFilePath(blogFilePath);

      urls.push(lastmod ? { ...url, lastmod } : url);
      console.log(url.loc, lastmod);
    } catch (e) {
      console.log('file date not looked up', url.loc, e);
      urls.push(url);
    }
  }
  return urls;
}

async function patchOpenGraphImageToCloudinary() {
  const indexHtmlPaths = (
    await fs.promises.readdir(path.resolve('..', 'blog-website', 'build'))
  )
    .filter((dir) =>
      fs
        .statSync(path.resolve('..', 'blog-website', 'build', dir))
        .isDirectory()
    )
    .map((dir) =>
      path.resolve('..', 'blog-website', 'build', dir, 'index.html')
    )
    .filter((file) => fs.existsSync(file));

  const ogImageRegex =
    /<meta data-rh="true" property="og:image" content="(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))">/;
  const twitterImageRegex =
    /<meta data-rh="true" name="twitter:image" content="(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))">/;

  // https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com/assets/images/title-image-934557b5733320b51dc0b371cf808e3a.png
  for (const indexHtmlPath of indexHtmlPaths) {
    console.log(`Loading ${indexHtmlPath}`);
    const indexHtml = await fs.promises.readFile(indexHtmlPath, 'utf8');

    console.log(`Saving ${indexHtmlPath}`);
    await fs.promises.writeFile(
      indexHtmlPath,
      indexHtml
        .replace(twitterImageRegex, function (_match, url) {
          return `<meta data-rh="true" name="twitter:image" content="https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${url}">`;
        })
        .replace(ogImageRegex, function (_match, url) {
          return `<meta data-rh="true" property="og:image" content="https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${url}">`;
        })
    );
  }
}

async function trimSitemapXML() {
  const sitemapPath = path.resolve(
    '..',
    'blog-website',
    'build',
    'sitemap.xml'
  );

  console.log(`Loading ${sitemapPath}`);
  const sitemapXml = await fs.promises.readFile(sitemapPath, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  let sitemap: Sitemap = parser.parse(sitemapXml);

  const filteredUrls = sitemap.urlset.url.filter(
    (url) =>
      // url.loc !== `${rootUrl}/tags` &&
      // !url.loc.startsWith(rootUrl + '/tags/') &&
      !url.loc.startsWith(rootUrl + '/page/')
  );

  console.log(
    `Reducing ${sitemap.urlset.url.length} urls to ${filteredUrls.length} urls`
  );

  sitemap.urlset.url = await enrichUrlsWithLastmod(filteredUrls);

  const builder = new XMLBuilder({ format: false, ignoreAttributes: false });
  const shorterSitemapXml = builder.build(sitemap);

  console.log(`Saving ${sitemapPath}`);
  await fs.promises.writeFile(sitemapPath, shorterSitemapXml);
}

async function trimAtomXML() {
  const atomPath = path.resolve('..', 'blog-website', 'build', 'atom.xml');

  console.log(`Loading ${atomPath}`);
  const atomXml = await fs.promises.readFile(atomPath, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
    cdataPropName: 'content',
  });
  let rss: AtomFeed = parser.parse(atomXml);

  const top20Entries = rss.feed.entry
    .slice(0, 20)
    .map((entry) => ({ ...entry, id: entry.link['@_href'] })); // fixup the id with full link

  for (const entry of top20Entries) {
    const blogFilePath = getBlogPathFromUrl(rootUrl, entry.link['@_href']);
    if (!blogFilePath) {
      continue;
    }
    const lastmod = await getGitLastUpdatedFromFilePath(blogFilePath);
    const lastmodDate = lastmod ? new Date(lastmod) : undefined;
    if (lastmodDate) {
      entry.published = lastmodDate.toISOString();
    }
  }

  console.log(
    `Reducing ${rss.feed.entry.length} entries to ${top20Entries.length} entries`
  );

  rss.feed.entry = top20Entries;

  const builder = new XMLBuilder({
    format: false,
    ignoreAttributes: false,
    cdataPropName: 'content',
  });
  const shorterSitemapXml = builder.build(rss);

  console.log(`Saving ${atomPath}`);
  await fs.promises.writeFile(atomPath, shorterSitemapXml);
}

async function trimRssXML() {
  const rssPath = path.resolve('..', 'blog-website', 'build', 'rss.xml');

  console.log(`Loading ${rssPath}`);
  const rssXml = await fs.promises.readFile(rssPath, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
    cdataPropName: 'content:encoded',
  });
  let rss: RssFeed = parser.parse(rssXml);

  const top20Entries: RssItem[] = rss.rss.channel.item
    .slice(0, 20)
    .map((item) => ({ ...item, guid: item.link })); // fixup the guid with full link

  for (const url of top20Entries) {
    const blogFilePath = getBlogPathFromUrl(rootUrl, url.link);
    if (!blogFilePath) {
      continue;
    }
    const lastmod = await getGitLastUpdatedFromFilePath(blogFilePath);
    const lastmodDate = lastmod ? new Date(lastmod) : undefined;
    if (lastmodDate) {
      url.pubDate = lastmodDate.toUTCString();
    }
  }

  console.log(
    `Reducing ${rss.rss.channel.item.length} entries to ${top20Entries.length} entries`
  );

  rss.rss.channel.item = top20Entries;

  const builder = new XMLBuilder({
    format: false,
    ignoreAttributes: false,
    cdataPropName: 'content:encoded',
  });
  const shorterSitemapXml = builder.build(rss);

  console.log(`Saving ${rssPath}`);
  await fs.promises.writeFile(rssPath, shorterSitemapXml);
}

async function main() {
  await patchOpenGraphImageToCloudinary();
  await trimSitemapXML();
  // now handled by createFeedItems
  // await trimAtomXML();
  // await trimRssXML();
}

main();
