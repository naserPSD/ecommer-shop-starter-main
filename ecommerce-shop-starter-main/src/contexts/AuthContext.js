import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { email: "test@gmail.com", password: "test123" };
  const [isLogIn, setIsLogIn] = useState(false);

  const login = async (email, password) => {
    if (email === user.email && password === user.password) {
      setIsLogIn(true);
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isLogIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
