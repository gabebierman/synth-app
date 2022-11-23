import React from "react";
import FMSynthOscSelect from "../Select Displays/FMSynthOscSelect";

function FMSynthDisplay({
    setDetune,
    setAttack,
    setDecay,
    setSustain,
    setRelease,
    setPort,
    setOsc,
    detune,
    attack,
    decay,
    sustain,
    release,
    port,
    osc,
    synth,
}) {
    return (
        <>
            <div>FMSynth</div>
            <button onClick={() => synth.triggerAttackRelease("Bb1", "2n")}>FMSynth</button>
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
                value={sustain}
                id="sustain"
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
                min="0"
                max="5"
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
