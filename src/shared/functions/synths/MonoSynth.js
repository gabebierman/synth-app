import * as tone from "tone";

function monoSynth({ attack, decay, sustain, release, osc }) {
    const output = new tone.MonoSynth({
        envelope: { attack: attack, decay: decay, sustain: sustain, release: release },
        oscillator: { type: osc },
    });
    return output;
}

export default monoSynth;
