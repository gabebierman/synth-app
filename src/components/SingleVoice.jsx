import React, { useState, useCallback, useEffect, useRef } from "react";
import * as tone from "tone";
import { connect } from "react-redux";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import SequencerDisplay from "../shared/components/Sequencer Display/SequencerDisplay";
import MonoSynthDisplay from "../shared/components/Synth Displays/MonoSynthDisplay";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import monoSynth from "../shared/functions/synths/MonoSynth";
import { Knob } from "primereact/knob";
import {
    Button,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useSynthContext } from "../shared/context/SynthContext";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../shared/context/UserContext";
import { ModuleDiv } from "../shared/styled/ModuleDiv";
import { InputOutlined } from "@mui/icons-material";

const initialPattern = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function SingleVoiceDisplay() {
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
    const [delayFeedback, setDelayFeedback] = useState(0.001);
    const [delayMaxDelay, setDelayMaxDelay] = useState(1);
    const [delayWet, setDelayWet] = useState(0);
    const [mute, setMute] = useState(false);
    const [pattern, setPattern] = useState(initialPattern);
    const { addSynth, removeSynth } = useSynthContext();
    const { user } = useUserContext();
    const [module_id, setModuleID] = useState(uuidv4());
    const [preset, setPreset] = useState({});
    console.log("presets", preset);
    console.log("synths", user?.favorites.synth);

    const ref = useRef(false);

    useEffect(() => {
        //set params pulled from favorite
        let params = user?.favorites.synth.find((e) => e.module_id === preset);
        if (ref.current) {
            setAttack(params?.attack);
            setDecay(params?.decay);
            setSustain(params?.sustain);
            setRelease(params?.release);
            setOsc(params?.osc);
            setDistortionAmount(params?.distortionAmount);
            setDistortionWet(params?.distortionWet);
            setChanVol(params?.chanVol);
            setDelayDelayTime(params?.delayDelayTime);
            setDelayFeedback(params?.delayFeedback);
            setDelayMaxDelay(params?.delayMaxDelay);
            setDelayWet(params?.delayWet);
        } else ref.current = true;
        console.log("params", params);
    }, [preset]);

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
    const synthModule = monoSynth({
        attack,
        decay,
        sustain,
        release,
        port,
        osc,
    }).connect(distortionModule.input);
    return (
        <>
            <ModuleDiv style={{ justifyContent: "space-evenly", width: "94%" }}>
                <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>Synthesizer</div>
                        {user && (
                            <>
                                <Input placeholder="preset name" size="small"></Input>
                                <Button
                                    style={{ fontSize: "10px", maxHeight: "50px" }}
                                    size="small"
                                    variant="contained"
                                    onClick={() => {
                                        addSynth({
                                            module_id,
                                            attack,
                                            decay,
                                            sustain,
                                            release,
                                            osc,
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
                                        console.log(user);
                                    }}
                                >
                                    save module to presets
                                </Button>{" "}
                            </>
                        )}
                    </div>

                    <ModuleDiv>
                        <div>
                            <div>Volume</div>
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
                        <MonoSynthDisplay
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
                    </ModuleDiv>

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

                    {user && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                                justifyItems: "center",
                                alignItems: "center",
                            }}
                        >
                            <div style={{ margin: "0px 20px" }}>Select a preset to load</div>
                            <select
                                style={{ minWidth: "100px" }}
                                onChange={(e) => setPreset(e.target.value)}
                            >
                                <option>This option intentionally left blank</option>
                                {user.favorites.synth.length > 0 &&
                                    user.favorites.synth.map((e) => (
                                        <option value={e.module_id}>{e.name}</option>
                                    ))}
                            </select>
                        </div>
                    )}
                </div>
                <SequencerDisplay
                    synth={synthModule}
                    pattern={pattern}
                    setPatternState={setPattern}
                ></SequencerDisplay>
            </ModuleDiv>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    // addSynthFavorite: (synthParams) => dispatch(addSynthFavorite(synthParams)),
    // removeSynthFavorite: (synthParams) => dispatch(removeSynthFavorite(synthParams)),
});

const mapStateToProps = (state) => ({
    // favorites: state.synth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleVoiceDisplay);
