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
  parser: AsciishParserOptions;
}

function asciishPlugin(opts: AsciishPluginOptions = {
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
        for(const [regexp, metadata] of emotes) {
          source = source.replaceAll(regexp, metadata[0]);
        }

      if(opts.parser.unicode)
        for(const [regexp, metadata] of unicode) {
          source = source.replaceAll(regexp, metadata[0]);
        }

      if(opts.parser.punctuation)
        for (const [regexp, metadata] of punctuation) {
          source = source.replaceAll(regexp, metadata[0]);
        }

      if(opts.parser.shortcodes)
        for(const [shortcode, emoji] of shortcodes) {
          source = source.replaceAll(shortcode, emoji);
        }

      return {
        code: source,
      };
    }
  }
}

export { asciishPlugin, emotes, unicode, punctuation, runtime };
