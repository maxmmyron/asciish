import { runtime } from './runtime.js';
import { emotes, unicode } from './emoticons.js';

/**
 * @param {string|Buffer} source content of the resource file
 * @param {object} [map] SourceMap data consumable by https://github.com/mozilla/source-map
 */
export default function loader(source, map) {
  for(const [regexp, metadata] of emotes) {
    source = source.replaceAll(regexp, metadata[0]);
  }

  for(const [regexp, metadata] of unicode) {
    source = source.replaceAll(regexp, metadata[0]);
  }

  return source;
}

export { runtime };
