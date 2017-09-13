const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./js/MyApp.jsx'],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
if (process.env.NODE_ENV === 'production') {
  config.entry = ['./js/MyApp.jsx'];
  config.devtool = false;
  config.plugins = [];
}
module.exports = config;
