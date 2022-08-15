import React from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Colors from "../Colors/Colors";
import Company from "../Company/Company";
import styles from "./SideProduct.module.css";
function SideProduct() {
  return (
    <div className={styles.container}>
      <input />
      <span>Category</span>
      <CategoryFilter />
      <Company />
      <Colors />
    </div>
  );
}

export default SideProduct;
