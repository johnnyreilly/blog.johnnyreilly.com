import fs from 'fs';
import path from 'path';
import { parseFrontMatter } from '@docusaurus/utils';
import {
  Article,
  DevToApiClient,
  devtoApiClientFactory,
} from './devtoApiClient';

const rootUrl = 'https://johnnyreilly.com';
const rootGitHubUrl =
  'https://raw.githubusercontent.com/johnnyreilly/blog.johnnyreilly.com/main/blog-website/blog/';
const docusaurusBlogDirectory = '../blog-website/blog';

const markdownImageRexEx = /!\[.*\]\((.*)\)/g;
const markdownRelativeBlogUrlRegex = /\[.*\]\(\.\.\/(.*)\/index.md\)/g;

async function getLastXBlogPostsToPublish({
  numberOfPosts,
}: {
  numberOfPosts: number;
}) {
  const blogPosts = await fs.promises.readdir(docusaurusBlogDirectory, {
    withFileTypes: true,
  });
  const blogPostDirectoryNames = blogPosts
    .slice(0)
    .reverse()
    .filter((post) => post.isDirectory())
    .map((post) => post.name)
    .slice(0, numberOfPosts);

  return blogPostDirectoryNames;
}

async function publishBlogPostToDevTo({
  blogFilePathRelative,
  articlesByCanonicalUrl,
  devtoApiClient,
}: {
  blogFilePathRelative: string;
  articlesByCanonicalUrl: Map<string, Article>;
  devtoApiClient: DevToApiClient;
}) {
  const blogFilePath = path.join(
    docusaurusBlogDirectory,
    blogFilePathRelative,
    'index.md'
  );
  console.log(`Processing ${blogFilePath}`);

  const blogFileContent = await fs.promises.readFile(blogFilePath, 'utf8');
  const { frontMatter, content } = parseFrontMatter(blogFileContent);

  const canonicalUrl = makeCanonicalUrl(
    blogFilePathRelative,
    frontMatter['slug'] as string | undefined
  );
  const contentWithCanonicalUrls = enrichMarkdownWithCanonicalUrls(content);
  const contentWithGitHubImages = enrichMarkdownWithImagesFromGitHub(
    contentWithCanonicalUrls,
    blogFilePathRelative
  );
  const tags = frontMatter['tags'] as string[];
  const title = frontMatter['title'] as string;
  const published = true;
  const main_image = makeMainImage(frontMatter, blogFilePathRelative);
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

  console.log(`\n---------------------------------------------------\n\n`);
  const existingArticle = articlesByCanonicalUrl.get(canonicalUrl);

  if (existingArticle) {
    console.log(`Updating article ${canonicalUrl}`);
    await devtoApiClient.updateArticle(existingArticle.id, article);
  } else {
    console.log(`Creating article ${canonicalUrl}`);
    await devtoApiClient.createArticle(article);
  }
}

function makeMainImage(
  frontMatter: { [key: string]: unknown },
  blogFilePathRelative: string
) {
  const image =
    typeof frontMatter['image'] === 'string'
      ? (frontMatter['image'] as string)
      : '';
  const main_image = image
    ? rootGitHubUrl +
      blogFilePathRelative +
      '/' +
      image.substring(image.indexOf('/') + 1)
    : undefined;
  return main_image;
}

function makeCanonicalUrl(
  blogFilePathRelative: string,
  frontMatterSlug?: string
) {
  const parsedBlogFileName = `${rootUrl}/${blogFilePathRelative
    .substring(0, 10)
    .split('-')
    .join('/')}/${blogFilePathRelative.substring(11)}`;

  const canonicalUrl = frontMatterSlug
    ? `${rootUrl}/${frontMatterSlug}`
    : parsedBlogFileName;
  return canonicalUrl;
}

function enrichMarkdownWithImagesFromGitHub(
  content: string,
  blogFilePathRelative: string
) {
  return Array.from(content.matchAll(markdownImageRexEx))
    .map((matches) => {
      const [completeMatch, url] = matches;
      const withGitHubUrl = completeMatch.replace(
        url,
        rootGitHubUrl + blogFilePathRelative + '/' + url
      );
      console.log(`Replacing ${completeMatch} with ${withGitHubUrl}`);
      return { oldImage: completeMatch, newImage: withGitHubUrl };
    })
    .reduce(
      (contentInProgress, { oldImage, newImage }) =>
        contentInProgress.replace(oldImage, newImage),
      content
    );
}

function enrichMarkdownWithCanonicalUrls(content: string) {
  return Array.from(content.matchAll(markdownRelativeBlogUrlRegex))
    .map((matches) => {
      const [
        /* eg [I wanted to add the last modified date to my blog posts.](../2022-11-25-adding-lastmod-to-sitemap-git-commit-date/index.md) */
        completeMatch,
        /* eg 2022-11-25-adding-lastmod-to-sitemap-git-commit-date */
        relativeBlogPath,
      ] = matches;

      const withCanonicalUrl = completeMatch.replace(
        `../${relativeBlogPath}/index.md`,
        makeCanonicalUrl(relativeBlogPath)
      );
      console.log(`Replacing ${completeMatch} with ${withCanonicalUrl}`);
      return { oldImage: completeMatch, newImage: withCanonicalUrl };
    })
    .reduce(
      (contentInProgress, { oldImage, newImage }) =>
        contentInProgress.replace(oldImage, newImage),
      content
    );
}

function makeDevtoApiClient() {
  const devToApiKey = process.env.DEVTO_APIKEY;

  if (!devToApiKey) {
    console.log('No dev.to API key specified!');
    process.exit(1);
  }

  return devtoApiClientFactory(devToApiKey);
}

const sleep = async ({ seconds }: { seconds: number }) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

async function run() {
  const devtoApiClient = makeDevtoApiClient();
  const articles = await devtoApiClient.getArticles();
  const articlesByCanonicalUrl = new Map<string, Article>(
    Array.from(articles).map((article) => [article.canonical_url, article])
  );
  const blogPostsToPublish = await getLastXBlogPostsToPublish({
    numberOfPosts: 5,
  });

  for (const blogFilePathRelative of blogPostsToPublish) {
    await publishBlogPostToDevTo({
      blogFilePathRelative,
      articlesByCanonicalUrl,
      devtoApiClient,
    });

    console.log('Sleeping for 5 seconds because rate limiting...');
    await sleep({ seconds: 5 });
  }
}

// do it!
run();
