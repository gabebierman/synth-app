import * as tone from "tone";

/**
 * @param attackNoise 1-20
 * @param dampening frequency
 * @param release time
 * @resonance .001 - .999
 */

function kpSynth({ attackNoise, dampening, release, reso }) {
    const output = new tone.PluckSynth({
        attackNoise: attackNoise, //1-20
        dampening: dampening, //freq
        release: release,
        resonance: reso, //0-1
    }).toDestination();
    return output;
}

export default kpSynth;
