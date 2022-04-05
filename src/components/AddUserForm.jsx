import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AppContext from "../context/AppContext";

const AddUserForm = () => {
  const context = useContext(AppContext);
  const { addUser, users } = context;

  console.log("VER", users);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name")} />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input type="text" {...register("userName")} />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
