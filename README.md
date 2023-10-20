# asciish

asciish provides build-time emoticon injection for webpages.

## installation

`npm i asciish`

## usage

```js
// webpack.config.js

const path = require('path');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve("node_modules/asciish-loader/dist/main.js"),
          }
        ],
      },
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

then, use asciish formatting in your code:

```js
// src/index.js
console.log("Hello, world! &smile;");
```

compiles to

```js
// dist/main.js
console.log("Hello, world! :)");
```
