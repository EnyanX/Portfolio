import React from "react";
import "./ProjectCard.css";
import LinkIcon from "../../Assets/link-solid.svg";

export default function ProjectCard({image, title, description, techStack, link}) {
    return (
      <div className="project-card">
        <h5>{title}</h5>
        <div>
          <img src={image} alt="project" />
        </div>
        <p className="project-card-description">{description}</p>
        <p className="project-card-tech-stack">{techStack}</p>
        {link && (
          <div className="link-icon">
            <a href={link} target="_blank" rel="noreferrer"><img src={LinkIcon} alt="link"/></a>
          </div>
        )}
      </div>
    );
}