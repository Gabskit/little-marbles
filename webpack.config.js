const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www/js'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css', 
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "cdn"), to: path.resolve(__dirname, "www/js")}
      ]
    })
  ]
};