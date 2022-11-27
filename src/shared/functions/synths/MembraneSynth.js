import * as tone from "tone";

function membraneSynth({ attack, decay, sustain, release, pDecay }) {
    const output = new tone.MembraneSynth({
        envelope: {
            attack: attack,
            decay: decay,
            sustain: sustain,
            release: release,
            attackCurve: "exponential",
        },
        octaves: 10,
        pitchDecay: 0.5,
    });
    return output;
}

export default membraneSynth;
