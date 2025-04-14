import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const UserReactRouter = () => {
  // 10.1.2 use useLoaderData() to load the data in UserReactRouter component. So no use of props passing in this method.
  const users1 = useLoaderData();
  console.log(users1);

  // 11.1 creating a card to show some data creating another  component User
  return (
    <div>
      <h5>This is Users 1 data fetching by react routing data fetch method.</h5>
      {users1.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default UserReactRouter;
