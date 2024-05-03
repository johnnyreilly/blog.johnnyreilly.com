//@ts-check
/* eslint-env node */
import path from 'path';
import { simpleGit } from 'simple-git';

/** @type {import('@docusaurus/plugin-content-blog').CreateFeedItemsFn} */
export async function createFeedItems(params) {
  const { blogPosts, defaultCreateFeedItems, ...rest } = params;

  const feedItems = await defaultCreateFeedItems({
    blogPosts,
    ...rest,
  });

  for (const feedItem of feedItems) {
    // blogPost.metadata.permalink: '/2023/01/22/image-optimisation-tinypng-api',
    // feedItem.link: 'https://johnnyreilly.com/2023/01/22/image-optimisation-tinypng-api',
    const relatedBlogEntry = blogPosts.find((blogPost) =>
      feedItem.link.endsWith(blogPost.metadata.permalink),
    );
    if (!relatedBlogEntry) {
      console.log('blogFilePath not found', feedItem.link);
      throw new Error(`blogFilePath not found ${feedItem.link}`);
    }

    // source: '@site/blog/2023-01-22-image-optimisation-tinypng-api/index.md',
    const gitLatestCommitString = await getGitLatestCommitDateFromFilePath(
      relatedBlogEntry.metadata.source.replace('@site/', 'blog-website/'),
    );
    const gitLatestCommitDate = gitLatestCommitString
      ? new Date(gitLatestCommitString)
      : undefined;
    if (gitLatestCommitDate) {
      feedItem.date = gitLatestCommitDate;
    }
  }

  // keep only the 20 most recently updated blog posts in the feed
  const latest20FeedItems = Array.from(feedItems)
    .sort((a, b) => b.date.getDate() - a.date.getDate())
    .slice(0, 20);

  return latest20FeedItems;
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

/** @type {import('simple-git').SimpleGit | undefined} */
let git;

/**
 * get a simple git instance
 * @returns SimpleGit
 */
function getSimpleGit() {
  if (!git) {
    const baseDir = path.resolve(process.cwd(), '..');

    /** @type {Partial<import('simple-git').SimpleGitOptions>} */
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
