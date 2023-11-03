 enum UnicodeType {
  ARROW = "arrow",
  MATH = "math",
  MISC = "misc",
  MUSIC = "music",
}

const unicodeProperties = [
  [/&gt;/g, ">", UnicodeType.ARROW, UnicodeType.MATH],
  [/&lt;/g, "<", UnicodeType.ARROW, UnicodeType.MATH],
  [/&larr;/g, "<-", UnicodeType.ARROW],
  [/&uarr;/g, "↑", UnicodeType.ARROW],
  [/&rarr;/g, "->", UnicodeType.ARROW],
  [/&darr;/g, "↓", UnicodeType.ARROW],
  [/&trebleclef;/g, "𝄞", UnicodeType.MISC],
  [/&product;/g, "∏", UnicodeType.MATH],
  [/&sum;/g, "∑", UnicodeType.MATH],
  [/&infinity;/g, "∞", UnicodeType.MATH],
  [/&pi;/g, "π", UnicodeType.MATH],

  [/&box;/g, "□", UnicodeType.MISC],
  [/&boxcross;/g, "✖", UnicodeType.MISC],
  [/&boxcheck;/g, "✓", UnicodeType.MISC],
];

/**
 * @type {Map<RegExp, Array<*>>} emotes
 */
const unicode = new Map();

for(const emote of unicodeProperties) unicode.set(emote[0], emote.slice(1));

export { unicode, UnicodeType };
