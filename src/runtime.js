/**
 * Runtime-level helpers for on-the-fly unicode handling.
 *
 * @returns {object} runtime
 */
const runtime = () => {
  class emotes {
    /**
     * Returns a random defined emote replacement
     *
     * @returns {string} random emote character
     */
    static get random() {
      return [...emotes.values()][Math.floor(Math.random() * emotes.size)];
    }
  }

  class ascii {
    /**
     * Returns a random defined ascii replacement
     *
     * @returns {string} random ascii character
     */
    static get random() {
      return [...ascii.values()][Math.floor(Math.random() * ascii.size)];
    }
  }

  return {
    emotes,
    ascii
  }
}

runtime().emotes.random();
