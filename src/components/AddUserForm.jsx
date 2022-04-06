import React from "react";
import { useForm } from "react-hook-form";

function AddUserForm({ addUser }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    addUser(data);
    e.target.reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name")} />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input type="text" {...register("username")} />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
}

export default AddUserForm;
