import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Users from "./components/Users";
import Climate from "./components/Climate";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* uncomment when using 5a part --> fetching json data */}
    {/* <Users /> */}

    {/* 5b part fetching weather api api */}
    <Climate />
  </StrictMode>
);
