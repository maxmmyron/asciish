 enum UnicodeType {
  ARROW = "arrow",
  MATH = "math",
  MISC = "misc",
  MUSIC = "music",
  GEOMETRY = "geometry",
  SHAPE = "shape",
  SQUARE = "square",
  CIRCLE = "circle",
  LOGIC = "logic",
}

const registerUnicode = (char: string, shortcodes: string[], ...types: UnicodeType[]) => {
  for (const shortcode of shortcodes) {
    const regexp = new RegExp(`&${shortcode};`, "g");
    if (unicode.has(regexp)) throw new Error(`Error registering ${shortcode} to ${char}: shortcode already registered to ${unicode.get(regexp)}`);
    unicode.set(regexp, [char, ...types]);
  }
};

const unicode: Map<RegExp, [string, ...UnicodeType[]]> = new Map();

// ----------------------------------------
// ARROWS
// ----------------------------------------

// basic directional arrows
registerUnicode("←", ["larr"], UnicodeType.ARROW);
registerUnicode("↑", ["uarr"], UnicodeType.ARROW);
registerUnicode("→", ["rarr"], UnicodeType.ARROW);
registerUnicode("↓", ["darr"], UnicodeType.ARROW);
registerUnicode("↔", ["harr"], UnicodeType.ARROW);
registerUnicode("↕", ["varr"], UnicodeType.ARROW);
registerUnicode("↖", ["nwarr"], UnicodeType.ARROW);
registerUnicode("↗", ["nearr"], UnicodeType.ARROW);
registerUnicode("↘", ["searr"], UnicodeType.ARROW);
registerUnicode("↙", ["swarr"], UnicodeType.ARROW);

// double directional arrows
registerUnicode("⇐", ["lArr"], UnicodeType.ARROW);
registerUnicode("⇑", ["uArr"], UnicodeType.ARROW);
registerUnicode("⇒", ["rArr"], UnicodeType.ARROW);
registerUnicode("⇓", ["dArr"], UnicodeType.ARROW);
registerUnicode("⇔", ["hArr"], UnicodeType.ARROW);
registerUnicode("⇕", ["vArr"], UnicodeType.ARROW);
registerUnicode("⇖", ["nwArr"], UnicodeType.ARROW);
registerUnicode("⇗", ["neArr"], UnicodeType.ARROW);
registerUnicode("⇘", ["seArr"], UnicodeType.ARROW);
registerUnicode("⇙", ["swArr"], UnicodeType.ARROW);

// ----------------------------------------
// MATH SYMBOLS
// ----------------------------------------

// basic equation symbols
registerUnicode("∏", ["prod", "product"], UnicodeType.MATH);
registerUnicode("∑", ["sum"], UnicodeType.MATH);
registerUnicode("√", ["sqrt", "root"], UnicodeType.MATH);
registerUnicode("∕", ["frac", "fraction"], UnicodeType.MATH);
registerUnicode("∂", ["partial"], UnicodeType.MATH);
registerUnicode("∫", ["int", "integral"], UnicodeType.MATH);
registerUnicode("∬", ["iint", "doubleintegral"], UnicodeType.MATH);
registerUnicode("∭", ["iiint", "tripleintegral"], UnicodeType.MATH);
registerUnicode("∮", ["oint", "contourintegral"], UnicodeType.MATH);
registerUnicode("∯", ["oiint", "doublecontourintegral"], UnicodeType.MATH);
registerUnicode("∰", ["oiiint", "triplecontourintegral"], UnicodeType.MATH);
registerUnicode("≈", ["approx", "approxeq"], UnicodeType.MATH);
registerUnicode("≉", ["napprox", "napproxeq"], UnicodeType.MATH);
registerUnicode("≠", ["neq", "noteq"], UnicodeType.MATH);
registerUnicode("≡", ["equiv", ], UnicodeType.MATH);

// misc math symbols
registerUnicode("∠", ["angle"], UnicodeType.MATH);

// Values
registerUnicode("∞", ["infinity"], UnicodeType.MATH);
registerUnicode("π", ["pi"], UnicodeType.MATH);

// ----------------------------------------
// MATHEMATIC LOGIC SYMBOLS
// ----------------------------------------

registerUnicode("∀", ["forall"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∃", ["exists"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∄", ["nexists", "!exists"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∈", ["in"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∉", ["notin", "!in"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∩", ["cap", "intersection"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∪", ["cup", "union"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∧", ["and"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("∨", ["or"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊻", ["xor"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊼", ["nand"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊽", ["nor"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊕", ["oplus"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊖", ["ominus"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊗", ["otimes"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊘", ["odiv"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊂", ["subset"], UnicodeType.MATH, UnicodeType.LOGIC);
registerUnicode("⊃", ["superset"], UnicodeType.MATH, UnicodeType.LOGIC);

// ----------------------------------------
// MUSICAL SYMBOLS
// ----------------------------------------

registerUnicode("𝄞", ["trebleclef", "treble"], UnicodeType.MUSIC);
registerUnicode("𝄢", ["bassclef", "bass"], UnicodeType.MUSIC);

// ----------------------------------------
// GEOMETRY SYMBOLS
// ----------------------------------------

registerUnicode("△", ["triangle"], UnicodeType.GEOMETRY);

registerUnicode("■", ["blacksquare"], UnicodeType.GEOMETRY);
registerUnicode("□", ["whitesquare"], UnicodeType.GEOMETRY);
registerUnicode("▪", ["blacksqsm"], UnicodeType.GEOMETRY);
registerUnicode("▫", ["whitesqsm"], UnicodeType.GEOMETRY);
registerUnicode("▢", ["roundedsquare"], UnicodeType.GEOMETRY);

registerUnicode("●", ["blackcircle"], UnicodeType.GEOMETRY);
registerUnicode("○", ["whitecircle"], UnicodeType.GEOMETRY);

registerUnicode("◇", ["diamond"], UnicodeType.GEOMETRY);

registerUnicode("⬟", ["blackpentagon"], UnicodeType.GEOMETRY);
registerUnicode("⬠", ["whitepentagon"], UnicodeType.GEOMETRY);

registerUnicode("⬢", ["blackhex"], UnicodeType.GEOMETRY);
registerUnicode("⬡", ["whitehex"], UnicodeType.GEOMETRY);
registerUnicode("⬣", ["blackhexhorz", "horizontalblackhex"], UnicodeType.GEOMETRY);

// ----------------------------------------
// MISC SYMBOLS
// ----------------------------------------

registerUnicode("", ["applelogo"], UnicodeType.MISC);
registerUnicode("", ["twitterlogo"], UnicodeType.MISC);

export { unicode, UnicodeType };
