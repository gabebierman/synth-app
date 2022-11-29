export const ADD_KICK = "Add Kick";
export const REMOVE_KICK = "Remove Kick";
export const CLEAR_KICK = "Clear Kick";
export const SET_KICK = "Set Kick";

export const INITIAL_KICK_STATE = [];

export function kickReducer(state, action) {
    switch (action.type) {
        case ADD_KICK:
            return [...state, action.payload];

        case REMOVE_KICK:
            return state.filter((val) => val.module_id !== action.payload);

        case SET_KICK:
            return action.payload;

        case CLEAR_KICK:
            return [];

        default:
            throw new Error("Invalid action");
    }
}
