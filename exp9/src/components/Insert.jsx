import axios from "axios";
import React from "react";

const Insert = () => {
  function saveData() {
    var id = document.getElementsByName("idn")[0].value;
    var name = document.getElementsByName("namen")[0].value;

    axios
      .post("http://localhost:8081/product", {
        id: parseInt(id),
        name: name,
      })
      .then((res) => {
        alert(res.data);
      });
  }

  return (
    <div
      // to center the div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Insert Product</h1>
      ID : <input type="text" name="idn" />
      <br />
      <br />
      Name : <input type="text" name="namen" />
      <br />
      <br />
      <button onClick={saveData}> Save</button>
    </div>
  );
};

export default Insert;
