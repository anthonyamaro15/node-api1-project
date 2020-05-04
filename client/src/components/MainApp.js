import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import Form from "./Form";

const MainApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
      });
  }, []);

  const deleteUser = (user) => {
    axios
      .delete(`http://localhost:4000/api/users/${user.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="MainApp">
      <h1>Users Information</h1>

      <div className="display-users">
        <Form setData={setData} data={data} />
        <div className="wrapper">
          {data.map((u) => (
            <UserCard key={u.id} user={u} deleteUser={() => deleteUser(u)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainApp;
