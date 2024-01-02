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
 * @param {Result[]} results
 */
function createStructuredDataReport(results) {
  const comment = `### 📝 Structured data report for the deploy preview of this PR

${results
  .map((result) => {
    console.log(result.url, result.processedValidationResult.resultText);
    return `#### ${result.processedValidationResult.success ? '🟢' : '🔴'} \`${
      result.url
    }\` 
${result.processedValidationResult.resultText}`;
  })
  .join('\n')}
`;
  return comment;
}

export default createStructuredDataReport;
