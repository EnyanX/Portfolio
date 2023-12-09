import React from "react";
import "./Overview.css";
import { Row, Col } from "react-bootstrap";
import ProcedureIcon from "../../Assets/procedure-icon.png";
import FrontEndIcon from "../../Assets/frontend-icon.png";
import ChessIcon from "../../Assets/chess-icon4.png";
import IdeaIcon from "../../Assets/idea-icon3.png";
import { ASPECTS, ASPECT_DETAILS } from "../../data/data";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function Overview() {
    const aspectIcons = [ProcedureIcon, FrontEndIcon, IdeaIcon, ChessIcon];

    return (
      <div className="overview">
        <SectionHeader sectionName="OVERVIEW" />
        <Row>
          <Col md={1}></Col>
          <Col md={7}>
            <p className="overview-description">
              I'm a software engineer with experience in both Backend and
              Frontend. My passion lies in leveraging technology to tackle
              complex business challenges. Fun facts, I'm a technical content
              creator and chess player in my free time!
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
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
      </div>
    );
}
