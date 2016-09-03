/*
 * Request: image loader webpack not working
 *
 * http://stackoverflow.com/questions/39260909/webpack-image-loader-not-showing-any-errors-when-inputting-image
 */
var path = require('path');
var webpack = require('webpack');

// in your test.js
var path = require('./foo.jpg');
console.log(path);

// config

module.exports = {
  devtool: 'source-map',
  entry: [
    './test.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader'

      },
      { test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, 'client'),
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};

//data.js

module.exports = {
  charmander: {
    imageId: dix912
  },
    squirtle: {
    imageId: d8cm19
  },
}


// app.js
var data = require('data.js');
cloundiary.com/
data.charmander.imageId // => 10
