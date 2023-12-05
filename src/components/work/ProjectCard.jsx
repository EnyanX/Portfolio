import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({dummyImg, title, description}) {
    return <div className="project-card">
        <div>
            <img src={dummyImg} />
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
        <p>tech stack & link</p>
    </div>
}