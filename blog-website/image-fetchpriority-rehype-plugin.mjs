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
    visit(tree, ['mdxJsxTextElement'], (node) => {
      if (node.type === 'mdxJsxTextElement' && node['name'] === 'img') {
        // handles nodes like this:
        // {
        //   type: 'mdxJsxTextElement',
        //   name: 'img',
        //   attributes: [
        //     {
        //       type: 'mdxJsxAttribute',
        //       name: 'alt',
        //       value: 'title image reading &quot;Azure Container Apps, Bicep, managed certificates and custom domains&quot; with the Azure Container App logos'
        //     },
        //     {
        //       type: 'mdxJsxAttribute',
        //       name: 'src',
        //       value: {
        //         type: 'mdxJsxAttributeValueExpression',
        //         value: 'require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-azure-portal-bring-your-own-certificates.webp").default',
        //         data: [Object]
        //       }
        //     },
        //     { type: 'mdxJsxAttribute', name: 'width', value: '800' },
        //     { type: 'mdxJsxAttribute', name: 'height', value: '450' }
        //   ],
        //   children: []
        // }

        const srcIndex = node['attributes'].findIndex(
          (attr) => attr.name === 'src',
        );
        const requireString = node['attributes'][srcIndex].value.value;

        const key = `jsx|${vfile.history[0]}`;
        const imageAlreadyProcessed = files.get(key);
        const fetchpriorityThisImage =
          !imageAlreadyProcessed || imageAlreadyProcessed === requireString;

        if (!imageAlreadyProcessed) {
          files.set(key, requireString);
        }

        // expect to be -1
        const loadingIndex = node['attributes'].findIndex(
          (attr) => attr.name === 'loading',
        );

        if (fetchpriorityThisImage) {
          // expect to be -1
          const fetchpriorityIndex = node['attributes'].findIndex(
            (attr) => attr.name === 'fetchpriority',
          );
          if (loadingIndex > -1) {
            node['attributes'][loadingIndex].value = 'eager';
          } else {
            node['attributes'].push({
              type: 'mdxJsxAttribute',
              name: 'loading',
              value: 'eager',
            });
          }

          if (fetchpriorityIndex > -1) {
            node['attributes'][fetchpriorityIndex].value = 'high';
          } else {
            node['attributes'].push({
              type: 'mdxJsxAttribute',
              name: 'fetchpriority',
              value: 'high',
            });
          }
        } else {
          if (loadingIndex > -1) {
            node['attributes'][loadingIndex].value = 'lazy';
          } else {
            node['attributes'].push({
              type: 'mdxJsxAttribute',
              name: 'loading',
              value: 'lazy',
            });
          }
        }
      }
    });
  };
}
