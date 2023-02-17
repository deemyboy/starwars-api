import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
function prepare() {
    if (process.env.NODE_ENV === "development") {
        const { worker } = require("./mocks/browser");
        return worker.start();
    }
    return Promise.resolve();
}
prepare().then(() => {
    const root = ReactDOM.createRoot(
        document.getElementById("root") as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});
