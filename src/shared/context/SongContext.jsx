import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useReducer, useContext, createContext, useCallback } from "react";
import {
    ADD_SONG,
    CLEAR_SONG,
    songReducer,
    INITIAL_SONG_STATE,
    REMOVE_SONG,
    SET_SONG,
} from "../reducers/songReducer";
import { useUserContext } from "./UserContext";

const SongContext = createContext(null);

export function useSongContext() {
    return useContext(SongContext);
}

export function SongProvider(props) {
    const { user } = useUserContext();

    const { mutate: addSong } = useMutation({
        mutationFn: async (gif) => {
            const { data } = await axios.put("/api/song/add", { gif });
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
    const { mutate: removeSong } = useMutation({
        mutationFn: async (gif_id) => {
            const { data } = await axios.delete(`/api/song/delete/${gif_id}`);
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

    const [songs, dispatch] = useReducer(songReducer, INITIAL_SONG_STATE);

    const setSong = useCallback(
        (song) => {
            dispatch({ type: SET_SONG, payload: song });
        },
        [dispatch]
    );

    const addToState = useCallback(
        (gif) => {
            dispatch({ type: ADD_SONG, payload: gif });
        },
        [dispatch]
    );

    const removeFromState = useCallback(
        (gif_id) => {
            dispatch({ type: REMOVE_SONG, payload: gif_id });
        },
        [dispatch]
    );

    const clearSong = useCallback(() => {
        dispatch({ type: CLEAR_SONG });
    }, [dispatch]);

    return (
        <SongContext.Provider
            value={{
                songs,
                addSong,
                removeSong,
                clearSong,
                setSong,
            }}
        >
            {props.children}
        </SongContext.Provider>
    );
}
