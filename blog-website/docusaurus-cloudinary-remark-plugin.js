//@ts-check
const visit = require('unist-util-visit');

/**
 * Create a remark plugin that will replace image URLs with Cloudinary URLs
 * @param {*} options cloudName your Cloudinary’s cloud name eg demo, baseUrl the base URL of your website eg https://blog.johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 * @returns remark plugin that will replace image URLs with Cloudinary URLs
 */
function imageCloudinaryRemarkPluginFactory(
  /** @type {{ cloudName: string; baseUrl: string }} */ options
) {
  const { cloudName, baseUrl } = options;
  const srcRegex = / src={(.*)}/;

  /** @type {import('unified').Plugin<[], import('hast').Root>} */
  return function imageCloudinaryRemarkPlugin() {
    return (tree) => {
      visit(tree, ['element', 'jsx'], (node) => {
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

          const url = node['properties'].src;

          node[
            'properties'
          ].src = `https://res.cloudinary.com/${cloudName}/image/fetch/${url}`;
        } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {
          // handles nodes like this:

          // {
          //   type: 'jsx',
          //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
          // }

          const match = node['value'].match(srcRegex);
          if (match) {
            const urlOrRequire = match[1];
            node['value'] = node['value'].replace(
              srcRegex,
              ` src={${`\`https://res.cloudinary.com/${cloudName}/image/fetch/${baseUrl}\$\{${urlOrRequire}\}\``}}`
            );
          }
        }
      });
    };
  };
}

module.exports = imageCloudinaryRemarkPluginFactory;
