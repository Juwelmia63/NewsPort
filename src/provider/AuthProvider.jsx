import React, { createContext, useState } from "react";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();

  const [user, setUser] = useState(null);

  const AuthData = {
    user,
    setUser,
  };

  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
