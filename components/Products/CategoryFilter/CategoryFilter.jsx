import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterColor } from "../../../features/Readucers/getDataSlice";
import styles from "./CategoryFilter.module.css";

function CategoryFilter() {
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
  const { data } = useSelector((state) => state.post);
  const handleClick = (category) => {
    dispatch(filterColor({ data, category }));
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
