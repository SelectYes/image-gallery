import React from "react";
import "./nav-item.styles.scss";

export default function NavItem({ topic, handleClick, currentTopic }) {
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div
      onClick={() => handleClick(topic)}
      className={`item-container ${currentTopic === topic ? "active" : ""}`}
    >
      <h3>{capitalise(topic)}</h3>
    </div>
  );
}
