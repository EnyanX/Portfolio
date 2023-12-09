import React from "react";
import "./Links.css";
import { Row, Col } from "react-bootstrap";

export default function Links({linkContent}) {
    return <Row className=".icons-row ">
        {linkContent.map((content, index) => (
            <Col md={1} key={index}>
              <a href={content.site} target="_black">
                <img src={content.image} alt={content.alt} className="icon" />
              </a>
            </Col>
        ))}
    </Row>
}