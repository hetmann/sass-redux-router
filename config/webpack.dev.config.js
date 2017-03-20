const ExtractTestPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const styleExtractor = new ExtractTestPlugin('style.css');

module.exports = {
  context: path.resolve('./src'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'index.js'
  ],
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets',
    path: '/build'
  },
  resolve: {
    modules: ['node_modules', 'src']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot', 'babel']
      },
      {
        test: /(\.css|.less|.scss)$/,
        use: styleExtractor.extract('css!less!sass')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint',
        enforce: 'pre'
      }
    ]
  },
  plugins: [ styleExtractor ],
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    stats: { colors: true, verbose: true },
    watchContentBase: true,
    host: "localhost",
    port: 8080
  }
};
