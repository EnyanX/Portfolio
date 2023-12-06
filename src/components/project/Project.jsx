import React from "react";
import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectRow from "./ProjectRow";
import { PROJECTS } from "../../data/data";
import Grow from "../../Assets/Grow.png";

export default function Project() {
    const groupedProjects = [];
    const itemPerRow = 3;
    for(let i = 0; i < PROJECTS.length; i += itemPerRow) {
        groupedProjects.push(PROJECTS.slice(i, Math.min(i + itemPerRow, PROJECTS.length)));
    }

    // preload images for smooth display
    for (let i = 0; i < groupedProjects.length; i++) {
      for(let j = 0; j < groupedProjects[i].length; j++) {
        const img = new Image();
        img.src = groupedProjects[i][j];
      }
    }

    return (
      <Container className="project">
        <div className="grow"><img src={Grow} alt="grow"/></div>
        <Row className="project-header">
          <Col md={1}></Col>
          <Col md={2}>
            <h1 className="big-text">PROJECTS</h1>
            <hr></hr>
          </Col>
        </Row>
        <p className="comment"> "Web, Distributed System, Mobile, Game...You name it!" </p>
        <Container className="project-content">
          {groupedProjects.map((group, index) => (
            <ProjectRow key={index} projects={group} />
          ))}
        </Container>
        <div className="project-footer">
            STAY TUNED 👀
        </div>
      </Container>
    );
}