import React from "react";
import HomeNav from "./HomeNav/HomeNav";
import MainProduct from "./MainProduct/MainProduct";
import SideProduct from "./SideProduct/SideProduct";
import styles from "./Products.module.css";

function index() {
  return (
    <div>
      <HomeNav />
      <div className={styles.wrapper}>
        <SideProduct />
        <MainProduct />
      </div>
    </div>
  );
}

export default index;
