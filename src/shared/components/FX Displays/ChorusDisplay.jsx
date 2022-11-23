import React from "react";
import chorus from "../../functions/fx/Chorus";

function ChorusDisplay({
    setChorusDelayTime,
    setChorusDepth,
    setChorusFreq,
    setChorusWet,
    chorusDelayTime,
    chorusDepth,
    chorusFreq,
    chorusWet,
}) {
    return (
        <>
            <div>Chorus</div>
            <label htmlFor="delaytime">Delay Time</label>
            <input
                type="range"
                id="delaytime"
                min="0"
                max="1000"
                step="1"
                value={chorusDelayTime}
                onChange={(e) => setChorusDelayTime(e.target.value)}
            ></input>
            <label htmlFor="depth">Depth</label>
            <input
                type="range"
                id="depth"
                min=".001"
                max=".999"
                step=".01"
                value={chorusDepth}
                onChange={(e) => setChorusDepth(e.target.value)}
            ></input>
            <label htmlFor="freq">Frequency</label>
            <input
                type="range"
                id="freq"
                min="0"
                max="1000"
                step="10"
                value={chorusFreq}
                onChange={(e) => setChorusFreq(e.target.value)}
            ></input>

            <label htmlFor="wet">Wet</label>
            <input
                type="range"
                id="wet"
                min=".001"
                max=".999"
                step=".01"
                value={chorusWet}
                onChange={(e) => setChorusWet(e.target.value)}
            ></input>
        </>
    );
}

export default ChorusDisplay;
