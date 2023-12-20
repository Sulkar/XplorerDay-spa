const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.html", to: "" }, { from: "src/images", to: "images" }],
    }),
    new MiniCssExtractPlugin(),
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: path.join(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
