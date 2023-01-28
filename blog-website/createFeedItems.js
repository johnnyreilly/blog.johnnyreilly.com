const path = require('path');
const { simpleGit, SimpleGit, SimpleGitOptions } = require('simple-git');

/** @type {import('@docusaurus/plugin-content-blog').CreateFeedItemsFn} */
async function createFeedItems(params) {
  const { blogPosts, defaultCreateFeedItems, ...rest } = params;

  // keep only the 20 most recent blog posts in the feed
  const top20Entries = blogPosts.filter((_item, index) => index < 20);

  const feedItems = await defaultCreateFeedItems({
    blogPosts: top20Entries,
    ...rest,
  });

  for (const feedItem of feedItems) {
    // blogPost.metadata.permalink: '/2023/01/22/image-optimisation-tinypng-api',
    // feedItem.link: 'https://johnnyreilly.com/2023/01/22/image-optimisation-tinypng-api',
    const relatedBlogEntry = top20Entries.find((blogPost) =>
      feedItem.link.endsWith(blogPost.metadata.permalink)
    );
    if (!relatedBlogEntry) {
      console.log('blogFilePath not found', feedItem.link);
      throw new Error(`blogFilePath not found ${feedItem.link}`);
    }

    // source: '@site/blog/2023-01-22-image-optimisation-tinypng-api/index.md',
    const lastmod = await getGitLastUpdatedFromFilePath(
      relatedBlogEntry.metadata.source.replace('@site/', 'blog-website/')
    );
    const lastmodDate = lastmod ? new Date(lastmod) : undefined;
    if (lastmodDate) {
      feedItem.date = lastmodDate;
    }
  }

  return feedItems;
}

/**
 *
 * @param {string} filePath
 * @returns
 */
async function getGitLastUpdatedFromFilePath(filePath) {
  const git = getSimpleGit();

  const log = await git.log({
    file: filePath,
  });

  const lastmod = log.latest?.date;

  return lastmod;
}

/** @type {SimpleGit | undefined} */
let git;

/**
 *
 * @returns SimpleGit
 */
function getSimpleGit() {
  if (!git) {
    const baseDir = path.resolve(process.cwd(), '..');

    /** @type {Partial<SimpleGitOptions>} */
    const options = {
      baseDir,
      binary: 'git',
      maxConcurrentProcesses: 6,
      trimmed: false,
    };

    git = simpleGit(options);
  }

  return git;
}

module.exports = createFeedItems;
