/**
 * `AudioManager` handles playback of audio files loaded using the `ResourceManager`
 *
 * @property {Object} audioCache An hash that stores in-use sounds.
 * The key is the id of the sound.
 * @property {Boolean} enabled This is set to false when sound playback is disabled.
 */
const AudioManager = {
    audioCache: {},
    enabled: true,
    /**
     * Adds a new sound element to the audio cache.
     * *Note* if a sound with the same id has already been added, it will be replaced
     * by the new one.
     *
     * @param {String} id
     * @param {HTMLAudioElement} element
     */
    addSound: function (id, element) {
        this.audioCache[id] = element;
    },
    /**
     * Toggles global sound playback
     *
     * @param {Boolean} bool whether to enabled or disable sound playback.
     */
    toggleSound: function (bool) {
        this.enabled = bool;
    },
    /**
     * Plays the specified sound with `id`.
     *
     * @param {String} id The id of the sound to play.
     * @param {Boolean} [loop=false] Set to true to have the sound playback loop.
     * @param {Number} [volume=1] a Number between 0 and 1.
     * @param {Number} [panning=0] a Number between 10 (left) and -10 (right).
     * @returns {Wad} the created sound instance
     */
    play: function (id, loop, volume, panning) {
        let instance = null,
            sound = null;

        if (!this.enabled) {
            return;
        }

        sound = this.audioCache[id];

        if (typeof sound === 'undefined') {
            console.warn('[AM] could not find sound, did you load:', id);
            return;
        }

        if (typeof sound.loop === 'function') {
            sound.loop(loop || false);
        } else {
            sound.loop = loop || false;
        }

        instance = sound.play({
            panning: [panning || 0, 0, 5],
            volume: volume || 1,
            loop: loop || false
        });

        return instance;
    },
    /**
     * Stops playing the sound id
     *
     * @param {String} id The id of the sound to stop playing.
     * @param {any} instanceId The instanceId to use, in case several sounds with the same Id are being played.
     *
     * @returns {undefined}
     */
    stop: function (id, instanceId) {
        let sound = null;

        if (!this.enabled) {
            return;
        }

        try {
            sound = this.audioCache[id];
        } catch (err) {
            console.warn('[AM] WARN: unable to stop sound', id);
            return;
        }

        if (sound && typeof sound.stop === 'function') {
            sound.stop(instanceId || undefined);
        }
    }
};

export default AudioManager;