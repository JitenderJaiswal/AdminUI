import React from "react";
import Pagination from "./Pagination";
import style from "./Footer.module.css";
function Footer({
  setCurrentPage,
  currentPage,
  totalPages,
  users,
  setUsers,
  setCheckedId,
  checkedId,
}) {
  const deleteSelected = () => {
    const filterUser = users.filter((user) => {
      return checkedId.indexOf(user.id) === -1;
    });
    setUsers(filterUser);
    setCheckedId([]);
  };
  return (
    <div>
      <div className={style.parent}>
        <div className={style.buttonParent}>
          <button onClick={deleteSelected} className={style.button}>
            Delete Selected
          </button>
        </div>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default Footer;
