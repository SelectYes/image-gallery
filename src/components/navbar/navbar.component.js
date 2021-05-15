import React from "react";

import { v4 as uuidv4 } from "uuid";

import NavItem from "../nav-item/nav-item.component";

import "./navbar.styles.scss";

export default function Navbar({ topicArray }) {
  const navItems = topicArray.map((item) => {
    return <NavItem key={uuidv4()} topic={item} />;
  });
  return <div className="nav-container">{navItems}</div>;
}
