/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // ...
    '@typescript-eslint/consistent-type-imports': 'error', // the replacement of "importsNotUsedAsValues": "error"
  },
  root: true,
  ignorePatterns: ['dist', 'jest.config.js'],
};
