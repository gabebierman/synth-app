import React, { useState } from "react";
import kpSynth from "../shared/components/functions/synths/KPSynth";

function KPSynthDisplay() {
    const [attackNoise, setAttackNoise] = useState(1);
    const [dampening, setDampening] = useState(1);
    const [release, setRelease] = useState(1);
    const [reso, setReso] = useState(0.5);

    const KPSYNTH = kpSynth({
        attackNoise,
        dampening,
        release,
        reso,
    });
    return (
        <>
            <div>KPSynth</div>
            <button onClick={() => KPSYNTH.triggerAttackRelease("F2", "2n")}>KPSynth</button>
            <label htmlFor="attackNoise">attackNoise</label>
            <input
                type="range"
                id="attackNoise"
                min="0"
                max="5"
                value={attackNoise}
                onChange={(e) => setAttackNoise(e.target.value)}
            ></input>
            <label htmlFor="dampening">dampening</label>
            <input
                type="range"
                id="dampening"
                min="1"
                value={dampening}
                onChange={(e) => setDampening(e.target.value)}
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
            <label htmlFor="reso">reso</label>
            <input
                type="range"
                id="reso"
                min=".0001"
                max=".9999"
                step=".01"
                value={reso}
                onChange={(e) => setReso(e.target.value)}
            ></input>
        </>
    );
}

export default KPSynthDisplay;
