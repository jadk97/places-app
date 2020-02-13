import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      places: 4
    }
  ];

  return <UsersList items={USERS} />
};

export default Users;