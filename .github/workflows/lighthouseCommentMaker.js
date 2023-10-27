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

// const formatScore = (/** @type { number } */ score) => Math.round(score * 100);
// const emojiScore = (/** @type { number } */ score) =>
//   score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴';

// const scoreRow = (
//   /** @type { string } */ label,
//   /** @type { number } */ score,
// ) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

// /**
//  * @param {LighthouseOutputs} lighthouseOutputs
//  */
// function makeComment(lighthouseOutputs) {
//   const dataWeNeed = lighthouseOutputs.manifest.map((mani, index) => ({
//     ...mani,
//     reportUrl: lighthouseOutputs.links[mani.url],
//   }));

//   const comment = `## ⚡️🏠 Lighthouse report
// ${dataWeNeed
//   .map(
//     (data) => `
// We ran Lighthouse against [${data.url}](${
//       data.url
//     }) and produced this [report](${data.reportUrl}). Here's the summary:

// | Category | Score |
// | -------- | ----- |
// ${scoreRow('Performance', data.summary.performance)}
// ${scoreRow('Accessibility', data.summary.accessibility)}
// ${scoreRow('Best practices', data.summary['best-practices'])}
// ${scoreRow('SEO', data.summary.seo)}
// ${scoreRow('PWA', data.summary.pwa)}
// `,
//   )
//   .join('')}
// `;

//   return comment;
// }

/** @typedef {Record<'performance' | 'accessibility' | 'best-practices' | 'seo' | 'pwa', number>} LighthouseSummary */

/** @type {Record<keyof LighthouseSummary, string>} */
const summaryKeys = {
  performance: 'Performance',
  accessibility: 'Accessibility',
  'best-practices': 'Best Practices',
  seo: 'SEO',
  pwa: 'PWA',
};

/** @param {number} rawScore */
const scoreEntry = (rawScore) => {
  const score = Math.round(rawScore * 100);
  // eslint-disable-next-line no-nested-ternary
  const scoreIcon = score >= 90 ? '🟢' : score >= 50 ? '🟠' : '🔴';
  return `${scoreIcon} ${score}`;
};

/**
 * @param {string} url
 * @returns {module:url.URL}
 */
function createURL(url) {
  try {
    return new URL(url);
  } catch (e) {
    throw new Error(`Can't create URL for string=${url}, ${e}`);
  }
}

/**
 * @param {Object} param0
 * @param {string} param0.url
 * @param {LighthouseSummary} param0.summary
 * @param {string} param0.reportUrl
 */
const createMarkdownTableRow = ({ url, summary, reportUrl }) =>
  [
    `| [${createURL(url).pathname}](${url})`,
    .../** @type {(keyof LighthouseSummary)[]} */ (
      Object.keys(summaryKeys)
    ).map((k) => scoreEntry(summary[k])),
    `[Report](${reportUrl}) |`,
  ].join(' | ');

const createMarkdownTableHeader = () => [
  ['| URL', ...Object.values(summaryKeys), 'Report |'].join(' | '),
  ['|---', ...Array(Object.keys(summaryKeys).length).fill('---'), '---|'].join(
    '|',
  ),
];

/**
 * @param {LighthouseOutputs} lighthouseOutputs
 */
const createLighthouseReport = ({ links, manifest }) => {
  console.log('links');
  console.log(links);
  console.log('manifest');
  console.log(manifest);

  const tableHeader = createMarkdownTableHeader();
  const tableBody = manifest.map((result) => {
    const testUrl = /** @type {string} */ (
      Object.keys(links).find((key) => key === result.url)
    );
    const reportPublicUrl = /** @type {string} */ (links[testUrl]);

    return createMarkdownTableRow({
      url: testUrl,
      summary: result.summary,
      reportUrl: reportPublicUrl,
    });
  });
  const comment = [
    '### ⚡️ Lighthouse report for the deploy preview of this PR',
    '',
    ...tableHeader,
    ...tableBody,
    '',
  ];
  return comment.join('\n');
};

module.exports = ({ lighthouseOutputs }) => {
  return createLighthouseReport(lighthouseOutputs);
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
