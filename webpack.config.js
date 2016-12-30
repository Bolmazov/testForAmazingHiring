const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],

  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel'], // добавили loader 'react-hot'
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
    ],
  },

  devServer: {
    host: '0.0.0.0',
    contentBase: './dist/',
    inline: true,
    port: 8080,
  },

  eslint: {
    configFile: './.eslintrc',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
