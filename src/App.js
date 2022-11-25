import "./App.css";
import { useCallback, useState } from "react";
import * as tone from "tone";
import SingleVoiceDisplay from "./components/SingleVoice";
import ScaleSelectDisplay from "./shared/components/Select Displays/ScaleSelectDisplay";
import Sequencer from "./shared/components/Sequencer Display/SequencerDisplay";

function App() {
    const [tempo, setTempo] = useState(144);
    const toggle = useCallback(() => {
        tone.start();
        tone.Transport.toggle();
    }, []);
    tone.Transport.bpm.value = tempo;
    return (
        <>
            <button onClick={() => (tone.start(), console.log("start"))}>Tone</button>{" "}
            <button onClick={() => toggle()}>start / stop</button>
            <label htmlFor="tempo">tempo</label>
            <input
                type="range"
                min="60"
                max="240"
                id="tempo"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
            ></input>
            <ScaleSelectDisplay></ScaleSelectDisplay>
            <SingleVoiceDisplay tempo={tempo}></SingleVoiceDisplay>
        </>
    );
}

export default App;
