import React from "react";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectRow from "./ProjectRow";

export default function Work() {
    return (
      <Container className="work">
        <Row>
            <Col md={1} ></Col>
            <Col md={2}>
                <h1 className="big-text">PROJECTS</h1>
                <hr></hr>
            </Col>
        </Row>
        <Container className="work-content">
          <ProjectRow />
        </Container>
      </Container>
    );
}