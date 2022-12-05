import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#bedc7f",
        },
        secondary: {
            main: "#89a257",
        },
        background: {
            default: "#112318",
            paper: "#4d8061",
        },
        text: {
            primary: "#bedc7f",
            secondary: "#bedc7f",
        },
    },
    components: {
        // Name of the component
        MuiSelect: {
            styleOverrides: {
                // Name of the slot
                root: {
                    border: "1px solid",
                    borderColor: "#89a257",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {
                    border: "1px 1px 1px 1px solid",
                    borderColor: "#89a257",
                },
            },
        },
    },
});
