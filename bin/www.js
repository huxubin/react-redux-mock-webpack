#!/usr/bin/env node
require('babel-core/register');
require.extensions['.css'] = function() {return null};
var path = require('path');
var rootDir = path.resolve(__dirname, '..');

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.WEBSITE_HOST = process.env.WEBSITE_HOST;

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
    .development(__DEVELOPMENT__)
    .server(rootDir, function() {
        require('../app');
    });
