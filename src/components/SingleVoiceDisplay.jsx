import React from "react";
import * as tone from "tone";
import ReverbDisplay from "../shared/components/FX Displays/ReverbDisplay";
import FMSynthDisplay from "../shared/components/Synth Displays/FMSynthDisplay";
import reverb from "../shared/functions/fx/Reverb";

function SingleVoiceDisplay() {
    const context = new tone.OfflineContext(1, 0.5, 44100);
    const channelOne = new tone.Channel().toDestination();
    const verb = reverb({
        decay: 3,
        preDelay: 0,
        wet: 0.999,
    });
    return (
        <div style={{ border: "1px solid black" }}>
            <div>SingleVoiceDisplay</div>
            <FMSynthDisplay channel={channelOne}></FMSynthDisplay>
            {/* <ReverbDisplay channel={channelOne}></ReverbDisplay> */}
        </div>
    );
}

export default SingleVoiceDisplay;
