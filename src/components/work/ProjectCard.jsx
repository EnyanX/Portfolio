import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({dummyImg, title, description}) {
    return <div className="project-card">
        <h5>{title}</h5>
        <div>
            <img src={dummyImg} />
        </div>
        <p className="project-card-description">{description}</p>
        <p className="project-card-tech-stack">tech stack & link</p>
    </div>
}