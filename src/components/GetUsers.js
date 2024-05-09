import React, { useEffect, useState } from "react";

function GetUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://same-alkaline-mind.glitch.me/user/")
      .then((response) => response.json())
      .then((json) => {
        const rev = json.reverse();
        setUsers(rev);
      });
  }, []);
  return (
    <div className="users">
      {users.map((user, i) => {
        return (
          <p key={i}>
            <span style={{ color: "red" }}>{user.email}</span>:{" "}
            <b>{user.password}</b>
          </p>
        );
      })}
    </div>
  );
}

export default GetUsers;
