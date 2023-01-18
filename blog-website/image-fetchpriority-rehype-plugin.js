// @ts-check
const visit = require('unist-util-visit');

/**
 * Create a rehype plugin that will replace image URLs with Cloudinary URLs
 * @param {*} options cloudName your Cloudinary’s cloud name eg demo, baseUrl the base URL of your website eg https://blog.johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 * @returns remark plugin that will replace image URLs with Cloudinary URLs
 */
function imageFetchPriorityRehypePluginFactory(/** @type {{  }} */ options) {
  /** @type {Map<string, string>} */ const files = new Map();

  /** @type {import('unified').Transformer} */
  return (tree, vfile) => {
    visit(tree, ['element', 'jsx'], (node) => {
      // console.log(vfile.history[0]);
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

        const key = `img|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const processThisImage =
          !imageAlreadyProcessed ||
          imageAlreadyProcessed === node['properties']['src'];

        if (!imageAlreadyProcessed) {
          files.set(key, node['properties']['src']);
        }

        if (processThisImage) {
          node['properties'].fetchpriority = 'high';
          node['properties'].loading = 'eager';
        }
      } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {
        // handles nodes like this:

        // {
        //   type: 'jsx',
        //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
        // }

        // if (!vfile.history[0].includes('blog/2023-01-15')) return;

        const key = `jsx|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const processThisImage =
          !imageAlreadyProcessed || imageAlreadyProcessed === node['value'];

        if (!imageAlreadyProcessed) {
          files.set(key, node['value']);
          // console.log(node['value'])
          // console.log(vfile)
        }

        if (processThisImage) {
          node['value'] = node['value'].replace(
            /<img /g,
            '<img loading="eager" fetchpriority="high" '
          );
        }
      }
    });
  };
}

module.exports = imageFetchPriorityRehypePluginFactory;
