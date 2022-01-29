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

const formatResult = (res) => Math.round(res * 100);
const score = (res) => (res >= 90 ? '🟢' : res >= 50 ? '🟠' : '🔴');

/**
 * @param {LighthouseOutputs} lighthouseOutputs
 */
function makeComment(lighthouseOutputs) {
  const result = lighthouseOutputs.manifest[0].summary;
  const links = lighthouseOutputs.links;
  Object.keys(result).forEach(
    (key) => (result[key] = formatResult(result[key]))
  );

  const comment = [
    `⚡️ [Lighthouse report](${
      Object.values(links)[0]
    }) for the changes in this PR:`,
    '| Category | Score |',
    '| --- | --- |',
    `| ${score(result.performance)} Performance | ${result.performance} |`,
    `| ${score(result.accessibility)} Accessibility | ${
      result.accessibility
    } |`,
    `| ${score(result['best-practices'])} Best practices | ${
      result['best-practices']
    } |`,
    `| ${score(result.seo)} SEO | ${result.seo} |`,
    `| ${score(result.pwa)} PWA | ${result.pwa} |`,
    ' ',
    `*Lighthouse ran on [${Object.keys(links)[0]}](${Object.keys(links)[0]})*`,
  ].join('\n');

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
