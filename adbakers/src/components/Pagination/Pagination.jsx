import React from "react";
import styles from "./Pagination.module.css";
const Pagination = props => {
  const { currentPage, pages, setCurrentPage } = props;
  return (
    <div className={styles.main}>
      <span
        className={styles.arrow}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        {"<"}
      </span>
      {pages.map(p => {
        return (
          <span
            key={p}
            className={currentPage === p ? styles.selectedPage : styles.page}
            onClick={e => {
              setCurrentPage(p);
            }}
          >
            {p}
          </span>
        );
      })}
      <span
        className={styles.arrow}
        onClick={e => {
          setCurrentPage(currentPage + 1);
        }}
      >
        {">"}
      </span>
    </div>
  );
};
export default Pagination;
