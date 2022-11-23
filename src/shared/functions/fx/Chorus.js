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

export default function chorus({ chorusDelayTime, chorusDepth, chorusFreq, chorusWet }) {
    const output = new tone.Chorus({
        spread: 180,
        delayTime: chorusDelayTime,
        depth: chorusDepth,
        frequnecy: chorusFreq,
        wet: chorusWet,
    });
    return output;
}
