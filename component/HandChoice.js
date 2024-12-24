import React from 'react';
import { Button, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const HandChoices = ({ onSelect, disabled }) => {
  const choices = [
<<<<<<< HEAD
    { key: 'rock', source: require('../assets/Comp Batu.png') },
    { key: 'paper', source: require('../assets/Comp Kertas.png') },
    { key: 'scissors', source: require('../assets/Comp Gunting.png') },
=======
    { key: 'rock', source: require('../assets/Comp_Batu.png') },
    { key: 'paper', source: require('../assets/Comp_Kertas.png') },
    { key: 'scissors', source: require('../assets/Comp_Gunting.png') },
>>>>>>> 5fa6b5f16f3dde25314e83ffbf96f5bd8653601f
  ];
  return (
    <>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
<<<<<<< HEAD
          <TouchableOpacity key={choice.key} onPress={() => onSelect(choice.key)} disabled={false}>
=======
          <TouchableOpacity key={choice.key} onPress={() => onSelect(choice.key)} disabled={disabled}>
>>>>>>> 5fa6b5f16f3dde25314e83ffbf96f5bd8653601f
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

<<<<<<< HEAD
export default HandChoices;
=======
export default HandChoices;
>>>>>>> 5fa6b5f16f3dde25314e83ffbf96f5bd8653601f
