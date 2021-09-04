const slsw = require('serverless-webpack');
const path = require('path')
const isLocal = slsw.lib.webpack.isLocal

module.exports = {
    mode: isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    output: {
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    }
}