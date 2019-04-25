const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    signin: './src/signin.js',
    resetpwd: './src/reset-pwd.js',
    signup: './src/signup.js',
  },
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
          "style-loader",
          "css-loader"
        ]
      }      
    ]
  },
  devServer: {
    port: 8085
  },
  plugins: [
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
  ]
};
