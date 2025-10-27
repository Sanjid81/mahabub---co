const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/scripts/index.js",
  },
  mode: process.env.MODE || "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      template: "./index.html", // ← root folder
      filename: "index.html",
      inject: "body",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // serve dist folder
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
};
