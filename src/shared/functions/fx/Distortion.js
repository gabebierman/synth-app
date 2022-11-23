import * as tone from "tone";

/**
 * @param dist number
 * @param oversample OverSampleType ??
 * @param wet .001 - .999
 */

export default function distortion({ distortionAmount, distortionWet }) {
    const output = new tone.Distortion({
        distortion: distortionAmount, //number
        wet: distortionWet, //normal range .001-.999
    });
    return output;
}
