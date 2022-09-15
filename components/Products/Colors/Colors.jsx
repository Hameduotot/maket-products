import { useDispatch } from "react-redux";
import { filterColorList } from "../../../features/Readucers/getDataSlice";
import styles from "./Colors.module.css";

function Colors({ dataColors }) {
  const colors = ["#ff0000", "#ffb900", "#00ff00", "#0000ff", "#000"];
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h2> Colors</h2>
      <div>
        <span
          onClick={() =>
            dispatch(filterColorList({ color: "all", dataColors }))
          }
        >
          All
        </span>
        <>
          {colors.map((color) => {
            return (
              <div
                onClick={() => dispatch(filterColorList({ color, dataColors }))}
                style={{
                  background: color,
                  width: "20px",
                  borderRadius: "50%",
                  height: "20px",
                }}
              />
            );
          })}
        </>
      </div>
    </div>
  );
}

export default Colors;
