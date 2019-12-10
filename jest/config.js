/* eslint-disable flowtype/require-valid-file-annotation */
const baseConfig = require('./base-config.json')

// eslint-disable-next-line immutable/no-mutation
module.exports = {
  ...baseConfig,
  coverageDirectory: 'coverage/react-latest',
  setupFiles: ['<rootDir>/jest/enzyme-setup.js'],
}
