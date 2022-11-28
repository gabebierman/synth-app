import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/shared/redux/store";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/themes/Themes";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserProvider } from "./shared/context/UserContext";
import { FavoritesProvider } from "./shared/context/FavoritesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <FavoritesProvider>
                    <Provider store={store}>
                        <CssBaseline />
                        <App />
                    </Provider>
                </FavoritesProvider>
            </UserProvider>
        </QueryClientProvider>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
