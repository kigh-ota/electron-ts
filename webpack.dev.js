/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = common.map((cfg) =>
  merge(cfg, {
    mode: 'development',
    devtool: 'inline-source-map',
  })
);
