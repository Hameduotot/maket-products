import React from "react";
import Link from "next/link";

const NextLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default NextLink;
