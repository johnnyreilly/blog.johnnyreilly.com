//@ts-check
/* eslint-env node */
import path from 'node:path';
import fs from 'node:fs';

/**
 * @typedef {import('@docusaurus/plugin-sitemap').PluginOptions["createSitemapItems"]} CreateSitemapItemsFn
 */

/** @type {NonNullable<CreateSitemapItemsFn>} */
export async function createSitemapItems(params) {
  const canonicalSlugs = await getCanonicalSlugs();
  // console.log('canonicalSlugs', canonicalSlugs);

  const { defaultCreateSitemapItems, ...rest } = params;
  const items = await defaultCreateSitemapItems(rest);
  return items.filter((item) => {
    const include =
      !item.url.endsWith(`/blog-handrolled`) && // we have /blog and /blog-handrolled; we only want /blog
      // !item.url.endsWith(`/search`) &&
      !item.url.includes('/tags/') &&
      !item.url.includes('/page/') &&
      !canonicalSlugs.some((slug) => item.url.endsWith('/' + slug));

    if (!include) {
      console.log(`excluding from sitemap: ${item.url}`);
    }
    return include;
  });
}

async function getCanonicalSlugs() {
  /** @type {string[]} */
  const canonicalSlugs = [];
  const slugRegex = /slug: (.*)\n/;

  const blogIndexMds = await getBlogIndexMds();
  for (const blogIndexMd of blogIndexMds) {
    const blogPostContent = await fs.promises.readFile(blogIndexMd, 'utf-8');

    const slugMatch = blogPostContent.match(slugRegex);
    if (!slugMatch) {
      throw new Error(`no slug for ${blogIndexMd}`);
    }

    const slug = slugMatch[1];
    if (blogPostContent.includes('<link rel="canonical" href=')) {
      canonicalSlugs.push(slug);
    }
  }

  return canonicalSlugs;
}

async function getBlogIndexMds() {
  const rootBlogPath = path.resolve('blog');
  const blogIndexMds = (await fs.promises.readdir(rootBlogPath))
    .filter((file) => fs.statSync(path.join(rootBlogPath, file)).isDirectory())
    .map((file) => path.join(rootBlogPath, file, 'index.md'));

  return blogIndexMds;
}
