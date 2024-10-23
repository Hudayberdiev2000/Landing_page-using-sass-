/* eslint-env node */
const path = require('path');
const formatCommand = ['prettier . --write', 'eslint --fix', 'stylelint --fix'];

module.exports = {
  '*': formatCommand,
};
