const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Radio',
      chunks: ['radio'],
      template: "./html/radio/radio.html",
      filename: 'radio.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Checkbox',
      chunks: ['checkbox'],
      template: "./html/checkbox/checkbox.html",
      filename: 'checkbox.html',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Demo',
      chunks: ['app'],
      template: "./html/index.html",
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
});