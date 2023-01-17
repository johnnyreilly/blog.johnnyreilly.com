// @ts-check
const visit = require('unist-util-visit');

/**
 * Create a rehype plugin that will replace image URLs with Cloudinary URLs
 * @param {*} options cloudName your Cloudinary’s cloud name eg demo, baseUrl the base URL of your website eg https://blog.johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 * @returns remark plugin that will replace image URLs with Cloudinary URLs
 */
function imageFetchPriorityRehypePluginFactory(/** @type {{  }} */ options) {
  /** @type {Set<string>} */ const files = new Set();

  /** @type {import('unified').Transformer} */
  return (tree, vfile) => {
    visit(tree, ['element', 'jsx'], (node) => {
      if (!files.has(vfile.history[0])) {
        if (node.type === 'element' && node['tagName'] === 'img') {
          // handles nodes like this:
          // {
          //   type: 'element',
          //   tagName: 'img',
          //   properties: {
          //     src: 'https://some.website.com/cat.gif',
          //     alt: null
          //   },
          //   ...
          // }

          node['properties'].fetchpriority = 'high';
        } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {
          // handles nodes like this:

          // {
          //   type: 'jsx',
          //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
          // }

          node['value'] = node['value'].replace(
            /<img /,
            '<img fetchpriority="high" '
          );
        }
        files.add(vfile.history[0]);
      }
    });
  };
}

module.exports = imageFetchPriorityRehypePluginFactory;
