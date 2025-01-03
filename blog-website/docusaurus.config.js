//@ts-check
/* eslint-env node */
const IS_LIVE_SITE = process.env['IS_LIVE_SITE'] === 'true';
console.log('IS_LIVE_SITE', IS_LIVE_SITE);

import { readFileSync } from 'fs';
import * as fontaine from 'fontaine';
import { themes as prismThemes } from 'prism-react-renderer';
import imageFetchPriorityRehypePlugin from './image-fetchpriority-rehype-plugin.mjs';
import docusaurusCloudinaryRehypePlugin from 'rehype-cloudinary-docusaurus';
// import docusaurusCloudinaryRehypePlugin from './image-cloudinary-rehype-plugin.mjs';

import { createFeedItems } from './createFeedItems.mjs';
import { createSitemapItems } from './createSitemapItems.mjs';
// import recentlyUpdatedPostsJson from "./recently-updated-posts.json" assert { type: "json" };
// const recentlyUpdatedPostsJson = await import("./recently-updated-posts.json", {
//   assert: { type: "json" },
// });
const recentlyUpdatedPostsJson = JSON.parse(
  readFileSync('./recently-updated-posts.json', { encoding: 'utf-8' }),
);

const url = 'https://johnnyreilly.com';
const title = 'johnnyreilly';
const tagline = "Hi! I'm John Reilly - welcome! ❤️🌻";
const description =
  "This is John Reilly's blog. John is an Open Source Software Engineer working on TypeScript, Azure, React, Node.js, .NET and more.";
const sameAs = [
  'https://github.com/johnnyreilly',
  'https://fosstodon.org/@johnny_reilly',
  'https://twitter.com/johnny_reilly',
  'https://bsky.app/profile/johnnyreilly.com',
  'https://dev.to/johnnyreilly',
  'https://app.daily.dev/johnnyreilly',
  'https://stackoverflow.com/users/761388/john-reilly',
  'https://blog.logrocket.com/author/johnreilly/',
  'https://www.reddit.com/user/johnny_reilly',
  'https://uk.linkedin.com/in/johnnyreilly',
];

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    /*

    // The following is an example of the structured data that is generated for a blog post taken from https://yoast.com/features/structured-data/
    {
      '@type': 'Article',
      '@id': 'https://yoast.com/wordpress-seo/#article',
      isPartOf: { '@id': 'https://yoast.com/wordpress-seo/' },
      author: {
        name: 'Joost de Valk',
        '@id':
          'https://yoast.com/#/schema/person/2d72f7859830ea2d4a4911795c69dfbb',
      },
      headline: 'WordPress SEO: the definitive guide',
      datePublished: '2022-06-01T12:00:00+00:00',
      dateModified: '2023-01-24T09:16:53+00:00',
      mainEntityOfPage: { '@id': 'https://yoast.com/wordpress-seo/' },
      wordCount: 10383,
      commentCount: 0,
      publisher: { '@id': 'https://yoast.com/#organization' },
      image: { '@id': 'https://yoast.com/wordpress-seo/#primaryimage' },
      thumbnailUrl:
        'https://yoast.com/app/uploads/2020/06/wordpress_seo_definitive_guide_2400x1350.png',
      keywords: [
        'Content SEO',
        'Google Analytics',
        'Mobile SEO',
        'Security',
        'Site Speed',
        'Site structure',
        'Technical SEO',
        'WordPress',
        'Yoast SEO',
      ],
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'CommentAction',
          name: 'Comment',
          target: ['https://yoast.com/wordpress-seo/#respond'],
        },
      ],
      copyrightYear: '2022',
      copyrightHolder: { '@id': 'https://yoast.com/#organization' },
    },

    {
      '@type': 'WebPage',
      '@id': 'https://yoast.com/wordpress-seo/',
      url: 'https://yoast.com/wordpress-seo/',
      name: 'WordPress SEO Tutorial • The Definitive Guide • Yoast',
      isPartOf: { '@id': 'https://yoast.com/#website' },
      primaryImageOfPage: {
        '@id': 'https://yoast.com/wordpress-seo/#primaryimage',
      },
      image: { '@id': 'https://yoast.com/wordpress-seo/#primaryimage' },
      thumbnailUrl:
        'https://yoast.com/app/uploads/2020/06/wordpress_seo_definitive_guide_2400x1350.png',
      datePublished: '2022-06-01T12:00:00+00:00',
      dateModified: '2023-01-24T09:16:53+00:00',
      description:
        'Want higher rankings? This is THE tutorial you need to hugely increase your search engine traffic by improving your WordPress SEO.',
      breadcrumb: { '@id': 'https://yoast.com/wordpress-seo/#breadcrumb' },
      inLanguage: 'en-US',
      potentialAction: [
        { '@type': 'ReadAction', target: ['https://yoast.com/wordpress-seo/'] },
      ],
    },

    {
      '@type': 'BreadcrumbList',
      '@id': 'https://yoast.com/wordpress-seo/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://yoast.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'SEO blog',
          item: 'https://yoast.com/seo-blog/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'WordPress',
          item: 'https://yoast.com/tag/wordpress/',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'WordPress SEO: the definitive guide',
        },
      ],
    },
    */

    {
      '@id': 'https://johnnyreilly.com',
      '@type': 'WebSite',
      url,
      name: title,
      description,

      copyrightHolder: {
        '@id': 'https://johnnyreilly.com/about',
      },
      publisher: {
        '@id': 'https://johnnyreilly.com/about',
      },

      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://johnnyreilly.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-UK',
    },

    {
      '@id': 'https://johnnyreilly.com/about',
      '@type': 'Person',
      name: 'John Reilly',
      alternateName: 'Johnny Reilly',
      image: {
        '@type': 'ImageObject',
        inLanguage: 'en-UK',
        '@id': 'https://johnnyreilly.com/about#image',
        url: 'https://johnnyreilly.com/img/profile.jpg',
        contentUrl: 'https://johnnyreilly.com/img/profile.jpg',
        width: 200,
        height: 200,
        caption: 'John Reilly',
      },

      description:
        'John is an Open Source Software Engineer working on TypeScript, Azure, React, Node.js, .NET and more. As well as writing code, John is a speaker at meetups, one of the founders of the TS Congress conference, and the author of the history of Definitely Typed, which he worked on in the early days of TypeScript.',
      url: 'https://johnnyreilly.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Twickenham',
        addressLocality: 'London',
        addressCountry: 'United Kingdom',
      },
      email: 'johnny_reilly@hotmail.com',
      birthPlace: 'Bristol',
      sameAs,
    },

    {
      '@id': 'https://johnnyreilly.com/about#organization',
      '@type': ['Organization', 'Brand'],
      url,
      name: title,
      description,
      logo: {
        '@type': 'ImageObject',
        inLanguage: 'en-UK',
        '@id': 'https://johnnyreilly.com/#logo',
        url: 'https://johnnyreilly.com/img/profile.jpg',
        contentUrl: 'https://johnnyreilly.com/img/profile.jpg',
        width: 200,
        height: 200,
        caption: 'John Reilly',
      },
      image: { '@id': 'https://johnnyreilly.com/#logo' },
      sameAs,
    },
  ],
};

/**
 * @typedef {object} FooterLinkAndOrTitle a label and an href
 * @property {string} label - a babel for the link
 * @property {string} href - the href
 * @property {string=} icon - the icon image
 */

/**
 * @param {FooterLinkAndOrTitle} link
 * @returns
 */
function makeIconImage(link) {
  return link.icon
    ? `<img src="${link.icon}" alt="${link.label} icon" class="footer__icon" />`
    : '';
}

/**
 * @param {{ title: FooterLinkAndOrTitle; links: FooterLinkAndOrTitle[]}} titleAndLinks
 */
function makeFooterColumnWithMultipleTitles({ title, links }) {
  const icon = makeIconImage(title);

  return `<div class="footer__title">${
    title.href
      ? `<a href="${title.href}" class="footer__link-item">${title.label}${icon}</a>`
      : title.label + icon
  }</div>
<ul class="footer__items clean-list">
  ${links
    .map(
      (link) =>
        `<li class="footer__item"><a href="${
          link.href
        }" class="footer__link-item">${link.label}${makeIconImage(
          link,
        )}</a></li>`,
    )
    .join('')}
</ul>`;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline,
  url,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'favicon.ico',
  organizationName: 'johnnyreilly', // Usually your GitHub org/user name.
  projectName: 'blog.johnnyreilly.com', // Usually your repo name.

  future: {
    experimental_faster: true,
  },

  markdown: {
    // based on https://github.com/facebook/docusaurus/blob/main/website/docs/migration/v3.mdx
    mdx1Compat: {
      comments: true,
      admonitions: false,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        ...(IS_LIVE_SITE
          ? {
              gtag: {
                trackingID: 'G-3N85G0SL3K',
                anonymizeIP: true,
              },
            }
          : {}),
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
          createSitemapItems,
        },

        docs: false,
        blog: {
          archiveBasePath: '/blog',
          rehypePlugins: IS_LIVE_SITE
            ? [
                [
                  docusaurusCloudinaryRehypePlugin,
                  {
                    cloudName: 'priou',
                    baseUrl: url,
                  },
                ],
                imageFetchPriorityRehypePlugin,
              ]
            : [imageFetchPriorityRehypePlugin],

          feedOptions: {
            type: ['rss', 'atom'],
            title: 'I CAN MAKE THIS WORK',
            description: 'The blog of John Reilly ❤️🌻',
            language: 'en',
            copyright: `Copyright © 2012 - ${new Date().getFullYear()} John Reilly.`,
            createFeedItems,
          },
          blogTitle: 'I CAN MAKE THIS WORK',
          blogDescription: 'The blog of John Reilly ❤️🌻',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 8,
          tags: 'tags.yml',
          onInlineAuthors: 'ignore',
          onInlineTags: 'throw',
          onUntruncatedBlogPosts: 'ignore',
          postsPerPage: 20,
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
          showReadingTime: true,
          editUrl:
            'https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  headTags: [
    // <link rel="preload" href="/fonts/Poppins-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'https://johnnyreilly.com/fonts/Poppins-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    // <link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'https://johnnyreilly.com/fonts/Poppins-Bold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    // <link rel="preconnect" href="https://res.cloudinary.com" />
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://res.cloudinary.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'monetization',
        href: 'https://ilp.uphold.com/LwQQhXdpwxeJ',
      },
    },
    // Structured data in the form of JSON-LD - inspired by https://moz.com/blog/writing-structured-data-guide
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify(siteStructuredData),
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'webmention',
        href: 'https://webmention.io/johnnyreilly.com/webmention',
      },
    },
  ],

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function fontainePlugin(_context, _options) {
      return {
        name: 'fontaine-plugin',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        configureWebpack(_config, _isServer) {
          return {
            plugins: [
              fontaine.FontaineTransform.webpack({
                fallbacks: [
                  'system-ui',
                  '-apple-system',
                  'BlinkMacSystemFont',
                  'Segoe UI',
                  'Roboto',
                  'Oxygen',
                  'Ubuntu',
                  'Cantarell',
                  'Open Sans',
                  'Helvetica Neue',
                  'sans-serif',
                ],
                // You may need to resolve assets like `/fonts/Roboto.woff2` to a particular directory
                resolvePath: (id) => '../fonts/' + id,
              }),
            ],
          };
        },
      };
    },

    [
      'pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/profile-64x64.jpg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3578e5',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'robots', content: 'max-image-preview:large' },
        // This would become <meta name="robots" content="max-image-preview:large"> in the generated HTML
        { name: 'monetization', content: '$ilp.uphold.com/LwQQhXdpwxeJ' },
        // This would become <meta name="monetization" content="$ilp.uphold.com/LwQQhXdpwxeJ"> in the generated HTML
      ],

      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'J3MYR1INLT',

        // Public API key: it is safe to commit it
        apiKey: '34a2848ab8caa017d6393fb23f31c655',

        indexName: 'blog-johnnyreilly',

        // Optional: see doc section below
        // contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        // searchParameters: {},

        //... other Algolia params
      },

      // Relative to your site's 'static' directory.
      // Cannot be SVGs. Can be external URLs too.
      image: 'img/profile.jpg',
      navbar: {
        title: 'John Reilly',
        logo: {
          alt: 'Profile picture of John Reilly',
          src: 'img/profile-64x64.jpg',
          width: 32,
          height: 32,
        },
        items: [
          /*
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        */
          { to: 'about', label: 'About', position: 'left' },
          { to: 'blog', label: 'Blog', position: 'left' },
          { to: 'talks', label: 'Talks', position: 'left' },
          // {
          //   href: 'https://polywork.johnnyreilly.com/',
          //   label: 'Polywork',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/johnnyreilly',
            label: 'GitHub',
            rel: 'me',
            position: 'right',
          },
          {
            href: 'https://bsky.app/profile/johnnyreilly.com',
            label: 'Bluesky',
            rel: 'me',
            position: 'right',
          },
          // <a rel="me" href="https://fosstodon.org/@johnny_reilly">Mastodon</a>
          {
            href: 'https://fosstodon.org/@johnny_reilly',
            label: 'Mastodon',
            rel: 'me',
            position: 'right',
          },

          {
            href: 'https://twitter.com/johnny_reilly',
            label: 'Twitter',
            rel: 'me',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: [
                  makeFooterColumnWithMultipleTitles({
                    title: {
                      label: 'TypeScript',
                      href: '/tags/typescript',
                      icon: '/img/ts-logo-128.svg',
                    },
                    links: [
                      {
                        href: '/typescript-vs-jsdoc-javascript',
                        label: 'TypeScript vs JSDoc JavaScript',
                      },
                      {
                        href: '/type-annotations-strong-types-weakly-held',
                        label:
                          'Type annotations proposal: strong types, weakly held',
                      },
                    ],
                  }),
                  makeFooterColumnWithMultipleTitles({
                    title: {
                      label: 'Azure',
                      href: '/tags/azure',
                      icon: '/img/azure-logo.svg',
                    },
                    links: [
                      {
                        href: '/azure-container-apps-easy-auth-and-dotnet-authentication',
                        label: 'Azure Container Apps: Easy Auth and .NET',
                      },
                      {
                        href: '/introducing-azdo-npm-auth',
                        label:
                          'Introducing azdo-npm-auth (Azure DevOps npm auth)',
                      },
                      {
                        href: '/npx-and-azure-artifacts-the-secret-cli-delivery-mechanism',
                        label:
                          'npx and Azure Artifacts: the secret CLI delivery mechanism',
                      },
                      {
                        href: '/azure-static-web-apps-dynamic-redirects-azure-functions',
                        label:
                          'Azure Static Web Apps: dynamic redirects with Azure Functions',
                      },
                    ],
                  }),
                  makeFooterColumnWithMultipleTitles({
                    title: {
                      label: 'ASP.NET',
                      href: '/tags/asp-net',
                      icon: '/img/dotnet-logo.svg',
                    },
                    links: [
                      {
                        href: '/eslint-your-csharp-in-vs-code-with-roslyn-analyzers',
                        label: 'ESLint your C# with Roslyn Analyzers',
                      },
                      {
                        href: '/aspnet-serilog-and-application-insights',
                        label: 'ASP.NET, Serilog and Application Insights',
                      },
                    ],
                  }),
                  makeFooterColumnWithMultipleTitles({
                    title: {
                      label: 'React',
                      href: '/tags/react',
                      icon: '/img/react-logo.svg',
                    },
                    links: [
                      {
                        href: '/structured-data-seo-and-react',
                        label: 'Structured data and React',
                      },
                      {
                        href: '/react-usesearchparamsstate',
                        label:
                          'React: storing state in URL with URLSearchParams',
                      },
                    ],
                  }),
                ].join(''),
              },
            ],
          },
          {
            items: [
              {
                html: [
                  makeFooterColumnWithMultipleTitles({
                    title: { label: 'Notable articles', href: '' },
                    links: [
                      {
                        href: '/definitely-typed-the-movie',
                        label: 'The history of Definitely Typed',
                        icon: '/img/definitely-typed-logo.png',
                      },
                      {
                        href: '/typescript-documentary',
                        label: 'TypeScript: the documentary',
                        icon: '/img/ts-logo-128.svg',
                      },
                      {
                        href: '/how-we-fixed-my-seo',
                        label: 'How we fixed my SEO',
                      },
                    ],
                  }),

                  makeFooterColumnWithMultipleTitles({
                    title: { label: 'Popular articles', href: '' },
                    links: [
                      {
                        href: '/aspnet-serilog-and-application-insights',
                        label: 'ASP.NET, Serilog and Application Insights',
                      },
                      {
                        href: '/eslint-your-csharp-in-vs-code-with-roslyn-analyzers',
                        label: 'ESLint your C# with Roslyn Analyzers',
                      },
                      {
                        href: '/prettier-your-csharp-with-dotnet-format-and-lint-staged',
                        label:
                          'dotnet-format: Prettier your C# with lint-staged & husky',
                      },
                    ],
                  }),

                  makeFooterColumnWithMultipleTitles({
                    title: { label: 'Recently updated', href: '' },
                    links: recentlyUpdatedPostsJson.map((post) => ({
                      href: post.link,
                      label: post.title,
                    })),
                  }),
                ].join(''),
              },
            ],
          },
          {
            title: 'Learn more / support me',
            items: [
              {
                label: 'About me',
                href: '/about',
              },
              {
                label: 'Blog source code on GitHub',
                href: 'https://github.com/johnnyreilly/blog.johnnyreilly.com',
              },
              {
                label: 'Blog categories',
                href: '/tags',
              },
              {
                label: 'RSS feed',
                href: 'https://johnnyreilly.com/rss.xml',
              },
              {
                label: 'Atom feed',
                href: 'https://johnnyreilly.com/atom.xml',
              },
              {
                label: 'Privacy Policy',
                href: '/privacy-policy',
              },
              {
                html: `<iframe src="https://github.com/sponsors/johnnyreilly/card" title="Sponsor johnnyreilly" style="margin-top: 20px; border: 0; border-radius: 10px; background-color: white; min-height: 400px;"></iframe>`,
              },
              {
                html: `<a href="https://www.buymeacoffee.com/qUBm0Wh" rel="noopener" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" loading="lazy" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>`,
              },
            ],
          },
        ],
        copyright: `Copyright © 2012 - ${new Date().getFullYear()} John Reilly. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.shadesOfPurple,
        darkTheme: prismThemes.nightOwl,
        additionalLanguages: [
          'powershell',
          'csharp',
          'docker',
          'bicep',
          'diff',
          'bash',
          'json',
          'yaml',
          'go',
        ],
      },
    }),
};

export default config;
