const ExtractTestPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
    path: path.resolve('./build')
  },
  resolve: {
    extensions: ['.js', '.scss', '.less'],
    modules: [path.join(__dirname), 'node_modules', '.', 'build', 'src']
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
  plugins: [
    styleExtractor,
    // webpack cross-env inject NODE_ENV support
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    stats: { colors: true, verbose: true },
    watchContentBase: true,
    host: "localhost",
    port: 8080
  }
};
