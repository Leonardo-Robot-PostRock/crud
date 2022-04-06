import React from "react";
import { useForm } from "react-hook-form";

function EditUserForm(props) {
console.log(props.currentUser);

  const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    e.preventDefault();
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
    console.log(data);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name")} />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input type="text" {...register("username")} />
      <div>{errors?.username?.message}</div>
      <button>Edit user</button>
    </form>
  );
}

export default EditUserForm;
