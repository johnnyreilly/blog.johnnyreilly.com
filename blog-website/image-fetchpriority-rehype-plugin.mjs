// @ts-check
import { visit } from 'unist-util-visit';

/**
 * Create a rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 * @returns rehype plugin that will make the first image eager loaded with fetchpriority="high" and lazy load all other images
 */
export default function imageFetchPriorityRehypePluginFactory() {
  /** @type {Map<string, string>} */ const files = new Map();

  /** @type {import('unified').Transformer} */
  return (tree, vfile) => {
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

        const key = `img|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const fetchpriorityThisImage =
          !imageAlreadyProcessed ||
          imageAlreadyProcessed === node['properties']['src'];

        if (!imageAlreadyProcessed) {
          files.set(key, node['properties']['src']);
        }

        if (fetchpriorityThisImage) {
          node['properties'].fetchpriority = 'high';
          node['properties'].loading = 'eager';
        } else {
          node['properties'].loading = 'lazy';
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
        const fetchpriorityThisImage =
          !imageAlreadyProcessed || imageAlreadyProcessed === node['value'];

        if (!imageAlreadyProcessed) {
          files.set(key, node['value']);
        }

        if (fetchpriorityThisImage) {
          node['value'] = node['value'].replace(
            /<img /g,
            '<img loading="eager" fetchpriority="high" ',
          );
        } else {
          node['value'] = node['value'].replace(
            /<img /g,
            '<img loading="lazy" ',
          );
        }
      }
    });
  };
}
