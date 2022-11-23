import React, { useState } from "react";

function FMSynthOscSelect({ setOsc }) {
    return (
        <>
            <div>
                <select id="fmosc" onChange={(e) => setOsc(e.target.value)}>
                    <option value={"fmsine"}>Sine</option>
                    <option value={"fmsquare"}>Square</option>
                    <option value={"fmsawtooth"}>Sawtooth</option>
                    <option value={"fmtriangle"}>Triangle</option>
                </select>
            </div>
        </>
    );
}

export default FMSynthOscSelect;
