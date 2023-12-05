import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Role from "./Role";
import Links from "./Links";
import ProfileImage from "../../Assets/profile-image.jpg";
import DownArrow from "../../Assets/circle-down-solid.svg";
import Ray from "../../Assets/ray.png";
import Pattern1 from "../../Assets/dots.png";
import Overview from "./Overview";
import Timeline from "./Timeline";


export default function Home() {
  return (
    <section id="home">
      <div className="ray"><img src={Ray} alt="ray" className="animation-jello"/></div>
      <div className="pattern1"><img src={Pattern1} alt="pattern" className="animation-jello"/></div>
      <Container className="home-content">
        <Row>
          <Col md={1} />
          <Col md={7} className="home-header">
            <h3 className="home-greeting">
              Greetings! i'm
            </h3>
            <p><span className="home-name"> ENYAN (EVELYN) XIA </span></p>
            <Role className="role"/>
            <hr></hr>
            <Links className="icons"/>
          </Col>
          <Col md={3}>
            <img src={ProfileImage} alt="profile" className="home-image"/>
          </Col>
        </Row>
        <Row className="arraw-row"><img src={DownArrow} alt="arrow" className="home-arrow"/></Row>
        <Overview />
        <Timeline />
      </Container>
    </section>
  );
}
