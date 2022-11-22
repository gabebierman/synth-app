import React, { useState } from "react";

function AMSynthOscSelect({ setOsc, setModOsc, oscDisplay }) {
    return (
        <>
            {oscDisplay && (
                <div>
                    <select id="amosc" onChange={(e) => setOsc(e.target.value)}>
                        <option value={"amsine"}>Sine</option>
                        <option value={"amsquare"}>Square</option>
                        <option value={"amsawtooth"}>Sawtooth</option>
                        <option value={"amtriangle"}>Tirangle</option>
                    </select>
                </div>
            )}
            {!oscDisplay && (
                <div>
                    <select id="ammodosc" onChange={(e) => setModOsc(e.target.value)}>
                        <option value={"amsine"}>Sine</option>
                        <option value={"amsquare"}>Square</option>
                        <option value={"amsawtooth"}>Sawtooth</option>
                        <option value={"amtriangle"}>Tirangle</option>
                    </select>
                </div>
            )}
        </>
    );
}

export default AMSynthOscSelect;
