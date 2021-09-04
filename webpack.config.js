const slsw = require('serverless-webpack');
const path = require('path')
const webpack = require('webpack');
const isLocal = slsw.lib.webpack.isLocal

module.exports = {
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    mode: isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    output: {
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    }
}