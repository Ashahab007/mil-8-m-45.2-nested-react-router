import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  // 13.1 use the useLoaderData() to use it
  const details = useLoaderData();
  console.log(details);
  //   13.2 destructure the details to use it
  const { name, website } = details;

  return (
    <div>
      <h4>I am User details</h4>
      <h4>Name: {name}</h4>
      <p>WebSite: {website}</p>
    </div>
  );
};

export default UserDetails;
