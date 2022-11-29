export const ADD_SNARE = "Add Snare";
export const REMOVE_SNARE = "Remove Snare";
export const CLEAR_SNARE = "Clear Snare";
export const SET_SNARE = "Set Snare";

export const INITIAL_SNARE_STATE = [];

export function snareReducer(state, action) {
    switch (action.type) {
        case ADD_SNARE:
            return [...state, action.payload];

        case REMOVE_SNARE:
            return state.filter((val) => val.module_id !== action.payload);

        case SET_SNARE:
            return action.payload;

        case CLEAR_SNARE:
            return [];

        default:
            throw new Error("Invalid action");
    }
}
