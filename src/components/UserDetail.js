import React, { useState } from "react";
import style from "./UserDetail.module.css";
function UserDetail({ user, checkedHandleChange, users, setUsers, index }) {
  const { id, name, email, role } = user;

  const [editId, setEditId] = useState("");
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newRole, setNewRole] = useState(role);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  const editUser = (id) => {
    setEditId(id);
  };
  const nameChange = (event) => {
    const { value } = event.target;
    setNewName(value);
  };
  const emailChange = (event) => {
    const { value } = event.target;
    setNewEmail(value);
  };
  const roleChange = (event) => {
    const { value } = event.target;
    setNewRole(value);
  };
  const onSubmit = (id) => {
    console.log(id);
    const newUsers = users.map((user) => {
      if (user.id === id)
        return {
          ...user,
          name: newName,
          email: newEmail,
          role: newRole,
        };
      return user;
    });

    setUsers(newUsers);
    setEditId("");
  };

  return (
    <div
      key={id}
      className={style.parent}
      style={{
        background: index % 2 === 0 ? "#d1c6c6" : "white",
      }}
    >
      <div className={style.inputCheckboxParent}>
        <input
          type="checkbox"
          onChange={(event) => checkedHandleChange(event, id)}
        />
      </div>
      {editId === id ? (
        <div className={style.inputTextParent}>
          <input
            type="text"
            onChange={(event) => nameChange(event)}
            value={newName}
          />
        </div>
      ) : (
        <div className={style.inputTextParent}>{name}</div>
      )}
      {editId === id ? (
        <div className={style.inputTextParent}>
          <input
            type="email"
            onChange={(event) => emailChange(event)}
            value={newEmail}
          />
        </div>
      ) : (
        <div className={style.inputTextParent}>{email}</div>
      )}
      {editId === id ? (
        <div className={style.inputTextParent}>
          <input
            type="text"
            onChange={(event) => roleChange(event)}
            value={newRole[0].toUpperCase() + newRole.substring(1)}
          />
        </div>
      ) : (
        <div className={style.inputTextParent}>
          {role[0].toUpperCase() + role.substring(1)}
        </div>
      )}
      <div className={style.action}>
        {editId === id ? (
          <div className={style.buttonParent}>
            <button onClick={() => onSubmit(id)} className={style.button}>
              submit
            </button>
          </div>
        ) : (
          <div className={style.editButtonParent}>
            <button onClick={() => editUser(id)} className={style.button}>
              edit
            </button>
          </div>
        )}
        <div
          className={style.deleteButtonParent}
          onClick={() => deleteUser(id)}
        >
          <button onClick={() => deleteUser(id)} className={style.button}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
