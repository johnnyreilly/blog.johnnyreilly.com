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
 * @prop {string} resultsPath
 * @prop {Record<string, string>} links
 * @prop {string} assertionResults
 * @prop {Manifest[]} manifest
 */

const formatScore = (/** @type { number } */ score) => Math.round(score * 100);
const emojiScore = (/** @type { number } */ score) =>
  score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴';

const scoreRow = (
  /** @type { string } */ label,
  /** @type { number } */ score
) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

/**
 * @param {LighthouseOutputs} lighthouseOutputs
 */
function makeComment(lighthouseOutputs) {
  console.log('lighthouseOutputs', lighthouseOutputs);
  const result = lighthouseOutputs.manifest[0].summary;
  const [[testedUrl, reportUrl]] = Object.entries(lighthouseOutputs.links);

  const comment = `⚡️🏠 [Lighthouse report](${reportUrl}) for the changes in this PR:

| Category | Score |
| -------- | ----- |
${scoreRow('Performance', result.performance)}
${scoreRow('Accessibility', result.accessibility)}
${scoreRow('Best practices', result['best-practices'])}
${scoreRow('SEO', result.seo)}
${scoreRow('PWA', result.pwa)}

*Lighthouse ran on [${testedUrl}](${testedUrl})*
`;

  return comment;
}

module.exports = ({ lighthouseOutputs }) => {
  return makeComment(lighthouseOutputs);
};

// /** @type {LighthouseOutputs} */
// const exampleOutputs = {
//   resultsPath:
//     '/home/runner/work/blog.johnnyreilly.com/blog.johnnyreilly.com/.lighthouseci',
//   links: {
//     'https://thankful-sky-0bfc7e803-165.westeurope.1.azurestaticapps.net/':
//       'https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1643437420055-58011.report.html',
//   },
//   assertionResults: '',
//   manifest: [
//     {
//       url: 'https://thankful-sky-0bfc7e803-165.westeurope.1.azurestaticapps.net/',
//       isRepresentativeRun: true,
//       htmlPath:
//         '/home/runner/work/blog.johnnyreilly.com/blog.johnnyreilly.com/.lighthouseci/thankful_sky_0bfc7e803_165_westeurope_1_azurestaticapps_net-_-2022_01_29_06_23_27.report.html',
//       jsonPath:
//         '/home/runner/work/blog.johnnyreilly.com/blog.johnnyreilly.com/.lighthouseci/thankful_sky_0bfc7e803_165_westeurope_1_azurestaticapps_net-_-2022_01_29_06_23_27.report.json',
//       summary: {
//         performance: 0.27,
//         accessibility: 0.97,
//         'best-practices': 0.93,
//         seo: 1,
//         pwa: 0.64,
//       },
//     },
//   ],
// };
