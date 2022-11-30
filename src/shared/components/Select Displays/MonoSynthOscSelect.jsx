import React from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function MonoSynthOscSelect({ setOsc }) {
    return (
        <div style={{ margin: "0px 10px" }}>
            <div>Waveform</div>
            <div>
                <Select
                    style={{ maxHeight: "50px" }}
                    defaultValue="sine"
                    id="osc"
                    onChange={(e) => setOsc(e.target.value)}
                >
                    <MenuItem value={"sine"}>Sine</MenuItem>
                    <MenuItem value={"square"}>Square</MenuItem>
                    <MenuItem value={"sawtooth"}>Sawtooth</MenuItem>
                    <MenuItem value={"triangle"}>Tirangle</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default MonoSynthOscSelect;
