const visit = require('unist-util-visit');
const { parseHost } = require('ufo');

const domains = [];

function imageCloudinaryRemarkPluginFactory(
  /** @type string */ cloudName,
  /** @type string */ baseUrl
) {
  /** @type {import('unified').Plugin<[], import('hast').Root>} */
  return function imageCloudinaryRemarkPlugin() {
    // eg https://res.cloudinary.com/demo/image/fetch/http://upload.wikimedia.org/wikipedia/commons/4/46/Jennifer_Lawrence_at_the_83rd_Academy_Awards.jpg
    const srcRegex = / src={(.*)}/;

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

          const urlOrRequire = node.properties.src;
          if (!urlOrRequire.startsWith('require')) {
            const host = parseHost(urlOrRequire);
            if (host && !domains.includes(host)) {
              domains.push(host);
              console.log('img', host);
            }
          } else {
            console.log('img - require', node.properties.src);
          }

          node.properties.src = `https://res.cloudinary.com/${cloudName}/image/fetch/${urlOrRequire}`;
          // console.log('img', node);
        } else if (node.type === 'jsx' && node.value.includes('<img ')) {
          // handles nodes like this:

          // {
          //   type: 'jsx',
          //   value: '<img src={require("!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png").default} width="640" height="497" />'
          // }

          const match = node.value.match(srcRegex);
          if (match) {
            const urlOrRequire = match[1];
            node.value = node.value.replace(
              srcRegex,
              ` src={${`\`https://res.cloudinary.com/${cloudName}/image/fetch/${baseUrl}\$\{${urlOrRequire}\}\``}}`
            );
            if (!urlOrRequire.startsWith('require')) {
              const host = parseHost(urlOrRequire);
              if (host && !domains.includes(host)) {
                domains.push(host);
                console.log('jsx', host);
              }
            }
            // console.log('jsx', node);
          } else {
            console.log('no match', node);
          }
        }
      });
    };
  };
}

module.exports = imageCloudinaryRemarkPluginFactory;
