// @ts-check

// export interface Result {
// 	url: string;
// 	validationResult: ValidationResult;
// 	processedValidationResult: ProcessedValidationResult;
// }

// export interface ProcessedValidationResult {
// 	success: boolean;
// 	resultText: string;
// }

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
const createStructuredDataReport = (results) => {
  const comment = `### ⚡️ Structured data report for the deploy preview of this PR

${results
  .map((result) => {
    console.log(result.url, result.processedValidationResult.resultText);
    return `#### ${result.url} ${
      result.processedValidationResult.success ? '🟢' : '🔴'
    }
${result.processedValidationResult.resultText}`;
  })
  .join('\n')}
`;
  return comment;
};

module.exports = (results) => {
  return createStructuredDataReport(results);
};
