const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
 const config = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: path.resolve("src/loaders/emoticonLoader.js"),
        }],
      }
    ]
  },
  output: {
    filename: "main.js",
    globalObject: "this",
    library: {
      name: "asciish",
      type: "umd",
    },
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = config;
