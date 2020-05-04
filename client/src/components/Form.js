import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const initialValues = {
  name: "",
  bio: "",
};
const Form = ({ setData, data }) => {
  const { register, handleSubmit } = useForm({ initialValues });

  const onSubmit = (values) => {
    const { name, bio } = values;
    const newValues = {
      id: new Date().toString(),
      name,
      bio,
    };
    axios
      .post("http://localhost:4000/api/users", newValues)
      .then((res) => {
        setData([...data, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <input type="text" ref={register} name="name" id="name" />
      </label>
      <label htmlFor="bio">
        <input type="text" ref={register} name="bio" id="bio" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
