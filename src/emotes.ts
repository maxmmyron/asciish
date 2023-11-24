enum EmoteType {
  ANGRY = "angry",
  HAPPY = "happy",
  LOVE = "love",
  MISC = "misc",
  SAD = "sad",
  SIMPLE = "simple",
  ANIMAL = "animal",
}

const registerEmote = (char: string, shortcodes: string[], ...types: EmoteType[]) => {
  for (const shortcode of shortcodes) {
    if (emotes.has(shortcode)) throw new Error(`Error registering ${shortcode} to ${char}: shortcode already registered to ${emotes.get(shortcode)}`);
    emotes.set(shortcode, [char, ...types]);
  }
};

const emotes: Map<string, [string, ...EmoteType[]]> = new Map();

// ----------------------------------------
// SIMPLE EMOTES
// ----------------------------------------

registerEmote(":)", ["smile"], EmoteType.SIMPLE, EmoteType.HAPPY);
registerEmote(":D", ["laugh"], EmoteType.SIMPLE, EmoteType.HAPPY);
registerEmote(";)", ["wink"], EmoteType.SIMPLE, EmoteType.HAPPY);
registerEmote("xD", ["lol"], EmoteType.SIMPLE, EmoteType.HAPPY);

registerEmote(":(", ["frown"], EmoteType.SIMPLE, EmoteType.SAD);

registerEmote(">:(", ["angry", "anger"], EmoteType.SIMPLE, EmoteType.ANGRY);
registerEmote(">:D", ["evil"], EmoteType.SIMPLE, EmoteType.ANGRY);
registerEmote(">:3", ["mischief", "mischievous"], EmoteType.SIMPLE, EmoteType.ANGRY);

registerEmote(":|", ["neutral"], EmoteType.SIMPLE);
registerEmote(":/", ["unsure"], EmoteType.SIMPLE);
registerEmote(":P", ["tongue"], EmoteType.SIMPLE);


// ----------------------------------------
// HAPPY EMOTICONS
// ----------------------------------------

registerEmote("ヽ(´▽`)/", ["happy"], EmoteType.HAPPY);
registerEmote("•‿•", ["cute"], EmoteType.HAPPY);
registerEmote("(^_^)/~", ["wave"], EmoteType.HAPPY);
registerEmote("ヽ(^o^)丿", ["excited"], EmoteType.HAPPY);
registerEmote("(✿◠‿◠)", ["smile_with_flower"], EmoteType.HAPPY);
registerEmote("ᕕ( ᐛ )ᕗ", ["dance", "run"], EmoteType.HAPPY);
registerEmote("¯\(◉◡◔)/¯", ["derp"], EmoteType.HAPPY);


// ----------------------------------------
// SAD EMOTICONS
// ----------------------------------------

registerEmote("(╥_╥)", ["sad"], EmoteType.SAD);
registerEmote("(>_<)", ["upset", "troubled"], EmoteType.SAD);
registerEmote("(T_T)", ["cry", "crying"], EmoteType.SAD);
registerEmote("(-_-)", ["shame"], EmoteType.SAD);
registerEmote("ಥ╭╮ಥ", ["distraught"], EmoteType.SAD);
registerEmote("（ﾉ´д｀）", ["sorry"], EmoteType.SAD);
registerEmote("ಠ ∩ ಠ", ["miserable", "disapprove"], EmoteType.SAD);


// ----------------------------------------
// LOVE EMOTICONS
// ----------------------------------------

registerEmote("( ˘ ³˘)♥", ["kiss"], EmoteType.LOVE);
registerEmote("(づ￣ ³￣)づ", ["hug"], EmoteType.LOVE);
registerEmote("(◍•ᴗ•◍)❤", ["blush_love"], EmoteType.HAPPY);
registerEmote("♥‿♥", ["heart_eyes"], EmoteType.HAPPY);
registerEmote("(▰˘◡˘▰)", ["blush", "awe"], EmoteType.LOVE);


// ----------------------------------------
// ANGRY EMOTICONS
// ----------------------------------------

registerEmote("(╯°□°)╯︵ ┻━┻", ["flip"], EmoteType.ANGRY);
registerEmote("(凸ಠ益ಠ)凸 ", ["middle_finger"], EmoteType.ANGRY);
registerEmote("(*￣m￣)", ["dissatisfied"], EmoteType.ANGRY);
registerEmote("O=('-'Q)", ["punch"], EmoteType.ANGRY);


// ----------------------------------------
// MISC EMOTICONS
// ----------------------------------------

registerEmote("( ͡° ͜ʖ ͡°)", ["lenny"], EmoteType.MISC);
registerEmote("•ᴥ•", ["dog"], EmoteType.MISC);
registerEmote("=^_^=", ["cat"], EmoteType.MISC);
registerEmote("<コ:彡", ["squid"], EmoteType.MISC);
registerEmote("ʕ•ᴥ•ʔ", ["bear"], EmoteType.MISC);
registerEmote("(=_=)", ["tired"], EmoteType.MISC);
registerEmote("(⁄ ⁄•⁄ω⁄•⁄ ⁄) ", ["embarrassed", "flustered"], EmoteType.MISC);
registerEmote("¯\\_(ツ)_/¯", ["shrug"], EmoteType.MISC);
registerEmote('●_●', ["wtf"], EmoteType.MISC);

export { emotes, EmoteType };
