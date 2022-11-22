import React, { useState } from "react";
import membraneSynth from "../shared/components/functions/synths/MembraneSynth";

function MembraneSynthDisplay() {
    const [detune, setDetune] = useState(50);
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0.5);
    const [release, setRelease] = useState(0);
    const [pitchDecay, setPitchDecay] = useState(0);
    const [octaves, setOctaves] = useState(1);
    const [port, setPort] = useState(0);
    const [osc, setOsc] = useState("fmsquare");

    const MEMEBRANESYNTH = membraneSynth({
        detune,
        attack,
        decay,
        sustain,
        release,
        pitchDecay,
        octaves,
        osc,
        port,
    });
    return (
        <>
            <div>MembraneSynth</div>{" "}
            <button onClick={() => MEMEBRANESYNTH.triggerAttackRelease("F2", "2n")}>
                MembraneSynth
            </button>
            <label htmlFor="detune">detune</label>
            <input
                type="range"
                id="detune"
                min="0"
                max="100"
                value={detune}
                onChange={(e) => setDetune(e.target.value)}
            ></input>
            <label htmlFor="attack">attack</label>
            <input
                type="range"
                id="attack"
                min="0"
                max="5"
                value={attack}
                onChange={(e) => setAttack(e.target.value)}
            ></input>
            <label htmlFor="decay">decay</label>
            <input
                type="range"
                id="decay"
                min="0"
                max="5"
                value={decay}
                onChange={(e) => setDecay(e.target.value)}
            ></input>
            <label htmlFor="sustian">sustain</label>
            <input
                type="range"
                min=".0001"
                max=".9999"
                step=".01"
                id="sustain"
                value={sustain}
                onChange={(e) => setSustain(e.target.value)}
            ></input>
            <label htmlFor="release">release</label>
            <input
                type="range"
                id="release"
                min="0"
                max="5"
                value={release}
                onChange={(e) => setRelease(e.target.value)}
            ></input>
            <label htmlFor="pitchDecay">pitchDecay</label>
            <input
                type="range"
                id="pitchDecay"
                min="0"
                max="5"
                value={pitchDecay}
                onChange={(e) => setPitchDecay(e.target.value)}
            ></input>
            <label htmlFor="port">poratmento</label>
            <input
                type="range"
                id="port"
                value={port}
                onChange={(e) => setPort(e.target.value)}
            ></input>
            <label htmlFor="osc">osc type</label>
            <input
                type="select"
                id="osc"
                value={osc}
                onChange={(e) => setOsc(e.target.value)}
            ></input>
        </>
    );
}

export default MembraneSynthDisplay;
