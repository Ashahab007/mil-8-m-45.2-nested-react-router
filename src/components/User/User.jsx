import React from "react";
import { Link } from "react-router";

// 11.2 pass the data & create card of individual user
const User = ({ user }) => {
  console.log(user);
  const { id, name, phone, email } = user;

  const styleUser = {
    border: "1px solid red",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "10px",
  };
  return (
    <div style={styleUser}>
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>
        Email: <small>{email}</small>
      </p>
      {/* 12.1 make the link also dynamic according to it's path 
      "/users/:userId" in 12.0 */}
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
