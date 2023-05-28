import React, { useState, useEffect } from "react";
import UserDetail from "../components/UserDetail";
import Search from "../components/Search";
import Footer from "../components/Footer";
import style from "./AdminUI.module.css";

function AdminUI(props) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [checkedId, setCheckedId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const users = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    const usersJson = await users.json();
    return usersJson;
  };

  useEffect(() => {
    fetchData().then((users) => {
      setUsers(users);
    });
  }, []);

  const checkedHandleChange = (event, id) => {
    const { checked } = event.target;
    if (checked) {
      checkedId.push(id);
      setCheckedId(checkedId);
    } else {
      const filterCheckedId = checkedId.filter((userId) => userId !== id);
      setCheckedId(filterCheckedId);
    }
  };

  const newUsers = search ? search : users;
  return (
    <div className={style.parent}>
      <Search users={users} setSearch={setSearch} />
      <div className={style.tableParent}>
        <div className={style.inputCheckBoxParent}>
          <input type="checkbox" />
        </div>
        <div className={style.text}>Name</div>
        <div className={style.text}>Email</div>
        <div className={style.text}>Role</div>
        <div className={style.text}>Actions</div>
      </div>
      {newUsers
        .slice(10 * (currentPage - 1), 10 * currentPage)
        .map((user, index) => {
          return (
            <UserDetail
              user={user}
              users={users}
              checkedHandleChange={checkedHandleChange}
              setUsers={setUsers}
              index={index}
            />
          );
        })}
      <Footer
        users={users}
        setUsers={setUsers}
        setCheckedId={setCheckedId}
        checkedId={checkedId}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={
          search ? Math.ceil(search.length / 10) : Math.ceil(users.length / 10)
        }
      />
    </div>
  );
}

export default AdminUI;
