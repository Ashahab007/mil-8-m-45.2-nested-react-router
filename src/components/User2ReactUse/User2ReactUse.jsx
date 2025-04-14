import React, { use } from "react";

// 10.2.3 receive the props user2Promise and use react use method
const User2ReactUse = ({ user2Promise }) => {
  const users2Data = use(user2Promise);
  console.log(users2Data);

  return (
    <div>
      <h4>
        This is User 2 fetching the data by using normal fetch & react use
        method
      </h4>
    </div>
  );
};

export default User2ReactUse;
