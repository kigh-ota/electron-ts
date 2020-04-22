const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = common.map((cfg) =>
  merge(cfg, {
    mode: 'production',
  })
);
