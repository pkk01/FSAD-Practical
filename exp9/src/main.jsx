import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Delete from "./components/Delete.jsx";
import Retrieve from "./components/Retrieve.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Retrieve />
  </StrictMode>
);
