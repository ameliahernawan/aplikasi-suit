import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const ResultModal = ({ winner, player1Choice, player2Choice, onPlayAgain }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

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
    
  return (
    <Modal visible={true} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.resultText}>{winner === 'tie' ? "It's a tie!" : `${winner} wins!`}</Text>
        <TouchableOpacity onPress={onPlayAgain}>
          <Text>Play again</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  resultText: {
    fontSize: 50, 
    fontWeight: 'bold',
    color: '#FABB55', 
    marginBottom: 20, 
    textAlign: 'center', 
    fontFamily: 'Bangers',
    textShadowColor: '#000', 
    textShadowOffset: { width: 3, height: 5 }, 
    textShadowRadius: 0, 
    backgroundColor: '',
    padding: 10,
    top: 130 
  },
  playAgainButton: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  playAgainText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultModal;