import React, { useState } from "react";
import amSynth from "../shared/components/functions/synths/AMSynth";
import * as tone from "tone";
import AMSynthOscSelect from "../shared/components/elements/AMSytthOscSelect";

function AMSynthDisplay() {
    const [detune, setDetune] = useState(50);
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0.001);
    const [release, setRelease] = useState(0);
    const [mAttack, setMAttack] = useState(0);
    const [mDecay, setMDecay] = useState(0);
    const [mSustain, setMSustian] = useState(0);
    const [mRelease, setMRelease] = useState(0);
    const [port, setPort] = useState(0);
    const [osc, setOsc] = useState("amsquare");
    const [modOsc, setModOsc] = useState("amsawtooth");

    const AMSYNTH = amSynth({
        detune,
        attack,
        decay,
        sustain,
        release,
        mAttack,
        mDecay,
        mSustain,
        mRelease,
        port,
        osc,
        modOsc,
    });

    return (
        <>
            <div>AMSynth</div>
            <button onClick={() => AMSYNTH.triggerAttackRelease("C2", "2n")}>AMSynth</button>
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
            <label htmlFor="mAttack">mAttack</label>
            <input
                type="range"
                id="mAttack"
                min="0"
                max="5"
                value={mAttack}
                onChange={(e) => setMAttack(e.target.value)}
            ></input>
            <label htmlFor="mDecay">mDecay</label>
            <input
                type="range"
                id="mDecay"
                min="0"
                max="5"
                value={mDecay}
                onChange={(e) => setMDecay(e.target.value)}
            ></input>
            <label htmlFor="mSustain">mSustain</label>
            <input
                type="range"
                id="mSustain"
                min=".0001"
                max=".9999"
                step=".01"
                value={mSustain}
                onChange={(e) => setMSustian(e.target.value)}
            ></input>
            <label htmlFor="mRelease">mRelease</label>
            <input
                type="range"
                id="mRelease"
                min="0"
                max="5"
                value={mRelease}
                onChange={(e) => setMRelease(e.target.value)}
            ></input>
            <label htmlFor="port">poratmento</label>
            <input
                type="range"
                id="port"
                value={port}
                onChange={(e) => setPort(e.target.value)}
            ></input>
            <label htmlFor="osc">osc type</label>
            <AMSynthOscSelect
                oscDisplay={true}
                setOsc={setOsc}
                value={osc}
                onChange={(e) => setOsc(e.target.value)}
            ></AMSynthOscSelect>
            <label htmlFor="modosc">modOsc type</label>
            <AMSynthOscSelect
                oscDisplay={false}
                setModOsc={setModOsc}
                value={modOsc}
                onChange={(e) => setModOsc(e.target.value)}
            ></AMSynthOscSelect>
        </>
    );
}

export default AMSynthDisplay;
