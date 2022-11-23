import React, { useState } from "react";
import * as tone from "tone";
import ChorusDisplay from "../shared/components/FX Displays/ChorusDisplay";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import NoteSelectDisplay from "../shared/components/NoteSelectDisplay";
import SequencerDisplay from "../shared/components/Sequencer Display/SequencerDisplay";
import MonoSynthDisplay from "../shared/components/Synth Displays/MonoSynthDisplay";
import chorus from "../shared/functions/fx/Chorus";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import monoSynth from "../shared/functions/synths/MonoSynth";

function SingleVoiceDisplay() {
    const [detune, setDetune] = useState(50);
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0.001);
    const [release, setRelease] = useState(0);
    const [port, setPort] = useState(0);
    const [osc, setOsc] = useState("sine");
    const [distortionAmount, setDistortionAmount] = useState(0);
    const [distortionWet, setDistortionWet] = useState(0);
    const [chorusDelayTime, setChorusDelayTime] = useState(0);
    const [chorusDepth, setChorusDepth] = useState(0);
    const [chorusFreq, setChorusFreq] = useState(0);
    const [chorusWet, setChorusWet] = useState(0);
    const [chanVol, setChanVol] = useState(0);
    const [delayDelayTime, setDelayDelayTime] = useState(1);
    const [delayFeedback, setDelayFeedback] = useState(0);
    const [delayMaxDelay, setDelayMaxDelay] = useState(1);
    const [delayWet, setDelayWet] = useState(0);
    const toggle = useCallback(() => {
        tone.Transport.toggle();
    }, []);

    const chan = new tone.Channel({ volume: chanVol }).toDestination();
    const chorusModule = chorus({
        chorusDelayTime,
        chorusDepth,
        chorusFreq,
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
    const synthModule = monoSynth({
        detune,
        attack,
        decay,
        sustain,
        release,
        port,
        osc,
    }).connect(distortionModule.input);
    return (
        <>
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
                <label htmlFor="mute">Mute</label>
                <button id="mue" onClick={() => setChanVol(-1000)}>
                    mute
                </button>
                <MonoSynthDisplay
                    setDetune={setDetune}
                    setAttack={setAttack}
                    setDecay={setDecay}
                    setSustain={setSustain}
                    setRelease={setRelease}
                    setPort={setPort}
                    setOsc={setOsc}
                    synth={synthModule}
                    attack={attack}
                    decay={decay}
                    sustain={sustain}
                    release={release}
                    note={note}
                    octave={octave}
                ></MonoSynthDisplay>
                <DistortionDisplay
                    setDistortionAmount={setDistortionAmount}
                    setDistortionWet={setDistortionWet}
                    distortionAmount={distortionAmount}
                    distortionWet={distortionWet}
                ></DistortionDisplay>
                <ChorusDisplay
                    setChorusDelayTime={setChorusDelayTime}
                    setChorusDepth={setChorusDepth}
                    setChorusFreq={setChorusFreq}
                    setChorusWet={setChorusWet}
                    chorusDelayTime={chorusDelayTime}
                    chorusDepth={chorusDepth}
                    chorusFreq={chorusFreq}
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
            </div>
            <SequencerDisplay synth={synthModule}></SequencerDisplay>
        </>
    );
}

export default SingleVoiceDisplay;
