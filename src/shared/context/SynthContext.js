import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useReducer, useContext, createContext, useCallback } from "react";
import {
    ADD_SYNTH,
    CLEAR_SYNTH,
    synthReducer,
    INITIAL_SYNTH_STATE,
    REMOVE_SYNTH,
    SET_SYNTH,
} from "../reducers/synthReducer";
import { useUserContext } from "./UserContext";

const SynthContext = createContext([]);

export function useSynthContext() {
    return useContext(SynthContext);
}

export function SynthProvider(props) {
    const { user } = useUserContext();

    const { mutate: addSynth } = useMutation({
        mutationFn: async (gif) => {
            const { data } = await axios.put("/api/synth/add", { gif });
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
    const { mutate: removeSynth } = useMutation({
        mutationFn: async (gif_id) => {
            const { data } = await axios.delete(`/api/synth/delete/${gif_id}`);
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

    const [synths, dispatch] = useReducer(synthReducer, INITIAL_SYNTH_STATE);

    const setSynth = useCallback(
        (synth) => {
            dispatch({ type: SET_SYNTH, payload: synth });
        },
        [dispatch]
    );

    const addToState = useCallback(
        (gif) => {
            dispatch({ type: ADD_SYNTH, payload: gif });
        },
        [dispatch]
    );

    const removeFromState = useCallback(
        (gif_id) => {
            dispatch({ type: REMOVE_SYNTH, payload: gif_id });
        },
        [dispatch]
    );

    const clearSynth = useCallback(() => {
        dispatch({ type: CLEAR_SYNTH });
    }, [dispatch]);

    return (
        <SynthContext.Provider
            value={{
                synths,
                addSynth,
                removeSynth,
                clearSynth,
                setSynth,
            }}
        >
            {props.children}
        </SynthContext.Provider>
    );
}
