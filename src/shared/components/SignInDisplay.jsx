import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { connect, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { Nav } from "../styled/Nav";
import { setUser } from "../redux/slices/userSlice";

function SignInDisplay({ setSynthFavorites }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.user);
    const synthFavorite = useSelector((state) => state.synthFavorites);
    const {
        data: resObject,
        error: reqError,
        mutate: login,
    } = useMutation({
        mutationFn: async (user) => {
            const { data } = await axios.post("/api/users/login", user);
            return data;
        },
        onSuccess: (res) => {
            if (res.success) {
                setUser(res.data.user);
                setSynthFavorites(res.data.synthFavorite);
            }
            return res;
        },
    });
    return (
        <>
            <Nav>
                <div style={{ display: "flex" }}>
                    <TextField
                        label="Username"
                        variant="standard"
                        size="small"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <TextField
                        label="Password"
                        variant="standard"
                        size="small"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                    />
                    <Button
                        disabled={username.length < 3 || password.length < 7}
                        onClick={() => {
                            if (username.length > 1 && password.length > 1) {
                                login({ username, password });
                            }
                        }}
                    >
                        Sign In
                    </Button>
                </div>
                {resObject && resObject.error}
                {reqError && <>Something went wrong , please try again later</>}
            </Nav>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({ setUser: (user) => dispatch(setUser(user)) });

const mapStateToProps = (state) => ({
    user: state.user,
    synthFavorites: state.synthFavorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInDisplay);
