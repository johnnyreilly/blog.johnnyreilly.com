export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface ArticleToPublish {
  title: string;
  body_markdown: string;
  published: boolean;
  main_image: string | undefined;
  canonical_url: string;
  description?: string;
  tags: string[];
}

export interface Article {
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

export interface DevToApiClient {
  getArticles: () => Promise<Article[]>;
  createArticle: (article: ArticleToPublish) => Promise<void>;
  updateArticle: (id: number, article: ArticleToPublish) => Promise<void>;
}

export function devtoApiClientFactory(apiKey: string): DevToApiClient {
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
