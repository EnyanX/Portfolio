import React from "react";
import { Row, Col } from "react-bootstrap";
import './SectionHeader.css';

export default function SectionHeader({sectionName, colSize}) {
    return (
      <Row>
        <Col md={1} />
        <Col>
          <h1 className="big-text">
            <u>{sectionName}</u>
          </h1>
        </Col>
      </Row>
    );
}
