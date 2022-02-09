import React from "react";
import { NAV_ITEMS } from "../utils/constants";
import NavItem from "./NavItem";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.name} name={item.name} url={item.url} />
      ))}
    </nav>
  );
}
