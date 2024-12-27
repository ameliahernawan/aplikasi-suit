import {
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GamePlay from "./GameplayPage";
import UserStats from "../components/HomePage/UserStats";
import Header from "../components/HomePage/Header";
import GameModeOptions from "../components/HomePage/GameModeOptions";

const bg = require("../assets/Background main page.png");

export default function HomePage() {
  const [showGame, setShowGame] = useState(false);
  const navigation = useNavigation();

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
        <GameModeOptions />
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
