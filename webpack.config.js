const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'jquery': path.resolve(__dirname, 'cdn/jquery.js'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www/assets'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css', 
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
          to: path.resolve(__dirname, 'www/assets')
        },
        {
          from: path.resolve(__dirname, 'cdn'),
          to: path.resolve(__dirname, 'www/assets')
        }
      ]
    })
  ]
};