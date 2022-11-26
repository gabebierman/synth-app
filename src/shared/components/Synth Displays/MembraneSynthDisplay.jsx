import React, { useState } from "react";
// import membraneSynth from "../shared/components/functions/synths/MembraneSynth";

function MembraneSynthDisplay({
    setAttack,
    setDecay,
    setSustain,
    setRelease,
    setPitchDecay,
    attack,
    decay,
    sustain,
    release,
    pitchDecay,
}) {
    return (
        <>
            <div>MembraneSynth</div>{" "}
            {/* <button onClick={() => MEMEBRANESYNTH.triggerAttackRelease("F2", "2n")}>
                MembraneSynth
            </button> */}
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
            <label htmlFor="pichdecay">pitch decay</label>
            <input
                type="range"
                id="release"
                min="0"
                max="5"
                value={pitchDecay}
                onChange={(e) => setPitchDecay(e.target.value)}
            ></input>
        </>
    );
}

export default MembraneSynthDisplay;
