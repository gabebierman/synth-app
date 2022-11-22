import React from "react";
import BitCrusher from "../../functions/fx/BitCrusher";

function BitCrusherDisplay() {
    const bitCrusher = BitCrusher({ bits, wet });
    const [bits, setBits] = useState(0);
    const [wet, setWet] = useState(0);
    return (
        <>
            <div>BitCrusher</div>
            <label htmlFor="bits">Bits</label>
            <input
                type="range"
                id="bits"
                min="0"
                max="16"
                value={bits}
                onChange={(e) => setBits(e.target.value)}
            ></input>
            <label htmlFor="wet">Wet</label>
            <input
                type="range"
                id="wet"
                min=".001"
                max=".999"
                step=".01"
                value={wet}
                onChange={(e) => setWet(e.target.value)}
            ></input>
        </>
    );
}

export default BitCrusherDisplay;
