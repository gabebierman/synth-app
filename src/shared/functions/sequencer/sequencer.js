import * as tone from "tone";

export default function sequencer() {
    const seq = new tone.Sequence(() => {});
}

tone.Transport.bpm.value = 80; //how many beats(quarter notes) per minute
tone.Transport.start(); //starts the transport

//starts the sequence
function mousePressed() {
    tone.start();
    sequence1.start();
    console.log("lets go!");
}

//end the sequence
function mouseReleased() {
    sequence1.stop();
}
