import React from "react";
import style from "./search.module.css";

function Search({ users, setSearch }) {
  const userFilter = (event) => {
    const { value } = event.target;
    if (!value) {
      setSearch("");
    } else {
      const filterUser = users.filter(
        (user) =>
          user.name.includes(value) ||
          user.email.includes(value) ||
          user.role.includes(value)
      );
      setSearch(filterUser);
    }
  };

  return (
    <div className={style.parent}>
      <input
        type="text"
        className={style.input}
        placeholder="Search by name, email or role"
        onChange={(event) => {
          userFilter(event);
        }}
      />
    </div>
  );
}

export default Search;
