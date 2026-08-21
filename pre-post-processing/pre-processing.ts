//@ts-check
import { type SimpleGitOptions, simpleGit } from 'simple-git';
import path from 'path';
import fs from 'fs';
import { chunk, orderBy } from 'lodash';

async function getBlogIndexMds() {
  const rootBlogPath = path.resolve('..', 'blog-website', 'blog');
  const blogIndexMds = (await fs.promises.readdir(rootBlogPath))
    .filter((file) => fs.statSync(path.join(rootBlogPath, file)).isDirectory())
    .map((file) => path.join(rootBlogPath, file, 'index.md'));

  return blogIndexMds;
}

async function getPopularPosts() {
  const baseDir = path.resolve(process.cwd(), '..');

  const maxConcurrentProcesses = 6;
  const options: Partial<SimpleGitOptions> = {
    baseDir,
    binary: 'git',
    maxConcurrentProcesses,
    trimmed: false,
  };

  const git = simpleGit(options);

  const blogIndexMds = await getBlogIndexMds();

  // Match the git.log calls' concurrency to maxConcurrentProcesses above,
  // so simple-git can actually run them in parallel instead of one at a time.
  const blogIndexMdsAndLastCommitDates: {
    blogIndexMd: string;
    lastUpdated: string | undefined;
  }[] = [];
  for (const batch of chunk(blogIndexMds, maxConcurrentProcesses)) {
    const results = await Promise.all(
      batch.map(async (blogIndexMd) => {
        const log = await git.log({
          file: blogIndexMd,
        });

        return { blogIndexMd, lastUpdated: log.latest?.date };
      }),
    );
    blogIndexMdsAndLastCommitDates.push(...results);
  }

  const blogIndexMdsOrderedByLastCommitDates = orderBy(
    blogIndexMdsAndLastCommitDates,
    ['lastUpdated'],
    ['desc'],
  ).slice(0, 3);

  // console.log(
  //   'blogIndexMdsOrderedByLastCommitDates',
  //   blogIndexMdsOrderedByLastCommitDates,
  // );

  const recentlyUpdatedPosts: { link: string; title: string }[] = [];
  const slugRegex = /slug: (.*)\n/;
  const dateRegex = /date: (.*)\n/;
  const titleRegex = /title: ["'](.*)["']\n/;

  for (const blogIndexMd of blogIndexMdsOrderedByLastCommitDates) {
    const blogPostContent = await fs.promises.readFile(
      blogIndexMd.blogIndexMd,
      'utf-8',
    );
    const slugMatch = blogPostContent.match(slugRegex);
    const dateMatch = blogPostContent.match(dateRegex);
    const titleMatch = blogPostContent.match(titleRegex);

    // console.log(slugMatch);
    // console.log(titleMatch);
    if (!slugMatch || !titleMatch || !dateMatch) {
      throw new Error(
        `missing slug, title or date in frontmatter of ${blogIndexMd.blogIndexMd}`,
      );
    }

    const slug = slugMatch[1];
    const title = titleMatch[1];
    recentlyUpdatedPosts.push({
      link: slug,
      title,
    });
  }

  console.log(recentlyUpdatedPosts);
  const rootBlogWebsitePath = path.resolve('..', 'blog-website');
  await fs.promises.writeFile(
    path.join(rootBlogWebsitePath, 'recently-updated-posts.json'),
    JSON.stringify(recentlyUpdatedPosts, null, 2),
  );
}

await getPopularPosts();
