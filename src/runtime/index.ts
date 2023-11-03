/**
 * Abc
 */
const fanciful = {
  /**
   * Rerenders the alphabetical characters in a string using monospace unicode glyphs
   * @param {string} str the string to rerender using monospace unicode glyphs
   * @returns {string} the string with monospace unicode glyphs (U+1D670-U+1D6A3)
   */
  toMono: (str: string) => str.split('').map((char) => {
    console.log(char.charCodeAt(0), char.charCodeAt(0).toString(16));
    // if capital letter
    if (char.charCodeAt(0) >= 0x41 && char.charCodeAt(0) <= 0x5A)
      return String.fromCodePoint(0x1D670 + char.charCodeAt(0) - 0x41);
    if (char.charCodeAt(0) < 0x61 || char.charCodeAt(0) > 0x7A) return char;

    //0x1D6A3 - 0x00061 = 0x1D642
    return String.fromCodePoint(0x1D68A + char.charCodeAt(0) - 0x61);
  }).join(''),
}

// const emotes = {
//   /**
//    * Returns a random defined emote replacement
//    *
//    * @returns {string} random emote character
//    */
//   random: () => {
//     return [...emotes.values()][Math.floor(Math.random() * emotes.size)];
//   },
// }

// const ascii = {
//   /**
//    * Returns a random defined ascii replacement
//    *
//    * @returns {string} random ascii character
//    */
//   random: () => {
//     return [...ascii.values()][Math.floor(Math.random() * ascii.size)];
//   }
// }

// export { fanciful, emotes, ascii };

export { fanciful };
