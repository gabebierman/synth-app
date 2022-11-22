import React, { useState } from "react";

function FMSynthOscSelect({ setOsc, setModOsc, oscDisplay }) {
    return (
        <>
            {oscDisplay && (
                <div>
                    <select id="fmosc" onChange={(e) => setOsc(e.target.value)}>
                        <option value={"fmsine"}>Sine</option>
                        <option value={"fmsquare"}>Square</option>
                        <option value={"fmsawtooth"}>Sawtooth</option>
                        <option value={"fmtriangle"}>Tirangle</option>
                    </select>
                </div>
            )}
            {!oscDisplay && (
                <div>
                    <select id="fmmodosc" onChange={(e) => setModOsc(e.target.value)}>
                        <option value={"fmsine"}>Sine</option>
                        <option value={"fmsquare"}>Square</option>
                        <option value={"fmsawtooth"}>Sawtooth</option>
                        <option value={"fmtriangle"}>Tirangle</option>
                    </select>
                </div>
            )}
        </>
    );
}

export default FMSynthOscSelect;
