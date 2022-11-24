import React, { useState } from "react";
import MonoSynthOscSelect from "../Select Displays/MonoSynthOscSelect";

function MonoSynthDisplay({
    attack,
    setAttack,
    decay,
    setDecay,
    sustain,
    setSustain,
    release,
    setRelease,
    synth,
    osc,
    setOsc,
}) {
    return (
        <>
            <div>MonoSynth</div> <label htmlFor="attack">attack</label>
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
                min=".001"
                max=".999"
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
            <MonoSynthOscSelect value={osc} setOsc={setOsc}></MonoSynthOscSelect>
        </>
    );
}

export default MonoSynthDisplay;
