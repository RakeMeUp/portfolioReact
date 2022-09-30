import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SectionContextProvider } from "./contexts/sectionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <SectionContextProvider>
        <App />
    </SectionContextProvider>
);
