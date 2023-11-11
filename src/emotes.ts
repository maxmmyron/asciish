enum EmoteType {
  ANGRY = "angry",
  HAPPY = "happy",
  LOVE = "love",
  MISC = "misc",
  SAD = "sad",
  SIMPLE = "simple",
}

const emoteProperties: [RegExp, string, ...EmoteType[]][] = [
  [/&smile;/g, ":)", EmoteType.SIMPLE, EmoteType.HAPPY],
  [/&frown;/g, ":(", EmoteType.SIMPLE, EmoteType.SAD],
  [/&angry;/g, ">:(", EmoteType.SIMPLE, EmoteType.ANGRY],
  [/&laugh;/g, ":D", EmoteType.SIMPLE, EmoteType.HAPPY],
  [/&wink;/g, ";)", EmoteType.SIMPLE],
  [/&tongue;/g, ":P", EmoteType.SIMPLE],
  [/&happy;/g, "ヽ(´▽`)/", EmoteType.HAPPY],
  [/&cute;/g, "•‿•", EmoteType.HAPPY],
  [/&sad;/g, "(╥_╥)", EmoteType.SAD],
  [/&kiss;/g, "( ˘ ³˘)♥", EmoteType.LOVE],
  [/&flip;/g, "(╯°□°)╯︵ ┻━┻", EmoteType.ANGRY],
  [/&dog;/g, "•ᴥ•", EmoteType.MISC],
  [/&shrug;/g, "¯&bsol;_(ツ)_/¯", EmoteType.MISC]
]

const emotes: Map<RegExp, [string, ...EmoteType[]]> = new Map();

for(const emote of emoteProperties)
  emotes.set(emote[0], [emote[1], ...(emote.slice(2) as EmoteType[])]);

export { emotes, EmoteType };
