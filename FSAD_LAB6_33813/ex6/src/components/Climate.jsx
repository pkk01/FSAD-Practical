
import axios from "axios";
import { useEffect, useState } from "react";

export default function Climate() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios
      .get("https://open-weather13.p.rapidapi.com/city/vijayawada/EN", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-rapidapi-ua": "RapidAPI-Playground",
          "x-rapidapi-key": "c9dd8b464fmsh7c4f5a9a807cbb7p1140e4jsn8c77373b50c2",
          "x-rapidapi-host": "open-weather13.p.rapidapi.com",
        },
      })
      .then((res) => {
        setResult(res.data.main.temp);
        console.log(res.data.main.temp);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (result === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
        This is a Climate Display Page
        <br />
        <br />
        Data is fetching...
      </div>
    );
  }

  return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
    Vijayawada Temp is: {result}°F
    </div>;
}
