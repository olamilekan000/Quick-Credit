const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const buildPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js',
    signin: './src/signin.js',
    resetpwd: './src/reset-pwd.js',
    signup: './src/signup.js',
    dashboard: './src/dashboard.js',
    applyForLoan: './src/apply-for-loan.js',
    verifyUser: './src/verify-user.js',
    loanApplication: './src/loan-application.js',
  },

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }      
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/signin.html',
      inject: true,
      chunks: ['signin'],
      filename: 'signin.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/reset-pwd.html',
      inject: true,
      chunks: ['resetpwd'],
      filename: 'reset-pwd.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/signup.html',
      inject: true,
      chunks: ['signup'],
      filename: 'signup.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/dashboard.html',
      inject: true,
      chunks: ['dashboard'],
      filename: 'dashboard.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/apply-for-loan.html',
      inject: true,
      chunks: ['applyForLoan'],
      filename: 'apply-for-loan.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/verify-user.html',
      inject: true,
      chunks: ['verifyUser'],
      filename: 'verify-user.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/loan-application.html',
      inject: true,
      chunks: ['loanApplication'],
      filename: 'loan-application.html'
    }),                   
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })    
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
};
