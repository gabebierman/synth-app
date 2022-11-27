import "./App.css";
import { useCallback, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Fab from "@mui/material/Fab";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import * as tone from "tone";
import SingleVoiceDisplay from "./components/SingleVoice";
import ScaleSelectDisplay from "./shared/components/Select Displays/ScaleSelectDisplay";
import Kick from "./components/Kick";
import HitHat from "./components/HiHat";
import { current } from "@reduxjs/toolkit";

function App() {
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
            <div style={{ padding: "5px", display: "flex", justifyContent: "space-evenly" }}>
                <div
                    style={{
                        padding: "5px",
                        display: "flex",
                    }}
                >
                    <label htmlFor="tempo">tempo: {tempo} BPM</label>
                    <input
                        style={{ maxWidth: "150px" }}
                        type="range"
                        min="60"
                        max="240"
                        id="tempo"
                        value={tempo}
                        onChange={(e) => setTempo(e.target.value)}
                    ></input>
                    {!playState && (
                        <Fab color="primary" onClick={() => toggle()}>
                            <PlayArrowIcon></PlayArrowIcon>
                        </Fab>
                    )}
                    {playState && (
                        <Fab color="primary" onClick={() => toggle()}>
                            <StopIcon></StopIcon>
                        </Fab>
                    )}
                </div>
                <ScaleSelectDisplay></ScaleSelectDisplay>
            </div>
            <SingleVoiceDisplay></SingleVoiceDisplay>
            <Kick></Kick>
            <HitHat></HitHat>
        </>
    );
}

export default App;
