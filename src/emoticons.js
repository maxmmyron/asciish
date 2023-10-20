/**
 * @type {Map<Regexp, string>} emotes
 */
const emotes = new Map();

emotes.set(/&smile;/g, ":)");
emotes.set(/&frown;/g, ":(");
emotes.set(/&laugh;/g, ":D");
emotes.set(/&wink;/g, ";)");

const ascii = new Map();

ascii.set(/&gt;/g, ">");
ascii.set(/&lt;/g, "<");
ascii.set(/&larr;/g, "<-");
ascii.set(/&rarr;/g, "->");
ascii.entries(/&clef;/g, "𝄞");

export { emotes, ascii };

