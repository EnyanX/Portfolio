import React from "react";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectRow from "./ProjectRow";
import { PROJECTS } from "../../data/data";

export default function Work() {
    const groupedProjects = [];
    const itemPerRow = 3;
    for(let i = 0; i < PROJECTS.length; i += itemPerRow) {
        groupedProjects.push(PROJECTS.slice(i, Math.min(i + itemPerRow, PROJECTS.length)));
    }

    return (
      <Container className="work">
        <Row className="work-header">
          <Col md={1}></Col>
          <Col md={2}>
            <h1 className="big-text">PROJECTS</h1>
            <hr></hr>
          </Col>
        </Row>
        <Container className="work-content">
          {groupedProjects.map((group, index) => (
            <ProjectRow key={index} projects={group} />
          ))}
        </Container>
      </Container>
    );
}