import React, { useState } from "react";
import MonoSynthOscSelect from "../Select Displays/MonoSynthOscSelect";
import { Knob } from "primereact/knob";

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
            <MonoSynthOscSelect value={osc} setOsc={setOsc}></MonoSynthOscSelect>
            <div>ADSR</div>
            <div style={{ display: "flex" }}>
                <div>
                    <label htmlFor="attack">attack</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={2}
                        step={0.25}
                        value={attack}
                        onChange={(e) => setAttack(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="decay">decay</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={5}
                        step={0.25}
                        value={decay}
                        onChange={(e) => setDecay(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="sustian">sustain</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0.001}
                        max={0.999}
                        step={0.05}
                        value={sustain}
                        onChange={(e) => setSustain(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="release">release</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={5}
                        step={0.25}
                        value={release}
                        onChange={(e) => setRelease(e.value)}
                    ></Knob>
                </div>
            </div>
        </>
    );
}

export default MonoSynthDisplay;
