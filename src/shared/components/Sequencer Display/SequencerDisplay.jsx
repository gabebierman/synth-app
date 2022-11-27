import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as tone from "tone";
import { setOctave } from "../../redux/slices/octaveSlice";
import { Square } from "../../styled/Sqaure";

const Sequencer = ({ synth, setOctave, octave }) => {
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
    // console.log("scale state arr", scale);
    // const bar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const notes = [].reverse();
    for (let i = 0; i < scale.length; i++) {
        // initialPattern.push(bar)
        notes.push(`${scale[i]}${octave}`);
    }
    // console.log(scale);

    useEffect(() => {
        const loop = new tone.Sequence(
            (time, col) => {
                setColumn(col);
                pattern.map((row, noteIndex) => {
                    if (row[col]) {
                        synth.triggerAttackRelease(notes[noteIndex], "8n", time);
                        console.log(notes[noteIndex], noteIndex);
                    }
                });
            },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            "8n"
        ).start(0);
        return () => loop.dispose();
    }, [pattern, synth, scale]);

    // Update pattern
    function setPattern({ x, y, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
    }
    return (
        <div>
            <label htmlFor="octave">Choose Octave</label>
            <select id="octave" value={octave} onChange={(e) => setOctave(e.target.value)}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
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
    );
};

const mapDispatchToProps = (dispatch) => ({ setOctave: (oct) => dispatch(setOctave(oct)) });

const mapStateToProps = (state) => ({
    scale: state.scale,
    octave: state.octave,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
