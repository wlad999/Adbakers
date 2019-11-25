import React from "react";
import styles from "./Users.module.css";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

const UsersOnPage = props => {
  let [currentPage, setCurrentPage] = useState(props.currentPage);
  props.currentPageAC(currentPage);
  let pagesCount;
  let pageSize = 6;
  if (props.users && props.users.length > 0) {
    pagesCount = Math.ceil(props.totalUsers / pageSize);
  }

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  if (currentPage === 0) {
    setCurrentPage(pagesCount);
  }
  if (currentPage > pagesCount) {
    setCurrentPage(1);
  }

  let arrOfPosts = props.users.map(el => el);

  const onClick = user => {
    props.getUserDataThunk(user.id);
    props.showHideUser();
  };

  return (
    <div className={styles.box}>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.scroll}>
        {arrOfPosts.map(post => {
          return (
            <div className={styles.page} key={post.id}>
              <div className={styles.nav} onClick={() => onClick(post)}>
                {post.first_name && (
                  <p className={styles.text}>
                    NAME: {post.first_name.toUpperCase()}
                  </p>
                )}
                {post.last_name && (
                  <p className={styles.text}>
                    LAST NAME: {post.last_name.toUpperCase()}
                  </p>
                )}
                {post.id && <p className={styles.text}>ID {post.id}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UsersOnPage;
