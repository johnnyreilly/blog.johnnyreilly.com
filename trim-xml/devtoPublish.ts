import fs from 'fs';
import path from 'path';
import { parseFrontMatter } from '@docusaurus/utils';

interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

interface ArticleToPublish {
  title: string;
  body_markdown: string;
  published: boolean;
  main_image: string | undefined;
  canonical_url: string;
  description?: string;
  tags: string[];
}

interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  positive_reactions_count: number;
  cover_image: string | null;
  canonical_url: string;
  published_timestamp: string;
  tag_list: string[];
  user: User;
  body_markdown: string;
  body_html: string;
  reading_time_minutes: number;
}

const rootUrl = 'https://blog.johnnyreilly.com';
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

function apiFactory(apiKey: string) {
  const baseUrl = 'https://dev.to/api';

  return {
    getArticles: async () => {
      try {
        const articles: Article[] = [];
        let page = 1;
        const pageSize = 100;
        while (true) {
          const url = `${baseUrl}/articles/me/published?page=${page}&page_size=${pageSize}`;
          const res = await fetch(url, {
            headers: {
              'api-key': apiKey,
              accept: 'application/vnd.forem.api-v1+json',
            },
          });
          if (!res.ok) {
            console.error(res);
            throw new Error(`Failed to get articles ${url}`);
          }
          const data = (await res.json()) as Article[];
          if (data.length === 0) break;

          page += 1;
          articles.push(...data);
        }
        return articles;
      } catch (e) {
        console.error('Failed to get articles', e);
        throw new Error('Failed to get articles');
      }
    },

    createArticle: async (article: ArticleToPublish) => {
      try {
        const url = `${baseUrl}/articles`;
        const res = await fetch(url, {
          headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            article,
          }),
        });
        if (!res.ok) {
          console.error(res);
          console.error(await res.json());
          throw new Error(`Failed to create article ${article.canonical_url}`);
        }
        const data = (await res.json()) as Article;
        const { body_html, body_markdown, ...rest } = data;
        console.log(`Created article ${article.canonical_url}`, rest);
      } catch (e) {
        console.error('Failed to create article', e);
        throw new Error('Failed to create article');
      }
    },

    updateArticle: async (id: number, article: ArticleToPublish) => {
      try {
        const url = `${baseUrl}/articles/${id}`;
        const res = await fetch(url, {
          headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          body: JSON.stringify({
            article,
          }),
        });
        if (!res.ok) {
          console.error(res);
          console.error(await res.json());
          throw new Error(`Failed to update article ${article.canonical_url}`);
        }
        const data = (await res.json()) as Article;
        const { body_html, body_markdown, ...rest } = data;
        console.log(`Updated article ${article.canonical_url}`, rest);
      } catch (e) {
        console.error('Failed to update article', e);
        throw new Error('Failed to update article');
      }
    },
  };
}

async function run() {
  const devToApiKey = process.env.DEVTO_APIKEY;

  if (!devToApiKey) {
    console.log('No dev.to API key specified!');
    process.exit(1);
  }

  const api = apiFactory(devToApiKey);
  const articles = await api.getArticles();
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

    const existingArticle = articles.find(
      (a) => a.canonical_url === canonicalUrl
    );

    const rootGitHubUrl =
      'https://raw.githubusercontent.com/johnnyreilly/blog.johnnyreilly.com/main/';
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
    if (existingArticle) {
      console.log(`Updating article ${canonicalUrl}`);
      await api.updateArticle(existingArticle.id, article);
    } else {
      console.log(`Creating article ${canonicalUrl}`);
      await api.createArticle(article);
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
