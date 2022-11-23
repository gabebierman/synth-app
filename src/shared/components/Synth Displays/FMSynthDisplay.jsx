import React, { useState } from "react";
import FMSynthOscSelect from "../Select Displays/FMSynthOscSelect";

function FMSynthDisplay({
    setDetune,
    setAttack,
    setDecay,
    setSustain,
    setRelease,
    setPort,
    setOsc,
    osc,
    synth,
}) {
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
                onChange={(e) => setDetune(e.target.value)}
            ></input>
            <label htmlFor="attack">attack</label>
            <input
                type="range"
                id="attack"
                min="0"
                max="5"
                onChange={(e) => setAttack(e.target.value)}
            ></input>
            <label htmlFor="decay">decay</label>
            <input
                type="range"
                id="decay"
                min="0"
                max="5"
                onChange={(e) => setDecay(e.target.value)}
            ></input>
            <label htmlFor="sustain">sustain</label>
            <input
                type="range"
                min=".0001"
                max=".9999"
                step=".01"
                id="sustain"
                onChange={(e) => setSustain(e.target.value)}
            ></input>
            <label htmlFor="release">release</label>
            <input
                type="range"
                id="release"
                min="0"
                max="5"
                onChange={(e) => setRelease(e.target.value)}
            ></input>
            <label htmlFor="port">poratmento</label>
            <input type="range" id="port" onChange={(e) => setPort(e.target.value)}></input>
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
