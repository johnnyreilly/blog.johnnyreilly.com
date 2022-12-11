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
