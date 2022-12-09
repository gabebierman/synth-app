import React, { useEffect, useRef, useState } from "react";
import * as tone from "tone";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import KickSequencerDisplay from "../shared/components/Sequencer Display/KickSequencerDisplay";
import MembraneSynthDisplay from "../shared/components/Synth Displays/MembraneSynthDisplay";
import { Knob } from "primereact/knob";
import { Button, Input, MenuItem, Select } from "@mui/material";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import membraneSynth from "../shared/functions/synths/MembraneSynth";
import { useKickContext } from "../shared/context/KickContext";
import { useUserContext } from "../shared/context/UserContext";
import { v4 as uuidv4 } from "uuid";
import { ModuleDiv } from "../shared/styled/ModuleDiv";

function Kick() {
    const [attack, setAttack] = useState(0.001);
    const [decay, setDecay] = useState(0.4);
    const [sustain, setSustain] = useState(0.01);
    const [release, setRelease] = useState(1.4);
    const [pitchDecay, setPitchDecay] = useState(0.05);
    const [distortionAmount, setDistortionAmount] = useState(0);
    const [distortionWet, setDistortionWet] = useState(0);
    const [chanVol, setChanVol] = useState(0);
    const [delayDelayTime, setDelayDelayTime] = useState(1);
    const [delayFeedback, setDelayFeedback] = useState(0);
    const [delayMaxDelay, setDelayMaxDelay] = useState(1);
    const [delayWet, setDelayWet] = useState(0);
    const [mute, setMute] = useState(false);
    const { kicks, addKick } = useKickContext();
    const { user } = useUserContext();
    const [module_id, setModuleID] = useState(uuidv4());
    const [preset, setPreset] = useState({});
    const [name, setName] = useState("You forgot to set a name for your preset");

    const uuid = user?.user.id;

    const ref = useRef(false);

    useEffect(() => {
        //set params pulled from favorite
        let params = user?.favorites.synth.find((e) => e.module_id === preset);
        if (ref.current) {
            setAttack(params?.attack);
            setDecay(params?.decay);
            setSustain(params?.sustain);
            setRelease(params?.release);
            setDistortionAmount(params?.distortionAmount);
            setDistortionWet(params?.distortionWet);
            setChanVol(params?.chanVol);
            setDelayDelayTime(params?.delayDelayTime);
            setDelayFeedback(params?.delayFeedback);
            setDelayMaxDelay(params?.delayMaxDelay);
            setDelayWet(params?.delayWet);
        } else ref.current = true;
    }, [preset]);

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
    const synthModule = membraneSynth({
        attack,
        decay,
        sustain,
        release,
        pitchDecay,
    }).connect(distortionModule.input);

    return (
        <>
            <ModuleDiv>
                <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>Kick</div>
                        {user && (
                            <>
                                <Input
                                    placeholder="preset name"
                                    size="small"
                                    onChange={(e) => setName(e.target.value)}
                                ></Input>
                                <Button
                                    style={{ fontSize: "10px", maxHeight: "50px" }}
                                    size="small"
                                    variant="contained"
                                    onClick={() => {
                                        addKick({
                                            module_id,
                                            attack,
                                            decay,
                                            sustain,
                                            release,
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
                                    save module to presets
                                </Button>{" "}
                            </>
                        )}
                    </div>

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
                    <KickSequencerDisplay synth={synthModule}></KickSequencerDisplay>
                    {user && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                                justifyItems: "center",
                                alignItems: "center",
                                margin: "20px 0px 0px 0px",
                            }}
                        >
                            <div style={{ margin: "0px 20px" }}>Select a preset to load</div>
                            <Select
                                style={{ minWidth: "100px" }}
                                onChange={(e) => setPreset(e.target.value)}
                            >
                                <MenuItem disabled value=""></MenuItem>
                                {user.favorites.synth.length > 0 &&
                                    user.favorites.synth.map((e) => (
                                        <MenuItem value={e.module_id}>{e.name}</MenuItem>
                                    ))}
                            </Select>
                        </div>
                    )}
                </div>
            </ModuleDiv>
        </>
    );
}

export default Kick;
