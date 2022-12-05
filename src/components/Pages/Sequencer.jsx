import React from "react";
import { useCallback, useState } from "react";
import * as tone from "tone";
import SignInDisplay from "../../shared/components/SignInDisplay";
import SingleVoiceDisplay from "../SingleVoice";
import Kick from "../Kick";
import HitHat from "../HiHat";
import Snare from "../Snare";
import SongSettings from "../SongSettings";

function Sequencer() {
    const [tempo, setTempo] = useState(144);
    const [playState, setPlayState] = useState(false);
    const toggle = useCallback(() => {
        tone.start();
        tone.Transport.toggle();
        setPlayState((prevState) => !prevState);
    }, []);
    tone.Transport.bpm.value = tempo;
    return (
        <>
            <div style={{ display: "flex", width: "auto", justifyContent: "space-evenly" }}>
                <SongSettings
                    tempo={tempo}
                    setTempo={setTempo}
                    playState={playState}
                    toggle={toggle}
                ></SongSettings>
            </div>
            <div style={{ display: "flex", width: "auto", justifyContent: "space-evenly" }}>
                <SingleVoiceDisplay></SingleVoiceDisplay>
            </div>
            <div style={{ display: "flex", width: "auto", justifyContent: "space-evenly" }}>
                <Kick></Kick>
                <HitHat></HitHat>
                <Snare></Snare>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: "25px 0px 0px 0px" }}>
                    WARNING: Changing paramaters while the sequencer running may cause the web
                    audio interface to crash.
                </div>
            </div>
        </>
    );
}

export default Sequencer;
