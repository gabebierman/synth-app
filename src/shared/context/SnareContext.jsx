import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useReducer, useContext, createContext, useCallback } from "react";
import {
    ADD_SNARE,
    CLEAR_SNARE,
    snareReducer,
    INITIAL_SNARE_STATE,
    REMOVE_SNARE,
    SET_SNARE,
} from "../reducers/snareReducer";
import { useUserContext } from "./UserContext";

const SnareContext = createContext([]);

export function useSnareContext() {
    return useContext(SnareContext);
}

export function SnareProvider(props) {
    const { user } = useUserContext();

    const { mutate: addSnare } = useMutation({
        mutationFn: async (snare) => {
            const { data } = await axios.put("/api/snarefavorites/addSnare", {
                snare,
                user_id: user.user.id,
            });
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                addToState(res.data);
            } else {
                console.log(res.error);
            }
        },
        onError: (err) => console.error(err),
    });
    const { mutate: removeSnare } = useMutation({
        mutationFn: async (module_id) => {
            const { data } = await axios.delete(`/api/snare/delete/${module_id}`);
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                removeFromState(res.data);
            } else {
                console.log(res.error);
            }
        },
        onError: (err) => console.error(err),
    });

    const [snares, dispatch] = useReducer(snareReducer, INITIAL_SNARE_STATE);

    const setSnare = useCallback(
        (snare) => {
            dispatch({ type: SET_SNARE, payload: snare });
        },
        [dispatch]
    );

    const addToState = useCallback(
        (snare) => {
            dispatch({ type: ADD_SNARE, payload: snare });
        },
        [dispatch]
    );

    const removeFromState = useCallback(
        (module_id) => {
            dispatch({ type: REMOVE_SNARE, payload: module_id });
        },
        [dispatch]
    );

    const clearSnare = useCallback(() => {
        dispatch({ type: CLEAR_SNARE });
    }, [dispatch]);

    return (
        <SnareContext.Provider
            value={{
                snares,
                addSnare,
                removeSnare,
                clearSnare,
                setSnare,
            }}
        >
            {props.children}
        </SnareContext.Provider>
    );
}
