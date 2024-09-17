import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export const Profile = () => {
  const { data } = useContext(UserContext);

  if (!data)
    return (
      <>
        <h3>Please Login </h3>
      </>
    );
  else {
    return (
      <>
        <h3>Welcome "{data.userName}"</h3>
        <h4>Your Password is {data.Password}</h4>
      </>
    );
  }
};
