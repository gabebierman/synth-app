export const ADD_FAVORITE = "Add Favorite";
export const REMOVE_FAVORITE = "Remove Favorite";
export const CLEAR_FAVORITES = "Clear Favorites";
export const SET_FAVORITES = "Set Favorites";

export const INITIAL_FAVORITES_STATE = [];

export function favoritesReducer(state, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload];

        case REMOVE_FAVORITE:
            return state.filter((val) => val.gif_id !== action.payload);

        case SET_FAVORITES:
            return action.payload;

        case CLEAR_FAVORITES:
            return [];

        default:
            throw new Error("Invalid action");
    }
}
