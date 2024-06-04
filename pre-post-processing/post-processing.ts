import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import {
  getBlogPathFromUrl,
  getGitLastUpdatedFromFilePath,
  getPagesPathFromUrl,
} from './getGitLastUpdated';
import type { SitemapUrl, Sitemap, AtomFeed, RssItem, RssFeed } from './types';
import { orderBy } from 'lodash';

const rootUrl = 'https://johnnyreilly.com';
const cloudinaryUrl =
  'https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/';

async function enrichUrlsWithLastmodAndFilterCanonicals(
  filteredUrls: SitemapUrl[],
): Promise<{ sitemapUrls: SitemapUrl[]; tagsAndTotal: Map<string, number> }> {
  const sitemapUrls: SitemapUrl[] = [];
  let filePath: string | undefined;

  const today = new Date();
  // Set the date to the first day of the current month
  const fallbackLastMod = new Date(
    today.getFullYear(),
    today.getMonth(),
    1,
  ).toISOString();

  const regex = /tags: \[(.*)\]/;

  const tagsAndTotal = new Map<string, number>();

  for (const url of filteredUrls) {
    if (sitemapUrls.includes(url)) {
      // can this happen? not sure why I added this
      continue;
    }

    const { loc } = url;

    try {
      // filePath =
      //   getBlogPathFromUrl(rootUrl, loc) ?? getPagesPathFromUrl(rootUrl, loc);
      // if (!filePath) {
      //   sitemapUrls.push({ loc, lastmod: fallbackLastMod });
      //   continue;
      // }

      // eg blog-website/blog/2013-04-26-a-navigation-animation-for-your-users/index.md
      const blogMarkdown = await Bun.file('../' + filePath).text();

      const match = blogMarkdown.match(regex);
      if (match) {
        const tagsInBrackets = match[1]; // eg "azure-open-ai, bicep"
        const tags = tagsInBrackets
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag);

        tags.forEach((tag) => {
          if (tag.toLocaleLowerCase() !== tag) {
            console.log(
              `'${tag}' should be '${tag.toLocaleLowerCase()}' in ${filePath}`,
            );
          }

          const currentCount = tagsAndTotal.get(tag) ?? 0;
          tagsAndTotal.set(tag, currentCount + 1);
        });
      } else {
        // throw new Error(`No tags found in ${filePath}`);
      }

      if (blogMarkdown.includes('<link rel="canonical" href=')) {
        console.log('excluding external canonical URL', url.loc);
        continue;
      }

      // const lastmod = await getGitLastUpdatedFromFilePath(filePath);

      // sitemapUrls.push(
      //   lastmod ? { loc, lastmod } : { loc, lastmod: fallbackLastMod },
      // );
      // console.log(loc, lastmod);
      sitemapUrls.push(url);
    } catch (e) {
      console.log(`file date not looked up: ${filePath}`, url.loc, e);
      sitemapUrls.push({ loc, lastmod: fallbackLastMod });
    }
  }
  return { sitemapUrls, tagsAndTotal };
}

async function patchHtmlImagesToCloudinary() {
  const indexHtmlPaths = fs
    .readdirSync(path.resolve('..', 'blog-website', 'build'))
    .filter((dir) =>
      fs
        .statSync(path.resolve('..', 'blog-website', 'build', dir))
        .isDirectory(),
    )
    .map((dir) =>
      path.resolve('..', 'blog-website', 'build', dir, 'index.html'),
    )
    .filter((file) => fs.existsSync(file));

  const ogImageRegex =
    /<meta data-rh="true" property="og:image" content="(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))">/;
  const twitterImageRegex =
    /<meta data-rh="true" name="twitter:image" content="(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))">/;
  // <img decoding="async" loading="eager" alt="title image reading &amp;quot;Adding lastmod to sitemap based on git commits&amp;quot; with XML and Docusaurus logos" src="/assets/images/title-image-83e5a8ec1684626cf7373c7c6c529fe4.png" width="800" height="450" fetchpriority="high" class="img_ev3q">
  const imageRegex =
    /<img[^>]*\bsrc="(\/assets\/images\/[-a-zA-Z0-9()@:%_\+.~#?&//=]*)" [^,<]*>/g;

  // https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com/assets/images/title-image-934557b5733320b51dc0b371cf808e3a.png
  for (const indexHtmlPath of indexHtmlPaths) {
    console.log(`Loading ${indexHtmlPath}`);
    const indexHtml = await Bun.file(indexHtmlPath).text();

    console.log(`Saving ${indexHtmlPath}`);
    await Bun.write(
      indexHtmlPath,
      indexHtml
        // .replaceAll(imageRegex, function (match, url) {
        //   return match.replace(
        //     `/assets/images/${url}`,
        //     `${cloudinaryUrl}${rootUrl}/assets/images/${url}`,
        //   );
        // })
        .replace(twitterImageRegex, function (_match, url) {
          return `<meta data-rh="true" name="twitter:image" content="${cloudinaryUrl}${url}">`;
        })
        .replace(ogImageRegex, function (_match, url) {
          return `<meta data-rh="true" property="og:image" content="${cloudinaryUrl}${url}">`;
        })
        .replace(imageRegex, function (match, url) {
          console.log(`Before: ${match}`);
          const updated = match.replace(
            url,
            `${cloudinaryUrl}${rootUrl}${url}`,
          );
          console.log(`After: ${updated}`);
          return updated;
        }),
    );
  }
}

async function patchJsImagesToCloudinary() {
  const assetsJsPaths = fs
    .readdirSync(path.resolve('..', 'blog-website', 'build', 'assets', 'js'))
    .filter((file) => file.endsWith('.js'))
    .map((file) =>
      path.resolve('..', 'blog-website', 'build', 'assets', 'js', file),
    );

  const imageRegex = /"assets\/images\/([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"/g;

  // https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com/assets/images/title-image-934557b5733320b51dc0b371cf808e3a.png
  for (const assetJsPath of assetsJsPaths) {
    console.log(`Loading ${assetJsPath}`);
    const jsCode = await Bun.file(assetJsPath).text();

    if (jsCode.match(imageRegex)) {
      console.log(`Saving ${assetJsPath}`);
      await Bun.write(
        assetJsPath,
        jsCode.replaceAll(imageRegex, function (match, url) {
          return match.replace(
            `assets/images/${url}`,
            `${cloudinaryUrl}${rootUrl}/assets/images/${url}`,
          );
        }),
      );
    } else {
      console.log(`No change to ${assetJsPath}`);
    }
  }
}

function deleteFolderRecursive(folderPath: string) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively delete subdirectories
        deleteFolderRecursive(curPath);
      } else {
        // Delete files within the folder
        fs.unlinkSync(curPath);
      }
    });

    // Finally, delete the main folder itself
    fs.rmdirSync(folderPath);
  }
}

async function trimSitemapXML() {
  const sitemapPath = path.resolve(
    '..',
    'blog-website',
    'build',
    'sitemap.xml',
  );

  console.log(`Loading ${sitemapPath}`);
  const sitemapXml = await Bun.file(sitemapPath).text();

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  let sitemap: Sitemap = parser.parse(sitemapXml);

  const filteredUrls = sitemap.urlset.url.filter(
    (url) =>
      url.loc !== `${rootUrl}/blog-handrolled` && // we have /blog and /blog-handrolled; we only want /blog
      url.loc !== `${rootUrl}/search` &&
      url.loc !== `${rootUrl}/tags` &&
      !url.loc.includes('/tags/') &&
      !url.loc.includes('/page/'),
  );

  console.log(
    `Reducing ${sitemap.urlset.url.length} urls to ${filteredUrls.length} urls`,
  );

  const { sitemapUrls, tagsAndTotal } =
    await enrichUrlsWithLastmodAndFilterCanonicals(filteredUrls);

  console.log('Tags and totals:');
  orderBy(
    Array.from(tagsAndTotal.entries()).map(([tag, total]) => ({ tag, total })),
    ({ total }) => total,
    'desc',
  ).forEach(({ tag, total }) => {
    console.log(`['${tag}', ${total}],`);
  });

  Array.from(tagsAndTotal.keys()).forEach((tag) => {
    if (tag.toLocaleLowerCase() !== tag) {
      console.log(`'${tag}' should be '${tag.toLocaleLowerCase()}'`);
    }
  });

  sitemap.urlset.url = sitemapUrls;

  const builder = new XMLBuilder({ format: false, ignoreAttributes: false });
  const shorterSitemapXml = builder.build(sitemap);

  console.log(`Saving ${sitemapPath}`);
  await Bun.write(sitemapPath, shorterSitemapXml);
}

async function trimAtomXML() {
  const atomPath = path.resolve('..', 'blog-website', 'build', 'atom.xml');

  console.log(`Loading ${atomPath}`);
  const atomXml = await Bun.file(atomPath).text();

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
    `Reducing ${rss.feed.entry.length} entries to ${top20Entries.length} entries`,
  );

  rss.feed.entry = top20Entries;

  const builder = new XMLBuilder({
    format: false,
    ignoreAttributes: false,
    cdataPropName: 'content',
  });
  const shorterSitemapXml = builder.build(rss);

  console.log(`Saving ${atomPath}`);
  await Bun.write(atomPath, shorterSitemapXml);
}

async function trimRssXML() {
  const rssPath = path.resolve('..', 'blog-website', 'build', 'rss.xml');

  console.log(`Loading ${rssPath}`);
  const rssXml = await Bun.file(rssPath).text();

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
    `Reducing ${rss.rss.channel.item.length} entries to ${top20Entries.length} entries`,
  );

  rss.rss.channel.item = top20Entries;

  const builder = new XMLBuilder({
    format: false,
    ignoreAttributes: false,
    cdataPropName: 'content:encoded',
  });
  const shorterSitemapXml = builder.build(rss);

  console.log(`Saving ${rssPath}`);
  await Bun.write(rssPath, shorterSitemapXml);
}

async function main() {
  const startedAt = new Date();

  const IS_LIVE_SITE = process.env['IS_LIVE_SITE'] === 'true';
  console.log('IS_LIVE_SITE', IS_LIVE_SITE);

  if (!IS_LIVE_SITE) {
    console.log(
      'Not patching images to Cloudinary as this is not the live site.',
    );
    return;
  } else {
    await patchHtmlImagesToCloudinary();
  }
  // await patchJsImagesToCloudinary(); // now handled by rehype plugin
  // await trimSitemapXML();
  deleteFolderRecursive(
    path.resolve('..', 'blog-website', 'build', 'blog-handrolled'),
  ); // not using handrolled anymore and deleting the folder
  // now handled by createFeedItems
  // await trimAtomXML();
  // await trimRssXML();

  const finishedAt = new Date();
  const duration = (finishedAt.getTime() - startedAt.getTime()) / 1000;
  console.log(`Post processing finished in ${duration} seconds`);
}

await main();
