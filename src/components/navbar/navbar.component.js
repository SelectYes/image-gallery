import React from "react";
import NavItem from "../nav-item/nav-item.component";

export default function Navbar({ topicArray }) {
  const navItems = topicArray.map((item) => {
    return <NavItem topic={item} />;
  });
  return <div className="nav-container">{navItems}</div>;
}
