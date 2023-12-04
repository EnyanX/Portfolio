import React from "react";
import github from "../../Assets/github.svg";
import linkedin from "../../Assets/linkedin.svg";
import email from "../../Assets/envelope-solid.svg";
import "./Icons.css";

import { Row, Col } from "react-bootstrap";

export default function Icons() {
    return <Row className=".icons-row ">
        <Col md={1}>
        <a href="https://github.com/EnyanX/">
            <img src={github} alt="github-icon" className="icon"/>
            </a>
        </Col>
        <Col md={1}>
            <img src={linkedin} alt="linkedin-icon" className="icon"/>
        </Col>
        <Col md={1}>
            <img src={email} alt="linkedin-icon" className="icon"/>
        </Col>
    </Row>
}