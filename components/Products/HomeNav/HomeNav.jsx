import React from "react";
import styles from "./HomeNav.module.css";
function HomeNav() {
  return (
    <div className={styles.container}>
      <span className={styles.home}> Home &nbsp;</span>{" "}
      <span className={styles.products}> / Products &nbsp;</span>
    </div>
  );
}

export default HomeNav;
