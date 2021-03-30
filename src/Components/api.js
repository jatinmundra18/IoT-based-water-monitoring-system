import React, { useState } from "react";
import Axios from "axios";


function Api() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://api.thinger.io/v1/users/luthra1411/devices/NODEMCU/tokens?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJOT0RFTUNVIiwiaWF0IjoxNjEzMzY2MjU1LCJqdGkiOiI2MDJhMDNlZmRlNWM3YzA4ZjYwYjg1YWIiLCJzdnIiOiJhcC1zb3V0aGVhc3QuYXdzLnRoaW5nZXIuaW8iLCJ1c3IiOiJsdXRocmExNDExIn0.OXHD5DeQ72czY37KH9fUnRbjDJQRRIhdrgbep98iboI").then(
      (response) => {
        setJoke(response.data[0].id);
      }
    );
  };
  return (
    <div className="Api">
          Volume = {joke} <button onClick = {getJoke}>Refresh</button>
    </div>
    )
}

export default Api;
