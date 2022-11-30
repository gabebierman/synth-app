import React, { useState } from "react";
import { connect } from "react-redux";
import { setScale, scale } from "../../redux/slices/scaleSlice";
import * as Scale from "tonal-scale";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

function ScaleSelectDisplay({ scale, setScale }) {
    const [key, setKey] = useState("major");
    const [tonic, setTonic] = useState("C");
    console.log(scale);
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="tonic">Tonic</label>
                <Select
                    color="primary"
                    id="tonic"
                    value={tonic}
                    onChange={(e) => (setTonic(e.target.value), console.log(tonic))}
                >
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="C#">C# / Bb</MenuItem>
                    <MenuItem value="D#">D# / Eb</MenuItem>
                    <MenuItem value="E">E</MenuItem>
                    <MenuItem value="F">F</MenuItem>
                    <MenuItem value="F#">F# / Gb</MenuItem>
                    <MenuItem value="G">G</MenuItem>
                    <MenuItem value="G#">G#</MenuItem>
                    <MenuItem value="A">Ab</MenuItem>
                    <MenuItem value="A#">A# / Ab</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                </Select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", margin: "0px 20px" }}>
                <label htmlFor="key">Key / Mode</label>
                <Select id="key" value={key} onChange={(e) => setKey(e.target.value)}>
                    <MenuItem value="major">major</MenuItem>
                    <MenuItem value="minor">minor</MenuItem>
                    <MenuItem value="melodic major">melodic major</MenuItem>
                    <MenuItem value="melodic minor">melodic minor</MenuItem>
                    <MenuItem value="harmonic major">harmonic major</MenuItem>
                    <MenuItem value="harmonic minor">harmonic minor</MenuItem>
                    <MenuItem value="major pentatonic">minor pentatonic</MenuItem>
                    <MenuItem value="minor pentatonic">minor pentatonic</MenuItem>
                    <MenuItem value="augmented">augmented</MenuItem>
                    <MenuItem value="diminished">diminished</MenuItem>
                    <MenuItem value="aeolian">aeolian</MenuItem>
                    <MenuItem value="balinese">balinese</MenuItem>
                    <MenuItem value="dorian">dorian</MenuItem>
                    <MenuItem value="enigmatic">enigmatic</MenuItem>
                    <MenuItem value="egyptian">egyptian</MenuItem>
                    <MenuItem value="iwato">iwato</MenuItem>
                    <MenuItem value="flamenco">flamenco</MenuItem>
                    <MenuItem value="lydian">lydian</MenuItem>
                    <MenuItem value="locrian">locrian</MenuItem>
                    <MenuItem value="mixolydian">mixolydian</MenuItem>
                    <MenuItem value="mystery #1">mystery #1</MenuItem>
                    <MenuItem value="neopolitan">neopolitan</MenuItem>
                    <MenuItem value="pelog">pelog</MenuItem>
                    <MenuItem value="phrygian">phrygian</MenuItem>
                    <MenuItem value="prometheus">prometheus</MenuItem>
                    <MenuItem value="persian">persian</MenuItem>
                </Select>
            </div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setScale(Scale.notes(tonic, key))}
            >
                set scale
            </Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setScale: (result) => dispatch(setScale(result)),
});

const mapStateToProps = (state) => ({
    scale: state.scale,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScaleSelectDisplay);
