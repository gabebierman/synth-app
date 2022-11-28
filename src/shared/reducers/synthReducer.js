export const ADD_SYNTH = "Add Synth";
export const REMOVE_SYNTH = "Remove Synth";
export const CLEAR_SYNTH = "Clear Synth";
export const SET_SYNTH = "Set Synth";

export const INITIAL_SYNTH_STATE = [];

export function synthReducer(state, action) {
    switch (action.type) {
        case ADD_SYNTH:
            return [...state, action.payload];

        case REMOVE_SYNTH:
            return state.filter((val) => val.synthParams !== action.payload);

        case SET_SYNTH:
            return action.payload;

        case CLEAR_SYNTH:
            return [];

        default:
            throw new Error("Invalid action");
    }
}
