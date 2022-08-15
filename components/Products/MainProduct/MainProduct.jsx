import React from "react";
import Card from "../../Card/Card";
import { products } from "../../ProductsSlice/FeaturedProduct";
import styles from "./MainProduct.module.css";

function MainProduct() {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export default MainProduct;
