import React from "react";
import chorus from "../../functions/fx/Chorus";

function ChorusDisplay() {
    const Chorus = chorus({
        delaytime,
        depth,
        feedback,
        freq,
        spread,
        wet,
    });
    return (
        <>
            <div>Chorus</div>
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

export default ChorusDisplay;
