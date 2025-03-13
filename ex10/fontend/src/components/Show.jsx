import React from "react";
import Admin from "./Admin";
import ResponsiveAppBar from "./Appbar";
import Error from "./Error";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import "./style.css";

const Show = ({ store }) => {
  function Display() {
    switch (store.getState()) {
      case "Signin":
        return (
          <div>
            <Signin store = {store} />
          </div>
        );
      case "Signup":
        return (
          <div>
            <Signup />
          </div>
        );
      case "Home":
        if (
          sessionStorage.getItem("role") == 1 ||
          sessionStorage.getItem("role") == 2
        )
          return (
            <div>
              <Home />
            </div>
          );
        else
          return (
            <div>
              <Error />
            </div>
          );
      case "Admin":
        if (sessionStorage.getItem("role") == 1)
          return (
            <div>
              <Admin />
            </div>
          );
        else
          return (
            <div>
              <Error />
            </div>
          );
    }
  }

  return (
    <div className="parent">
      <div className="menu-bar">
        <ResponsiveAppBar store={store} />
      </div>
      <div className="page">
        <Display />
      </div>
    </div>
  );
};

export default Show;
