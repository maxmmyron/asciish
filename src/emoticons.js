/**
 * @typedef {Object} Emoticon
 *
 * @property {string} id - A unique identifier
 * @property {string} name - The name of the emoticon
 * @property {string} emote - The emoticon itself
 * @property {string} keywords - Keywords that describe the emoticon
 * @property {string} category - The category the emoticon belongs to
 * @property {string} charset - The character set required to render the emoticon
 */

/**
 * @type {Emoticon[]}
 */
const emotes = [
  {
    id: "1",
    name: "smiley",
    emote: ":)",
    keywords: "smile, happy",
    category: "happy",
    charset: "ascii",
  },
  {
    id: "2",
    name: "frowny",
    emote: ":(",
    keywords: "frown, sad",
    category: "sad",
    charset: "ascii",
  },
  {
    id: "3",
    name: "winky",
    emote: ";)",
    keywords: "wink, happy",
    category: "happy",
    charset: "ascii",
  },
  {
    id: "4",
    name: "big smile",
    emote: ":D",
    keywords: "laugh, happy",
    category: "happy",
    charset: "ascii",
  },
  {
    id: "5",
    name: "surprised",
    emote: ":o",
    keywords: "surprise, shock",
    category: "surprised",
    charset: "ascii",
  },
  {
    id: "6",
    name: "cute",
    emote: ":3",
    keywords: "kiss, happy, cute, content",
    category: "happy",
    charset: "ascii",
  },
  {
    id: "7",
    name: "grumpy",
    emote: ">:(",
    keywords: "grumpy, angry",
    category: "angry",
    charset: "ascii",
  },
  {
    id: "8",
    name: "confused",
    emote: ":/",
    keywords: "confused, unsure",
    category: "unsure",
    charset: "ascii",
  },
  {
    id: "9",
    name: "cry",
    emote: ":'(",
    keywords: "cry, sad",
    category: "sad",
    charset: "ascii",
  }
];

export {
  emotes
};
