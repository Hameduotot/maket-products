import { useRouter } from "next/router";
import React from "react";
import styles from "./HomeNav.module.css";
function HomeNav() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <span className={styles.home}> Home &nbsp;</span>{" "}
      <span className={styles.products}> {router.asPath} &nbsp;</span>
    </div>
  );
}

export default HomeNav;
