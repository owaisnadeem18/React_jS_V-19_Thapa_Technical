import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [Password, SetPassword] = useState("");

  const { SetData } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetData({ userName, Password });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <input
        type="text"
        value={userName}
        placeholder="User Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      &nbsp; &nbsp;
      <input
        type="password"
        value={Password}
        placeholder="Password"
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
