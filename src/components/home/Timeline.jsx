import React from "react";
import { Row, Col } from "react-bootstrap";
import { Chrono } from "react-chrono";
import { TIMELINES } from "../../data/data";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function Timeline() {

  return (
    <div style={{animation: 'fade-in 5s'}}>
      <SectionHeader sectionName="TIMELINE" />
      <Row>
        <Col md={2}></Col>
        <Col>
          <div style={{}}>
            <Chrono
              scrollable
              items={TIMELINES}
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
      </Row>
    </div>
  );
}
