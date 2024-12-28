import React, { useState, useEffect } from "react";
import HandChoices from "../components/HandChoice";
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Versus from "../components/Gameplay/Versus";
import Turn from "../components/Gameplay/Turn";
import WinnerCountdownPage from "./WinnerCountdownPage";
import { fetchUser, playRound } from "../api/restApi";
import VersusPlayerMove from "../components/Gameplay/VersusPlayerMove";
import { BUTTONS } from "../src/globalStyle";
import WinnerResult from "../components/Gameplay/WinnerResult";
import { updateUserWinstreak } from "../api/restApi";
import Winstreak from "../components/Gameplay/Winstreak";

const back = require("../assets/Back Button.png");

const GameplayPage = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { mode, match_id, userData } = route.params;

  const handleBackButtonPress = () => {
    navigation.navigate("home");
  };
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [highlightedChoice, setHighlightedChoice] = useState(null);
  const [winStreak, setWinStreak] = useState(0);
  const [loading, setLoading] = useState(false);
  const choices = [
    { key: "rock", source: require("../assets/Comp_Batu.png") },
    { key: "paper", source: require("../assets/Comp_Kertas.png") },
    { key: "scissors", source: require("../assets/Comp_Gunting.png") },
  ];

  const handlePlayAgain = () => {
    setPlayerOneChoice(null);
    setPlayerTwoChoice(null);
    setWinner(null);
    setPlayerOneTurn(true);
    setHighlightedChoice(null);
  };

  const handlePlayerOnePick = (selectedMove) => {
    setPlayerOneChoice(selectedMove);
    if (mode == "PVC") {
      setPlayerOneTurn(false);
    }
  };

  const handlePlayerTwoPick = async (selectedMove) => {
    setLoading(true);
    setPlayerOneTurn(true);
    try {
      const response = await playRound(match_id, playerOneChoice, selectedMove);

      setTimeout(() => {
        setWinner(response.winner);
        setPlayerTwoChoice(selectedMove);

        if (response.winner._id === userData._id) {
          setWinStreak((prev) => prev + 1);
        } else {
          const updateWinstreak = async (winStreak) => {
            await updateUserWinstreak(winStreak);
          };
          updateWinstreak(winStreak);
          setWinStreak(0);
        }
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.log(err.message);
      setPlayerOneChoice(null);
      setPlayerTwoChoice(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval;
    if (!playerOneTurn) {
      interval = setInterval(() => {
        const randomChoice =
          choices[Math.floor(Math.random() * choices.length)].key;
        setHighlightedChoice(randomChoice);
      }, 200);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setHighlightedChoice(null);
        handlePlayerTwoPick(
          choices[Math.floor(Math.random() * choices.length)].key
        );
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [playerOneTurn]);

  if (loading) {
    return <WinnerCountdownPage />;
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
      {winner ? (
        <>
          <VersusPlayerMove
            mode={mode}
            winner={winner}
            userData={userData}
            playerOneChoice={playerOneChoice}
            playerTwoChoice={playerTwoChoice}
          />
          <WinnerResult winner={winner} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[BUTTONS.primary, { width: 300 }]}
              onPress={handlePlayAgain}
            >
              <Text style={styles.menuText}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[BUTTONS.danger, { width: 300 }]}
              onPress={handleBackButtonPress}
            >
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Versus
            mode={mode}
            userData={userData}
            playerOneTurn={playerOneTurn}
          />
          {mode == "PVC" && (
            <Winstreak userData={userData} winStreak={winStreak} />
          )}

          {!playerOneChoice ? (
            <>
              <Turn username={userData?.username} mode={mode} />
              <HandChoices
                handlePlayerPick={handlePlayerOnePick}
                highlightedChoice={highlightedChoice}
                choices={choices}
              />
            </>
          ) : (
            <>
              <Turn
                username={mode == "PVC" ? "Computer" : "Player 2"}
                mode={mode}
              />
              <HandChoices
                handlePlayerPick={handlePlayerTwoPick}
                highlightedChoice={highlightedChoice}
                choices={choices}
              />
            </>
          )}
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
  menuText: {
    fontFamily: "Handy",
    fontSize: 24,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 20,
    marginTop: 20,
  },
});

export default GameplayPage;
