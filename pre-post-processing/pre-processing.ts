//@ts-check
import { type SimpleGitOptions, simpleGit } from 'simple-git';
import path from 'path';
import fs from 'fs';
import { orderBy } from 'lodash';

async function getBlogIndexMds() {
  const rootBlogPath = path.resolve('..', 'blog-website', 'blog');
  const blogIndexMds = (await fs.promises.readdir(rootBlogPath))
    .filter((file) => fs.statSync(path.join(rootBlogPath, file)).isDirectory())
    .map((file) => path.join(rootBlogPath, file, 'index.md'));

  return blogIndexMds;
}

async function getPopularPosts() {
  const baseDir = path.resolve(process.cwd(), '..');

  const options: Partial<SimpleGitOptions> = {
    baseDir,
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
  };

  const git = simpleGit(options);

  const blogIndexMdsAndLastCommitDates: {
    blogIndexMd: string;
    lastUpdated: string | undefined;
  }[] = [];

  const blogIndexMds = await getBlogIndexMds();
  for (const blogIndexMd of blogIndexMds) {
    const log = await git.log({
      file: blogIndexMd,
    });

    const latestCommitDate = log.latest?.date;
    blogIndexMdsAndLastCommitDates.push({
      blogIndexMd,
      lastUpdated: latestCommitDate,
    });
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
  const titleRegex = /title: ["'](.*)["']\n/;

  for (const blogIndexMd of blogIndexMdsOrderedByLastCommitDates) {
    const blogPostContent = await fs.promises.readFile(
      blogIndexMd.blogIndexMd,
      'utf-8',
    );
    const slugMatch = blogPostContent.match(slugRegex);
    const titleMatch = blogPostContent.match(titleRegex);

    // console.log(slugMatch);
    // console.log(titleMatch);
    if (!slugMatch || !titleMatch) {
      throw new Error(`no match ${blogIndexMd.blogIndexMd}`);
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
