import React, { useState } from "react";
import HandChoices from "../components/HandChoice";
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Versus from "../components/Gameplay/Versus";
import Turn from "../components/Gameplay/Turn";
import WinnerCountdownPage from "./WinnerCountdownPage";

const back = require("../assets/Back Button.png");

const GameplayPage = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { mode, userData } = route.params;

  const handleBackButtonPress = () => {
    navigation.navigate("home"); // Navigate to HomePage
  };
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [loading, setLoading] = useState(false);
  console.log(playerOneChoice);

  const handlePlayerOnePick = (selectedMove) => {
    setPlayerOneChoice(selectedMove);
    setPlayerOneTurn(false);
  };

  const handlePlayerTwoPick = (selectedMove) => {
    setLoading(true);
    setTimeout(() => {
      setPlayerTwoChoice(selectedMove);
      setLoading(false);
    }, 1000);
  };

  if(loading){
    return <WinnerCountdownPage/>
  }

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
      <Versus
        mode={mode}
        userData={userData}
        playerOneTurn={playerOneTurn}
      />
      {!playerOneChoice ? (
        <>
          <Turn username={userData?.username} />
          <HandChoices handlePlayerPick={handlePlayerOnePick} />
        </>
      ) : (
        <>
          <Turn username={mode == "PVC" ? "Computer" : "Player 2"} />
          <HandChoices handlePlayerPick={handlePlayerTwoPick} />
        </>
      )}
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
