import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import { Provider } from "react-redux";
import { store } from "../features/Store/store";

export default function Home() {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}
