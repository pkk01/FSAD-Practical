import axios from "axios";
import React from "react";
import "./style.css";
const Signup = () => {
  function insertUser() {
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const role = document.getElementsByName("role")[0].value;

    axios
      .post("http://localhost:8085/user", {
        username: username,
        password: password,
        role: role,
      })
      .then((res) => {
        alert(res.data);
      });
  }
  return (
    <div>
      <center>
        <div className="signin-box">
          <table>
            <tr>
              <td colSpan={2}> Signup Page</td>
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
              <td>Role</td>
              <td>
                <select class="form-select" name="role">
                  <option value={1}>Admin</option>
                  <option value={2}>User</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button onClick={insertUser}> Signup</button>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Signup;
