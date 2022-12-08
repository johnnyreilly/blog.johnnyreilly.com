import { XMLParser } from 'fast-xml-parser';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import {
  getBlogPathFromUrl,
  getGitLastUpdatedFromFilePath,
} from './getGitLastUpdated';
import { RssFeed } from './types';

const rootUrl = 'https://blog.johnnyreilly.com';

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
  const headers = {
    'api-key': apiKey,
    accept: 'application/vnd.forem.api-v1+json',
  };

  return {
    getArticles: async () => {
      try {
        const articles: Article[] = [];
        let page = 1;
        const pageSize = 100;
        while (true) {
          const url = `https://dev.to/api/articles/me/published?page=${page}&page_size=${pageSize}`;
          const res = await fetch(url, {
            headers,
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
        const url = `https://dev.to/api/articles`;
        const res = await fetch(url, {
          headers,
          method: 'POST',
          body: JSON.stringify({
            article,
          }),
        });
        if (!res.ok) {
          console.error(res);
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
    console.log(lastmod);
    console.log(data);

    break;

    /*
    const tags = item.category;
    const title = item.title;
    const description = item.description;
    // const body = item['content:encoded'];
    // const mainImage = item['media:content']._attributes.url;
    const published = true;

    const article = {
      title,
      body_markdown: body,
      published,
      main_image: mainImage,
      canonical_url: canonicalUrl,
      description,
      tags,
    };

    console.log(`Creating article ${canonicalUrl}`, article);
    // await api.postArticle(article);
    */
  }

  /*
---
title: Deep linking with Azure Static Web Apps and Easy Auth
date: 2022-12-04 00:00:00 UTC
published: true
tags: Authorization,EasyAuth,deeplink,StaticWebApps
canonical_url: https://blog.johnnyreilly.com/2022/12/04/azure-static-web-apps-easyauth-deeplink
---
   */

  // const imageFiles = getImageFilesFromDirectory(devToApiKey);
  // console.log(`Found ${imageFiles.length} image files in ${devToApiKey}`);
  // await processImageFiles(imageFiles);
}

// do it!
run();

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

// const articles: Article[] = [
//   {
//     type_of: 'article',
//     id: 1286943,
//     title: 'Deep linking with Azure Static Web Apps and Easy Auth',
//     description: "Azure Static Web Apps doesn't support deep linking with authentication. The post login redirect...",
//     published: true,
//     published_at: '2022-12-04T00:00:00.000Z',
//     slug: 'deep-linking-with-azure-static-web-apps-and-easy-auth-1ldi',
//     path: '/johnnyreilly/deep-linking-with-azure-static-web-apps-and-easy-auth-1ldi',
//     url: 'https://dev.to/johnnyreilly/deep-linking-with-azure-static-web-apps-and-easy-auth-1ldi',
//     comments_count: 0,
//     public_reactions_count: 0,
//     page_views_count: 5,
//     published_timestamp: '2022-12-07T06:54:10Z',
//     body_markdown: '---\n' +
//       'title: Deep linking with Azure Static Web Apps and Easy Auth\n' +
//       'date: 2022-12-04 00:00:00 UTC\n' +
//       'published: true\n' +
//       'tags: Authorization,EasyAuth,deeplink,StaticWebApps\n' +
//       'canonical_url: https://blog.johnnyreilly.com/2022/12/04/azure-static-web-apps-easyauth-deeplink\n' +
//       '---\n' +
//       '\n' +
//       "Azure Static Web Apps doesn't support deep linking with authentication. The [post login redirect](https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#post-login-redirect) parameter of `post_login_redirect_uri` does not support query string parameters. This post describes how to work around this limitation.\n" +
//       '\n' +
//       '![title image reading "Deep linking with Azure Static Web Apps and Easy Auth" with Azure AD and Static Web App logos](title-image.png)\n' +
//       '\n' +
//       '## Deep linking\n' +
//       '\n' +
//       "Imagine the situation: your colleague sends you `https://our-app.com/pages/important-page?someId=theId`. You click the link and you're presented with a login screen. You login and you're presented with a page, but not the one your colleague meant you to see. What do you do now? If you realise what's happened, you'll likely paste the URL into the address bar again so you end up where you hope to. But what if you don't realise what's happened? Answer: confusion and frustration.\n" +
//       '\n' +
//       "If you're using Azure Static Web Apps, you're likely to have this problem. [Azure Static Web Apps doesn't support deep linking with authentication](https://github.com/Azure/static-web-apps/issues/435). When you get redirected you'll find you are (at best) missing the query parameters. If you take a look at the link here you'll see a suggested workaround. We're going to develop that idea in this post.\n" +
//       '\n' +
//       '## The workaround\n' +
//       '\n' +
//       'The idea of the workaround is this:\n' +
//       '\n' +
//       "- at the start of the authentication process, store the URL you're trying to get to in local storage\n" +
//       '- when the authentication process completes, redirect to the URL you stored in local storage\n' +
//       '\n' +
//       "The post suggested a React specific approach. We'd like something that is framework agnostic. So if you're running with Svelte, Vue, Angular or something else, you can use this approach too.\n" +
//       '\n' +
//       '## The implementation\n' +
//       '\n' +
//       "We're going to need to make sure our [`staticwebapp.config.json`](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration) is set up to support our goal:\n" +
//       '\n' +
//       '```json\n' +
//       '{\n' +
//       '  "auth": {\n' +
//       '    "identityProviders": {\n' +
//       '      "azureActiveDirectory": {\n' +
//       '        "registration": {\n' +
//       '          "openIdIssuer": "https://login.microsoftonline.com/AAD_TENANT_ID/v2.0",\n' +
//       '          "clientIdSettingName": "AAD_CLIENT_ID",\n' +
//       '          "clientSecretSettingName": "AAD_CLIENT_SECRET"\n' +
//       '        }\n' +
//       '      }\n' +
//       '    }\n' +
//       '  },\n' +
//       '  "navigationFallback": {\n' +
//       '    "rewrite": "index.html"\n' +
//       '  },\n' +
//       '  "routes": [\n' +
//       '    {\n' +
//       '      "route": "/login",\n' +
//       '      "rewrite": "/.auth/login/aad",\n' +
//       '      "allowedRoles": ["anonymous", "authenticated"]\n' +
//       '    },\n' +
//       '    {\n' +
//       '      "route": "/.auth/login/github",\n' +
//       '      "statusCode": 404\n' +
//       '    },\n' +
//       '    {\n' +
//       '      "route": "/.auth/login/twitter",\n' +
//       '      "statusCode": 404\n' +
//       '    },\n' +
//       '    {\n' +
//       '      "route": "/logout",\n' +
//       '      "redirect": "/.auth/logout",\n' +
//       '      "allowedRoles": ["anonymous", "authenticated"]\n' +
//       '    },\n' +
//       '    {\n' +
//       '      "route": "/*.json",\n' +
//       '      "allowedRoles": ["authenticated"]\n' +
//       '    }\n' +
//       '  ],\n' +
//       '  "responseOverrides": {\n' +
//       '    "401": {\n' +
//       '      "redirect": "/login",\n' +
//       '      "statusCode": 302\n' +
//       '    }\n' +
//       '  },\n' +
//       '  "globalHeaders": {\n' +
//       `    "content-security-policy": "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'"\n` +
//       '  },\n' +
//       '  "mimeTypes": {\n' +
//       '    ".json": "text/json",\n' +
//       '    ".md": "text/markdown",\n' +
//       '    ".xml": "application/xml"\n' +
//       '  }\n' +
//       '}\n' +
//       '```\n' +
//       '\n' +
//       "There's a number of things to note here:\n" +
//       '\n' +
//       "- we're using Azure Active Directory as our identity provider (and disabling others) - the approach in this post will work with any identity provider; this is just the one I'm using. Easy Auth supports [a number of identity providers](https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#identity-providers)\n" +
//       "- we're creating a `/login` route to redirect to the Azure AD login page - you don't have to do this, but it's a nice touch.\n" +
//       "- we're protecting the `*.json` files with authentication - this is because our JSON files actually contain secure information. If we were using say an API instead, we'd protect that with authentication instead. Crucially, access to HTML / JS / CSS is _not_ protected. This is important, because we need to be able to access our `index.html` file and associated JavaScript to store the URL we're trying to get to in local storage.\n" +
//       '\n' +
//       "With this in place, we can implement our workaround. Let's create a file called `deeplink.ts`:\n" +
//       '\n' +
//       '```ts\n' +
//       "const deeplinkPathAndQueryKey = 'deeplink:pathAndQuery';\n" +
//       '\n' +
//       '/**\n' +
//       ' * If authenticated, redirect to the path and query string stored in local storage.\n' +
//       ' * If not authenticated, store the current path and query string in local storage and redirect to the login page.\n' +
//       ' *\n' +
//       ' * @param loginUrl The URL to redirect to if the user is not authenticated\n' +
//       ' */\n' +
//       'export async function deeplink(loginUrl: string) {\n' +
//       '  if (!loginUrl) {\n' +
//       "    throw new Error('loginUrl is required');\n" +
//       '  }\n' +
//       '\n' +
//       '  const pathAndQuery = location.pathname + location.search;\n' +
//       '  console.log(`deeplink: URL before: ${pathAndQuery}`);\n' +
//       '\n' +
//       '  const deeplinkPathAndQuery = localStorage.getItem(deeplinkPathAndQueryKey);\n' +
//       '\n' +
//       '  const isAuth = await isAuthenticated();\n' +
//       '\n' +
//       '  if (isAuth) {\n' +
//       "    if (deeplinkPathAndQuery && pathAndQuery === '/') {\n" +
//       '      console.log(`deeplink: Redirecting to ${deeplinkPathAndQuery}`);\n' +
//       '      localStorage.removeItem(deeplinkPathAndQueryKey);\n' +
//       "      history.replaceState(null, '', deeplinkPathAndQuery);\n" +
//       '    }\n' +
//       '  } else if (!deeplinkPathAndQuery) {\n' +
//       "    if (pathAndQuery !== '/' && pathAndQuery !== loginUrl) {\n" +
//       '      console.log(\n' +
//       '        `deeplink: Storing redirect URL of ${pathAndQuery} and redirecting to ${loginUrl}`\n' +
//       '      );\n' +
//       '      localStorage.setItem(deeplinkPathAndQueryKey, pathAndQuery);\n' +
//       '      location.href = loginUrl;\n' +
//       '    } else {\n' +
//       '      console.log(`deeplink: Redirecting to ${loginUrl}`);\n' +
//       '      location.href = loginUrl;\n' +
//       '    }\n' +
//       '  }\n' +
//       '}\n' +
//       '\n' +
//       'async function isAuthenticated() {\n' +
//       '  try {\n' +
//       "    const response = await fetch('/.auth/me');\n" +
//       '    const authMe = (await response.json()) as AuthMe;\n' +
//       '    const isAuth = authMe.clientPrincipal !== null;\n' +
//       '    return isAuth;\n' +
//       '  } catch (error) {\n' +
//       "    console.error('Failed to fetch /.auth/me', error);\n" +
//       '    return false;\n' +
//       '  }\n' +
//       '}\n' +
//       '\n' +
//       'interface AuthMe {\n' +
//       '  clientPrincipal: null | {\n' +
//       '    claims: {\n' +
//       '      typ: string;\n' +
//       '      val: string;\n' +
//       '    }[];\n' +
//       '    identityProvider: string;\n' +
//       '    userDetails: string;\n' +
//       '    userId: string;\n' +
//       '    userRoles: string[];\n' +
//       '  };\n' +
//       '}\n' +
//       '```\n' +
//       '\n' +
//       'The code above implements our workaround. It does the following:\n' +
//       '\n' +
//       '- it checks whether a user is authenticated by hitting the `/.auth/me` endpoint that is provided by the Easy Auth / Static Web Apps authentication system\n' +
//       '- if users are not authenticated, it:\n' +
//       '  - stores the path and query string in localStorage and\n' +
//       '  - redirects them to the login page\n' +
//       '- when they return post-authentication it retrieves the path and query string from localStorage and sets the URL to that\n' +
//       '\n' +
//       "What does usage look like? Well let's take the root of a simple React app:\n" +
//       '\n' +
//       '```tsx\n' +
//       "import { StrictMode } from 'react';\n" +
//       "import { BrowserRouter } from 'react-router-dom';\n" +
//       "import { createRoot } from 'react-dom/client';\n" +
//       "import App from './App';\n" +
//       "import { deeplink } from 'easyauth-deeplink';\n" +
//       '\n' +
//       'function main() {\n' +
//       "  const container = document.getElementById('root');\n" +
//       '  if (container) {\n' +
//       '    const root = createRoot(container);\n' +
//       '    root.render(\n' +
//       '      <StrictMode>\n' +
//       '        <BrowserRouter>\n' +
//       '          <App />\n' +
//       '        </BrowserRouter>\n' +
//       '      </StrictMode>\n' +
//       '    );\n' +
//       '  }\n' +
//       '}\n' +
//       '\n' +
//       "deeplink('/login').then(main);\n" +
//       '// or\n' +
//       "deeplink('/.auth/login/aad').then(main);\n" +
//       '// or\n' +
//       "deeplink('/.auth/login/github').then(main);\n" +
//       '// or\n' +
//       "deeplink('/.auth/login/twitter').then(main);\n" +
//       '// or\n' +
//       "deeplink('/.auth/login/google').then(main);\n" +
//       '// etc\n' +
//       '```\n' +
//       '\n' +
//       "You can see here that the first thing we do is call `deeplink` with the URL of the login page (you can see I've provided a number of options). This will redirect the user to the login page if they're not authenticated, and will redirect them to the URL they were trying to access if they are authenticated. Once that's done, we render our app.\n" +
//       '\n' +
//       'You should be able to apply this regardless of your framework. The important thing is that you call `deeplink` before you render your app.\n' +
//       '\n' +
//       '## Announcing `easyauth-deeplink`\n' +
//       '\n' +
//       "I've created a package called [`easyauth-deeplink`](https://github.com/johnnyreilly/easyauth-deeplink) that implements the workaround above. You can install it with `npm install easyauth-deeplink` or `yarn add easyauth-deeplink`. It's a single file, so you can just copy and paste it into your project if you prefer.\n" +
//       '\n' +
//       '## Conclusion\n' +
//       '\n' +
//       'It would be tremendous if this became a feature that was built into Azure Static Web Apps. Maybe one day it will be. In the meantime, I hope this workaround helps you.\n' +
//       '\n' +
//       "It should be said that whilst we've described usage in this post with Static Web Apps, the same approach should work with any Azure Service that has Easy Auth enabled; App Service / Function Apps etc. I've not tried it, but I'd be surprised if it didn't work.\n",
//     positive_reactions_count: 0,
//     cover_image: null,
//     tag_list: [ 'authorization', 'easyauth', 'deeplink', 'staticwebapps' ],
//     canonical_url: 'https://blog.johnnyreilly.com/2022/12/04/azure-static-web-apps-easyauth-deeplink',
//     reading_time_minutes: 5,
//     user: {
//       name: 'John Reilly',
//       username: 'johnnyreilly',
//       twitter_username: 'johnny_reilly',
//       github_username: 'johnnyreilly',
//       user_id: 844594,
//       website_url: 'https://blog.johnnyreilly.com',
//       profile_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hL1Y0WMx--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/844594/f530b48c-6eff-49fc-a614-9945cf0f1da9.jpeg',
//       profile_image_90: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RtKr2o-c--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/844594/f530b48c-6eff-49fc-a614-9945cf0f1da9.jpeg'
//     }
//   },
//   {
//     type_of: 'article',
//     id: 1245836,
//     title: 'The definitive guide to migrating from Blogger to Docusaurus',
//     description: "My blog used to be hosted on Blogger. I made the move to Docusaurus about 18 months ago and I'm...",
//     published: true,
//     published_at: '2022-11-06T21:10:39.344Z',
//     slug: 'the-definitive-guide-to-migrating-from-blogger-to-docusaurus-559',
//     path: '/johnnyreilly/the-definitive-guide-to-migrating-from-blogger-to-docusaurus-559',
//     url: 'https://dev.to/johnnyreilly/the-definitive-guide-to-migrating-from-blogger-to-docusaurus-559',
//     comments_count: 0,
//     public_reactions_count: 2,
//     page_views_count: 11,
//     published_timestamp: '2022-11-06T21:10:39Z',
//     body_markdown: "My blog used to be hosted on Blogger. I made the move to Docusaurus about 18 months ago and I'm delighted with the experience! To make it easier for others to do the same thing I've put together a migration guide.\n" +
//       '\n' +
//       '\n' +
//       '[The definitive guide to migrating from Blogger to Docusaurus](https://blog.johnnyreilly.com/definitive-guide-to-migrating-from-blogger-to-docusaurus)',
//     positive_reactions_count: 2,
//     cover_image: null,
//     tag_list: [ 'blogger', 'docusaurus', 'blog', 'migration' ],
//     canonical_url: 'https://dev.to/johnnyreilly/the-definitive-guide-to-migrating-from-blogger-to-docusaurus-559',
//     reading_time_minutes: 1,
//     user: {
//       name: 'John Reilly',
//       username: 'johnnyreilly',
//       twitter_username: 'johnny_reilly',
//       github_username: 'johnnyreilly',
//       user_id: 844594,
//       website_url: 'https://blog.johnnyreilly.com',
//       profile_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hL1Y0WMx--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/844594/f530b48c-6eff-49fc-a614-9945cf0f1da9.jpeg',
//       profile_image_90: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RtKr2o-c--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/844594/f530b48c-6eff-49fc-a614-9945cf0f1da9.jpeg'
//     }
//   }
// ]
