import React from "react";
import { useLoaderData } from "react-router";

const UserReactRouter = () => {
  // 10.1.2 use useLoaderData() to load the data in UserReactRouter component. So no use of props passing in this method.
  const user1 = useLoaderData();
  console.log(user1);

  return (
    <div>
      <h5>This is Users 1 data fetching by react routing data fetch method.</h5>
    </div>
  );
};

export default UserReactRouter;
