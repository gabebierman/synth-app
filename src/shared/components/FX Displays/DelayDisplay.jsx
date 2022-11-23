import React from "react";

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
        <>
            <div>Display</div>
            <label htmlFor="time">Delay Time</label>
            <input
                type="range"
                id="time"
                min="0"
                max="2"
                step=".1"
                value={delayDelayTime}
                onChange={(e) => setDelayDelayTime(e.target.value)}
            ></input>
            <label htmlFor="feedback">Feedback</label>
            <input
                type="range"
                id="feedback"
                min=".001"
                max=".999"
                step=".01"
                value={delayFeedback}
                onChange={(e) => setDelayFeedback(e.target.value)}
            ></input>
            <label htmlFor="maxdelay">Max Delay</label>
            <input
                type="range"
                id="wet"
                min="1"
                max="180"
                step="1"
                value={delayMaxDelay}
                onChange={(e) => setDelayMaxDelay(e.target.value)}
            ></input>
            <label htmlFor="wet">Wet</label>
            <input
                type="range"
                id="wet"
                min=".001"
                max=".999"
                step=".01"
                value={delayWet}
                onChange={(e) => setDelayWet(e.target.value)}
            ></input>
        </>
    );
}

export default DelayDisplay;
