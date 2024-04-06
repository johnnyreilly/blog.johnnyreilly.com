// @ts-check

/**
 * @typedef {Object} Result
 * @prop {string} url
 * @prop {ProcessedValidationResult} processedValidationResult
 */

/**
 * @typedef {Object} ProcessedValidationResult
 * @prop {boolean} success
 * @prop {string} resultText
 */

/**
 * @param {string} baseUrl
 * @param {Result[]} results
 */
function createStructuredDataReport(baseUrl, results) {
  const comment = `### 📝 Structured data report

${results
  .map((result) => {
    const shortUrl = result.url.replace(baseUrl, '') || '/';
    return `#### ${
      result.processedValidationResult.success ? '🟢' : '🔴'
    } [${shortUrl}](${result.url}) 
${result.processedValidationResult.resultText}`;
  })
  .join('\n')}
`;
  return comment;
}

export default createStructuredDataReport;
