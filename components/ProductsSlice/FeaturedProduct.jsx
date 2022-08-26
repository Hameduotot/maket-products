import Card from "../Card/Card";
import React from "react";
import styles from "./FeaturedProduct.module.css";
import { useSelector } from "react-redux";

function FeaturedProduct() {
  let products = useSelector((state) => state.post.data) 
      products = products === null ? [] :products
  const productsSlice = products.filter((product, index) => index < 3);
  return (
    <div className={styles.container}>
      {productsSlice.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export default FeaturedProduct;
