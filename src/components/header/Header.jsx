import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { TAGS, PAGES } from "../../data/data";

export default function Header() {
  return (
    <nav>
      <ul>
        {TAGS.map((tag, idx) => (
          <NavLink
            key={tag}
            to={`/${PAGES[idx]}`}
            className="tag"
          >
            {tag}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
