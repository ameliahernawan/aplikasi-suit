import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HandChoices = ({ handlePlayerPick }) => {
  const choices = [
    { key: 'rock', source: require('../assets/Comp_Batu.png') },
    { key: 'paper', source: require('../assets/Comp_Kertas.png') },
    { key: 'scissors', source: require('../assets/Comp_Gunting.png') },
  ];
  return (
    <>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity key={choice.key} onPress={() => handlePlayerPick(choice.key)} disabled={false}>
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
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 20,
  },
});

export default HandChoices;
