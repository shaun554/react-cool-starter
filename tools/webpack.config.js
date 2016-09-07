/* eslint max-len:0 prefer-template:0 */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const CSSModules = true;  // Disable css modules here

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpackIsomorphicTools.config')).development(isDev);

// Setting the plugins for development/prodcution
function getPlugins() {
  const plugins = [];

  plugins.push(
    // Global variables for app
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
      __CLIENT__: JSON.stringify(true),
      __SERVER__: JSON.stringify(false),
      __DEV__: JSON.stringify(isDev),
    }),
    // Style lint
    new StyleLintPlugin({
      syntax: 'scss',
      failOnError: false, // Disable style lint error herer
    }),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin
  );

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/)
    );
  } else {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '[name].[chunkhash].js',
        minChunks: Infinity,
      }),
      new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true }),
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { screw_ie8: true, warnings: false },
        output: { comments: false },
        sourceMap: false,
      }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin()
    );
  }

  return plugins;
}

// Setting the entry for development/prodcution
function getEntry() {
  let entry;

  if (isDev) {
    entry = {
      app: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        './src/client.js',
      ],
    };
  } else {
    entry = {
      app: './src/client.js',
      // Register vendors here
      vendor: [
        'babel-polyfill',
        'react', 'react-dom', 'react-addons-shallow-compare',
        'redux', 'react-redux',
        'redux-thunk',
        'immutable',
        'redux-immutable',
        'react-router',
        'react-router-redux',
        'react-helmet',
        'axios',
      ],
    };
  }

  return entry;
}

// Setting webpack config
module.exports = {
  cache: isDev,
  debug: isDev,
  devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  context: path.join(__dirname, '..'),
  entry: getEntry(),
  output: {
    path: path.join(__dirname, '../public/dist'),
    publicPath: '/dist/',
    filename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    preLoaders: [{ test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: isDev,
        },
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.css$/,
        loader: isDev ?
          'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=1!postcss'
          : ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css?' + (CSSModules ? 'modules' : '') + '&sourceMap&importLoaders=1!postcss' }),
      },
      {
        test: /\.scss$/,
        loader: isDev ?
          'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap'
          : ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css?' + (CSSModules ? 'modules' : '') + '&sourceMap&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap&sourceMapContents' }),
      },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        // Any image below or equal to 10K will be converted to inline base64 instead
        loaders: [
          'url?limit=10240',
          'image-webpack?bypassOnDebug',  // Using for image optimization
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  plugins: getPlugins(),
  eslint: {
    failOnError: true,  // Disable js lint error herer
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
};
