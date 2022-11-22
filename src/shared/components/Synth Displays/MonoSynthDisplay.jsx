import React, { useState } from "react";
import monoSynth from "../shared/components/functions/synths/MonoSynth";

function MonoSynthDisplay() {
    const [detune, setDetune] = useState(50);
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0.5);
    const [release, setRelease] = useState(0);
    const [q, setQ] = useState(1);
    const [fDetune, setFDetune] = useState(50);
    const [frequency, setFrequeny] = useState(100);
    const [baseFreq, setBaseFreq] = useState(100);
    const [fAttack, setFAttack] = useState(0);
    const [fDecay, setFDecay] = useState(0);
    const [fSustain, setFSustian] = useState(0);
    const [fRelease, setFRelease] = useState(0);
    const [port, setPort] = useState(0);
    const [osc, setOsc] = useState("");

    const MONOSYNTH = monoSynth({
        detune,
        attack,
        decay,
        sustain,
        release,
        q,
        fDetune,
        frequency,
        baseFreq,
        fAttack,
        fDecay,
        fSustain,
        fRelease,
        osc,
        port,
    });
    return (
        <>
            <div>MonoSynth</div>{" "}
            <button onClick={() => MONOSYNTH.triggerAttackRelease("E2", "2n")}>
                MonoSynth
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
            <label htmlFor="fAttack">fAttack</label>
            <input
                type="range"
                id="fAttack"
                min="0"
                max="5"
                value={fAttack}
                onChange={(e) => setFAttack(e.target.value)}
            ></input>
            <label htmlFor="q">q</label>
            <input
                type="range"
                id="q"
                min="0"
                max="9"
                value={q}
                onChange={(e) => setQ(e.target.value)}
            ></input>
            <label htmlFor="fDetune">fDetune</label>
            <input
                type="range"
                id="fDetune"
                min="0"
                max="100"
                value={fDetune}
                onChange={(e) => setFDetune(e.target.value)}
            ></input>
            <label htmlFor="frequency">frequency</label>
            <input
                type="range"
                id="frequency"
                min="0"
                max="20000"
                step="10"
                value={frequency}
                onChange={(e) => setFrequeny(e.target.value)}
            ></input>
            <label htmlFor="baseFreq">baseFreq</label>
            <input
                type="range"
                id="baseFreq"
                min="0"
                max="20000"
                step="10"
                value={baseFreq}
                onChange={(e) => setBaseFreq(e.target.value)}
            ></input>
            <label htmlFor="fDecay">fDecay</label>
            <input
                type="range"
                id="fDecay"
                min="0"
                max="5"
                value={fDecay}
                onChange={(e) => setFDecay(e.target.value)}
            ></input>
            <label htmlFor="fSustain">fSustain</label>
            <input
                type="range"
                id="fSustain"
                min=".0001"
                max=".9999"
                step=".01"
                value={fSustain}
                onChange={(e) => setFSustian(e.target.value)}
            ></input>
            <label htmlFor="fRelease">fRelease</label>
            <input
                type="range"
                id="fRelease"
                min="0"
                max="5"
                value={fRelease}
                onChange={(e) => setFRelease(e.target.value)}
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

export default MonoSynthDisplay;
