import React from "react";
import { Knob } from "primereact/knob";
import { KnobDiv } from "../../styled/KnobDiv";
import { ModuleDiv } from "../../styled/ModuleDiv";

function DistortionDisplay({
    setDistortionAmount,
    setDistortionWet,
    distortionAmount,
    distortionWet,
}) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Distortion</div>
            <ModuleDiv>
                <KnobDiv>
                    <label htmlFor="amount">Amount</label>
                    <Knob
                        textColor={"white"}
                        size={50}
                        min={0}
                        max={5}
                        step={0.25}
                        value={distortionAmount}
                        onChange={(e) => setDistortionAmount(e.value)}
                    ></Knob>
                </KnobDiv>
                <KnobDiv>
                    <label htmlFor="wet">Wet</label>
                    <Knob
                        textColor={"white"}
                        size={50}
                        min={0.001}
                        max={0.999}
                        step={0.05}
                        value={distortionWet}
                        onChange={(e) => setDistortionWet(e.value)}
                    ></Knob>
                </KnobDiv>
            </ModuleDiv>
        </div>
    );
}

export default DistortionDisplay;
