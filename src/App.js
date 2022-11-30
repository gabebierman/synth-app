import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sequencer from "./components/Pages/Sequencer";
import Generative from "./components/Pages/Generative";
import About from "./components/Pages/About";
import SignInDisplay from "./shared/components/SignInDisplay";

function App() {
    return (
        <>
            <Router>
                <div
                    style={{ display: "flex", width: "auto", justifyContent: "space-evenly" }}
                >
                    <SignInDisplay></SignInDisplay>
                </div>
                <Routes>
                    <Route path="/sequencer" element=<Sequencer></Sequencer>></Route>
                    <Route path="/about" element=<About></About>></Route>
                    <Route path="/generative" element=<Generative></Generative>></Route>
                    <Route path="*" element={<Navigate to="/sequencer" />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
