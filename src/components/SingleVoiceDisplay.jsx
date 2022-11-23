import React, { useState } from "react";
import * as tone from "tone";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import ReverbDisplay from "../shared/components/FX Displays/ReverbDisplay";
import FMSynthDisplay from "../shared/components/Synth Displays/FMSynthDisplay";
import distortion from "../shared/functions/fx/Distortion";
import reverb from "../shared/functions/fx/Reverb";
import fmSynth from "../shared/functions/synths/FMSynth";

// const context = new tone.OfflineContext(2, 44100 * 40, 44100);

function SingleVoiceDisplay() {
    const [detune, setDetune] = useState(50);
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0.001);
    const [release, setRelease] = useState(0);
    const [port, setPort] = useState(0);
    const [osc, setOsc] = useState("fmsine");
    const [distortionAmount, setDistortionAmount] = useState(0);
    const [distortionWet, setDistortionWet] = useState(0);
    const [chanVol, setChanVol] = useState(0);
    const chan = new tone.Channel({ volume: chanVol }).toDestination();
    const distortionModule = distortion({ distortionAmount, distortionWet }).connect(
        chan.input
    );
    const synth = fmSynth({
        detune,
        attack,
        decay,
        sustain,
        release,
        port,
        osc,
    }).connect(chan.input);
    return (
        <div style={{ border: "1px solid black" }}>
            <div>SingleVoiceDisplay</div>
            <label>chan vol</label>
            <input
                type="range"
                min="-30"
                max="30"
                value={chanVol}
                onChange={(e) => setChanVol(e.target.value)}
            ></input>
            <FMSynthDisplay
                setDetune={setDetune}
                setAttack={setAttack}
                setDecay={setDecay}
                setSustain={setSustain}
                setRelease={setRelease}
                setPort={setPort}
                setOsc={setOsc}
                synth={synth}
            ></FMSynthDisplay>
            <DistortionDisplay
                setDistortionAmount={setDistortionAmount}
                setDistortionWet={setDistortionWet}
            ></DistortionDisplay>
        </div>
    );
}

export default SingleVoiceDisplay;
