import * as tone from "tone";

/**
 *
 * @param delaytime milliseconds
 * @param depth .001 - .999
 * @param feedback .001 - .999
 * @param freq 1 - 20000
 * @param spread Degrees
 * @param wet .001 - .999
 *
 */

export default function chorus({ chorusDelayTime, chorusWet }) {
    const output = new tone.Chorus({
        delayTime: chorusDelayTime,
        spread: 180,
        depth: 0.999,
        wet: chorusWet,
        frequency: 100,
    });
    return output;
}
