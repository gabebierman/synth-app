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
        detune: detune,
        envelope: { attack: attack, decay: decay, sustain: sustain, release: release },
        filter: {
            Q: q,
            fDetune: fDetune,
            frequency: frequency,
        },
        filterEnvelope: {
            baseFrequency: baseFreq,
            attack: fAttack,
            decay: fDecay,
            sustain: fSustain,
            release: fRelease,
        },
        oscillator: `${osc}`,
        portamento: port,
    }).toDestination();
    return output;
}

export default monoSynth;
