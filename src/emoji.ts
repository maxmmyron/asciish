const registerShortcodes = (emoji: string, codes: string[]) => {
  for (const shortcode of codes) {
    if(shortcodes.has(RegExp(shortcode, "g"))) {
      throw new Error(`Error registering ${shortcode} to ${emoji}: shortcode already registered to ${shortcodes.get(RegExp(shortcode, "g"))}`);
    }
    shortcodes.set(RegExp(shortcode, "g"), emoji);
  }
};

const shortcodes: Map<RegExp, string> = new Map();

registerShortcodes('😀', [":smile:", ":D"]);
registerShortcodes('😂', [":tears of joy:", "xD"]);


export { shortcodes };
