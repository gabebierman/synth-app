import React from "react";
import chorus from "../../functions/fx/Chorus";

function ChorusDisplay({ setChorusDelayTime, setChorusWet, chorusDelayTime, chorusWet }) {
    return (
        <>
            <div>Chorus Display</div>
            <label htmlFor="delaytime">Depth</label>
            <input
                type="range"
                id="delaytime"
                min="0"
                max="3"
                step=".25"
                value={chorusDelayTime}
                onChange={(e) => setChorusDelayTime(e.target.value)}
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
