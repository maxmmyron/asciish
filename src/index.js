import { emotes, ascii } from './emoticons.js';

/**
 * @param {string|Buffer} source content of the resource file
 * @param {object} [map] SourceMap data consumable by https://github.com/mozilla/source-map
 */
export default function loader(source, map) {
  for(const [key, value] of emotes) {
    source = source.replaceAll(key, value);
  }

  for(const [key, value] of ascii) {
    source = source.replaceAll(key, value);
  }

  return source;
}
