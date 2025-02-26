import axios from "axios";
import React from "react";

const Delete = () => {
  function deleteData() {
    var id = document.getElementsByName("idn")[0].value;

    axios.delete("http://localhost:8081/product/" + id, {}).then((res) => {
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
      <h1>Delete Product</h1>
      <br />
      ID : <input type="text" name="idn" />
      <br />
      <br />
      <button onClick={deleteData}> Delete</button>
    </div>
  );
};

export default Delete;
