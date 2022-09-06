import React from "react";
import { createRoot } from "react-dom/client";
import Notes from "./components/notes/Notes";

// import style css
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<Notes />);
