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

export default function chorus({ delaytime, depth, feedback, freq, spread, wet }) {
    const output = new tone.Chorus({
        delayTime: delaytime,
        depth: depth,
        feedback: feedback,
        frequnecy: freq,
        spread: spread,
        wet: wet,
    }).toDestination();
    return output;
}
