import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory } from "../../../features/Readucers/getDataSlice";
import styles from "./CategoryFilter.module.css";

function CategoryFilter({ dataCompany }) {
  const categoryList = [
    "All",
    "Office",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
    "Kids",
  ];
  const dispatch = useDispatch();

  const handleClick = (category) => {
    dispatch(filterCategory(dataCompany, category));
  };
  return (
    <ul className={styles.container}>
      {categoryList.map((categoryItem) => (
        <li
          onClick={() => handleClick(categoryItem.toLowerCase())}
          key={categoryItem}
        >
          {categoryItem}
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
