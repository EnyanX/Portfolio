import React from "react";
import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectRow from "./ProjectRow";
import { TypeAnimation } from "react-type-animation";
import { PROJECTS } from "../../data/data";
import Grow from "../../Assets/Grow.png";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function Project() {
  const groupedProjects = [];
  const itemPerRow = 3;
  for (let i = 0; i < PROJECTS.length; i += itemPerRow) {
    groupedProjects.push(
      PROJECTS.slice(i, Math.min(i + itemPerRow, PROJECTS.length))
    );
  }

  // preload images for smooth display
  for (let i = 0; i < groupedProjects.length; i++) {
    for (let j = 0; j < groupedProjects[i].length; j++) {
      const img = new Image();
      img.src = groupedProjects[i][j];
    }
  }

  return (
    <section className="project">
      <div className="grow">
        <img src={Grow} alt="grow" />
      </div>
      <Row>
        <Col md={1}></Col>
        <SectionHeader sectionName="PROJECTS" className="project-header" />
      </Row>
      <TypeAnimation
        sequence={[
          "Web, Distributed System, Mobile, Game... You name it! ",
          800,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "13pt",
          display: "inline-block",
          fontFamily: "'Josefin Sans', sans-serif",
        }}
        repeat={Infinity}
      />
      <Container className="project-content">
        {groupedProjects.map((group, index) => (
          <ProjectRow key={index} projects={group} />
        ))}
      </Container>
      <div className="project-footer">STAY TUNED 👀</div>
    </section>
  );
}