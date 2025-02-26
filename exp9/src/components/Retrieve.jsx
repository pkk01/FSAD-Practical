

import axios from "axios";
import React, { useState,  } from "react";
const Retrieve = () => {
  const [result, setResult] = useState(null);

  if (result == null) {
    axios.get("http://localhost:8081/product", {}).then((res) => {
      
      setResult(res.data);
    });
  }

  if (result === null) return (<div>Data is Fetching...</div>)
  else
    return (
      <table border={1}>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
          </tr>
        

        {result.map((element) => {
          return (
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
            </tr>
          );
        })}
      </table>
    );
};

export default Retrieve;
