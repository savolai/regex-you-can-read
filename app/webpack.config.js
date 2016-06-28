/*------- PostCSS imports --------*/

var autoprefixer = require('autoprefixer'),
  rucksack = require('rucksack-css'),
  cssVars = require('postcss-css-variables'),
  imports = require('postcss-import'),
  nesting = require('postcss-nested'),
  mixins = require('postcss-sassy-mixins'),
  colourFunctions = require('postcss-colour-functions'),
  mqPacker = require('css-mqpacker');

/*--------------------------------*/

var path = require("path"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') 
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react', 'stage-0'] }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ]
  },
  resolve: {
      extensions: ['', '.js', ".html", ".css"]
  },
  postcss: function () {
    return [imports,
            nesting,
            colourFunctions,
            cssVars,
            mixins,
            autoprefixer({ browsers: ['last 5 versions'] }),
            rucksack({ fallbacks: true }),
            mqPacker];
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  devtool: '#inline-source-map',
  devServer: {
    inline: true,
    stats: { colors: true },
  }
};