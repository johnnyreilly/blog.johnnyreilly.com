import { visit } from 'unist-util-visit';
/**
 * Create a rehype plugin that will replace image URLs with Cloudinary URLs
 * @param {*} cloudName your Cloudinary’s cloud name eg demo
 * @param {*} baseUrl the base URL of your website eg https://blog.johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
export default function imageCloudinaryRehypePlugin({ cloudName, baseUrl }) {
  const imageCloudinaryRehypeVisitor = imageCloudinaryRehypeVisitorFactory({
    cloudName,
    baseUrl,
  });
  return (tree) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    visit(tree, /*['mdxJsxTextElement'],*/ imageCloudinaryRehypeVisitor);
  };
}
/**
 * Create a rehype visitor that will replace image URLs with Cloudinary URLs - exposed for testing purposes
 * @param {*} cloudName your Cloudinary’s cloud name eg demo
 * @param {*} baseUrl the base URL of your website eg https://blog.johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js
 * @returns rehype plugin that will replace image URLs with Cloudinary URLs
 */
export function imageCloudinaryRehypeVisitorFactory({ cloudName, baseUrl }) {
  let done = false;
  return function imageCloudinaryRehypeVisitor(node) {
    const nodeWithAttributes = node;
    // if (nodeWithAttributes.type !== 'root') {
    //   console.log(
    //     'nodeWithAttributes',
    //     nodeWithAttributes.type,
    //     nodeWithAttributes.tagName,
    //     nodeWithAttributes.name,
    //   );
    // }
    if (
      nodeWithAttributes.type === 'mdxJsxTextElement' &&
      nodeWithAttributes.name === 'img'
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
      const srcIndex = nodeWithAttributes.attributes.findIndex(
        (attr) => attr.name === 'src',
      );
      const requireAttribute = nodeWithAttributes.attributes[srcIndex].value;
      if (typeof requireAttribute !== 'string') {
        const requireString = requireAttribute.value;
        const cloudinaryRequireString = `\`https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${baseUrl}\$\{${requireString}\}\``;

        if (!done) {
          console.log('old', requireAttribute.value);
          console.log('new', cloudinaryRequireString);
          console.log(requireAttribute.data?.estree?.body);
          console.log(requireAttribute.data?.estree?.body[0]?.expression?.left);
          console.log(
            requireAttribute.data?.estree?.body[0]?.expression?.left?.object
              ?.arguments[0],
          );
          console.log(
            requireAttribute.data?.estree?.body[0]?.expression?.right,
          );
          console.log();
          done = true;
        }

        // const cloudinaryRequireString2 = `(() => \`https://res.cloudinary.com/${cloudName}/image/fetch/f_auto,q_auto,w_auto,dpr_auto/${baseUrl}\$\{${requireString}\}\`)()`;
        // console.log("new", cloudinaryRequireString2);

        /*
old require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-rich-results-test.webp").default
new `https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto,w_auto,dpr_auto/https://johnnyreilly.com${require("!/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[contenthash].[ext]&fallback=/home/john/code/github/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./screenshot-rich-results-test.webp").default}`
                 */

        requireAttribute.value = cloudinaryRequireString;
      }
    }
  };
}
