var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [

    './client/pokeapp'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
