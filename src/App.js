import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data && data.length > 0 && data.map((item) => <div className="data">
        <p className="index">{item.index}</p>
        <p>Name : {item.name}</p>
        <p>Gender: {item.gender}</p>
        <p>Age : {item.age}</p>

        <p>Picture: {item.picture}</p>
        <p>Email: {item.email}</p>

        <p>Company: {item.company}</p>
        <p>Balance: {item.balance}</p>
        <p>Address: {item.address}</p>
        <p>About: {item.about}</p>

      </div>
      )
      }
    </div>
  );
}

export default App;
