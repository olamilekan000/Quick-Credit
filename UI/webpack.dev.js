const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    signin: './src/signin.js',
    resetpwd: './src/reset-pwd.js',
    signup: './src/signup.js',
    dashboard: './src/dashboard.js',
    applyForLoan: './src/apply-for-loan.js',
    verifyUser: './src/verify-user.js',
    loanProfile: './src/loan-profile.js',
    loanApplication: './src/loan-application.js',
    loanNfp: './src/loans-nfp.js',
    loanFp: './src/loans-fp.js',
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
    new HtmlWebpackPlugin({
      template: './client/loan-profile.html',
      inject: true,
      chunks: ['loanProfile'],
      filename: 'loan-profile.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/loans-nfp.html',
      inject: true,
      chunks: ['loanNfp'],
      filename: 'loans-nfp.html'
    }),
    new HtmlWebpackPlugin({
      template: './client/loans-fp.html',
      inject: true,
      chunks: ['loanFp'],
      filename: 'loans-fp.html'
    }),                                      
  ]
};
