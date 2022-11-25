import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as Tone from "tone";

const Sequencer = ({ synth }) => {
    const scale = useSelector((state) => state.scale);
    const initialPattern = [];
    const [activeColumn, setColumn] = useState(0);
    const [pattern, updatePattern] = useState(initialPattern);
    console.log("scale state arr", scale);
    const bar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const notes = [].reverse();
    for (let i = 0; i < scale.length; i++) {
        initialPattern.push(bar);
    }

    // scale.push(notes);
    // console.log("notes arr", notes);
    //TODO - get scale , create notes array with scale , map number of rows to length of notes array
    useEffect(() => {
        const loop = new Tone.Sequence(
            (time, col) => {
                // Update active column
                setColumn(col);
                pattern.map((row, noteIndex) => {
                    if (row[col]) {
                        synth.triggerAttackRelease(notes[noteIndex], "8n", time);
                    }
                });
            },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            "16n"
        ).start(0);
        return () => loop.dispose();
    }, [pattern, synth]);

    // Update pattern
    function setPattern({ x, y, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
    }
    return (
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
    );
};

const Square = ({ active, value, onClick }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 25,
            height: 25,
            background: value ? "#999" : "",
            border: active ? "1px solid #999" : "1px solid #eee",
        }}
        onClick={onClick}
    >
        {value}
    </div>
);

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
    scale: state.scale,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
