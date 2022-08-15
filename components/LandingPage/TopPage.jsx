import React from "react";
import styles from "./TopPage.module.css";
function TopPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postWrapper}>
        <div className={styles.postText}>
          <h1> Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            animi deserunt, debitis ipsam harum sequi amet doloremque ex alias
            minus.
          </p>
        </div>
      </div>
      <div className={styles.imageBox}>
        <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg" />
        <img className={styles.secondImg} src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg" />
      </div>
    </div>
  );
}

export default TopPage;
