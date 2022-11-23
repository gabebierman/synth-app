import React, { useState } from "react";

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
}) {
    return (
        <>
            <div>MonoSynth</div>{" "}
            <button onClick={() => synth.triggerAttackRelease("E2", "2n")}>MonoSynth</button>
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
            <label htmlFor="osc">osc type</label>
            <input type="select" id="osc" value={osc}></input>
        </>
    );
}

export default MonoSynthDisplay;
