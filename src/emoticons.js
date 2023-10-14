/**
 * @type {Map<Regexp, string>} emotes
 */
const emotes = new Map();

emotes.set(/&smile;/, ":)");
emotes.set(/&frown;/, ":(");
emotes.set(/&laugh;/, ":D");
emotes.set(/&wink;/, ";)");

const ascii = new Map();

emotes.set(/&gt;/, ">");
emotes.set(/&lt;/, "<");
emotes.set(/&larr;/, "<-");
emotes.set(/&rarr;/, "->");

export { emotes, ascii };

