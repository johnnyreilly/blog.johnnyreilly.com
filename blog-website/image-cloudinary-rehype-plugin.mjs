//@ts-check
import { visit } from 'unist-util-visit';
import * as acorn from 'acorn';
import { mdxJsx } from 'micromark-extension-mdx-jsx';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxJsxFromMarkdown, mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import { toMarkdown } from 'mdast-util-to-markdown';

/**
 * @typedef {object} Params a label and an href
 * @property {string} cloudName your Cloudinary’s cloud name eg demo
 * @property {string} baseUrl the base URL of your website eg https://johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 */

/**
 * Create a rehype plugin that will replace image URLs with Cloudinary URLs
 * @param {Params} params
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
export default function imageCloudinaryRehypePlugin({ cloudName, baseUrl }) {
  const imageCloudinaryRehypeVisitor = imageCloudinaryRehypeVisitorFactory({
    cloudName,
    baseUrl,
  });
  return (tree) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    visit(tree, ['mdxJsxTextElement'], imageCloudinaryRehypeVisitor);
  };
}
/**
 * Create a rehype visitor that will replace image URLs with Cloudinary URLs - exposed for testing purposes
 * @param {Params} params
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
export function imageCloudinaryRehypeVisitorFactory({ cloudName, baseUrl }) {
  const srcRegex = / src=\{(.*)\}/;
  return function imageCloudinaryRehypeVisitor(node) {
    const imgWithAttributes = node;
    if (
      imgWithAttributes.type === 'mdxJsxTextElement' &&
      imgWithAttributes.name === 'img'
    ) {
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
      const srcIndex = imgWithAttributes.attributes.findIndex(
        (attr) => attr.name === 'src',
      );
      const requireAttribute = imgWithAttributes.attributes[srcIndex].value;
      if (typeof requireAttribute !== 'string') {
        const asMarkdown = toMarkdown(imgWithAttributes, {
          extensions: [mdxJsxToMarkdown()],
        });

        // <img
        //    alt="screenshot of typescript playground saying &#39;ComponentThatReturnsANumber&#39; cannot be used as a JSX component. Its return type &#39;number&#39; is not a valid JSX element.(2786)"
        //    src={require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-typescript-playground.png").default}
        //    width="690" height="298" />

        const match = asMarkdown.match(srcRegex);
        if (match) {
          const urlOrRequire = match[1];
          const cloudinaryRequireString = `\`https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${baseUrl}$\{${urlOrRequire}}\``;

          const newMarkdown = asMarkdown.replace(
            srcRegex,
            ` src={${cloudinaryRequireString}}`,
          );

          // <img
          //    alt="screenshot of typescript playground saying &#39;ComponentThatReturnsANumber&#39; cannot be used as a JSX component. Its return type &#39;number&#39; is not a valid JSX element.(2786)"
          //    src={`https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com${require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-typescript-playground.png").default}`}
          //    width="690" height="298" />
          const tree = fromMarkdown(newMarkdown, {
            extensions: [mdxJsx({ acorn, addResult: true })],
            mdastExtensions: [mdxJsxFromMarkdown()],
          });

          const newSrcAttributeIndex = tree.children[0]['attributes'].findIndex(
            (attr) => attr.name === 'src',
          );

          if (newSrcAttributeIndex !== -1) {
            imgWithAttributes.attributes[srcIndex] =
              tree.children[0]['attributes'][newSrcAttributeIndex];
          }
        }
      }
    }
  };
}
