import React, { useState } from "react";
import reverb from "../../functions/fx/Reverb";

function ReverbDisplay({}) {
    const [wet, setWet] = useState(0);
    const REVERB = reverb({
        wet,
    });
    return (
        <>
            <div>Reverb Display</div> <label htmlFor="wet">Wet</label>
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

export default ReverbDisplay;
