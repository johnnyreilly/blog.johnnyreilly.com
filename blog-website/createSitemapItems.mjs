//@ts-check
import path from 'node:path';
import fs from 'node:fs';
import { simpleGit } from 'simple-git';

/**
 * @typedef {import('@docusaurus/plugin-sitemap').PluginOptions["createSitemapItems"]} CreateSitemapItemsFn
 */

// blog-website is a subdirectory of the git repo, so the repo root is one level up
const repoRoot = path.resolve('..');
const git = simpleGit({ baseDir: repoRoot });

/** @type {NonNullable<CreateSitemapItemsFn>} */
export async function createSitemapItems(params) {
  const { canonicalSlugs, slugToFilePath } = await getBlogPostsInfo();
  // console.log('canonicalSlugs', canonicalSlugs);

  const { defaultCreateSitemapItems, ...rest } = params;
  const items = await defaultCreateSitemapItems(rest);
  const filteredItems = items.filter((item) => {
    // console.log(JSON.stringify(item));
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

  for (const item of filteredItems) {
    if (!item.lastmod) {
      const slug = item.url.replace(/\/$/, '').split('/').pop();
      const filePath = slug && slugToFilePath.get(slug);
      if (filePath) {
        item.lastmod = await getGitLastMod(filePath);
      }
    }
  }

  return filteredItems;
}

/**
 * Determine the last modified date of a file, according to git history
 * @param {string} filePath
 */
async function getGitLastMod(filePath) {
  try {
    const log = await git.log({ file: filePath });
    const date = log.latest?.date;
    return date ? new Date(date).toISOString() : undefined;
  } catch (e) {
    console.log(`could not determine git lastmod for ${filePath}`, e);
    return undefined;
  }
}

async function getBlogPostsInfo() {
  /** @type {string[]} */
  const canonicalSlugs = [];
  /** @type {Map<string, string>} */
  const slugToFilePath = new Map();
  const slugRegex = /slug: (.*)\n/;

  const blogIndexMds = await getBlogIndexMds();
  for (const blogIndexMd of blogIndexMds) {
    const blogPostContent = await fs.promises.readFile(blogIndexMd, 'utf-8');

    const slugMatch = blogPostContent.match(slugRegex);
    if (!slugMatch) {
      throw new Error(`no slug for ${blogIndexMd}`);
    }

    const slug = slugMatch[1];
    slugToFilePath.set(slug, path.relative(repoRoot, blogIndexMd));

    if (blogPostContent.includes('<link rel="canonical" href=')) {
      canonicalSlugs.push(slug);
    }
  }

  return { canonicalSlugs, slugToFilePath };
}

async function getBlogIndexMds() {
  const rootBlogPath = path.resolve('blog');
  const blogIndexMds = (await fs.promises.readdir(rootBlogPath))
    .filter((file) => fs.statSync(path.join(rootBlogPath, file)).isDirectory())
    .map((file) => path.join(rootBlogPath, file, 'index.md'));

  return blogIndexMds;
}
