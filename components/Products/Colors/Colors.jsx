import React from "react";
import styles from "./Colors.module.css";

function Colors() {
  return (
    <div className={styles.container}>
      <h2> Colors</h2>
      <div>
        <span> All</span>
        <div className={styles.red}></div>
        <div className={styles.green}> </div>
        <div className={styles.purple}> </div>
        <div className={styles.black}> </div>
        <div className={styles.yellow}> </div>
      </div>
    </div>
  );
}

export default Colors;
