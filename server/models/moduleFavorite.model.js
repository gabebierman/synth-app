import { Schema } from "mongoose";

export const favoriteSynthSchema = new Schema({
    module_id: { type: Number, required: true },
    attack: { type: Number, required: true },
    decay: { type: Number, required: true },
    sustain: { type: Number, required: true },
    release: { type: Number, required: true },
    osc: { type: String, required: true },
    distortionAmount: { type: Number, required: true },
    distortionWet: { type: Number, required: true },
    chanVol: { type: Number, required: true },
    delayDelayTime: { type: Number, required: true },
    delayFeedback: { type: Number, required: true },
    delayMaxDelay: { type: Number, required: true },
    delayWet: { type: Number, required: true },
    pattern: { type: Array, required: true },
});
