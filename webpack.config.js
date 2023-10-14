const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
 const config = {
  entry: "./src/index.js",
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
