import React from 'react';
import { Button, View } from 'react-native';

const HandChoices = ({ onSelect, disabled }) => {
  return (
    <View style={styles.choicesContainer}>
      {['rock', 'paper', 'scissors'].map((choice) => (
        <Button key={choice} title={choice} onPress={() => onSelect(choice)} disabled={disabled} />
      ))}
    </View>
  );
};

export default HandChoices;
