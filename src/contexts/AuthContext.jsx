import React, { createContext, useState } from 'react';
    import { login as apiLogin } from '../lib/auth';

    export const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

      const login = async (email, password) => {
        const userData = await apiLogin(email, password);
        if (userData) {
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          return true;
        }
        return false;
      };

      const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
      };

      const isAuthenticated = !!user;

      return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
          {children}
        </AuthContext.Provider>
      );
    };
