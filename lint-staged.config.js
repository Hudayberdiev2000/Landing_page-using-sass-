/* eslint-env node */
const path = require('path');
const formatCommand = [
  'eslint . --ext .js,.jsx,.ts,.tsx --fix',
  'prettier . --write',
  'stylelint --allow-empty-input --fix **/*.{css,scss}',
];

module.exports = {
  '*': formatCommand,
};
