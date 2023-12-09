import React from "react";
import { Col } from "react-bootstrap";
import './SectionHeader.css';

export default function SectionHeader({sectionName, colSize}) {
    return (
      <Col>
        <h1 className="big-text"><u>{sectionName}</u></h1>
      </Col>
    );
}
