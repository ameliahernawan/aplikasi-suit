import React, { useState, useEffect } from 'react';
import HandChoices from '../component/HandChoice';
import SelectedChoice from '../component/SelectedChoice';
import ResultModal from '../component/ResultModal';
import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Scoreboard from '../component/Scoreboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import HomePage from '../pages/HomePage';
import * as Font from 'expo-font';

const GamePlay = () => {  
  const [fontLoaded, setFontLoaded] = useState(false);
  const [gameState, setGameState] = useState({
    player1Choice: null,
    player2Choice: null,
    winner: null,
    roundComplete: false,
    showResult: false,
  });

   const navigation = useNavigation();
  


  const [stats, setStats] = useState({
    player1: {
      wins: 0,
      losses: 0,
      ties: 0,
      bestStreak: 0,
      currentStreak: 0,
    },
    player2: {
      wins: 0,
      losses: 0,
      ties: 0,
      bestStreak: 0,
      currentStreak: 0,
    },
  });

  const route = useRoute();
  const { mode } = route.params;

  const choiceImages = {
    rock: require('../assets/Comp_Batu.png'),
    paper: require('../assets/Comp_Kertas.png'),
    scissors: require('../assets/Comp_Gunting.png'),
  };

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Handy: require('../assets/HandyCasual.ttf'),
          Bangers: require('../assets/Bangers-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }


  const handleBackButtonPress = () => {
    navigation.navigate('home'); // Navigate to HomePage
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

    setStats((prevStat) => {
      let updatedStats = { ...prevStat };

      if (roundWinner === 'Player 1') {
        updatedStats.player1.wins += 1;
        updatedStats.player2.losses += 1;

        updatedStats.player1.currentStreak += 1;
        updatedStats.player2.currentStreak = 0;

        if (updatedStats.player1.currentStreak > updatedStats.player1.bestStreak) {
          updatedStats.player1.bestStreak = updatedStats.player1.currentStreak;
        }
      } else if (roundWinner === 'Player 2') {
        updatedStats.player2.wins += 1;
        updatedStats.player1.losses += 1;

        updatedStats.player2.currentStreak += 1;
        updatedStats.player1.currentStreak = 0; // Reset streak on loss

        if (updatedStats.player2.currentStreak > updatedStats.player2.bestStreak) {
          updatedStats.player2.bestStreak = updatedStats.player2.currentStreak;
        }
      } else if (roundWinner === 'tie') {
        updatedStats.player1.ties += 1;
        updatedStats.player2.ties += 1;
      }

      // if (updatedStats.currentStreak > updatedStats.bestStreak) {
      //   updatedStats.bestStreak = updatedStats.currentStreak;
      // }

      return updatedStats;
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
    <ImageBackground source={require('../assets/Component 1.png')} resizeMode="cover" style={styles.imageBackground}>
     <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

    <View style={[styles.container]}>
      <Scoreboard stats={stats}/>
      {/* Judul mode game */}
      {/* <Text style={styles.modeText}>Mode: {mode === 'PVP' ? 'Player vs Player' : 'Player vs Computer'}</Text> */}

      {/* Indikasi giliran permainan */}
      {!gameState.roundComplete && <Text style={styles.turnText}>Giliran: {gameState.player1Choice ? (mode === 'PVP' ? 'Player 2' : 'Komputer') : 'Player 1'}</Text>}
      
      {/* Ketika player1 dan player2 milih */}
      {!gameState.roundComplete && <HandChoices onSelect={handlePlayer1Choice} disabled={!!gameState.player1Choice} />}
      {gameState.player1Choice && mode === 'PVP' && <HandChoices onSelect={handlePlayer2Choice} disabled={false} />}

      {/* Buat nampilin pilihan yang dipilih */}
      <View style={{flexDirection: 'row', backgroundColor:'black', justifyContent: 'space-between', bottom: 220}}>
      {gameState.player1Choice && gameState.player2Choice && (
        <>
          <SelectedChoice player={1} choice={gameState.player1Choice} image={choiceImages[gameState.player1Choice]} />
          <Text style ={styles.resultText}>VS</Text>
          <SelectedChoice player={2} choice={gameState.player2Choice} image={choiceImages[gameState.player2Choice]} />
        </>
      )}
      </View>

      {/* Menampilkan hasil permainan */}
      {gameState.showResult && <ResultModal winner={gameState.winner} player1Choice={gameState.player1Choice} player2Choice={gameState.player2Choice} onPlayAgain={handlePlayAgain} />}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor:'',
  },
  modeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust based on your layout
    left: 20, // Adjust based on your layout
    zIndex: 10, // Ensures it is above other elements
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    borderRadius: 20, // Circular button
    backgroundColor: '#FABB55',
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 10,
    fontFamily: 'Handy'
  },

  VSimage: {
    height: 50,
    width: 50,
    //zIndex: ,
    backgroundColor: ''
  },
  resultText: {
    fontSize: 50, 
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20, 
    textAlign: 'center', 
    fontFamily: 'Bangers',
    textShadowColor: '#000', 
    textShadowOffset: { width: 3, height: 5 }, 
    textShadowRadius: 0,
    top: 10,
    padding: 10
  },

  imageBackground: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default GamePlay;