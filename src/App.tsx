import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Route";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <BrowserRouter>
            <AnimatePresence exitBeforeEnter>
                <Router />
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;
