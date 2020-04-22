/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const TS_MODULE = {
  rules: [
    {
      test: /\.tsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                // needed to use async/await
                targets: {
                  node: 'current',
                },
              },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
        },
      },
    },
  ],
};

module.exports = [
  {
    target: 'electron-main',
    entry: './src/main/main.ts',
    mode: 'development',
    devtool: 'cheap-source-map',
    output: {
      path: path.join(__dirname, 'app', 'generated'),
      filename: 'main.js',
    },
    module: TS_MODULE,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./app/generated'],
      }),
    ],
  },
  {
    target: 'electron-renderer',
    entry: './src/renderer/index.tsx',
    mode: 'development',
    devtool: 'source-map',
    output: {
      path: path.join(__dirname, 'app', 'generated'),
      filename: 'renderer.js',
    },
    module: TS_MODULE,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  },
];
