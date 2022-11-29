export const ADD_HAT = "Add Hat";
export const REMOVE_HAT = "Remove Hat";
export const CLEAR_HAT = "Clear Hat";
export const SET_HAT = "Set Hat";

export const INITIAL_HAT_STATE = [];

export function hatReducer(state, action) {
    switch (action.type) {
        case ADD_HAT:
            return [...state, action.payload];

        case REMOVE_HAT:
            return state.filter((val) => val.module_id !== action.payload);

        case SET_HAT:
            return action.payload;

        case CLEAR_HAT:
            return [];

        default:
            throw new Error("Invalid action");
    }
}
