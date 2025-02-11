import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import Content from "./components/Content.jsx";
import NavReducer from "./components/reducer/NavReducer.jsx";
import "./index.css";

var store = createStore(NavReducer);

var customer = () => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Content store={store} />
    </StrictMode>
  );
};

customer();
store.subscribe(customer);
