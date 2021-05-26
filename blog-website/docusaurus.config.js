//@ts-check
const urlRegex = /^\/\d{4}\/\d{2}\/\d{2}\//;

module.exports = {
  title: "I CAN MAKE THIS WORK",
  tagline: "The blog of johnnyreilly ❤️🌻",
  url: "https://blog.johnnyreilly.com", // 'https://blog.johnnyreilly.com',
  baseUrl: "/",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  favicon: "img/favicon.ico",
  organizationName: "johnnyreilly", // Usually your GitHub org/user name.
  projectName: "blog.johnnyreilly.com", // Usually your repo name.
  plugins: [
    [ 
      "@docusaurus/plugin-ideal-image", 
      { 
        quality: 70, 
        max: 1030, // max resized image's size. 
        min: 640, // min resized image's size. if original is lower, use that size. 
        steps: 2, // the max number of images generated between min and max (inclusive) 
      }, 
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: '/2019/12/18/teams-notification-webhooks',
            from: '/2019/12/18/automating-teams-notifications-recently',
          },
          {
            to: '/2019/12/18/autofac-webapplicationfactory-integration-tests',
            from: '/2019/12/18/autofac-webapplicationfactory-and',
          },
        ],
        createRedirects: function (existingPath) {
          if (existingPath.match(urlRegex)) {
            const [, year, month, date, slug] = existingPath.split("/");
            const oldUrl = `/${year}/${month}/${slug}.html`;
            console.log(`redirect from ${oldUrl} -> ${existingPath}`);
            return [oldUrl, `/${year}/${month}/${slug}`];
          }
        },
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          //'appInstalled',
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
            content: 'rgb(37, 194, 160)',
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
  themeConfig: {
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/profile.png',
    googleAnalytics: {
      trackingID: "UA-51754530-2",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: "I CAN MAKE THIS WORK",
      logo: {
        alt: "I CAN MAKE THIS WORK",
        src: "img/profile.jpg",
      },
      items: [
        /*
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        */
        { to: "about", label: "About", position: "left" },
        { to: "blog-archive", label: "Blog Archive", position: "left" },
        {
          href: "https://github.com/johnnyreilly",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://twitter.com/johnny_reilly",
          label: "Twitter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: 'Support me',
          items: [
            {
              html: `<a href="https://www.buymeacoffee.com/qUBm0Wh" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>`,
            },
            {
              html: `<div style="display: flex; align-items: center;"><iframe src="https://github.com/sponsors/johnnyreilly/button" title="Sponsor johnnyreilly" height="35" width="116" style="border: 0;"></iframe><div>&nbsp;on GitHub</div></div>`
            }
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
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} John Reilly. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["powershell", "csharp", "docker"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false /*{
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        }*/,
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
          path: "./blog",
          routeBasePath: "/", // Set this value to '/'.
          showReadingTime: true,
          editUrl:
            "https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
