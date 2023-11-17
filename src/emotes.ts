enum EmoteType {
  ANGRY = "angry",
  HAPPY = "happy",
  LOVE = "love",
  MISC = "misc",
  SAD = "sad",
  SIMPLE = "simple",
}

const registerEmote = (char: string, shortcodes: string[], ...types: EmoteType[]) => {
  for (const shortcode of shortcodes) {
    const regexp = new RegExp(`&${shortcode};`, "g");
    if (emotes.has(regexp)) throw new Error(`Error registering ${shortcode} to ${char}: shortcode already registered to ${emotes.get(regexp)}`);
    emotes.set(regexp, [char, ...types]);
  }
};

const emotes: Map<RegExp, [string, ...EmoteType[]]> = new Map();

// ----------------------------------------
// SIMPLE EMOTES
// ----------------------------------------

registerEmote(":)", ["smile"], EmoteType.SIMPLE, EmoteType.HAPPY);
registerEmote(":(", ["frown"], EmoteType.SIMPLE, EmoteType.SAD);
registerEmote(">:(", ["angry"], EmoteType.SIMPLE, EmoteType.ANGRY);
registerEmote(":D", ["laugh"], EmoteType.SIMPLE, EmoteType.HAPPY);
registerEmote(";)", ["wink"], EmoteType.SIMPLE);
registerEmote(":P", ["tongue"], EmoteType.SIMPLE);

// ----------------------------------------
// HAPPY EMOTICONS
// ----------------------------------------

registerEmote("ヽ(´▽`)/", ["happy"], EmoteType.HAPPY);
registerEmote("•‿•", ["cute"], EmoteType.HAPPY);

// ----------------------------------------
// SAD EMOTICONS
// ----------------------------------------

registerEmote("(╥_╥)", ["sad"], EmoteType.SAD);

// ----------------------------------------
// LOVE EMOTICONS
// ----------------------------------------

registerEmote("( ˘ ³˘)♥", ["kiss"], EmoteType.LOVE);

// ----------------------------------------
// ANGRY EMOTICONS
// ----------------------------------------

registerEmote("(╯°□°)╯︵ ┻━┻", ["flip"], EmoteType.ANGRY);

// ----------------------------------------
// MISC EMOTICONS
// ----------------------------------------

registerEmote("•ᴥ•", ["dog"], EmoteType.MISC);
registerEmote("¯\\_(ツ)_/¯", ["shrug"], EmoteType.MISC);

export { emotes, EmoteType };
