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
    'sitemap.xml'
  );

  console.log(`Loading ${sitemapPath}`);
  const sitemapXml = await fs.promises.readFile(sitemapPath, 'utf8');

  const parser = new XMLParser();
  let sitemap: Sitemap = parser.parse(sitemapXml);

  const rootUrl = 'https://blog.johnnyreilly.com';
  const filteredUrls = sitemap.urlset.url.filter(
    (url) =>
      !url.loc.startsWith(rootUrl + '/tags/') &&
      !url.loc.startsWith(rootUrl + '/page/')
  );

  console.log(
    `Reducing ${sitemap.urlset.url.length} urls to ${filteredUrls.length} urls`
  );

  sitemap.urlset.url = filteredUrls;

  const builder = new XMLBuilder({ format: false });
  const shorterSitemapXml = builder.build(sitemap);

  console.log(`Saving ${sitemapPath}`);
  await fs.promises.writeFile(sitemapPath, shorterSitemapXml);
}

trimXML();
