import { emotes as emoteMap } from "../emotes"
import { unicode as unicodeMap } from "../unicode"

/**
 * Reformats an ASCII string to use unicode characters from a given font. A "font"
 * in this context is a set of unicode characters that are visually similar to the
 * ASCII characters they are replacing.
 *
 * @param str The string to reformat
 * @param capIndex The starting index of the capital "A" character in the unicode font
 * @param lowerIndex The starting index of the lowercase "a" character in the unicode font
 * @param digitIndex The starting index of the "0" character in the unicode font
 * @param miscMap A map of characters to their unicode code points--used for edge cases
 * @returns {string} the reformatted string
 */
const reformatToUnicodeFont = (str: string, capIndex: number, lowerIndex: number, digitIndex: number, miscMap: Map<string, number> = new Map()) => {
  return str.split('').map((char) => {
    const charCode = char.charCodeAt(0);

    // for some "font" mappings, some characters are explicitly defined in an
    // earlier unicode plane, so we need to check for these edge cases before
    // anything else
    if(miscMap.size && miscMap.has(char))
      return String.fromCodePoint(miscMap.get(char)!);

    if(charCode >= 0x41 && charCode <= 0x5A)
      return String.fromCodePoint(capIndex + charCode - 0x41);

    if(charCode >= 0x61 && charCode <= 0x7A)
      return String.fromCodePoint(lowerIndex + charCode - 0x61);

    if(charCode >= 0x30 && charCode <= 0x39)
      return String.fromCodePoint(digitIndex + charCode - 0x30);

    return char;
  }).join('');
}

const fanciful = {
  /**
   * Rerenders the alphabetical characters in a string using monospace unicode glyphs
   * @param str the string to rerender using monospace unicode glyphs
   * @returns {string} the string with monospace unicode glyphs (U+1D670-U+1D6A3)
   */
  toMono: (str: string) => reformatToUnicodeFont(str, 0x1D670, 0x1D68A, 0x1D7F6),

  /**
   * Rerenders the alphabetical characters in a string using sans-serif unicode glyphs
   * @param str the string to rerender using sans-serif unicode glyphs
   * @returns {string} the string with sans-serif unicode glyphs (U+1D5A0-U+1D5BA)
   */
  toSerifBold: (str: string) => reformatToUnicodeFont(str, 0x1D400, 0x1D41A, 0x1D7CE),

  /**
   * Rerenders the alphabetical characters in a string using serif unicode glyphs
   * @param str the string to rerender using serif unicode glyphs
   * @returns {string} the string with serif unicode glyphs (U+1D5D4-U+1D5EE)
   */
  toScriptBold: (str: string) => reformatToUnicodeFont(str, 0x1D4D0, 0x1D4EA, 0x1D7CE),

  /**
   * Rerenders the alphabetical characters in a string using gothic unicode glyphs
   * @param str the string to rerender using gothic unicode glyphs
   * @returns {string} the string with gothic unicode glyphs (U+1D56C-U+1D586)
   */
  toGothicBold: (str: string) => reformatToUnicodeFont(str, 0x1D56C, 0x1D586, 0x1D7CE),
}

const emoji = {
  /**
   * Splits a string of ZWJ sequence emojis into their atomic elements.
   *
   * For example, the farmer emoji 🧑‍🌾 is made up of the atomic elements
   * "Person" 🧑, a ZWJ, and "Sheaf of Rice" 🌾.
   *
   * @param str a string of ZWJ sequence emojis
   * @returns {string[]} an array of emojis that make up the ZWJ sequence
   */
  split: (str: string) => [...str].filter(char => 0x200d !== char.codePointAt(0)),
}

const emotes = {
  /**
   * Returns a random defined emote replacement
   *
   * @returns {string} random emote character
   */
  random: () => {
    return [...emoteMap.values()][Math.floor(Math.random() * emoteMap.size)][0];
  },
}

const unicode = {
  /**
   * Returns a random defined ascii replacement
   *
   * @returns {string} random ascii character
   */
  random: () => {
    return [...unicodeMap.values()][Math.floor(Math.random() * unicodeMap.size)][0];
  }
}

export { fanciful, emoji, emotes, unicode };
