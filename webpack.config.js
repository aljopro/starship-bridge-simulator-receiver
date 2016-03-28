var webpack = require('webpack');

var config = {
  context: __dirname + '/client',
  debug: true,
  entry: {
    'app': './index.ts',
    'vendor': './vendor.ts'
  },
  output: {
    path: __dirname + '/client',
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      query: {
        'ignoreDiagnostics': [
          2403,
          2300,
          2374,
          2375
        ]
      },
      exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
    }, {
      test: /\.html$/,
      loader: 'raw',
      exclude: [/node_modules/]
    }, {
      test: /\.css$/,
      loader: 'style!css',
      exclude: [/node_modules/]
    }]
  }
};

if( process.env.NODE_ENV === 'production') {
  config.debug = false;
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
  config.devtool = 'source-map';
}

module.exports = config;
