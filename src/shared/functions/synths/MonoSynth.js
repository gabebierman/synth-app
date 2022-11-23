import * as tone from "tone";

function monoSynth({
    detune,
    attack,
    decay,
    sustain,
    release,
    q,
    fDetune,
    frequency,
    baseFreq,
    fAttack,
    fDecay,
    fSustain,
    fRelease,
    osc,
    port,
}) {
    const output = new tone.MonoSynth({
        envelope: { attack: attack, decay: decay, sustain: sustain, release: release },
        osc: osc,
    }).toDestination();
    return output;
}

export default monoSynth;
