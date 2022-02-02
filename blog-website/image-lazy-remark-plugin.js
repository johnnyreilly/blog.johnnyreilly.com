const visit = require('unist-util-visit');

/** @type {import('unified').Plugin<[], import('hast').Root>} */
function lazyLoadImagesPlugin() {
  return (tree) => {
    visit(tree, ['element', 'jsx'], (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
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

        node.properties.loading = 'lazy';
      } else if (node.type === 'jsx' && node.value.includes('<img ')) {
        // handles nodes like this:

        // {
        //   type: 'jsx',
        //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
        // }

        node.value = node.value.replace(/<img /g, '<img loading="lazy" ');
      }
    });
  };
}

module.exports = lazyLoadImagesPlugin;
