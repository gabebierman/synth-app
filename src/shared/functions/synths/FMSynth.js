import React from "react";
import * as tone from "tone";

/**
 * @param context  Base Cntext
 * @param detune  Cents 1-100
 * @param envelope  Omit<EnvelopeOptions,keyofToneAudioNodeOptions>
 * @param harmonicity  Positive Number
 * @param modulation  OmniOscillatorSynthOptions
 * @param modulationEnvelope  ADSR
 * @param modulationIndex Positive Number
 * @param onsilence  onSilenceCallback
 * @param oscillator  OmniOscillatorSynthOptions
 * @param portamento  Seconds
 * @param volume  Decibels
 * */

function fmSynth({
    detune,
    attack,
    decay,
    sustain,
    release,
    mAttack,
    mDecay,
    mSustain,
    mRelease,
    port,
    osc,
    modOsc,
}) {
    const output = new tone.FMSynth({
        detune: detune,
        envelope: {
            attack: attack,
            sustain: sustain,
            decay: decay,
            release: release,
        },
        modulation: { type: modOsc },
        modulationEnvelope: {
            attack: mAttack,
            sustain: mSustain,
            decay: mDecay,
            release: mRelease,
        },
        oscillator: { type: osc },
        portamento: port,
    }).toDestination();
    return output;
}

export default fmSynth;
