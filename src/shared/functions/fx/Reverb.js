import * as tone from "tone";

/**
 * @param decay seconds
 * @param predelay seconds
 * @param wet .001 - .999
 */

export default function reverb({ decay, predelay, wet }) {
    const output = new tone.Reverb({
        context: tone.context,

        decay: decay,
        preDelay: predelay,
        wet: wet,
    });
    return output;
}
