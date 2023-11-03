import * as runtime from "./runtime";

/**
 * Types of emotes
 * @readonly
 * @enum {string}
 */
export const EmoteType = {
  ANGRY: "angry",
  HAPPY: "happy",
  LOVE: "love",
  MISC: "misc",
  SAD: "sad",
  SIMPLE: "simple",
};

const emoteProperties = [
  [/&smile;/g, ":)", EmoteType.SIMPLE, EmoteType.HAPPY],
  [/&frown;/g, ":(", EmoteType.SIMPLE, EmoteType.SAD],
  [/&angry;/g, ">:(", EmoteType.SIMPLE, EmoteType.ANGRY],
  [/&laugh;/g, ":D", EmoteType.SIMPLE, EmoteType.HAPPY],
  [/&wink;/g, ";)", EmoteType.SIMPLE],
  [/&tongue;/g, ":P", EmoteType.SIMPLE],
  [/&happy;/g, "ヽ(´▽`)/", EmoteType.HAPPY],
  [/&cute;/g, "•‿•", EmoteType.HAPPY],
  [/&sad;/g, "(╥_╥)", EmoteType.SAD],
  [/&kiss;/g, "( ˘ ³˘)♥", EmoteType.LOVE],
  [/&flip;/g, "(╯°□°)╯︵ ┻━┻", EmoteType.ANGRY],
  [/&dog;/g, "•ᴥ•", EmoteType.MISC],
  [/&shrug;/g, "¯\\_(ツ)_/¯", EmoteType.MISC]
]

/**
 * @type {Map<RegExp, Array<*>>} emotes
 */
const emotes = new Map();

for(const emote of emoteProperties) emotes.set(emote[0], emote.slice(1));

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

/**
 * @param {string|Buffer} source content of the resource file
 * @param {object} [map] SourceMap data consumable by https://github.com/mozilla/source-map
 */
export default function loader(source: string, map: unknown) {
  for(const [regexp, metadata] of emotes) {
    source = source.replaceAll(regexp, metadata[0]);
  }

  for(const [regexp, metadata] of unicode) {
    source = source.replaceAll(regexp, metadata[0]);
  }

  return source;
}

export { emotes, unicode, runtime };
