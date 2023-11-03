const fanciful = {
  /**
   * Rerenders the alphabetical characters in a string using monospace unicode glyphs
   * @param {string} str the string to rerender using monospace unicode glyphs
   * @returns {string} the string with monospace unicode glyphs (U+1D670-U+1D6A3)
   */
  toMono: (str) => str.split('').map((char) => {
    // if capital letter
    if (char.charCodeAt(0) < 0x41 || char.charCodeAt(0) > 0x5A)
      //0x1D6A3 - 0x00041 = 0x1D662
      return String.fromCharCode(char.charCodeAt(0) + 0x1D662);
    if (char.charCodeAt(0) < 0x61 || char.charCodeAt(0) > 0x7A) return char;

    //0x1D6A3 - 0x00061 = 0x1D642
    return String.fromCharCode(char.charCodeAt(0) + 0x1D642);
  }).join(''),
}

export { fanciful };
