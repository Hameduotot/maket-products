import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterColor } from "../../../features/Readucers/getDataSlice";
import styles from "./Colors.module.css";

function Colors() {
  const [colors, setColors] = useState([]);
  const { data } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const filterColorData = () => {
    data.map((elem) => {
      elem.colors.map((color) => {
        if (!colors.includes(color)) {
          setColors([...colors, color]);
        }
      });
    });

    return colors;
  };

  useEffect(() => {
    filterColorData();
  }, []);
  //   0: "#ff0000"
  // 1: "#ffb900"
  // 2: "#00ff00"
  // 3: "#0000ff"
  // 4: "#000"

  return (
    <div className={styles.container}>
      <h2> Colors</h2>
      <div>
        <span> All</span>
        <>
          {colors.map((color) => {
            let colorEdited = color.slice(1);
            return <div className={styles[colorEdited]}></div>;
          })}
        </>
      </div>
    </div>
  );
}

export default Colors;
