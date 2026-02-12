const path = require('path');

module.exports = {
  mode: 'development',
  entry: './www/index.ts',
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
          'style-loader',   // 3. Puts CSS into the DOM
          'css-loader',     // 2. Reads the CSS
          'postcss-loader', // 1. Processes Tailwind/daisyUI
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www/js'),
  },
};