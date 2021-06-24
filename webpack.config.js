var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output:{
      filename:'[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
      title:'My App',
      template:'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }

  }
