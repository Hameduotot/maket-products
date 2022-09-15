import Card from "../Card/Card";
import React from "react";
import styles from "./FeaturedProduct.module.css";
import { useSelector } from "react-redux";
import { selectIds } from "../../features/Readucers/getDataSlice";

function FeaturedProduct() {
  const ids = useSelector(selectIds);

  const productsSliceids = ids.filter((id, index) => index < 3);
  return (
    <div className={styles.container}>
      {productsSliceids.map((productId) => (
        <Card id={productId} key={productId} />
      ))}
    </div>
  );
}

export default FeaturedProduct;
