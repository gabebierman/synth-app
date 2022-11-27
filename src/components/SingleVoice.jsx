import React, { useState, useCallback } from "react";
import * as tone from "tone";
import { Context } from "tone";
import ChorusDisplay from "../shared/components/FX Displays/ChorusDisplay";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import SequencerDisplay from "../shared/components/Sequencer Display/SequencerDisplay";
import MonoSynthDisplay from "../shared/components/Synth Displays/MonoSynthDisplay";
import chorus from "../shared/functions/fx/Chorus";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import monoSynth from "../shared/functions/synths/MonoSynth";
import { Knob } from "primereact/knob";
import { Button } from "@mui/material";

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
    const [chanVol, setChanVol] = useState(0);
    const [delayDelayTime, setDelayDelayTime] = useState(1);
    const [delayFeedback, setDelayFeedback] = useState(0);
    const [delayMaxDelay, setDelayMaxDelay] = useState(1);
    const [delayWet, setDelayWet] = useState(0);
    const [mute, setMute] = useState(false);

    const chan = new tone.Channel({ volume: chanVol }).toDestination();
    const delayModule = delay({
        delayDelayTime,
        delayFeedback,
        delayMaxDelay,
        delayWet,
    }).connect(chan.input);
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
            <div style={{ display: "flex" }}>
                <div>
                    <div>Synthesizer</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <label>Master Volume</label>
                            <Knob
                                min={-30}
                                max={30}
                                size={75}
                                value={chanVol}
                                textColor={"white"}
                                onChange={(e) => setChanVol(e.value)}
                            ></Knob>
                        </div>
                        {!mute && (
                            <Button
                                variant="outlined"
                                color="error"
                                id="mute"
                                onClick={() => (
                                    setChanVol(-1000), setMute((prevState) => !prevState)
                                )}
                            >
                                mute
                            </Button>
                        )}
                        {mute && (
                            <Button
                                variant="contained"
                                color="error"
                                id="mute"
                                onClick={() => (
                                    setChanVol(0), setMute((prevState) => !prevState)
                                )}
                            >
                                unmute
                            </Button>
                        )}
                    </div>
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
                    ></MonoSynthDisplay>
                    <div style={{ display: "flex" }}>
                        <DistortionDisplay
                            setDistortionAmount={setDistortionAmount}
                            setDistortionWet={setDistortionWet}
                            distortionAmount={distortionAmount}
                            distortionWet={distortionWet}
                        ></DistortionDisplay>
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
                </div>
                <SequencerDisplay synth={synthModule}></SequencerDisplay>
            </div>
        </>
    );
}

export default SingleVoiceDisplay;
