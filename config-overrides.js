const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@src']: path.resolve(__dirname, 'src'),
    ['@pages']: path.resolve(__dirname, 'src/pages'),
    ['@assets']: path.resolve(__dirname, 'src/assets'),
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@store']: path.resolve(__dirname, 'src/store'),
  }),
);
