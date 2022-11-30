import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../shared/themes/Themes";

function Generative() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Generative Synthesis</h1>
            <div>
                Look's like I ran out of time. Hopefully I can come back and finish this in the
                future!
            </div>
            <div>
                While you're here!{" "}
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
        </div>
    );
}

export default Generative;
