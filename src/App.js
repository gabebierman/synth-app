import "./App.css";
import { useCallback, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as tone from "tone";
import SingleVoiceDisplay from "./components/SingleVoice";
import Kick from "./components/Kick";
import HitHat from "./components/HiHat";
import Snare from "./components/Snare";
import Menu from "./shared/components/SignInDisplay";
import SignInDisplay from "./shared/components/SignInDisplay";
import SongSettings from "./components/SongSettings";

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
            <div style={{ display: "flex", width: "auto", justifyContent: "space-evenly" }}>
                <SignInDisplay></SignInDisplay>
            </div>
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
        </>
    );
}

export default App;
