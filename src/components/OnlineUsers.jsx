import React, { useState, useEffect } from "react";

const OnlineUsers = ({ presenceState }) => {
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);

  useEffect(() => {
    const countOnlineUsers = () => {
      let count = 0;

      for (const key in presenceState) {
        count += presenceState[key].length;
      }

      setOnlineUsersCount(count);
    };

    countOnlineUsers();
  }, [presenceState]);

  return (
    <div>
      <h2>Online Users</h2>
      <p>{onlineUsersCount} users are online.</p>
    </div>
  );
};

export default OnlineUsers;
