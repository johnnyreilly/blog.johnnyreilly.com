export interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: number;
  lastmod?: string;
}
export interface Sitemap {
  urlset: {
    url: SitemapUrl[];
  };
}
export interface AtomFeed {
  feed: {
    id: string;
    title: string;
    updated: string;
    generator: string;
    link: {
      href: string;
      rel: string;
    };
    subtitle: string;
    icon: string;
    entry: {
      title: {
        '@_type': string;
        content: string;
      };
      id: string;
      link: {
        '@_href': string;
      };
      updated: string;
      summary: {
        '@_type': string;
        content: string;
      };
      content: {
        '@_type': string;
        content: string;
      };
      author: {
        name: string;
        uri: string;
      };
      category: {
        term: string;
        label: string;
      }[];
    }[];
  };
}
export interface RssItem {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
  'content:encoded': string;
  category: string[];
}
export interface RssFeed {
  rss: {
    channel: {
      title: string;
      link: string;
      description: string;
      lastBuildDate: string;
      docs: string;
      generator: string;
      item: RssItem[];
    };
  };
}
