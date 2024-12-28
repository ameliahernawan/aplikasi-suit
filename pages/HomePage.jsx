import { View, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import UserStats from "../components/HomePage/UserStats";
import Header from "../components/HomePage/Header";
import GameModeOptions from "../components/HomePage/GameModeOptions";
import SplashScreen from "./SplashScreen";
import { createMatch } from "../api/restApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bg = require("../assets/Background main page.png");

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getUserData = async () => {
      const fetchedUserData = await AsyncStorage.getItem("userData");
      setUserData(JSON.parse(fetchedUserData));
    };
    getUserData();
  }, []);

  

  const handleNavigation = async (mode) => {
    setIsLoading(true);
    const loggedInUserId = userData?._id;
    if (mode == "PVC") {
      const response = await createMatch(
        loggedInUserId,
        "676d2589c069bd9cbb4ebebc"
      );
      const match_id = response.match._id;
      console.log(match_id);
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("gameplay", {
          mode: mode,
          match_id: match_id,
          userData: userData,
        });
      }, 1000);
    } else {
      const response = await createMatch(
        loggedInUserId,
        "676f38426b87afaf132b368d"
      );
      const match_id = response.match._id;
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("gameplay", {
          mode: mode,
          match_id: match_id,
          userData: userData,
        });
      }, 1000);
    }
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Header />
        <UserStats />
        <GameModeOptions handleNavigation={handleNavigation} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 15,
  },
});
