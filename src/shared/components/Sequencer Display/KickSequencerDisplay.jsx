import React, { useState, useEffect } from "react";
import * as tone from "tone";
import { Square } from "../../styled/Sqaure";

function KickSequencerDisplay({ synth }) {
    const initialPattern = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    const [activeColumn, setColumn] = useState(0);
    const [pattern, updatePattern] = useState(initialPattern);
    useEffect(() => {
        const loop = new tone.Sequence(
            (time, col) => {
                setColumn(col);
                pattern.map((row) => {
                    if (row[col]) {
                        synth.triggerAttackRelease("C2", "8n", time);
                    }
                });
            },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            "8n"
        ).start(0);
        return () => loop.dispose();
    }, [pattern, synth]);
    function setPattern({ x, y, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
    }

    return (
        <>
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
        </>
    );
}

export default KickSequencerDisplay;
