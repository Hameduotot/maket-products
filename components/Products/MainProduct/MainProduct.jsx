import React from "react";
import Card from "../../Card/Card";
import NextLink from "../../NextLink";
import styles from "./MainProduct.module.css";

function MainProduct({ productsIds = [] }) {
  return (
    <div className={styles.container}>
      {productsIds.map((id) => (
        <NextLink
          href={{
            pathname: "./product/[slug]",
            query: { slug: id },
          }}
          key={id}
        >
          <Card id={id} />
        </NextLink>
      ))}
    </div>
  );
}

export default MainProduct;
