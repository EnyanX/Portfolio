import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import Beijing from "../../Assets/ExperienceBeijing.png"
import Portfolio from "../../Assets/Portfolio.png";
import Raft from "../../Assets/RaftAlgo.jpeg";

export default function ProjectRow({projectIdx}) {

    return (
      <Row style={{ margin: "100px"}}>
        <Col md={4}>
          {" "}
          <ProjectCard dummyImg={Portfolio} title="Personal Website" description="😉 Heyyy you on the site now!"/>
        </Col>
        <Col md={4}>
          {" "}
          <ProjectCard dummyImg={Beijing} title="Experience Beijing" description="Beijing is the best"/>
        </Col>
        <Col md={4}>
          {" "}
          <ProjectCard dummyImg={Raft} title="Raft Concensus Algo Impl" description="Distributed System "/>
        </Col>
      </Row>
    );
}