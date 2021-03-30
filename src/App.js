import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/sidebar"
import Api from "./Components/api";



/*
For more about grid layout documentation check this
https://reactstrap.github.io/components/layout/
*/
import { Container, Row, Col } from 'reactstrap';

function App() {

  return (

    <Container className="App" fluid>

      <Row>

        {/* a total column is divided into 12 parts  */}

        {/* we are giving side bar 4 space units */}

        {/* and main page 8 space units */}

        <Col xs={2}>

          {/* 
          
          instead of using a custom made side bar, would recommend  
          
          to use material ui side bar
          
          https://material-ui.com/components/drawers/
          
          */}


          <Sidebar />


        </Col>

        <Col xs={10}>

          <Api/>

        </Col>

      </Row>




    </Container>


  )
}

export default App;
