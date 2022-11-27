import React from "react";
import { Knob } from "primereact/knob";

function DistortionDisplay({
    setDistortionAmount,
    setDistortionWet,
    distortionAmount,
    distortionWet,
}) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Distortion</div>
            <div style={{ display: "flex" }}>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={5}
                        step={0.25}
                        value={distortionAmount}
                        onChange={(e) => setDistortionAmount(e.value)}
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
                        value={distortionWet}
                        onChange={(e) => setDistortionWet(e.value)}
                    ></Knob>
                </div>
            </div>
        </div>
    );
}

export default DistortionDisplay;
