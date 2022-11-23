import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";

const notes = ["C#2", "D#2", "F#2", "G#2", "A#2", "C#2", "D#2", "F#2"].reverse();

const initialPattern = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

const synth = new Tone.FMSynth().toDestination();
const Sequencer = () => {
    const [playState, setPlayState] = useState(Tone.Transport.state);
    const [activeColumn, setColumn] = useState(0);
    const [pattern, updatePattern] = useState(initialPattern);

    useEffect(
        () => {
            const loop = new Tone.Sequence(
                (time, col) => {
                    // Update active column for animation
                    setColumn(col);

                    // Loop current pattern
                    pattern.map((row, noteIndex) => {
                        // If active
                        if (row[col]) {
                            // Play based on which row
                            synth.triggerAttackRelease(notes[noteIndex], "8n", time);
                        }
                    });
                },
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                "4n"
            ).start(0);
            return () => loop.dispose();
        },
        [pattern] // Retrigger when pattern changes
    );

    // Toggle start / stop
    const toggle = useCallback(() => {
        Tone.Transport.toggle();
        setPlayState(Tone.Transport.state);
    }, []);

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
            background: value ? "#606060" : "",
            border: active ? "1px solid #999" : "1px solid #eee",
        }}
        onClick={onClick}
    >
        {value}
    </div>
);

export default Sequencer;
