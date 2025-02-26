import axios from "axios";
import React from "react";

const Update = () => {
  function updateData() {
    var id = document.getElementsByName("idn")[0].value;
    var name = document.getElementsByName("namen")[0].value;

    axios
      .put("http://localhost:8081/product", {
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
      <h1>Update Product</h1>
      ID : <input type="text" name="idn" />
      <br />
      <br />
      Name : <input type="text" name="namen" />
      <br />
      <br />
      <button onClick={updateData}> Update</button>
    </div>
  );
};

export default Update;
