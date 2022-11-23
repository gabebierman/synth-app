import React from "react";

function DistortionDisplay({ setDistortionAmount, setDistortionWet }) {
    return (
        <>
            <div>DistortionDisplay</div>
            <label htmlFor="amount">Distortion Amount</label>
            <input
                type="range"
                id="amount"
                min="0"
                max="10"
                step="1"
                onChange={(e) => setDistortionAmount(e.target.value)}
            ></input>
            <label htmlFor="wet">Wet</label>
            <input
                type="range"
                id="wet"
                min=".001"
                max=".999"
                step=".01"
                onChange={(e) => setDistortionWet(e.target.value)}
            ></input>
        </>
    );
}

export default DistortionDisplay;
