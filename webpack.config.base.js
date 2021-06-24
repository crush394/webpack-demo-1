const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var path = require('path');

module.exports = {
  entry:'./src/index.js',
  output:{
      filename:'[name].[contenthash].js'
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title:'My App',
      template:'src/assets/index.html'
  }),
],
    module: {
      
        rules: [
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
              },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
              },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
              },
            {
                test: /\.scss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require("dart-sass")
                    }
                  }
                ]
              }
        ]
    }
  }
