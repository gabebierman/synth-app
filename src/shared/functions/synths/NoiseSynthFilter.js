import * as tone from "tone";

function NoiseSynthFilter({ attack, decay, sustain, release }) {
    const filter = new tone.Filter({
        frequency: 11000,
    });

    const output = new tone.NoiseSynth({
        volume: 20,
        noise: {
            type: "pink",
            playbackRate: 3,
        },
        envelope: {
            attack: attack,
            decay: decay,
            sustain: sustain,
            release: release,
        },
    }).connect(filter.input);

    return output;
}

export default NoiseSynthFilter;
