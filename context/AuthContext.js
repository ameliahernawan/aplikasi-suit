import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const savedToken = await AsyncStorage.getItem('userToken');
        if (savedToken) {
          setUser({ token: savedToken });
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.log('failed');
      }
    };
    checkLoginStatus();
  }, []);

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
