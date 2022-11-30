import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as tone from "tone";
import { setOctave } from "../../redux/slices/octaveSlice";
import { Square } from "../../styled/Sqaure";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const Sequencer = ({ synth, setOctave, octave, setPatternState }) => {
    const scale = useSelector((state) => state.scale);
    const initialPattern = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const [activeColumn, setColumn] = useState(0);
    const [pattern, updatePattern] = useState(initialPattern);
    // const bar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const notes = [].reverse();
    for (let i = 0; i < scale.length; i++) {
        // initialPattern.push(bar)
        notes.push(`${scale[i]}${octave}`);
    }

    useEffect(() => {
        const loop = new tone.Sequence(
            (time, col) => {
                setColumn(col);
                pattern.map((row, noteIndex) => {
                    if (row[col]) {
                        synth.triggerAttackRelease(notes[noteIndex], "8n", time);
                    }
                });
            },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            "8n"
        ).start(0);
        return () => loop.dispose();
    }, [pattern, synth, scale, octave]);

    // Update pattern
    function setPattern({ x, y, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
        setPatternState(pattern);
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label htmlFor="octave">Choose Octave</label>
            <Select
                style={{ maxWidth: "100px" }}
                defaultValue="2"
                id="octave"
                value={octave}
                onChange={(e) => setOctave(e.target.value)}
            >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
            <div>
                {pattern.map((row, y) => (
                    <div key={y} style={{ display: "flex", justifyContent: "center" }}>
                        {row.map((value, x) => (
                            <Square
                                key={x}
                                active={activeColumn === x}
                                selected={value}
                                onClick={() => setPattern({ x, y, value })}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({ setOctave: (oct) => dispatch(setOctave(oct)) });

const mapStateToProps = (state) => ({
    scale: state.scale,
    octave: state.octave,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
