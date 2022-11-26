import * as tone from "tone";

function membraneSynth({ detune, attack, decay, sustain, release, pitchDecay }) {
    const output = new tone.MembraneSynth({
        envelope: {
            attack: attack,
            decay: decay,
            sustain: sustain,
            release: release,
            attackCurve: "exponential",
        },
        octaves: 10,
        pitchDecay: pitchDecay,
    });
    return output;
}

export default membraneSynth;
