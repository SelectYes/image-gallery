import React from "react";
import "./nav-item.styles.scss";

export default function NavItem({ topic }) {
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="item-container">
      <h3>{capitalise(topic)}</h3>
    </div>
  );
}
