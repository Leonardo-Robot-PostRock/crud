import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const usersData = [
  { id: uuidv4(), name: "Tania", username: "floppydiskette" },
  { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
  { id: uuidv4(), name: "Ben", username: "benisphere" },
];

const useInitialState = () => {
  const [users, setUsers] = useState(usersData);

  /*ADD USERS*/
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };
  /*REMOVE USERS*/
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter((user) => user.id !== id);
    setUsers(arrayFiltrado);
  };

  /*EDIT USERS*/
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRowUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };
  
  /*UPDATE VIEWE USERS*/
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const state = {
    users,
    currentUser,
    editing,
  };
  const stateUpdaters = {
    addUser,
    setUsers,
    deleteUser,
    editRowUser,
    updateUser,
    setEditing,
    setCurrentUser,
  };

  return {
    state,
    stateUpdaters,
  };
};

export default useInitialState;
