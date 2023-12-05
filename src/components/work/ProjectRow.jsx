import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default function ProjectRow({projectIdx}) {
    return (
      <Row style={{ marginLeft: "50px" }}>
        <Col md={1}></Col>
        <Col md={4}>
          {" "}
          <ProjectCard />
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          {" "}
          <ProjectCard />
        </Col>
      </Row>
    );
}