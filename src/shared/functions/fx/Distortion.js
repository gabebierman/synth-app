import * as tone from "tone";

/**
 * @param dist number
 * @param oversample OverSampleType ??
 * @param wet .001 - .999
 */

export default function distortion({ dist, oversample, wet }) {
    const output = new tone.Distortion({
        distortion: dist, //number
        oversample: oversample,
        wet: wet, //normal range .001-.999
    }).toDestination();
    return output;
}
