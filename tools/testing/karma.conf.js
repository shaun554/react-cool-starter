'use strict'; // eslint-disable-line

const path = require('path');
const webpackConfig = require('../webpack/config.test.babel');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: ['mocha'],

    files: ['./test-bundler.js'],

    preprocessors: {
      './test-bundler.js': ['webpack', 'sourcemap'],
    },

    reporters: ['mocha', 'coverage'],

    webpack: webpackConfig,

    // Make Webpack bundle generation quiet
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    // Set the format of reporter
    coverageReporter: {
      dir: path.join(process.cwd(), './coverage'),
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ],
    },
  });
};
