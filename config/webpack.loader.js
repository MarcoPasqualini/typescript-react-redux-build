"use strict";

let loaders = {};

loaders.tslint = {
  enforce: 'pre',
  test: /\.tsx?$/,
  loader: 'tslint-loader',
  exclude: /(node_modules)/,
  options: {
    emitErrors: true,
    configFile: './config/tslint.json'
  }
};

loaders.tsLoader = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
  exclude: /(node_modules)/,
  options: {
    configFileName: './config/tsconfig.json',
    emitErrors: true
  }
};

module.exports = Object.keys(loaders).map(function(key) {
  return loaders[key];
});
