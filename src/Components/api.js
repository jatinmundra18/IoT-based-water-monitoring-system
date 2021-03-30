import React, { useState, useEffect } from "react";
import Axios from "axios";


function Api() {
  const [joke, setJoke] = useState("");//taken 'joke' for 'volume just for reference

  const getJoke = () => {
    Axios.get("https://api.thinger.io/v1/users/luthra1411/devices/NODEMCU/tokens?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJOT0RFTUNVIiwiaWF0IjoxNjEzMzY2MjU1LCJqdGkiOiI2MDJhMDNlZmRlNWM3YzA4ZjYwYjg1YWIiLCJzdnIiOiJhcC1zb3V0aGVhc3QuYXdzLnRoaW5nZXIuaW8iLCJ1c3IiOiJsdXRocmExNDExIn0.OXHD5DeQ72czY37KH9fUnRbjDJQRRIhdrgbep98iboI").then(
      (response) => {
        setJoke(response.data[0].id);
      }
    );
  };


  /* 
  useEffect function is run only once on page load.
  Earlier you had to click refresh button to call getJoke function
  However with this change getJoke will be called on page load and joke variable 
  will be initialized with api values
  */
  useEffect(() => {

    getJoke()

    // assuming joke is integer

    /*
    if (joke > 30) {
        // call you twillio message function
        // sendSmsTwiilio(username, mobileNumber)
    } else {
        // console.log('not sending any sms as usage within quota limit')
    }
    */



  }, [])


  return (
    <div className="Api">

      {joke === "" ? <p>Loading...</p> : <p> Volume = {joke} </p>}

      <button onClick={getJoke}>Refresh</button>
    </div>
  )
}

export default Api;
