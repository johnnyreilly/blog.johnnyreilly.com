// @ts-check

/**
 * @typedef {Object} Summary
 * @prop {number} performance
 * @prop {number} accessibility
 * @prop {number} best-practices
 * @prop {number} seo
 * @prop {number} pwa
 */

/**
 * @typedef {Object} Manifest
 * @prop {string} url
 * @prop {boolean} isRepresentativeRun
 * @prop {string} htmlPath
 * @prop {string} jsonPath
 * @prop {Summary} summary
 */

/**
 * @typedef {Object} LighthouseOutputs
 * @prop {Record<string, string>} links
 * @prop {Manifest[]} manifest
 */

const formatScore = (/** @type { number } */ score) => Math.round(score * 100);
const emojiScore = (/** @type { number } */ score) =>
  score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴';

const scoreRow = (
  /** @type { string } */ label,
  /** @type { number } */ score,
) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

/**
 * @param {LighthouseOutputs} lighthouseOutputs
 */
function makeComment(lighthouseOutputs) {
  const dataWeNeed = lighthouseOutputs.manifest.map((mani, index) => ({
    ...mani,
    reportUrl: lighthouseOutputs.links[mani.url],
  }));

  const comment = `## ⚡️🏠 Lighthouse report
${dataWeNeed
  .map(
    (data) => `
We ran Lighthouse against [${data.url}](${
      data.url
    }) and produced this [report](${data.reportUrl}). Here's the summary:

| Category | Score |
| -------- | ----- |
${scoreRow('Performance', data.summary.performance)}
${scoreRow('Accessibility', data.summary.accessibility)}
${scoreRow('Best practices', data.summary['best-practices'])}
${scoreRow('SEO', data.summary.seo)}
${scoreRow('PWA', data.summary.pwa)}
`,
  )
  .join('')}
`;

  return comment;
}

module.exports = ({ lighthouseOutputs }) => {
  return makeComment(lighthouseOutputs);
};

/** @type {LighthouseOutputs} */
const _exampleOutputs = {
  links: {
    'https://url-to-test/': 'https://report.html',
  },
  manifest: [
    {
      url: 'https://url-to-test/',
      isRepresentativeRun: true,
      htmlPath:
        '/home/runner/work/blog.johnnyreilly.com/blog.johnnyreilly.com/.lighthouseci/thankful_sky_0bfc7e803_165_westeurope_1_azurestaticapps_net-_-2022_01_29_06_23_27.report.html',
      jsonPath:
        '/home/runner/work/blog.johnnyreilly.com/blog.johnnyreilly.com/.lighthouseci/thankful_sky_0bfc7e803_165_westeurope_1_azurestaticapps_net-_-2022_01_29_06_23_27.report.json',
      summary: {
        performance: 0.27,
        accessibility: 0.97,
        'best-practices': 0.93,
        seo: 1,
        pwa: 0.64,
      },
    },
  ],
};
