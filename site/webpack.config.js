module.exports = {
  devtool: "source-map",
  devServer: {
    watchContentBase: true,
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  output: {
    path: __dirname,
    filename: "app.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
