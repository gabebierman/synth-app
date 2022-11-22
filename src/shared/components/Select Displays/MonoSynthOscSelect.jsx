import React from "react";

//possible that these need to be defined am/fm/fat osc types, need to look into base osc types with wifi

function MonoSynthOscSelect() {
    const [osc, setOsc] = useState("amsine");
    return (
        <div>
            <select id="amosc" onChange={(e) => setOsc(e.target.value)} value={osc}>
                {/* <option value={"amsine"}>Sine</option>
                <option value={"amsqure"}>Square</option>
                <option value={"amsawtooth"}>Sawtooth</option>
                <option value={"amtriangle"}>Tirangle</option> */}
            </select>
        </div>
    );
}

export default MonoSynthOscSelect;
