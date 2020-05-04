import React from "react";

const UserCard = ({ deleteUser, user }) => {
  return (
    <div className="Usercard">
      <p>{user.name}</p>
      <p>{user.bio}</p>
      <button onClick={deleteUser}>del</button>
    </div>
  );
};

export default UserCard;
