import axios from "axios";
import React from "react";
import "./style.css";
const Signin = ({ store }) => {
  function checkUser() {
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;

    axios
      .post("http://localhost:8085/check", {
        username: username,
        password: password,
      })
      .then((res) => {
        alert(res.data);
        if (res.data != "0") {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("role", res.data);
          store.dispatch({ type: "page", data: "Home" });
        }
      });
  }

  return (
    <div>
      <center>
        <div className="signin-box">
          <table>
            <tr>
              <td colSpan={2}> Signin Page</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>
                <input class="form-control" type="text" name="username" />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input class="form-control" type="password" name="password" />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {" "}
                <button onClick={checkUser}> Login</button>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Signin;
