import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useReducer, useContext, createContext, useCallback } from "react";
import {
    ADD_KICK,
    CLEAR_KICK,
    kickReducer,
    INITIAL_KICK_STATE,
    REMOVE_KICK,
    SET_KICK,
} from "../reducers/kickReducer";
import { useUserContext } from "./UserContext";

const KickContext = createContext([]);

export function useKickContext() {
    return useContext(KickContext);
}

export function KickProvider(props) {
    const { user } = useUserContext();

    const { mutate: addKick } = useMutation({
        mutationFn: async (kick) => {
            const { data } = await axios.put("/api/modulefavorites/addKick", {
                kick,
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
    const { mutate: removeKick } = useMutation({
        mutationFn: async (module_id) => {
            const { data } = await axios.delete(`/api/kick/delete/${module_id}`);
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

    const [kicks, dispatch] = useReducer(kickReducer, INITIAL_KICK_STATE);

    const setKick = useCallback(
        (kick) => {
            dispatch({ type: SET_KICK, payload: kick });
        },
        [dispatch]
    );

    const addToState = useCallback(
        (kick) => {
            dispatch({ type: ADD_KICK, payload: kick });
        },
        [dispatch]
    );

    const removeFromState = useCallback(
        (module_id) => {
            dispatch({ type: REMOVE_KICK, payload: module_id });
        },
        [dispatch]
    );

    const clearKick = useCallback(() => {
        dispatch({ type: CLEAR_KICK });
    }, [dispatch]);

    return (
        <KickContext.Provider
            value={{
                kicks,
                addKick,
                removeKick,
                clearKick,
                setKick,
            }}
        >
            {props.children}
        </KickContext.Provider>
    );
}
