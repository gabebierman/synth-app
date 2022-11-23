import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";

const notes = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3"].reverse();

const initialPattern = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Sequencer = ({ synth }) => {
    const [activeColumn, setColumn] = useState(0);
    const [pattern, updatePattern] = useState(initialPattern);

    useEffect(
        () => {
            const loop = new Tone.Sequence(
                (time, col) => {
                    // Update active column for animation
                    setColumn(col);

                    // Loop pattern
                    pattern.map((row, noteIndex) => {
                        // If active
                        if (row[col]) {
                            // Play based on which row
                            synth.triggerAttackRelease(notes[noteIndex], "8n", time);
                        }
                    });
                },
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                "16n"
            ).start(0);
            return () => loop.dispose();
        },
        [pattern] // Retrigger when pattern changes
    );

    // Toggle playing / stopped

    // Update pattern by making a copy and inverting the value
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
            <button onClick={() => toggle()}>start / stop</button>
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

export default Sequencer;
