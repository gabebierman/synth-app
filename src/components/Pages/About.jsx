import React from "react";
import { theme } from "../../shared/themes/Themes";

function About() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    width: "auto",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "10px",
                }}
            >
                <h1>About synth-app</h1>
                <div>
                    This application was build by Gabe Bierman using{" "}
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://reactjs.org/"
                        target="_blank"
                    >
                        React
                    </a>{" "}
                    and{" "}
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://tonejs.github.io/"
                        target="_blank"
                    >
                        Tone.js
                    </a>{" "}
                    as my final personal project for the Midland University Code Academy.{" "}
                    <br></br>
                    The goal is to explore web-audio-api synthesis using my background in music
                    as the basis for the project. <br></br>
                    While this project has an official due date, I hope to keep maintaining and
                    updating the project in the months to come.
                </div>
                <br></br>
                <div>
                    Demo username: test-one <br></br> Demo password: password
                </div>
            </div>
            <br></br>
            <div
                style={{
                    width: "auto",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "10px",
                }}
            >
                <h2>Relevant Information</h2>
                <div>
                    GitHub repoistory for this project:{" "}
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://github.com/gabebierman/synth-app"
                        target="_blank"
                    >
                        synth-app
                    </a>
                </div>
                <div>
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://github.com/gabebierman"
                        target="_blank"
                    >
                        Gabe Bierman GitHub
                    </a>
                </div>
                <div>
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://www.linkedin.com/in/gabebierman/"
                        target="_blank"
                    >
                        Gabe Bierman LinkedIn
                    </a>
                </div>
            </div>
            <br></br>
            <div
                style={{
                    width: "auto",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "10px",
                }}
            >
                {/* <h2>Shameless Self Promotion</h2>
                <div>
                    Are you currently in need of a junior developer with experience in HTML,
                    CSS, JavaScript, TypeScript, React, Node.js, and SQL and NoSQL databases?
                </div>
                <div>
                    Feel free to connect with me on LinkedIn or email me at
                    gabebierman@gmail.com, I'm currently looking for development oppourtunites!
                </div> */}
                <h3>Want to listen to my music?</h3>
                <div>
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://nowhere-noise.bandcamp.com/"
                        target="_blank"
                    >
                        NOWHERE
                    </a>
                    : Noisy Post-Hardcore. Fast, loud, precise.
                </div>
                <div>
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://runner-ne.bandcamp.com/album/runner"
                        target="_blank"
                    >
                        runner
                    </a>
                    : Solo doomgaze / heavy shoegaze
                </div>
                <div>
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://gabebierman.bandcamp.com/"
                        target="_blank"
                    >
                        Gabe Bierman / GA83
                    </a>
                    : Miscellaneous electronic releases
                </div>
                <div>
                    <a
                        style={{ color: theme.palette.primary.main }}
                        href="https://adminadmin-ne.bandcamp.com/track/burn"
                        target="_blank"
                    >
                        admin admin
                    </a>
                    : Post-Punk for dancing
                </div>
            </div>
            <br></br>
            <div
                style={{
                    width: "auto",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.main,
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "10px",
                }}
            >
                <h2>Changelog</h2>
                <div>11/29/2022: Initial deployment of project</div>
            </div>
        </div>
    );
}

export default About;
