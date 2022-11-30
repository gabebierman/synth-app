import React, { useState } from "react";
import * as tone from "tone";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import HiHatSeqeuncerDisplay from "../shared/components/Sequencer Display/HiHatSequencerDisplay";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import NoiseSynth from "../shared/functions/synths/NoiseSynth";
import { Knob } from "primereact/knob";
import { Button } from "@mui/material";
import NoiseSynthDisplay from "../shared/components/Synth Displays/NoiseSynthDisplay";
import { useHatContext } from "../shared/context/HatContext";
import { useUserContext } from "../shared/context/UserContext";
import { v4 as uuidv4 } from "uuid";
import { ModuleDiv } from "../shared/styled/ModuleDiv";

function Hat() {
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0.1);
    const [sustain, setSustain] = useState(0);
    const [release, setRelease] = useState(0);
    const [distortionAmount, setDistortionAmount] = useState(0);
    const [distortionWet, setDistortionWet] = useState(0);
    const [chanVol, setChanVol] = useState(0);
    const [delayDelayTime, setDelayDelayTime] = useState(1);
    const [delayFeedback, setDelayFeedback] = useState(0);
    const [delayMaxDelay, setDelayMaxDelay] = useState(1);
    const [delayWet, setDelayWet] = useState(0);
    const [mute, setMute] = useState(false);
    const { hats, addHat } = useHatContext();
    const { user } = useUserContext();
    const [module_id, setModuleID] = useState(uuidv4());
    const name = "test";
    const uuid = user?.user.id;

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
    const synthModule = NoiseSynth({
        attack,
        decay,
        sustain,
        release,
    }).connect(distortionModule.input);

    return (
        <>
            <ModuleDiv>
                <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
                    <div>Hi Hat</div>

                    {/* <Button
                        variant="contained"
                        onClick={() => {
                            addHat({
                                module_id,
                                attack,
                                decay,
                                sustain,
                                release,
                                // osc,
                                distortionAmount,
                                distortionWet,
                                chanVol,
                                delayDelayTime,
                                delayFeedback,
                                delayMaxDelay,
                                delayWet,
                                name,
                                uuid,
                                // pattern,
                            });
                        }}
                    >
                        Add channel to favorites
                        <br></br>
                        (does not save sequences)
                    </Button> */}
                    <ModuleDiv>
                        <div>
                            <label>Volume</label>
                            <Knob
                                min={-30}
                                max={30}
                                size={50}
                                value={chanVol}
                                textColor={"white"}
                                onChange={(e) => setChanVol(e.value)}
                            ></Knob>

                            {!mute && (
                                <Button
                                    variant="outlined"
                                    color="error"
                                    id="mute"
                                    size="small"
                                    style={{ maxHeight: "50px" }}
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
                                    size="small"
                                    style={{ maxHeight: "50px" }}
                                    onClick={() => (
                                        setChanVol(0), setMute((prevState) => !prevState)
                                    )}
                                >
                                    unmute
                                </Button>
                            )}
                        </div>

                        <NoiseSynthDisplay
                            setAttack={setAttack}
                            setDecay={setDecay}
                            setSustain={setSustain}
                            setRelease={setRelease}
                            synth={synthModule}
                            attack={attack}
                            decay={decay}
                            sustain={sustain}
                            release={release}
                        ></NoiseSynthDisplay>
                    </ModuleDiv>

                    <div style={{ display: "flex", flexDirection: "column" }}>
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
                    <HiHatSeqeuncerDisplay synth={synthModule}></HiHatSeqeuncerDisplay>
                </div>
            </ModuleDiv>
        </>
    );
}

export default Hat;
