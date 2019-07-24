const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: ['babel-polyfill', `${PATHS.src}/index.tsx`],
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }, {
        test: /\.(eot|otf|ttf|svg|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'postcss.config.js' } },
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      }, {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'postcss.config.js' } },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.pug`,
      filename: './index.html',
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/components/**/img/*`, to: `${PATHS.assets}img/[name].[ext]` },
    ]),
  ],
};
