import * as tone from "tone";

function NoiseSynth({ attack, decay, sustain, release }) {
    const output = new tone.NoiseSynth({
        envelope: {
            attack: attack,
            decay: decay,
            sustain: sustain,
            release: release,
            attackCurve: "exponential",
        },
    });
    return output;
}

export default NoiseSynth;
