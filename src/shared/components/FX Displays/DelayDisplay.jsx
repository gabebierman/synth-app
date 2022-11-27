import React from "react";
import { Knob } from "primereact/knob";

function DelayDisplay({
    delayDelayTime,
    delayFeedback,
    delayMaxDelay,
    delayWet,
    setDelayDelayTime,
    setDelayFeedback,
    setDelayMaxDelay,
    setDelayWet,
}) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Delay</div>
            <div style={{ display: "flex" }}>
                <div>
                    <label htmlFor="time">Delay Time</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0}
                        max={2}
                        step={0.1}
                        value={delayDelayTime}
                        onChange={(e) => setDelayDelayTime(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0.001}
                        max={0.999}
                        step={0.05}
                        value={delayFeedback}
                        onChange={(e) => setDelayFeedback(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="maxdelay">Max Delay</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={1}
                        max={10}
                        value={delayMaxDelay}
                        onChange={(e) => setDelayMaxDelay(e.value)}
                    ></Knob>
                </div>
                <div>
                    <label htmlFor="wet">Wet</label>
                    <Knob
                        textColor={"white"}
                        size={75}
                        min={0.001}
                        max={0.998}
                        step={0.05}
                        value={delayWet}
                        onChange={(e) => setDelayWet(e.value)}
                    ></Knob>
                </div>
            </div>
        </div>
    );
}

export default DelayDisplay;
