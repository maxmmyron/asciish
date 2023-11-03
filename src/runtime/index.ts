import { emotes as emoteMap } from "../emotes"
import { unicode as unicodeMap } from "../unicode"

// type FontMapping = {capital: [number, number], lowercase: [number, number], digits: [number, number]};

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
  })
}

const fanciful = {
  /**
   * Rerenders the alphabetical characters in a string using monospace unicode glyphs
   * @param {string} str the string to rerender using monospace unicode glyphs
   * @returns {string} the string with monospace unicode glyphs (U+1D670-U+1D6A3)
   */
  toMono: (str: string) => reformatToUnicodeFont(str, 0x1D670, 0x1D68A, 0x1D7F6),
  toSerifBold: (str: string) => reformatToUnicodeFont(str, 0x1D400, 0x1D41A, 0x1D7CE),
  toScriptBold: (str: string) => reformatToUnicodeFont(str, 0x1D4D0, 0x1D4EA, 0x1D7CE),
  toGothicBold: (str: string) => reformatToUnicodeFont(str, 0x1D5A0, 0x1D5BA, 0x1D7CE),
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

export { fanciful, emotes, unicode };
