import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const UserTable = () => {
  const context = useContext(AppContext);
  const { users, deleteUser } = context;
  console.log("1", users);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button className="button muted-button">Edit</button>
                <button
                  className="button muted-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
