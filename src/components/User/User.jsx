import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import ananimus from "../../assets/images/ananimus.jpg";

const User = props => {
  let [userData, setUserData] = useState(props.userData);
  useEffect(() => {
    setUserData(props.userData);
  }, [props.userData]);

  const closeModal = () => {
    props.showHideUser();
    props.setUserDataAC(false);
  };
  let isCheck = props.isFetching;
  console.log(isCheck);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button className={styles.closeBut} onClick={closeModal}>
          X
        </button>
        <div className={styles.flex}>
          <img
            src={props.isFetching ? ananimus : userData.avatar}
            alt="avatar"
          />
          <div className={styles.info}>
            <p className={styles.lineSecond}>
              {userData ? userData.first_name : "PLEASE WAIT A LITTLE BIT"}
            </p>
            <p className={styles.lineSecond}>
              {userData ? userData.last_name : null}
            </p>
            <p className={styles.lineSecond}>
              {userData ? userData.email : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
