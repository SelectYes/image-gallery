import React from "react";
import styles from "./nav-item.module.scss";
import capitalise from "../../utils";

export default function NavItem({ topic, handleClick, currentTopic }) {
  return (
    <div className={styles.itemWrapper}>
      <div
        className={`${styles.itemSpacing} ${
          currentTopic === topic ? styles.itemSpacingActive : ""
        }`}
      ></div>
      <div
        onClick={() => handleClick(topic)}
        className={`${styles.itemContainer} ${
          currentTopic === topic ? styles.active : ""
        }`}
      >
        <h3>{capitalise(topic)}</h3>
      </div>
    </div>
  );
}
