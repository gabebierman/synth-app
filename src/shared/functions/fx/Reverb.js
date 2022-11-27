import * as tone from "tone";

/**
 * @param decay seconds
 * @param predelay seconds
 * @param wet .001 - .999
 */

export default async function reverb({ verbDecay, verbDelay, verbWet }) {
    const output = new tone.Reverb({
        decay: verbDecay,
        preDelay: verbDelay,
        wet: verbWet,
    });
    await reverb().generate;
    return output;
}
