import * as tone from "tone";

function membraneSynth({
    detune,
    attack,
    decay,
    sustain,
    release,
    osc,
    pitchDecay,
    port,
    octaves,
}) {
    const output = new tone.MembraneSynth({
        detune: detune,
        octaves: octaves,
        envelope: { attack: attack, decay: decay, sustain: sustain, release: release },
        oscillator: `${osc}`,
        pitchDecay: pitchDecay,
        portamento: port,
    }).toDestination();
    return output;
}

export default membraneSynth;
