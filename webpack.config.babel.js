const copyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    `./src/js/app.js`
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new copyWebpackPlugin([{ from: './static/' }], {
      ignore: [
        '.DS_Store',
        '.gitkeep'
      ]
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  // Configuration for dev server
  devServer: {
    contentBase: __dirname + '/dist',
    port: 9000
  }

};