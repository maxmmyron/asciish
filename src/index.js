import { emotes } from './emoticons.js';

const emoticons = {
  /** @param {string} name */
  fromName: (name) => {
    if(!name) throw new Error("Error in fromName: no name argument provided");

    return emotes.find((emote) => emote.name === name).emote || null;
  },
};

export { emoticons };
