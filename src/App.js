import "./App.css";
import * as tone from "tone";
import SingleVoiceDisplay from "./components/SingleVoiceFM";

function App() {
    return (
        <>
            <button onClick={() => (tone.start(), console.log("start"))}>Tone</button>
            <SingleVoiceDisplay></SingleVoiceDisplay>
        </>
    );
}

export default App;
