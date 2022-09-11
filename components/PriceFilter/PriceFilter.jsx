import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPriceList } from "../../features/Readucers/getDataSlice";
import styles from "./PriceFilter.module.css";

function PriceFilter({ dataPrice }) {
  const [value, setValue] = useState(50);
  const dispatch = useDispatch();
  const handleOnChaged = (e) => {
    setValue(e.target.value);
    dispatch(filterPriceList({ value, data: dataPrice }));
  };
  return (
    <div>
      <div className={styles["show-price"]}>
        <span>Price </span>
        <span>{value}$</span>
      </div>
      <input
        type="range"
        value={value}
        className={styles.range}
        max={"3000"}
        onChange={handleOnChaged}
      />
    </div>
  );
}

export default PriceFilter;
