import * as runtime from "./runtime";
import { emotes } from "./emotes"
import { unicode } from "./unicode"
import { punctuation } from "./prose";
import { shortcodes } from "./emoji";

interface AsciishParserOptions {
  emotes?: boolean;
  unicode?: boolean;
  punctuation?: boolean;
  shortcodes?: boolean;
}

type AsciishPluginOptions = {
  affixes: {
    /**
     * The affixes to use for all default shortcode replacement operations
     * @default ["&", ";"]
     */
    default: [string, string],
    /**
     * The affixes to use for all emoji shortcode replacement operations
     * @default [":", ":"]
     */
    emoji: [string, string]
  }

  parser: AsciishParserOptions;
}

function asciishPlugin(opts: AsciishPluginOptions = {
  affixes: {
    default: ["&", ";"],
    emoji: [":", ":"]
  },
  parser: {
    emotes: true,
    unicode: true,
    punctuation: true,
    shortcodes: true
  }
}) {
  return {
    name: "asciish-transform-shortcodes",

    transform: (src: string, id: string) =>  {
      if(id.includes("node_modules/") || id.includes("dist/")) return;

      let source = src.toString();

      if(opts.parser.emotes)
        for(const [shortcode, metadata] of emotes) {
          const regexp = new RegExp(`${opts.affixes.default[0]}${shortcode}${opts.affixes.default[1]}`, "g");
          source = source.replaceAll(regexp, metadata[0]);
        }

      if(opts.parser.unicode)
        for(const [shortcode, metadata] of unicode) {
          const regexp = new RegExp(`${opts.affixes.default[0]}${shortcode}${opts.affixes.default[1]}`, "g");
          source = source.replaceAll(regexp, metadata[0]);
        }

      if(opts.parser.punctuation)
        for (const [regexp, metadata] of punctuation) {
          source = source.replaceAll(regexp, metadata[0]);
        }

      if(opts.parser.shortcodes)
        for(const [shortcode, emoji] of shortcodes) {
          const regexp = new RegExp(`${opts.affixes.emoji[0]}${shortcode}${opts.affixes.emoji[1]}`, "g");
          source = source.replaceAll(regexp, emoji);
        }

      return {
        code: source,
      };
    }
  }
}

export { asciishPlugin, emotes, unicode, punctuation, runtime };
