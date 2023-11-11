import * as runtime from "./runtime";
import { emotes } from "./emotes"
import { unicode } from "./unicode"
import { shortcodes } from "./emoji";

function asciishPlugin() {
  return {
    name: "asciish-transform-shortcodes",

    transform: (src: string, id: string) =>  {
      if(id.includes("node_modules/") || id.includes("dist/")) return;

      let source = src.toString();

      for(const [regexp, metadata] of emotes) {
        source = source.replaceAll(regexp, metadata[0]);
      }

      for(const [regexp, metadata] of unicode) {
        source = source.replaceAll(regexp, metadata[0]);
      }

      for(const [shortcode, emoji] of shortcodes) {
        source = source.replaceAll(shortcode, emoji);
      }

      return {
        code: source,
      };
    }
  }
}

export { asciishPlugin, emotes, unicode, runtime };
