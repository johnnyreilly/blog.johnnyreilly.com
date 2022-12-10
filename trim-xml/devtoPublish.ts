import { XMLParser } from 'fast-xml-parser';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import {
  getBlogPathFromUrl,
  getGitLastUpdatedFromFilePath,
} from './getGitLastUpdated';
import { RssFeed } from './types';

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
  reading_time_minutes: number;
}

const rootUrl = 'https://blog.johnnyreilly.com';

const markdownImageRexEx = /!\[.*\]\((.*)\)/g;

async function loadRssFeed() {
  const rssPath = path.resolve('..', 'blog-website', 'build', 'rss.xml');

  console.log(`Loading ${rssPath}`);
  const rssXml = await fs.promises.readFile(rssPath, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
    cdataPropName: 'content:encoded',
  });
  const rss: RssFeed = parser.parse(rssXml);
  return rss;
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

    postArticle: async (article: {
      title: string;
      body_markdown: string;
      published: boolean;
      main_image: string;
      canonical_url: string;
      description: string;
      tags: string[];
    }) => {
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
        console.log(`Created article ${article.canonical_url}`, data);
      } catch (e) {
        console.error('Failed to create article', e);
        throw new Error('Failed to create article');
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

  // console.log('articles', articles);

  const rssFeed = await loadRssFeed();
  // console.log('rssFeed', rssFeed.rss.channel.item);

  for (const item of rssFeed.rss.channel.item) {
    // console.log('item', item);
    const canonicalUrl = item.link;
    const existingArticle = articles.find(
      (a) => a.canonical_url === canonicalUrl
    );
    if (existingArticle) {
      console.log(`Skipping ${canonicalUrl} as it already exists`);
      continue;
    }

    const blogFilePathRelative = getBlogPathFromUrl(rootUrl, canonicalUrl);

    console.log(canonicalUrl, blogFilePathRelative);
    if (!blogFilePathRelative) {
      continue;
    }

    const blogFilePath = path.resolve('..', blogFilePathRelative);
    const blogFileContent = await fs.promises.readFile(blogFilePath, 'utf8');
    const lastmod = await getGitLastUpdatedFromFilePath(blogFilePath);
    const { data, content } = matter(blogFileContent);
    // console.log(lastmod);
    // console.log(data);

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

    const tags = data['tags'] as string[]; // item.category;
    const title = data['title']; // item.title;
    const description = item.description['content:encoded'];
    // // const body = item['content:encoded'];
    // // const mainImage = item['media:content']._attributes.url;
    const published = true;
    const main_image = data['image']
      ? rootGitHubUrl +
        blogFilePathRelative.replace(
          'index.md',
          data['image'].substring(data['image'].indexOf('/'))
        )
      : undefined;

    const trimmedTags = tags.slice(0, 4).map((tag) => tag.replace(/ /g, ''));
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
      description,
      tags: trimmedTags,
    };

    console.log(body_markdown);
    // console.log(description)
    // console.log(main_image)

    console.log(
      `\n**************************\n\nCreating article ${canonicalUrl}\n\n`
    );
    // await api.postArticle(article);

    // break;
  }
}

// do it!
run();
