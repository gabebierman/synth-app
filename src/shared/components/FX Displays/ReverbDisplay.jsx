import React from "react";

function ReverbDisplay() {
    return (
        <>
            <div>Display</div> <label htmlFor="wet">Wet</label>
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
