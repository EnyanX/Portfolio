import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/data";

export default function ProjectRow({projects}) {
    return (
      <Row style={{ margin: "100px" }}>
        {projects.map((project, idx) => (
          <Col md={4}>
            {" "}
            <ProjectCard
              key={idx}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          </Col>
        ))}
      </Row>
    );
}