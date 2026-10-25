import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AreaSwitch } from "./area-switch";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element #root is missing.");
}

createRoot(root).render(
    <StrictMode>
        <AreaSwitch home={<App />} />
    </StrictMode>,
);
