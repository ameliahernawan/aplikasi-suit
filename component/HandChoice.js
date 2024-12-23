import React from 'react';
import { Button, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const HandChoices = ({ onSelect, disabled }) => {
  const choices = [
    { key: 'rock', source: require('../assets/Comp_Batu.png') },
    { key: 'paper', source: require('../assets/Comp_Kertas.png') },
    { key: 'scissors', source: require('../assets/Comp_Gunting.png') },
  ];
  return (
    <>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity key={choice.key} onPress={() => onSelect(choice.key)} disabled={disabled}>
            <Image source={choice.source} style={styles.compChoice} />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  compChoice: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  choicesContainer: {
    position: 'absolute',
    bottom: '25%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 20,
  },
});

export default HandChoices;
