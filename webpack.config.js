const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: {
    index: './src/index.js',
    wedding: './src/wedding.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `[name].js`
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        generator: {
          filename: 'images/[name][ext]'
        },
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        generator: {
          filename: 'fonts/[name][ext]'
        },
        type: 'asset/resource',
      },
      {
        test: /\.(pdf)$/i,
        generator: {
          filename: 'pdf/[name][ext]'
        },
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "images"),
      "node_modules"
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
};
