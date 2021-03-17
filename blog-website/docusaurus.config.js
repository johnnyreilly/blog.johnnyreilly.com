//@ts-check
const urlRegex = /^\/\d{4}\/\d{2}\/\d{2}\//;

module.exports = {
  title: "I CAN MAKE THIS WORK",
  tagline: "The blog of johnnyreilly",
  url: "https://blog.johnnyreilly.com", // 'https://blog.johnnyreilly.com',
  baseUrl: "/",
  // onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "johnnyreilly", // Usually your GitHub org/user name.
  projectName: "blog.johnnyreilly.com", // Usually your repo name.
  plugins: [
    "@docusaurus/plugin-ideal-image",
    [
      "@docusaurus/plugin-client-redirects",
      {
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
          // title: 'Docs',
          items: [
            {
              html: `<a href="https://www.buymeacoffee.com/qUBm0Wh" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>`,
            },
            /*
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            */
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} John Reilly. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["powershell", "csharp"],
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
