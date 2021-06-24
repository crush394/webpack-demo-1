const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        attributes: {
        id: 'target',
        'data-target': 'example',
        },
    }),
],
  module: {
    rules: [
      {
        test: /\.css$/,  
         use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }

  }
