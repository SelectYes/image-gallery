import React from "react";
import "./nav-item.styles.scss";
import capitalise from "../../utils";

export default function NavItem({ topic, handleClick, currentTopic }) {
  return (
    <div className="item-wrapper">
      <div
        className={`item-spacing ${
          currentTopic === topic ? "item-spacing-active" : ""
        }`}
      ></div>
      <div
        onClick={() => handleClick(topic)}
        className={`item-container ${currentTopic === topic ? "active" : ""}`}
      >
        <h3>{capitalise(topic)}</h3>
      </div>
    </div>
  );
}
