import * as tone from "tone";

/**
 * @param delayDelayTine time
 * @param delayFeedback .001 - .999
 * @param delayMaxDelay seconds
 * @param delayWet .001 - .999
 */

export default function delay({ delayDelayTime, delayFeedback, delayMaxDelay, delayWet }) {
    const output = new tone.PingPongDelay({
        delayTime: delayDelayTime,
        feedback: delayFeedback,
        maxDelay: delayMaxDelay,
        wet: delayWet,
    }).toDestination();
    return output;
}
