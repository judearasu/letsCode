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
    new HtmlWebpackPlugin({
      title: 'Button Demo',
      chunks: ['button_group'],
      template: "./html/button_group/button_group.html",
      filename: 'button_group.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Button Demo',
      chunks: ['button_group_2'],
      template: "./html/button_group_2/button_group_2.html",
      filename: 'button_group_2.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Switch',
      chunks: ['switch'],
      template: "./html/switch/switch.html",
      filename: 'switch.html',
    })
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