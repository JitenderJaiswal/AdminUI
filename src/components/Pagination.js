import React from "react";
import style from "./Pagination.module.css";

function Pagination({ setCurrentPage, currentPage, totalPages }) {
  const increasePageCount = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const decreasePageCount = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const firstPage = () => {
    setCurrentPage(1);
  };
  const lastPage = () => {
    setCurrentPage(totalPages);
  };
  const func = () => {
    const result = [];
    let startIndex = 1,
      endIndex = 5;
    if (currentPage <= 5) {
      if (totalPages <= 5) endIndex = totalPages;
    } else {
      startIndex += currentPage - 5;
      if (totalPages > startIndex + 4) endIndex = startIndex + 4;
      else endIndex = totalPages;
    }
    for (let i = startIndex; i <= endIndex; i++) {
      result.push(
        <div
          className={style.buttonParent}
          style={{
            border: "1px solid blue",
            background: i === currentPage ? "#2000d199" : "",
          }}
        >
          {i}
        </div>
      );
    }
    return result;
  };

  return (
    <div className={style.parent}>
      <div
        className={style.buttonParent}
        style={{
          border: currentPage === 1 ? "1px solid grey" : "1px solid blue",
          background: currentPage === 1 ? "#d1c6c6" : "#2000d199",
        }}
      >
        <button onClick={firstPage} className={style.button}>
          {"<<"}
        </button>
      </div>
      <div
        className={style.buttonParent}
        style={{
          border: currentPage === 1 ? "1px solid grey" : "1px solid blue",
          background: currentPage === 1 ? "#d1c6c6" : "#2000d199",
        }}
      >
        <button onClick={decreasePageCount} className={style.button}>
          {"<"}
        </button>
      </div>
      {func()}
      <div
        className={style.buttonParent}
        style={{
          border:
            currentPage === totalPages || totalPages === 0
              ? "1px solid grey"
              : "1px solid blue",
          background:
            currentPage === totalPages || totalPages === 0
              ? "#d1c6c6"
              : "#2000d199",
        }}
      >
        <button onClick={increasePageCount} className={style.button}>
          {">"}
        </button>
      </div>
      <div
        className={style.buttonParent}
        style={{
          border:
            currentPage === totalPages || totalPages === 0
              ? "1px solid grey"
              : "1px solid blue",

          background:
            currentPage === totalPages || totalPages === 0
              ? "#d1c6c6"
              : "#2000d199",
        }}
      >
        <button onClick={lastPage} className={style.button}>
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
