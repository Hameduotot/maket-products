import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainCard.module.css";
function MainCard() {
  const { card } = useSelector((state) => state.singlePageData);

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.titles}>
          <li>Item</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <hr />
        <ul className={styles.products}>
          <li></li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
      </div>
    </>
  );
}

export default MainCard;
