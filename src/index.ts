import * as runtime from "./runtime";
import { emotes } from "./emotes"
import { unicode } from "./unicode"

/**
 * @param {string|Buffer} source content of the resource file
 * @param {object} [map] SourceMap data consumable by https://github.com/mozilla/source-map
 */
export default function loader(source: string, map: unknown) {
  for(const [regexp, metadata] of emotes) {
    source = source.replaceAll(regexp, metadata[0]);
  }

  for(const [regexp, metadata] of unicode) {
    source = source.replaceAll(regexp, metadata[0]);
  }

  return source;
}

export { emotes, unicode, runtime };
