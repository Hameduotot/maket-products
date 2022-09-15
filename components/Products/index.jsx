import React from "react";
import HomeNav from "./HomeNav/HomeNav";
import MainProduct from "./MainProduct/MainProduct";
import SideProduct from "./SideProduct/SideProduct";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import { selectIds } from "../../features/Readucers/getDataSlice";

function index({ products }) {
  const ids = useSelector(selectIds);
  const { data } = useSelector((state) => state.post);

  return (
    <div>
      <HomeNav />
      <div className={styles.wrapper}>
        <SideProduct data={data} />
        <MainProduct productsIds={ids} />
      </div>
    </div>
  );
}

export default index;
