import React from "react";
import Link from "next/link";
import styles from "./AllProductBtn.module.css";

function AllProductBtn() {
  return (
    <div className={styles.container}>
      <Link href="/product">
        <button >All-Product</button>
      </Link>
    </div>
  );
}

export default AllProductBtn;
