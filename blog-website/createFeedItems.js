const path = require('path');
const { simpleGit, SimpleGit, SimpleGitOptions } = require('simple-git');

/** @type {import('@docusaurus/plugin-content-blog').CreateFeedItemsFn} */
async function createFeedItems(params) {
  const { blogPosts, defaultCreateFeedItems, ...rest } = params;

  const feedItems = await defaultCreateFeedItems({
    blogPosts,
    ...rest,
  });

  for (const feedItem of feedItems) {
    // blogPost.metadata.permalink: '/2023/01/22/image-optimisation-tinypng-api',
    // feedItem.link: 'https://johnnyreilly.com/2023/01/22/image-optimisation-tinypng-api',
    const relatedBlogEntry = blogPosts.find((blogPost) =>
      feedItem.link.endsWith(blogPost.metadata.permalink)
    );
    if (!relatedBlogEntry) {
      console.log('blogFilePath not found', feedItem.link);
      throw new Error(`blogFilePath not found ${feedItem.link}`);
    }

    // source: '@site/blog/2023-01-22-image-optimisation-tinypng-api/index.md',
    const gitLatestCommitString = await getGitLatestCommitDateFromFilePath(
      relatedBlogEntry.metadata.source.replace('@site/', 'blog-website/')
    );
    const gitLatestCommitDate = gitLatestCommitString
      ? new Date(gitLatestCommitString)
      : undefined;
    if (gitLatestCommitDate) {
      feedItem.date = gitLatestCommitDate;
    }
  }

  // keep only the 20 most recently updated blog posts in the feed
  const sortedFeedItems = Array.from(feedItems)
    .sort((a, b) => b.date - a.date)
    .slice(0, 20);

  console.log(
    'sortedFeedItems',
    sortedFeedItems.map((item) => ({ date: item.date, link: item.link }))
  );

  return feedItems;
}

/**
 * Given a file path, return the last commit date
 * @param {string} filePath
 * @returns
 */
async function getGitLatestCommitDateFromFilePath(filePath) {
  const git = getSimpleGit();

  const log = await git.log({
    file: filePath,
  });

  const latestCommitDate = log.latest?.date;

  return latestCommitDate;
}

/** @type {SimpleGit | undefined} */
let git;

/**
 * get a simple git instance
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
