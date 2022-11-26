import React, { useState } from "react";
import * as tone from "tone";
import ChorusDisplay from "../shared/components/FX Displays/ChorusDisplay";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import KickSequencerDisplay from "../shared/components/Sequencer Display/KickSequencerDisplay";
import MembraneSynthDisplay from "../shared/components/Synth Displays/MembraneSynthDisplay";
import chorus from "../shared/functions/fx/Chorus";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import membraneSynth from "../shared/functions/synths/MembraneSynth";

function Kick() {
    const [attack, setAttack] = useState(0.001);
    const [decay, setDecay] = useState(0.4);
    const [sustain, setSustain] = useState(0.01);
    const [release, setRelease] = useState(1.4);
    const [pitchDecay, setPitchDecay] = useState(0.05);
    const [distortionAmount, setDistortionAmount] = useState(0);
    const [distortionWet, setDistortionWet] = useState(0);
    const [chorusDelayTime, setChorusDelayTime] = useState(0);
    const [chorusWet, setChorusWet] = useState(0);
    const [chanVol, setChanVol] = useState(0);
    const [delayDelayTime, setDelayDelayTime] = useState(1);
    const [delayFeedback, setDelayFeedback] = useState(0);
    const [delayMaxDelay, setDelayMaxDelay] = useState(1);
    const [delayWet, setDelayWet] = useState(0);

    const chan = new tone.Channel({ volume: chanVol }).toDestination();
    const chorusModule = chorus({
        chorusDelayTime,
        chorusWet,
    }).connect(chan.input);
    const delayModule = delay({
        delayDelayTime,
        delayFeedback,
        delayMaxDelay,
        delayWet,
    }).connect(chorusModule.input);
    const distortionModule = distortion({ distortionAmount, distortionWet }).connect(
        delayModule.input
    );
    const synthModule = membraneSynth({
        attack,
        decay,
        sustain,
        release,
        pitchDecay,
    }).toDestination();

    return (
        <>
            <div>Kick</div>
            <label>chan vol</label>
            <input
                type="range"
                min="-30"
                max="30"
                value={chanVol}
                onChange={(e) => setChanVol(e.target.value)}
            ></input>
            <label htmlFor="mute">Mute</label>
            <button id="mue" onClick={() => setChanVol(-1000)}>
                mute
            </button>

            <MembraneSynthDisplay
                setPitchDecay={setPitchDecay}
                setAttack={setAttack}
                setDecay={setDecay}
                setSustain={setSustain}
                setRelease={setRelease}
                pitchDecay={pitchDecay}
                synth={synthModule}
                attack={attack}
                decay={decay}
                sustain={sustain}
                release={release}
            ></MembraneSynthDisplay>
            <DistortionDisplay
                setDistortionAmount={setDistortionAmount}
                setDistortionWet={setDistortionWet}
                distortionAmount={distortionAmount}
                distortionWet={distortionWet}
            ></DistortionDisplay>
            <ChorusDisplay
                setChorusDelayTime={setChorusDelayTime}
                setChorusWet={setChorusWet}
                chorusDelayTime={chorusDelayTime}
                chorusWet={chorusWet}
            ></ChorusDisplay>
            <DelayDisplay
                delayDelayTime={delayDelayTime}
                setDelayDelayTime={setDelayDelayTime}
                delayFeedback={delayFeedback}
                setDelayFeedback={setDelayFeedback}
                delayMaxDelay={delayMaxDelay}
                setDelayMaxDelay={setDelayMaxDelay}
                delayWet={delayWet}
                setDelayWet={setDelayWet}
            ></DelayDisplay>
            <KickSequencerDisplay synth={synthModule}></KickSequencerDisplay>
        </>
    );
}

export default Kick;