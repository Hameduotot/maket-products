import Link from "next/link";
import React from "react";
import Card from "../../Card/Card";
import NextLink from "../../NextLink";
import styles from "./MainProduct.module.css";

function MainProduct({ products = [] }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <NextLink
          href={{
            pathname: "/product/[slug]",
            query: { slug: product.id },
          }}
          key={product.id}
        >
          <Card product={product} />
        </NextLink>
      ))}
    </div>
  );
}

export default MainProduct;
