import fs from 'fs';
import path from 'path';
import { parseFrontMatter } from '@docusaurus/utils';
import { Article, devtoApiClientFactory } from './devtoApiClient';

const rootUrl = 'https://blog.johnnyreilly.com';
const rootGitHubUrl =
  'https://raw.githubusercontent.com/johnnyreilly/blog.johnnyreilly.com/main/';
const docusaurusBlogDirectory = '../blog-website/blog';

const markdownImageRexEx = /!\[.*\]\((.*)\)/g;

async function getBlogPostsToPublish() {
  const blogPosts = await fs.promises.readdir(docusaurusBlogDirectory, {
    withFileTypes: true,
  });
  const blogPostDirectoryNames = blogPosts
    .slice(0)
    .reverse()
    .filter((post) => post.isDirectory())
    .map((post) => post.name)
    .slice(0, 5);

  // console.log(blogPostsExcludingHistoric)
  return blogPostDirectoryNames;
}

async function run() {
  const devToApiKey = process.env.DEVTO_APIKEY;

  if (!devToApiKey) {
    console.log('No dev.to API key specified!');
    process.exit(1);
  }

  const devtoApiClient = devtoApiClientFactory(devToApiKey);
  const articles = await devtoApiClient.getArticles();
  const articlesByCanonicalUrl = new Map<string, Article>(
    Array.from(articles).map((a) => [a.canonical_url, a])
  );
  const blogPostsToPublish = await getBlogPostsToPublish();

  for (const blogFilePathRelative of blogPostsToPublish) {
    const blogFilePath = path.join(
      docusaurusBlogDirectory,
      blogFilePathRelative,
      'index.md'
    );
    console.log(`Processing ${blogFilePath}`);

    const blogFileContent = await fs.promises.readFile(blogFilePath, 'utf8');
    const { frontMatter, content } = parseFrontMatter(blogFileContent);

    const parsedBlogFileName = `${rootUrl}/${blogFilePathRelative
      .substring(0, 10)
      .split('-')
      .join('/')}/${blogFilePathRelative.substring(11)}`;

    const canonicalUrl = frontMatter['slug']
      ? `${rootUrl}/${frontMatter['slug']}`
      : parsedBlogFileName;
    console.log(canonicalUrl);

    const contentWithGitHubImages = Array.from(
      content.matchAll(markdownImageRexEx)
    )
      .map((matches) => {
        const [completeMatch, url] = matches;
        const withGitHubUrl = completeMatch.replace(
          url,
          rootGitHubUrl + blogFilePathRelative.replace('index.md', url)
        );
        return { oldImage: completeMatch, newImage: withGitHubUrl };
      })
      .reduce(
        (contentInProgress, { oldImage, newImage }) =>
          contentInProgress.replace(oldImage, newImage),
        content
      );

    const tags = frontMatter['tags'] as string[];
    const title = frontMatter['title'] as string;
    const published = true;
    const image =
      typeof frontMatter['image'] === 'string'
        ? (frontMatter['image'] as string)
        : '';
    const main_image = image
      ? rootGitHubUrl +
        blogFilePathRelative.replace(
          'index.md',
          image.substring(image.indexOf('/'))
        )
      : undefined;

    const trimmedTags = tags.slice(0, 4).map((tag) => tag.replace(/\W/g, ''));
    const body_markdown = `---
title: ${title}
published: ${published}
tags: ${trimmedTags.join(',')}
canonical_url: ${canonicalUrl}
---
${contentWithGitHubImages}`;

    const article = {
      title,
      body_markdown,
      published,
      main_image,
      canonical_url: canonicalUrl,
      tags: trimmedTags,
    };

    console.log(`\n**************************\n\n`);
    const existingArticle = articlesByCanonicalUrl.get(canonicalUrl);

    if (existingArticle) {
      console.log(`Updating article ${canonicalUrl}`);
      await devtoApiClient.updateArticle(existingArticle.id, article);
    } else {
      console.log(`Creating article ${canonicalUrl}`);
      await devtoApiClient.createArticle(article);
    }

    console.log('Sleeping for 5 seconds because rate limiting...');
    await sleep(5000);
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// do it!
run();
