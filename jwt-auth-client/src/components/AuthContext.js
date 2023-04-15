import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:8080/api/auth/signin', { email, password });
    setUser(response.data);
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (username, email, password) => {
    await axios.post('http://localhost:8080/api/auth/signup', { username, email, password });
  };

  const value = {
    user,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
