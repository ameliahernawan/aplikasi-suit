import React, { useState } from 'react';
import HandChoices from '../component/HandChoice';
import SelectedChoice from '../component/SelectedChoice';
import ResultModal from '../component/ResultModal';
import { View, Text, StyleSheet } from 'react-native';

const GamePlay = () => {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [roundComplete, setRoundComplete] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const determineWinner = (choice1, choice2) => {
    if (choice1 === choice2) return 'tie';
    if (
      (choice1 === 'rock' && choice2 === 'scissors') ||
      (choice1 === 'paper' && choice2 === 'rock') ||
      (choice1 === 'scissors' && choice2 === 'paper')
    ) {
      return 'player1';
    }
    return 'player2';
  };

  const handlePlayer1Choice = (choice) => {
    setPlayer1Choice(choice);
    // Generate robot's (player2) choice
    const robotChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    handleRoundComplete(choice, robotChoice);
  };

  const handleRoundComplete = (choice1, choice2) => {
    const roundWinner = determineWinner(choice1, choice2);
    setPlayer2Choice(choice2);
    setWinner(roundWinner);
    setRoundComplete(true);
    setShowResult(true);
  };

  const handlePlayAgain = () => {
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setWinner(null);
    setRoundComplete(false);
    setShowResult(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.modeText}>Mode: Player vs Computer</Text>

      {!roundComplete && (
        <HandChoices onSelect={handlePlayer1Choice} disabled={!!player1Choice} />
      )}

      {player1Choice && (
        <SelectedChoice player={1} choice={player1Choice} />
      )}
      {player2Choice && (
        <SelectedChoice player={2} choice={player2Choice} />
      )}
      {showResult && (
        <ResultModal
          winner={winner}
          player1Choice={player1Choice}
          player2Choice={player2Choice}
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
    justifyContent: 'center',
  },
  modeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default GamePlay;