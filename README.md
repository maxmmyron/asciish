# asciish

asciish provides build-time shortcode-based emoticon injection for webpages and runtime unicode helpers.

## Install

### npm
`npm i asciish`



## Use

### build-time emoticon resolution

**(NOTE: this feature is Vite/Rollup-only at the moment)**

asciish provides a small plugin that provides shortcode-based emoticon injection (similar to how :fire: resolves to 🔥 on some platforms.)

Add the plugin to your config:

```js
// vite.config.js
import { defineConfig } from 'vite';
import { asciishPlugin } from 'asciish';

export default defineConfig({
  plugins: [
    // other plugins...
    asciishPlugin(),
  ],
  // ...
});
```

Then, use the `&<shortcode>;` syntax in your source files:

```html
<!-- src/index.html -->
<!-- ... -->
<body>
  <p>Today is a good day &smile;</p>
</body>
<!-- ... -->
```

This will compile to

```html
<!-- dist/index.html -->
<!-- ... -->
<body>
  <p>Today is a good day :)</p>
</body>
<!-- ... -->
```

### runtime helpers

asciish provides multiple runtime helper functions for working with the Unicode standard.

You can include the `runtime` object in your code to access runtime helpers:

```js
// src/index.svelte

<script>
  import {runtime} from 'asciish';
</script>

<p>{runtime.fanciful.toMono("Hello there!")}</p> // <p>𝕳𝖊𝖑𝖑𝖔 𝖙𝖍𝖊𝖗𝖊!</p>

<p>🧑‍🌾 = {runtime.emoji.split("🧑‍🌾").join(" + ")}</p> // <p>🧑‍🌾 = 🧑 + 🌾</p>
```

## Planned Features
- Plugin options (file extensions, preferred shortcode syntax, etc.)
- Support for Webpack via custom loader
- Support build-time randomized emote injection
- Ignoring shortcode given some context (e.g. `&smile;` in a code block)
