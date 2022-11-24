import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

const dateBlogUrlRegEx = /(\d\d\d\d\/\d\d\/\d\d)\/(.+)/;
const rootUrl = 'https://blog.johnnyreilly.com';

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

  const git = getSimpleGit();

  const urls: SitemapUrl[] = [];
  for (const url of filteredUrls) {
    if (urls.includes(url)) {
      continue;
    }

    try {
      const pathWithoutRootUrl = url.loc.replace(rootUrl + '/', ''); // eg 2012/01/07/standing-on-shoulders-of-giants

      const match = pathWithoutRootUrl.match(dateBlogUrlRegEx);

      if (!match || !match[1] || !match[2]) {
        urls.push(url);
        continue;
      }

      const date = match[1].replaceAll('/', '-'); // eg 2012-01-07
      const slug = match[2]; // eg standing-on-shoulders-of-giants

      // const blogPostFrom2020OrBefore = date.substring(0, 4) <= '2020';
      // if (blogPostFrom2020OrBefore) {
      //   urls.push({ ...url, lastmod: date });
      //   continue;
      // }

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
  sitemap.urlset.url = urls;

  const builder = new XMLBuilder({ format: true, ignoreAttributes: false });
  const shorterSitemapXml = builder.build(sitemap);

  console.log(`Saving ${sitemapPath}`);
  await fs.promises.writeFile(sitemapPath, shorterSitemapXml);
}

trimXML();
