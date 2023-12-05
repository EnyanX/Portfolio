import React from "react";
import "./Links.css";
import { Row, Col } from "react-bootstrap";
import github from "../../Assets/github.svg";
import linkedin from "../../Assets/linkedin.svg";

export default function Links() {
    return <Row className=".icons-row ">
        <Col md={1}>
            <a href="https://www.linkedin.com/in/enyan-xia/">
                <img src={linkedin} alt="linkedin-icon" className="icon"/>
            </a>
        </Col>
        <Col md={1}>
            <a href="https://github.com/EnyanX/">
                <img src={github} alt="github-icon" className="icon"/>
            </a>
        </Col>
        
    </Row>
}