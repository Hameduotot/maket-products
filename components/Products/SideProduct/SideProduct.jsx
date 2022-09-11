import React from "react";
import PriceFilter from "../../PriceFilter/PriceFilter";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Colors from "../Colors/Colors";
import Company from "../Company/Company";
import styles from "./SideProduct.module.css";
function SideProduct({ data }) {
  return (
    <div className={styles.container}>
      <input />
      <h5 className={styles.category}>Category</h5>
      <CategoryFilter />
      <Company dataCompany={data} />
      <Colors dataColors={data} />
      <PriceFilter dataPrice={data} />
    </div>
  );
}

export default SideProduct;
