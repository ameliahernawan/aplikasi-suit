import { View, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GamePlay from "./GameplayPage";
import UserStats from "../components/HomePage/UserStats";
import Header from "../components/HomePage/Header";
import GameModeOptions from "../components/HomePage/GameModeOptions";
import SplashScreen from "./SplashScreen";
import { useAuth } from "../context/AuthContext";
import { createMatch } from "../api/restApi";

const bg = require("../assets/Background main page.png");

export default function HomePage() {
  const [showGame, setShowGame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { isLogin, user } = useAuth();
  const loggedInUserId = user.userData._id;
  console.log(loggedInUserId);

  const handleNavigation = async (mode) => {
    // setIsLoading(true); // Show loading indicator
    if (mode == "PVC") {
      const response = await createMatch(
        loggedInUserId,
        "676d2589c069bd9cbb4ebebc"
      );
      const match_id = response.match._id;
      setTimeout(() => {
        setIsLoading(false); // Hide loading indicator
        navigation.navigate("gameplay", { mode: mode, match_id: match_id });
      }, 1000);
    }else {
      const response = await createMatch(
        loggedInUserId,
        "676d2589c069bd9cbb4ebebc"
      );
      const match_id = response.match._id;
      setTimeout(() => {
        setIsLoading(false); // Hide loading indicator
        navigation.navigate("gameplay", { mode: mode, match_id: match_id });
      }, 1000);
    }
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  const handleQuitGame = () => {
    setShowGame(false);
    setPlayer2("");
    setSelectedAvatar(null);
  };

  if (showGame) {
    return <GamePlay onQuit={handleQuitGame} />;
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
