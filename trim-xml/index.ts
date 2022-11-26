import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

const rootUrl = 'https://blog.johnnyreilly.com';

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: number;
  lastmod?: string;
}

interface Sitemap {
  urlset: {
    url: SitemapUrl[];
  };
}

interface AtomFeed {
  feed: {
    id: string;
    title: string;
    updated: string;
    generator: string;
    link: {
      href: string;
      rel: string;
    };
    subtitle: string;
    icon: string;
    entry: {
      title: {
        '@_type': string;
        content: string;
      };
      id: string;
      link: {
        '@_href': string;
      };
      updated: string;
      summary: {
        '@_type': string;
        content: string;
      };
      content: {
        '@_type': string;
        content: string;
      };
      author: {
        name: string;
        uri: string;
      };
      category: {
        term: string;
        label: string;
      }[];
    }[];
  };
}

interface RssFeed {
  rss: {
    channel: {
      title: string;
      link: string;
      description: string;
      lastBuildDate: string;
      docs: string;
      generator: string;
      item: {
        title: string;
        link: string;
        guid: string;
        pubDate: string;
        description: string;
        'content:encoded': string;
        category: string[];
      }[];
    };
  };
}

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

const dateBlogUrlRegEx = /(\d\d\d\d\/\d\d\/\d\d)\/(.+)/;

async function enrichUrlsWithLastmod(
  filteredUrls: SitemapUrl[]
): Promise<SitemapUrl[]> {
  const git = getSimpleGit();

  const urls: SitemapUrl[] = [];
  for (const url of filteredUrls) {
    if (urls.includes(url)) {
      continue;
    }

    try {
      // example url.loc: https://blog.johnnyreilly.com/2012/01/07/standing-on-shoulders-of-giants
      const pathWithoutRootUrl = url.loc.replace(rootUrl + '/', ''); // eg 2012/01/07/standing-on-shoulders-of-giants

      const match = pathWithoutRootUrl.match(dateBlogUrlRegEx);

      if (!match || !match[1] || !match[2]) {
        urls.push(url);
        console.log('failed to match', pathWithoutRootUrl, match);
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
      url.loc !== `${rootUrl}/tags` &&
      !url.loc.startsWith(rootUrl + '/tags/') &&
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

  console.log(rss);
  console.log(rss.feed.entry);
  const top20Entries = rss.feed.entry
    .slice(0, 20)
    .map((entry) => ({ ...entry, id: entry.link['@_href'] })); // fixup the guid with full link

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
  // await fs.promises.writeFile(atomPath, shorterSitemapXml);
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

  console.log(rss);
  const top20Entries = rss.rss.channel.item
    .slice(0, 20)
    .map((item) => ({ ...item, guid: item.link })); // fixup the guid with full link

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
  // await trimSitemapXML();
  await trimAtomXML();
  // await trimRssXML();
}

main();
