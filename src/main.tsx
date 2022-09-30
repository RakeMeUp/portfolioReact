import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { SectionContextProvider } from "./contexts/sectionContext";
import "./index.css";
import { theme } from "./styles/theme.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <SectionContextProvider>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </SectionContextProvider>
);
