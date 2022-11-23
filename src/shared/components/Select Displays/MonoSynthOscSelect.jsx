import React from "react";

//possible that these need to be defined am/fm/fat osc types, need to look into base osc types with wifi

function MonoSynthOscSelect({ setOsc }) {
    return (
        <>
            <select id="osc" onChange={(e) => setOsc(e.target.value)}>
                <option value={"sine"}>Sine</option>
                <option value={"square"}>Square</option>
                <option value={"sawtooth"}>Sawtooth</option>
                <option value={"triangle"}>Tirangle</option>
            </select>
        </>
    );
}

export default MonoSynthOscSelect;
