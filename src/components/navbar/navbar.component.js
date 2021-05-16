import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import NavItem from "../nav-item/nav-item.component";

import "./navbar.styles.scss";

export default function Navbar({
  topicArray,
  handleClick,
  currentTopic,
  isMenuActive,
}) {
  const [numArrowClicks, setNumArrowClicks] = useState(0);

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
  return (
    <div className={`nav-container ${!isMenuActive ? "menu-inactive" : ""}`}>
      {navItems}
    </div>
  );
}
