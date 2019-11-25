import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import userImg from "../../assets/images/users.png";

const User = props => {
  let [userData, setUserData] = useState(props.userData);
  useEffect(() => {
    setUserData(props.userData);
  }, [props.userData]);

  const closeModal = () => {
    props.showHideUser();
    props.setUserDataAC(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.firstLine}>
          <img src={userData ? userData.avatar : userImg} alt="avatar" />
          <button className={styles.closeBut} onClick={closeModal}>
            X
          </button>
        </div>
        <div className={styles.scroll}>
          <p>{userData ? userData.first_name : "PLEASE WAIT A LITTLE BIT"}</p>
          <p>{userData ? userData.last_name : null}</p>
          <p>{userData ? userData.email : null}</p>
        </div>
      </div>
    </div>
  );
};
export default User;
