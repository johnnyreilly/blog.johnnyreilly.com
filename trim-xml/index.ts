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

      console.log(file, log);

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

async function trimXML() {
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

trimXML();
