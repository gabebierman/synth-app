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
                as my final personal project for the Midland University Code Academy. <br></br>
                The goal is to explore web-audio-api synthesis using my background in music as
                the basis for the project. <br></br>
                While this project has an official due date, I hope to keep maintaining and
                updating the project in the months to come.
            </div>
            <br></br>
            <h2>Relevant information</h2>
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
            <br></br>
            <h2>Changelog</h2>
            <div>11/29/2022: Initial deployment of project</div>
        </div>
    );
}

export default About;
