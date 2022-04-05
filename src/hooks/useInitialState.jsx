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
    console.log("Hola");
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  /*REMOVE USERS*/
  const deleteUser = (id) => {
    debugger;
    const arrayFiltrado = users.filter((user) => user.id !== id);
    console.log("filter", arrayFiltrado);
    setUsers(arrayFiltrado);
  };

  /*EDIT USERS*/
  

  return {
    users,
    addUser,
    deleteUser,
  };
};

export default useInitialState;
