//@ts-check
const docusaurusCloudinaryRehypePlugin = require('rehype-cloudinary-docusaurus');

const USE_CLOUDINARY = process.env['USE_CLOUDINARY'] === 'true';
console.log('USE_CLOUDINARY', USE_CLOUDINARY);

const fontaine = require('fontaine');
const lightCodeTheme = require('prism-react-renderer/themes/nightOwl'); //github
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const imageFetchPriorityRehypePlugin = require('./image-fetchpriority-rehype-plugin');

const url = 'https://johnnyreilly.com';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'johnnyreilly',
  tagline: "Hi! I'm John Reilly - welcome! ❤️🌻",
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
        googleAnalytics: {
          trackingID: 'UA-51754530-2',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-3N85G0SL3K',
          anonymizeIP: true,
        },
        docs: false,
        blog: {
          rehypePlugins: USE_CLOUDINARY
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
          },
          blogTitle: 'I CAN MAKE THIS WORK',
          blogDescription: 'The blog of John Reilly ❤️🌻',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 5,
          postsPerPage: 1,
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
          { to: 'archive', label: 'Blog Archive', position: 'left' },
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
                html: `<iframe src="https://github.com/sponsors/johnnyreilly/card" title="Sponsor johnnyreilly" style="border: 0; border-radius: 10px; background-color: white; min-height: 200px;"></iframe>`,
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
                label: 'RSS',
                href: 'https://johnnyreilly.com/rss.xml',
              },
              {
                label: 'Atom',
                href: 'https://johnnyreilly.com/atom.xml',
              },
              {
                label: 'Privacy Policy',
                href: 'https://johnnyreilly.com/privacy-policy',
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
