import { emotes } from './emoticons.js';

const emoticons = {
  /** @param {string} name */
  fromName: (name) => {
    if(!name) return null;

    return emotes.find((emote) => emote.name === name).emote || null;
  },
};

export { emoticons };
