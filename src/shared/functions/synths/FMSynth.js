import React from "react";
import * as tone from "tone";

/**
 * @param context  Base Cntext
 * @param detune  Cents 1-100
 * @param envelope  Omit<EnvelopeOptions,keyofToneAudioNodeOptions>
 * @param harmonicity  Positive Number
 * @param onsilence  onSilenceCallback
 * @param oscillator  OmniOscillatorSynthOptions
 * @param portamento  Seconds
 * @param volume  Decibels
 * */

function fmSynth({ detune, attack, decay, sustain, release, port, osc }) {
    const output = new tone.FMSynth({
        context: tone.context,
        detune: detune,
        envelope: {
            attack: attack,
            sustain: sustain,
            decay: decay,
            release: release,
        },
        oscillator: { type: osc },
        portamento: port,
    });
    return output;
}

export default fmSynth;
