/**
 * @type {Map<Regexp, string>} emotes
 */
const emotes = new Map();

emotes.set(/&smile;/g, ":)");
emotes.set(/&frown;/g, ":(");
emotes.set(/&laugh;/g, ":D");
emotes.set(/&wink;/g, ";)");

const ascii = new Map();

emotes.set(/&gt;/g, ">");
emotes.set(/&lt;/g, "<");
emotes.set(/&larr;/g, "<-");
emotes.set(/&rarr;/g, "->");

export { emotes, ascii };

