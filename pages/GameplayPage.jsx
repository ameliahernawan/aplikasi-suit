import React, { useState} from "react";
import HandChoices from "../components/HandChoice";
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Scoreboard from "../components/Scoreboard";
import { useNavigation } from "@react-navigation/native";
import Versus from "../components/Gameplay/Versus";
import Turn from "../components/Gameplay/Turn";

const back = require("../assets/Back Button.png");

const GameplayPage = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { mode } = route.params;

  const handleBackButtonPress = () => {
    navigation.navigate("home"); // Navigate to HomePage
  };
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);

  return (
    <ImageBackground
      source={require("../assets/Background Gameplay.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBackButtonPress}
      >
        <Image source={back} style={styles.backButton} />
      </TouchableOpacity>
      <Versus mode={mode}/>
      <Turn />
      <HandChoices />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "",
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },

  imageBackground: {
    flex: 1,
  },
  backButton: {
    margin: 8,
    width: 80,
    resizeMode: "contain",
  },
});

export default GameplayPage;
