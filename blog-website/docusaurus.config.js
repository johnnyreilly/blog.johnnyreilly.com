//@ts-check
const urlRegex = /^\/\d{4}\/\d{2}\/\d{2}\//;

const FontPreloadPlugin = require('webpack-font-preload-plugin');
const lightCodeTheme = require('prism-react-renderer/themes/nightOwl'); //github
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'I CAN MAKE THIS WORK',
  tagline: 'The blog of johnnyreilly ❤️🌻',
  url: 'https://blog.johnnyreilly.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'johnnyreilly', // Usually your GitHub org/user name.
  projectName: 'blog.johnnyreilly.com', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          trackingID: 'G-226F0LR9KE',
          anonymizeIP: true,
        },
        docs: false,
        blog: {
          blogTitle: 'I CAN MAKE THIS WORK',
          blogDescription: 'The blog of johnnyreilly',
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

  plugins: [
    function preloadFontPlugin(_context, _options) {
      return {
        name: 'preload-font-plugin',
        configureWebpack(_config, _isServer) {
          return {
            plugins: [new FontPreloadPlugin()],
          };
        },
      };
    },
    function extraHeadTagsPlugin(context, options) {
      return {
        name: 'extra-head-tags-plugin',
        injectHtmlTags({ content }) {
          return {
            headTags: [
              {
                tagName: 'link',
                attributes: {
                  rel: 'monetization',
                  href: 'https://ilp.uphold.com/LwQQhXdpwxeJ',
                },
              },
            ],
          };
        },
      };
    },
    // [
    //   'ideal-image',
    //   /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
    //   ({
    //     quality: 70,
    //     max: 1030,
    //     min: 640,
    //     steps: 2,
    //     // Use false to debug, but it incurs huge perf costs
    //     disableInDev: true,
    //   }),
    // ],
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        redirects: [
          {
            to: '/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration',
            from: '/2018/07/28/configuring-docker-azure-web-app-containers',
          },
          {
            to: '/2018/08/21/typescript-webpack-alias-goodbye-relative-paths',
            from: '/2018/08/21/killing-relative-paths-with-typescript-and',
          },
          {
            to: '/2019/02/22/aspnet-core-allowlist-proxying-http-requests',
            from: '/2019/02/22/whitelist-proxying-with-aspnet-core',
          },
          {
            to: '/2019/03/06/fork-ts-checker-webpack-plugin-v1',
            from: '/2019/03/06/the-big-one-point-oh',
          },
          {
            to: '/2019/08/02/asp-net-authentication-hard-coding-claims',
            from: '/2019/08/02/hard-coding-claim-in-development-mode',
          },
          {
            to: '/2019/12/18/teams-notification-webhooks',
            from: '/2019/12/18/automating-teams-notifications-recently',
          },
          {
            to: '/2020/05/21/autofac-webapplicationfactory-integration-tests',
            from: '/2020/05/21/autofac-webapplicationfactory-and',
          },
        ],
        createRedirects: function (existingPath) {
          if (existingPath.match(urlRegex)) {
            const [, year, month, date, slug] = existingPath.split('/');
            const oldUrl = `/${year}/${month}/${slug}.html`;
            console.log(`redirect from ${oldUrl} -> ${existingPath}`);
            return [oldUrl, `/${year}/${month}/${slug}`];
          }
        },
      }),
    ],
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
            href: '/img/favicon/profile.jpg',
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
            href: '/img/favicon/apple-touch-icon.png',
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
        title: 'I CAN MAKE THIS WORK',
        logo: {
          alt: 'I CAN MAKE THIS WORK',
          src: 'img/profile.jpg',
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
                html: `<div style="display: flex; align-items: center;"><iframe src="https://github.com/sponsors/johnnyreilly/button" title="Sponsor johnnyreilly" height="35" width="116" style="border: 0;"></iframe><div>&nbsp;on GitHub</div></div>`,
              },
            ],
          },
          {
            title: 'Feeds',
            items: [
              {
                label: 'RSS',
                href: 'https://blog.johnnyreilly.com/rss.xml',
              },
              {
                label: 'Atom',
                href: 'https://blog.johnnyreilly.com/atom.xml',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} John Reilly. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp', 'docker', 'bicep'],
      },
    }),
};

module.exports = config;
