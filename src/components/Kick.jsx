import React, { useState } from "react";
import * as tone from "tone";
import DelayDisplay from "../shared/components/FX Displays/DelayDisplay";
import DistortionDisplay from "../shared/components/FX Displays/DistortionDisplay";
import KickSequencerDisplay from "../shared/components/Sequencer Display/KickSequencerDisplay";
import MembraneSynthDisplay from "../shared/components/Synth Displays/MembraneSynthDisplay";
import { Knob } from "primereact/knob";
import { Button } from "@mui/material";
import delay from "../shared/functions/fx/Delay";
import distortion from "../shared/functions/fx/Distortion";
import membraneSynth from "../shared/functions/synths/MembraneSynth";
import { addKickFavorite, removeKickFavorite } from "../shared/redux/slices/kickFavoriteSlice";
import { connect } from "react-redux";

function Kick({ addKickFavorite, removeKickFavorite, favorites }) {
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
            <div style={{ display: "flex" }}>
                <div>
                    <div>Kick</div>
                    <Button
                        variant="contained"
                        onClick={() => {
                            addKickFavorite({
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
                            });
                            console.log(favorites);
                        }}
                    >
                        Add channel to favorites
                        <br></br>
                        (does not save sequences)
                    </Button>

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
                <KickSequencerDisplay synth={synthModule}></KickSequencerDisplay>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addKickFavorite: (synthParams) => dispatch(addKickFavorite(synthParams)),
    removeKickFavorite: (synthParams) => dispatch(removeKickFavorite(synthParams)),
});

const mapStateToProps = (state) => ({
    favorites: state.kick,
});

export default connect(mapStateToProps, mapDispatchToProps)(Kick);
