import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Axios from "axios";
import MyCard from "./MyCard";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE:", data);
    const details = data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
