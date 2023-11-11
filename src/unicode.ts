 enum UnicodeType {
  ARROW = "arrow",
  MATH = "math",
  MISC = "misc",
  MUSIC = "music",
}

const unicodeProperties: [RegExp, string, ...UnicodeType[]][] = [
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

const unicode: Map<RegExp, [string, ...UnicodeType[]]> = new Map();

for(const emote of unicodeProperties)
  unicode.set(emote[0], [emote[1], ...(emote.slice(2) as UnicodeType[])]);

export { unicode, UnicodeType };
