import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Simulate login logic (e.g., validate credentials)
    setUser(userData);
  };

  const logout = () => {
    // Simulate logout logic (e.g., clear user data)
    setUser(null);
  };

  const updateUser = (updatedUserData) => {
    // Update the user data with the provided updatedUserData
    setUser(updatedUserData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
