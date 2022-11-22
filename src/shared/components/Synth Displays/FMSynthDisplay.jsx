import React, { useState } from "react";
import fmSynth from "../shared/components/functions/synths/FMSynth";
import * as tone from "tone";
import FMSynthOscSelect from "../shared/components/elements/FMSynthOscSelect";

function FMSynthDisplay() {
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
    const [osc, setOsc] = useState("fmsine");
    const [modOsc, setModOsc] = useState("fmsine");
    const FMSYNTH = fmSynth({
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
            <div>FMSynth</div>
            <button
                onClick={() => (
                    FMSYNTH.triggerAttackRelease("G2", "2n"),
                    console.log(osc),
                    console.log(modOsc)
                )}
            >
                FMSynth
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
            <FMSynthOscSelect
                oscDisplay={true}
                setOsc={setOsc}
                value={osc}
                onChange={(e) => setOsc(e.target.value)}
            ></FMSynthOscSelect>
            <label htmlFor="modosc">modOsc type</label>
            <FMSynthOscSelect
                oscDisplay={false}
                setModOsc={setModOsc}
                value={modOsc}
                onChange={(e) => setModOsc(e.target.value)}
            ></FMSynthOscSelect>
        </>
    );
}

export default FMSynthDisplay;
