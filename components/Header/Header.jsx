import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import CardICon from "./CardIcon/CardICon";
import NextLink from "../NextLink";

function Header() {
  const nav = ["Home", "About", "product"];
  return (
    <nav className={styles.nav}>
      <div className={styles.navbarHeader}>
        <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" />
      </div>
      <div className={styles.navbarNavitems}>
        <ul>
          {nav.map((navitem) => (
            <li key={navitem}>
              <Link href={`/${navitem == "Home" ? "/" : navitem}`}>
                <a>{navitem}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.iconsHeader}>
        <NextLink
          href={{
            pathname: "/card",
          }}
        >
          <CardICon />
        </NextLink>

        <div className="login-header">login</div>
      </div>
    </nav>
  );
}

export default Header;
