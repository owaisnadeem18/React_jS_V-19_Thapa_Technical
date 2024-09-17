import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [data, SetData] = useState(null);

  return (
    <UserContext.Provider value={{ data, SetData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
