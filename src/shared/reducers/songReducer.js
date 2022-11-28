export const ADD_SONG = "Add Song";
export const REMOVE_SONG = "Remove Song";
export const CLEAR_SONG = "Clear Song";
export const SET_SONG = "Set Song";

export const INITIAL_SONG_STATE = [];

export function songReducer(state, action) {
    switch (action.type) {
        case ADD_SONG:
            return [...state, action.payload];

        case REMOVE_SONG:
            return state.filter((val) => val.gif_id !== action.payload);

        case SET_SONG:
            return action.payload;

        case CLEAR_SONG:
            return [];

        default:
            throw new Error("Invalid action");
    }
}
