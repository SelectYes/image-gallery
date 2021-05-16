import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import NavItem from "../nav-item/nav-item.component";

import "./navbar.styles.scss";

export default function Navbar({ topicArray, handleClick, currentTopic }) {
  const [active, setActive] = useState(false);

  const navItems = topicArray.map((item) => {
    return (
      <NavItem
        currentTopic={currentTopic}
        handleClick={handleClick}
        key={uuidv4()}
        topic={item}
      />
    );
  });
  return <div className="nav-container">{navItems}</div>;
}
