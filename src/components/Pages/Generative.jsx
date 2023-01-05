import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../shared/themes/Themes";
import * as tone from "tone";
import { Square } from "../../shared/styled/Sqaure";
import { Button } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";

function Generative() {
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
    const numRows = notes.length;

    const toggle = useCallback(() => {
        tone.start();
        tone.Transport.toggle();
        tone.start();
        if (playing) {
            playing = false;
        } else {
            playing = true;
            //!
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
            console.log(AudioContext);
            return () => loop.dispose();
        }
    }, []);

    const initialPattern = [];
    for (let y = 0; y < numRows; y++) {
        const row = [];
        for (let x = 0; x < 16; x++) {
            row.push(0);
        }
        initialPattern.push(row);
    }

    let synth = new tone.PolySynth(tone.DuoSynth);
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

    const [pattern, updatePattern] = useState(initialPattern);
    const [activeColumn, setColumn] = useState(0);

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
        synth.connect(effect);
        synth.toDestination();
        effect.connect(reverb);
        reverb.toDestination();
        tone.Transport.scheduleRepeat(() => {
            randomizeSequencer();
        }, "2m");
        return synth;
    }

    useEffect(() => {
        setup();
    }, []);

    // Update pattern
    function setPattern({ x, y, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
    }

    tone.Transport.bpm.value = 120;

    // formula from https://p5js.org/
    function random(min, max) {
        let rand;
        rand = Math.random();
        if (typeof min === "undefined") {
            return rand;
        } else if (typeof max === "undefined") {
            if (min instanceof Array) {
                return min[Math.floor(rand * min.length)];
            } else {
                return rand * min;
            }
        } else {
            if (min > max) {
                const tmp = min;
                min = max;
                max = tmp;
            }

            return rand * (max - min) + min;
        }
    }

    // formula from https://p5js.org/
    function randomGaussian(mean, sd = 1) {
        let y1, x1, x2, w, y2;

        do {
            x1 = random(2) - 1;
            x2 = random(2) - 1;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1);
        w = Math.sqrt((-2 * Math.log(w)) / w);
        y1 = x1 * w;
        y2 = x2 * w;

        const m = mean || 0;
        return y1 * sd + m;
    }

    function randomizeSequencer() {
        const chance = random(0.5, 1.5);
        for (let y = 0; y < initialPattern.length; y++) {
            // Loop through and create some random on/off values
            const row = initialPattern[y];
            for (let x = 0; x < row.length; x++) {
                row[x] = randomGaussian() > chance ? 1 : 0;
            }
            for (let x = 0; x < row.length; x++) {
                if (row[x] === 1 && row[x + 1] === 1) {
                    row[x + 1] = 0;
                    x++;
                }
            }
        }
    }

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
