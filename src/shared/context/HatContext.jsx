import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useReducer, useContext, createContext, useCallback } from "react";
import {
    ADD_HAT,
    CLEAR_HAT,
    hatReducer,
    INITIAL_HAT_STATE,
    REMOVE_HAT,
    SET_HAT,
} from "../reducers/hatReducer";
import { useUserContext } from "./UserContext";

const HatContext = createContext([]);

export function useHatContext() {
    return useContext(HatContext);
}

export function HatProvider(props) {
    const { user } = useUserContext();

    const { mutate: addHat } = useMutation({
        mutationFn: async (hat) => {
            const { data } = await axios.put("/api/hatfavorites/addHat", {
                hat,
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
    const { mutate: removeHat } = useMutation({
        mutationFn: async (module_id) => {
            const { data } = await axios.delete(`/api/hat/delete/${module_id}`);
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

    const [hats, dispatch] = useReducer(hatReducer, INITIAL_HAT_STATE);

    const setHat = useCallback(
        (hat) => {
            dispatch({ type: SET_HAT, payload: hat });
        },
        [dispatch]
    );

    const addToState = useCallback(
        (hat) => {
            dispatch({ type: ADD_HAT, payload: hat });
        },
        [dispatch]
    );

    const removeFromState = useCallback(
        (module_id) => {
            dispatch({ type: REMOVE_HAT, payload: module_id });
        },
        [dispatch]
    );

    const clearHat = useCallback(() => {
        dispatch({ type: CLEAR_HAT });
    }, [dispatch]);

    return (
        <HatContext.Provider
            value={{
                hats,
                addHat,
                removeHat,
                clearHat,
                setHat,
            }}
        >
            {props.children}
        </HatContext.Provider>
    );
}
