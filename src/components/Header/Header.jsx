import React from "react";
import styles from "./Header.module.css";
// import windowSize from "react-window-size";
import { NavLink } from "react-router-dom";
import logoDev from "../../asset/images/logoDev.png";
const Header = () => (
  <div className={styles.wrapper}>
    <NavLink className={styles.text} to={"/"}>
      <img className={styles.logo} src={logoDev} alt="Logo" />
      <span className={styles.text}>Develops Today</span>
    </NavLink>
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
export default Header;
