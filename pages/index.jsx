
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/Readucers/getDataSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.post);

  useEffect(() => {
    if (data === null) {
      dispatch(fetchData());
    }
  }, []);
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}
