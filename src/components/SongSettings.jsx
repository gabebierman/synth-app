import { Fab, Slider } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import ScaleSelectDisplay from "../shared/components/Select Displays/ScaleSelectDisplay";
import { ModuleDiv } from "../shared/styled/ModuleDiv";

function SongSettings({ tempo, setTempo, playState, toggle }) {
    return (
        <>
            <ModuleDiv style={{ justifyContent: "space-evenly", width: "94%" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <label htmlFor="tempo">tempo: {tempo} BPM</label>
                    <Slider
                        style={{ maxWidth: "150px" }}
                        min={60}
                        max={240}
                        id="tempo"
                        size="small"
                        value={tempo}
                        onChange={(e) => setTempo(e.target.value)}
                    ></Slider>
                </div>
                {!playState && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                        }}
                    >
                        <div>Play Sequence</div>
                        <Fab color="primary" onClick={() => toggle()}>
                            <PlayArrowIcon></PlayArrowIcon>
                        </Fab>
                    </div>
                )}
                {playState && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                        }}
                    >
                        <div>Stop Sequence</div>
                        <Fab color="primary" onClick={() => toggle()}>
                            <StopIcon></StopIcon>
                        </Fab>
                    </div>
                )}
                <ScaleSelectDisplay></ScaleSelectDisplay>
            </ModuleDiv>
        </>
    );
}

export default SongSettings;
