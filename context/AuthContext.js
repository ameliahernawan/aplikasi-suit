import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthPtovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const login = async (token) => {
    setUser({ token });
    setIsLogin(true);
    await AsyncStorage.setItem('userToken', token);
  };

  const register = async (token) => {
    setUser({ token });
    await AsyncStorage.setItem('userToken', token);
  };

  const logout = async () => {
    setUser(null);
    setIsLogin(false);
    await AsyncStorage.removeItem('userToken');
  };

  return <AuthContext.Provider value={{ login, register, logout, user, isLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
