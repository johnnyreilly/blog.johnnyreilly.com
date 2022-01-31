const visit = require('unist-util-visit');

/** @type {import('unified').Plugin<[], import('hast').Root>} */
function lazyLoadImagesPlugin() {
  return (tree) => {
    visit(tree, ['element', 'jsx'], (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties.loading = 'lazy';
      }
      if (node.type === 'jsx' && node.value.includes('<img ')) {
        node.value = node.value.replace(/<img /g, '<img loading="lazy" ');
        //.replaceAll('<img ', '<img loading="lazy" '); - requires node 16+
      }
    });
  };
}

module.exports = lazyLoadImagesPlugin;
