//@ts-check
const docusaurusCloudinaryRehypePlugin = require('rehype-cloudinary-docusaurus');

const IS_LIVE_SITE = process.env['IS_LIVE_SITE'] === 'true';
console.log('IS_LIVE_SITE', IS_LIVE_SITE);

const fontaine = require('fontaine');
const lightCodeTheme = require('prism-react-renderer/themes/nightOwl'); //github
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const imageFetchPriorityRehypePlugin = require('./image-fetchpriority-rehype-plugin');
const createFeedItems = require('./createFeedItems');

const url = 'https://johnnyreilly.com';
const title = 'johnnyreilly';
const tagline = "Hi! I'm John Reilly - welcome! ❤️🌻";
const description =
  "This is John Reilly's blog. John is an Open Source Software Engineer working on TypeScript, Azure, React, Node.js, .NET and more.";
const sameAs = [
  'https://github.com/johnnyreilly',
  'https://fosstodon.org/@johnny_reilly',
  'https://twitter.com/johnny_reilly',
  'https://dev.to/johnnyreilly',
  'https://stackoverflow.com/users/761388/john-reilly',
  'https://blog.logrocket.com/author/johnreilly/',
  'https://polywork.com/johnnyreilly',
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
      '@type': 'ImageObject',
      inLanguage: 'en-US',
      '@id': 'https://yoast.com/wordpress-seo/#primaryimage',
      url: 'https://yoast.com/app/uploads/2020/06/wordpress_seo_definitive_guide_2400x1350.png',
      contentUrl:
        'https://yoast.com/app/uploads/2020/06/wordpress_seo_definitive_guide_2400x1350.png',
      width: 2400,
      height: 1350,
      caption: 'WordPress SEO: The definitive guide',
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

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // googleAnalytics: {
        //   trackingID: 'UA-51754530-2',
        //   anonymizeIP: true,
        // },

        ...(IS_LIVE_SITE
          ? {
              gtag: {
                trackingID: 'G-3N85G0SL3K',
                anonymizeIP: true,
              },
            }
          : {}),

        docs: false,
        blog: {
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
  ],

  plugins: [
    function fontainePlugin(_context, _options) {
      return {
        name: 'fontaine-plugin',
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

    // [
    //   'client-redirects',
    //   /** @type {import('@docusaurus/plugin-client-redirects').Options} */
    //   ({
    // redirects: [
    //   {
    //     to: '/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration',
    //     from: '/2018/07/28/configuring-docker-azure-web-app-containers',
    //   },
    // ],
    // createRedirects: function (existingPath) {
    //   if (existingPath.match(urlRegex)) {
    //     const [, year, month, date, slug] = existingPath.split('/');
    //     const oldUrl = `/${year}/${month}/${slug}.html`;
    //     console.log(`redirect from ${oldUrl} -> ${existingPath}`);
    //     return [oldUrl, `/${year}/${month}/${slug}`];
    //   }
    // },
    //   }),
    // ],

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
            position: 'right',
          },
          {
            href: 'https://twitter.com/johnny_reilly',
            label: 'Twitter',
            position: 'right',
          },
          // <a rel="me" href="https://fosstodon.org/@johnny_reilly">Mastodon</a>
          {
            href: 'https://fosstodon.org/@johnny_reilly',
            label: 'Mastodon',
            rel: 'me',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support me',
            items: [
              {
                html: `<a href="https://www.buymeacoffee.com/qUBm0Wh" rel="noopener" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" loading="lazy" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>`,
              },
              {
                html: `<iframe src="https://github.com/sponsors/johnnyreilly/card" title="Sponsor johnnyreilly" style="border: 0; border-radius: 10px; background-color: white; min-height: 400px;"></iframe>`,
              },
            ],
          },
          {
            title: 'Misc',
            items: [
              {
                label: 'Blog source code on GitHub',
                href: 'https://github.com/johnnyreilly/blog.johnnyreilly.com',
              },
              {
                label: 'Blog tags / categories',
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
            ],
          },
        ],
        copyright: `Copyright © 2012 - ${new Date().getFullYear()} John Reilly. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp', 'docker', 'bicep'],
      },
    }),
};

module.exports = config;
