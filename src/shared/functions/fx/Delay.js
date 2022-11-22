import * as tone from "tone";

/**
 * @param delayTime time
 * @param feedback .001 - .999
 * @param maxDelay seconds
 * @param wet .001 - .999
 */

export default function delay({ delaytime, feedback, maxdelay, wet }) {
    const output = new tone.PingPongDelay({
        delayTime: delaytime,
        feedback: feedback,
        maxDelay: maxdelay,
        wet: wet,
    }).toDestination();
    return output;
}
