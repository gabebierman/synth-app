import React, { useState } from "react";
import * as tone from "tone";
import fmSynth from "../../functions/synths/FMSynth";
import FMSynthOscSelect from "../Select Displays/FMSynthOscSelect";

function FMSynthDisplay({ channel }) {
    const context = new tone.OfflineContext(1, 0.5, 44100);

    const [detune, setDetune] = useState(50);
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0.001);
    const [release, setRelease] = useState(0);
    const [port, setPort] = useState(0);
    const [osc, setOsc] = useState("fmsine");
    const synth = fmSynth({
        context,
        detune,
        attack,
        decay,
        sustain,
        release,
        port,
        osc,
    }).connect(channel.input);

    return (
        <>
            <div>FMSynth</div>
            <button onClick={() => synth.triggerAttackRelease("Bb1", "2n")}>FMSynth</button>
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
            <label htmlFor="sustain">sustain</label>
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
            <label htmlFor="port">poratmento</label>
            <input
                type="range"
                id="port"
                value={port}
                onChange={(e) => setPort(e.target.value)}
            ></input>
            <label htmlFor="osc">osc type</label>
            <FMSynthOscSelect
                setOsc={setOsc}
                value={osc}
                onChange={(e) => setOsc(e.target.value)}
            ></FMSynthOscSelect>
        </>
    );
}

export default FMSynthDisplay;
