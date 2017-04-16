var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: 'build/',
    publicPath: '/build/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': '"production"' }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("index.css")
  ] : [
    new ExtractTextPlugin("index.css")
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract(
        {
          fallback: "style-loader",
          use: "css-loader",
        }
      )},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(
        {
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }
      )},
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=10000" },
      // { test: /\.json$/, loader: "json-loader" },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },

  devServer: {
    inline: true,
    contentBase: 'public',
    historyApiFallback: true,
  }
}
