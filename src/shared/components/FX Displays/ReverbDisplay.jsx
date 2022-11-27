import React, { useState } from "react";
import { Knob } from "primereact/knob";

function ReverbDisplay({
    setVerbDecay,
    setVerbDelay,
    setVerbWet,
    verbDecay,
    verbDelay,
    verbWet,
}) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Reverb</div>
            <div style={{ display: "flex" }}>
                <div>
                    <label htmlFor="decay">Decay</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={5}
                        step={0.25}
                        value={verbDecay}
                        onChange={(e) => setVerbDecay(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="delay">Pre Delay</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={5}
                        step={0.25}
                        value={verbDelay}
                        onChange={(e) => setVerbDelay(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="wet">Wet</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0.001}
                        max={0.999}
                        step={0.05}
                        value={verbWet}
                        onChange={(e) => setVerbWet(e.value)}
                    ></Knob>
                </div>
            </div>
        </div>
    );
}

export default ReverbDisplay;
