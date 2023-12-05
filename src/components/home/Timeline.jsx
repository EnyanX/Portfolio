import React from "react";
import "./Timeline.css";
import { Row, Col } from "react-bootstrap";
import { Chrono } from "react-chrono";
import { ITEMS } from "../../data/data";

export default function Timeline() {

  return (
    <div className="timeline">
      <Row>
        <Col md={1} />
        <Col>
          <h1 className="big-text">TIMELINE</h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        {/* <Fade in> */}
        <Col md={1}></Col>
        <Col>
          <div style={{}}>
            <Chrono
              scrollable
              items={ITEMS}
              mode="VERTICAL_ALTERNATING"
              theme={{
                primary: "#AEDEFC",
                secondary: "#A7D397",
                titleColor: "black",
                titleColorActive: "black",
              }}
            />
          </div>
        </Col>
        {/* </Fade> */}
      </Row>
    </div>
  );
}
