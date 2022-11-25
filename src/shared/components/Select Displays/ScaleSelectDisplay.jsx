import React, { useState } from "react";
import { connect } from "react-redux";
import { setScale } from "../../redux/slices/scaleSlice";
import * as Scale from "tonal-scale";

function ScaleSelectDisplay({}) {
    const [key, setKey] = useState("major");
    const [tonic, setTonic] = useState("C");
    setScale(Scale.notes(tonic, key));
    return (
        <>
            <div>ScaleSelectDisplay</div>
            <label htmlFor="tonic">Tonic</label>
            <select id="tonic" onChange={(e) => setTonic(e.target.value)}>
                <option value="C">C</option>
                <option value="C#">C# / Bb</option>
                <option value="D#">D# / Eb</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F# / Gb</option>
                <option value="G">G</option>
                <option value="G#">G#</option>
                <option value="A">Ab</option>
                <option value="A#">A# / Ab</option>
                <option value="B">B</option>
            </select>
            <label htmlFor="key">Key / Mode</label>
            <select id="key" onChange={(e) => setKey(e.target.value)}>
                <option value="major">major</option>
                <option value="minor">minor</option>
                <option value="melodic major">melodic minor</option>
                <option value="melodic minor">melodic minor</option>
                <option value="harmonic major">harmonic major</option>
                <option value="harmonic minor">harmonic minor</option>
                <option value="major pentatonic">minor pentatonic</option>
                <option value="minor pentatonic">minor pentatonic</option>
                <option value="augmented">augmented</option>
                <option value="diminished">diminished</option>
                <option value="aeolian">aeolian</option>
                <option value="balinese">balinese</option>
                <option value="dorian">dorian</option>
                <option value="enigmatic">enigmatic</option>
                <option value="egyptian">egyptian</option>
                <option value="iwato">iwato</option>
                <option value="flamenco">flamenco</option>
                <option value="lydian">lydian</option>
                <option value="locrian">locrian</option>
                <option value="mixolydian">mixolydian</option>
                <option value="mystery #1">mystery #1</option>
                <option value="neopolitan">neopolitan</option>
                <option value="pelog">pelog</option>
                <option value="phrygian">phrygian</option>
                <option value="prometheus">prometheus</option>
                <option value="persian">persian</option>
            </select>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({ setScale: (scale) => dispatch(setScale(scale)) });

const mapStateToProps = (state) => ({
    scale: state.scale,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScaleSelectDisplay);
