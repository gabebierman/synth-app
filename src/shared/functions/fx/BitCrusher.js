import * as tone from "tone";

/**
 *
 * @param bits number
 * @param wet .001 - .999
 *
 */

export default function BitCrusher({ bits, wet }) {
    const output = new tone.BitCrusher({
        bits: bits,
        wet: wet,
    }).toDestination();
    return output;
}
