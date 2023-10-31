/**
 * Types of unicode
 * @readonly
 * @enum {string}
 */
export const UnicodeType = {
  ARROW: "arrow",
  MATH: "math",
  MISC: "misc",
  MUSIC: "music",
}

const unicodeProperties = [
  [/&gt;/g, ">", UnicodeType.ARROW, UnicodeType.MATH],
  [/&lt;/g, "<", UnicodeType.ARROW, UnicodeType.MATH],
  [/&larr;/g, "<-", UnicodeType.ARROW],
  [/&rarr;/g, "->", UnicodeType.ARROW],
  [/&trebleclef;/g, "𝄞", UnicodeType.MISC],
];

/**
 * @type {Map<RegExp, Array<*>>} emotes
 */
const unicode = new Map();

for(const emote of unicodeProperties) unicode.set(emote[0], emote.slice(1));

export default unicode;
