import React from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function MonoSynthOscSelect({ setOsc }) {
    return (
        <>
            <Select defaultValue="sine" id="osc" onChange={(e) => setOsc(e.target.value)}>
                <MenuItem value={"sine"}>Sine</MenuItem>
                <MenuItem value={"square"}>Square</MenuItem>
                <MenuItem value={"sawtooth"}>Sawtooth</MenuItem>
                <MenuItem value={"triangle"}>Tirangle</MenuItem>
            </Select>
        </>
    );
}

export default MonoSynthOscSelect;
