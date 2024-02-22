import React from "react";
import "./ProjectCard.css";
import LinkIcon from "../../Assets/link-solid.svg";
import GithubIcon from "../../Assets/github.svg";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectCard({
  image,
  title,
  description,
  techStack,
  link,
  github,
}) {
  return (
    <Container className="project-card">
      <h5>{title}</h5>
      <div>
        <img src={image} alt="project" />
      </div>
      <p className="project-card-description">{description}</p>
      <p className="project-card-tech-stack">{techStack}</p>

      {/* center scaled row inside the container */}
      <div className="d-flex justify-content-center">
        <div className="centered-row">
          <Row>
            {link && (
              <Col>
                <a
                  className="project-card-href"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkIcon} alt="demo-link" />
                </a>
              </Col>
            )}

            {github && (
              <Col>
                <a
                  className="project-card-href"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GithubIcon} alt="github-link" />
                </a>
              </Col>
            )}
          </Row>
        </div>
      </div>
    </Container>
  );
}
