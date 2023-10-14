/**
 * @param {string|Buffer} source content of the resource file
 * @param {object} [map] SourceMap data consumable by https://github.com/mozilla/source-map
 */
module.exports = function (source, map) {
  source = source.replaceAll(/ *console.log\(.*\);?\r?\n?/g, '');
  return source;
}

