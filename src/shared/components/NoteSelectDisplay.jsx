import React from "react";

function NoteSelectDisplay({ setNote, note }) {
    return (
        <div style={{ display: "flex" }}>
            <div>NoteSelectDisplay</div>
            <button onClick={(e) => setNote(e.target.value)} value="C">
                C
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="C#">
                C#
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="D">
                D
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="D#">
                D#
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="E">
                E
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="F">
                F
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="F#">
                F#
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="G">
                G
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="G#">
                G#
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="A">
                A
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="A#">
                A#
            </button>
            <button onClick={(e) => setNote(e.target.value)} value="B">
                B
            </button>
        </div>
    );
}

export default NoteSelectDisplay;
