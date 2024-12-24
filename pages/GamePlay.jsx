import React, { useState } from 'react';
import HandChoices from '../component/HandChoice';
import SelectedChoice from '../component/SelectedChoice';
import ResultModal from '../component/ResultModal';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const GamePlay = () => {
  const [gameState, setGameState] = useState({
    player1Choice: null,
    player2Choice: null,
    winner: null,
    roundComplete: false,
    showResult: false,
  });

  const route = useRoute();
  const { mode } = route.params;

  const choiceImages = {
    rock: require('../assets/Comp_Batu.png'),
    paper: require('../assets/Comp_Kertas.png'),
    scissors: require('../assets/Comp_Gunting.png'),
  };

  const determineWinner = (choice1, choice2) => {
    if (choice1 === choice2) return 'tie';
    if ((choice1 === 'rock' && choice2 === 'scissors') || (choice1 === 'paper' && choice2 === 'rock') || (choice1 === 'scissors' && choice2 === 'paper')) {
      return 'Player 1';
    }
    return 'Player 2';
  };

  const handlePlayer1Choice = (choice) => {
    if (mode === 'PVC') {
      // Generate robot's (player2) choice
      const robotChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
      handleRoundComplete(choice, robotChoice);
    } else {
      setGameState((prev) => ({ ...prev, player1Choice: choice }));
    }
  };

  const handlePlayer2Choice = (choice) => {
    if (mode === 'PVP' && gameState.player1Choice) {
      handleRoundComplete(gameState.player1Choice, choice);
    }
  };

  const handleRoundComplete = (choice1, choice2) => {
    const roundWinner = determineWinner(choice1, choice2);
    setGameState({
      player1Choice: choice1,
      player2Choice: choice2,
      winner: roundWinner,
      roundComplete: true,
      showResult: true,
    });
  };

  const handlePlayAgain = () => {
    setGameState({
      player1Choice: null,
      player2Choice: null,
      winner: null,
      roundComplete: false,
      showResult: false,
    });
  };

  return (
    <View style={styles.container}>
      {/* Judul mode game */}
      <Text style={styles.modeText}>Mode: {mode === 'PVP' ? 'Player vs Player' : 'Player vs Computer'}</Text>

      {/* Indikasi giliran permainan */}
      {!gameState.roundComplete && <Text style={styles.turnText}>Giliran: {gameState.player1Choice ? (mode === 'PVP' ? 'Player 2' : 'Komputer') : 'Player 1'}</Text>}

      {/* Ketika player1 dan player2 milih */}
      {!gameState.roundComplete && <HandChoices onSelect={handlePlayer1Choice} disabled={!!gameState.player1Choice} />}
      {gameState.player1Choice && mode === 'PVP' && <HandChoices onSelect={handlePlayer2Choice} disabled={false} />}

      {/* Buat nampilin pilihan yang dipilih */}
      {gameState.player1Choice && gameState.player2Choice && (
        <>
          <SelectedChoice player={1} choice={gameState.player1Choice} image={choiceImages[gameState.player1Choice]} />
          <SelectedChoice player={2} choice={gameState.player2Choice} image={choiceImages[gameState.player2Choice]} />
        </>
      )}

      {/* Menampilkan hasil permainan */}
      {gameState.showResult && <ResultModal winner={gameState.winner} player1Choice={gameState.player1Choice} player2Choice={gameState.player2Choice} onPlayAgain={handlePlayAgain} />}
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
