import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HandChoices from "../HandChoice";

const PlayerMove = ({
  mode,
  gameState,
  stats,
  choiceImages,
  handlePlayer1Choice,
  handlePlayer2Choice,
  handlePlayAgain,
}) => {
  return (
    <View style={styles.container}>
      {/* Display turn information */}
      {!gameState.roundComplete && (
        <Text style={styles.turnText}>
          Turn:{" "}
          {gameState.player1Choice
            ? mode === "PVP"
              ? "Player 2"
              : "Computer"
            : "Player 1"}
        </Text>
      )}

      {/* Player choices */}
      {!gameState.roundComplete && (
        <HandChoices
          onSelect={handlePlayer1Choice}
          disabled={!!gameState.player1Choice}
        />
      )}
      {gameState.player1Choice && mode === "PVP" && (
        <HandChoices onSelect={handlePlayer2Choice} disabled={false} />
      )}

      {/* Display selected choices */}
      <View style={styles.choiceContainer}>
        {gameState.player1Choice && gameState.player2Choice && (
          <>
            <SelectedChoice
              player={1}
              choice={gameState.player1Choice}
              image={choiceImages[gameState.player1Choice]}
            />
            <Text style={styles.resultText}>VS</Text>
            <SelectedChoice
              player={2}
              choice={gameState.player2Choice}
              image={choiceImages[gameState.player2Choice]}
            />
          </>
        )}
      </View>

      {/* Display game result */}
      {gameState.showResult && (
        <ResultModal
          winner={gameState.winner}
          player1Choice={gameState.player1Choice}
          player2Choice={gameState.player2Choice}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  turnText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  choiceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  resultText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Bangers",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 5 },
    textShadowRadius: 0,
    marginVertical: 10,
  },
});

export default PlayerMove;
