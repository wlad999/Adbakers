import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => (
  <div className={styles.wrapper}>
    <span className={styles.nav}>
      <NavLink className={styles.link} to={"/"}>
        Posts
      </NavLink>
      <NavLink className={styles.link} to={"/about"}>
        About
      </NavLink>
      <NavLink className={styles.link} to={"/contact"}>
        Contact
      </NavLink>
    </span>
  </div>
);
export default Footer;
