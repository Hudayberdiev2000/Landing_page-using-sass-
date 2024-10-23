/* eslint-env node */
const path = require('path');

module.exports = {
  // Run ESLint and Prettier on JS, JSX, TS, and TSX files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  // Run Prettier and Stylelint on CSS and SCSS files
  '*.{css,scss}': ['prettier --write', 'stylelint --fix'],
  // Run Prettier on JSON and Markdown files
  '*.{json,md}': ['prettier --write'],
};
