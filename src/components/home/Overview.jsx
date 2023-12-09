import React from "react";
import "./Overview.css";
import { Row, Col } from "react-bootstrap";
import ProcedureIcon from "../../Assets/procedure-icon.png";
import FrontEndIcon from "../../Assets/frontend-icon.png";
import ChessIcon from "../../Assets/chess-icon4.png";
import IdeaIcon from "../../Assets/idea-icon3.png";
import { ASPECTS, ASPECT_DETAILS, OVERVIEW_DESCRIPTION, TECH_CHANNEL_INTRO } from "../../data/data";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function Overview() {
    const aspectIcons = [ProcedureIcon, FrontEndIcon, IdeaIcon, ChessIcon];

    return (
      <div className="overview">
        <SectionHeader sectionName="OVERVIEW" />
        <Row>
          <Col md={1}></Col>
          <Col>
            <p className="overview-description">{OVERVIEW_DESCRIPTION}</p>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col md={1}></Col>
          {ASPECTS.map((aspect, index) => (
            <Col md={2} key={index} className="aspect">
              <div className="aspect-icon">
                <img src={aspectIcons[index]} alt="icon" />
              </div>
              <h4>{aspect}</h4>
              <p>{ASPECT_DETAILS[index]}</p>
            </Col>
          ))}
        </Row>
        <Row className="tech-channel">
          <Col md={1}></Col>
          <Col>
            <p>{TECH_CHANNEL_INTRO}</p>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
}
