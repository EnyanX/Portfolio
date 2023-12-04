import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Role from "./Role";
import Icons from "./Icons";

export default function Home() {
  return (
    <section id="home">
      <Container className="home-content">
        <Row>
          <Col md={1} />
          <Col md={7} className="home-header">
            <h3 className="home-greeting"> 
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻 {" "} 
              </span> 
              Greetings! i'm
            </h3>
            <h1 className="home-name">
              <strong> ENYAN (EVELYN) XIA </strong>
            </h1>
            <Role className="role"/>
            <hr></hr>
            <Icons className="icons"/>
            
          </Col>

          
        </Row>
      </Container>
    </section>
  );
}
