const path = require('path');

module.exports = {
  mode: 'development', // Cambia a 'production' para el build final
    entry: './www/index.ts', // Tu archivo principal de TS
      module: {
          rules: [
                {
                        test: /\.tsx?$/,
                                use: 'ts-loader',
                                        exclude: /node_modules/,
                                              },
                                                  ],
                                                    },
                                                      resolve: {
                                                          extensions: ['.tsx', '.ts', '.js'],
                                                            },
                                                              output: {
                                                                  filename: 'bundle.js',
                                                                      path: path.resolve(__dirname, 'www/js'), // Lo guarda en www/js/bundle.js
                                                                        },
                                                                          devtool: 'inline-source-map', // Útil para debugear en el móvil
                                                                          };