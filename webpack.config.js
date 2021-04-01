var path = require('path')

const TerserJSPlugin = require('terser-webpack-plugin');

var webpackConfig = {
  entry: {
    collapsible_tree: './src/collapsible_tree/collapsible_tree.ts',
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname),
    library: "[name]",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new TerserJSPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/, loader: "to-string-loader" },
      { test: /\.css$/, loader: "css-loader" }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    port: 3443,
    https: true,
    contentBase: path.join(__dirname),
    compress: true
  }
}

module.exports = webpackConfig