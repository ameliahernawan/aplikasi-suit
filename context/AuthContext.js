import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../api/restApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const savedToken = await AsyncStorage.getItem("userToken");
        if (savedToken) {
          setUser({ token: savedToken });
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.log("failed");
      }
    };
    checkLoginStatus();
  }, []);

  const login = async (token) => {
    await AsyncStorage.setItem("userToken", token);
    const fetchedData = await fetchUser();
    setUser({ token });
    setIsLogin(true);
    await AsyncStorage.setItem("userData", JSON.stringify(fetchedData.user));
  };

  const register = async (token) => {
    setUser({ token });
    await AsyncStorage.setItem("userToken", token);
  };

  const logout = async () => {
    setUser(null);
    setIsLogin(false);
    await AsyncStorage.removeItem("userToken");
  };

  return (
    <AuthContext.Provider value={{ login, register, logout, user, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
