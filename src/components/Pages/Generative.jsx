import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../shared/themes/Themes";
import * as tone from "tone";
import { Square } from "../../shared/styled/Sqaure";
import { Button } from "@mui/material";

function Generative() {
    const toggle = useCallback(() => {
        tone.start();
        tone.Transport.toggle();
        // setPlayState((prevState) => !prevState);
    }, []);

    let synth;
    let playing = false;
    let sequence;
    let currentColumn = 0;
    const notes = ["A3", "C4", "D4", "E3", "G4"];
    {
        /* const notes = ["F#4", "E4", "C#4", "A4"]; */
    }
    {
        /* const notes = ['A3', 'C4', 'D4', 'E4', 'G4', 'A4']; */
    }
    {
        /* const notes = [ "A4", "D3", "E3", "G4", 'F#4' ]; */
    }
    const initialPattern = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const [pattern, updatePattern] = useState(initialPattern);
    const [activeColumn, setColumn] = useState(0);
    // const bar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
            [0, 1, 2, 3, 4, 5, 6, 7],
            "8n"
        ).start(0);
        return () => loop.dispose();
    }, [pattern, notes]);

    async function setup() {
        const reverb = new tone.Reverb({
            decay: 4,
            wet: 0.2,
            preDelay: 0.25,
        });
        await reverb.generate();
        const effect = new tone.FeedbackDelay(
            `${Math.floor(initialPattern[0].length / 2)}n`,
            1 / 3
        );
        effect.wet.value = 0.2;
        let synth = new tone.PolySynth(initialPattern.length, tone.DuoSynth);
        synth.set({
            voice0: {
                oscillator: {
                    type: "triangle4",
                },
                volume: -30,
                envelope: {
                    attack: 0.005,
                    release: 0.05,
                    sustain: 1,
                },
            },
            voice1: {
                volume: -10,
                envelope: {
                    attack: 0.005,
                    release: 0.05,
                    sustain: 1,
                },
            },
        });
        synth.volume.value = -10;
        synth.connect(effect);
        synth.connect.toDestination();
        effect.connect(reverb);
        reverb.connect.toDestination();
        tone.Transport.scheduleRepeat(() => {
            randomizeSequencer();
        }, "2m");
        return synth;
    }

    // Update pattern
    function setPattern({ x, y, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
    }

    tone.Transport.bpm.value = 120;

    function randomGaussian(v) {
        var r = 0;
        for (var i = notes.length; i > 0; i--) {
            r += Math.random();
        }
        return r / notes.length;
    }

    function random() {
        let randNum = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
        return randNum;
    }

    function randomizeSequencer() {
        const chance = random();
        for (let y = 0; y < initialPattern[0].length; y++) {
            const row = initialPattern[y];
            for (let x = 0; x < row.length; x++) {
                row[x] = randomGaussian() > chance ? 1 : 0;
            }
            for (let x = 0; x < row.length - 1; x++) {
                if (row[x] === 1 && row[x + 1] === 1) {
                    row[x + 1] = 0;
                    x++;
                }
            }
        }
    }

    // function newArray(n) {
    //     const array = [];
    //     for (let i = 0; i < n; i++) {
    //         array.push(i);
    //     }
    //     return array;
    // }

    //!

    //!

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Generative Synthesis</h1>
            <div>This page is currently in development</div>
            <br></br>
            <div>
                <a
                    style={{ color: theme.palette.primary.main }}
                    href="https://daily.bandcamp.com/lists/generative-music-guide"
                    target="_blank"
                >
                    This post from BandCamp
                </a>{" "}
                provides a little bit of information about generative music and includes some
                wonderful examples.
            </div>
            <br></br>
            <div>
                {" "}
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
                <div>
                    <Button onClick={() => toggle()}>Start / stop</Button>
                </div>
            </div>
        </div>
    );
}

export default Generative;
