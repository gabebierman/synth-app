import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { connect, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { Nav } from "../styled/Nav";
import { useSongContext } from "../context/SongContext";
import { useUserContext } from "../context/UserContext";
// import { setUser } from "../redux/slices/userSlice";

function SignInDisplay() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();
    const { setSong } = useSongContext();
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
                setUser(res.data);
                // setSong(res.data.favorites);
                console.log("user", res.data);
            }
            return res;
        },
    });

    return (
        <>
            <Nav style={{ width: "94%" }}>
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

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInDisplay);
