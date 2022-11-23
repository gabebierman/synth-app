import React, { useState } from "react";
import reverb from "../../functions/fx/Reverb";

function ReverbDisplay({ setVerbDecay, setPredelay, setWet }) {
    return (
        <>
            <div>Reverb Display</div>
            <label htmlFor="decay">decay</label>
            <input
                type="range"
                id="decay"
                min="0"
                max="5"
                step=".1"
                onChange={(e) => setVerbDecay(e.target.value)}
            ></input>
            <label htmlFor="predelay">PreDelay</label>
            <input
                type="range"
                id="predelay"
                min="0"
                max="5"
                step=".1"
                onChange={(e) => setPredelay(e.target.value)}
            ></input>

            <label htmlFor="wet">Wet</label>
            <input
                type="range"
                id="wet"
                min=".001"
                max=".999"
                step=".01"
                onChange={(e) => setWet(e.target.value)}
            ></input>
        </>
    );
}

export default ReverbDisplay;
