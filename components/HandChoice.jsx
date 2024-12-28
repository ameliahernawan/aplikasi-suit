import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const HandChoices = ({ handlePlayerPick, highlightedChoice, choices }) => {
  return (
    <View style={styles.choicesContainer}>
      {choices.map((choice) => (
        <TouchableOpacity
          key={choice.key}
          onPress={() => handlePlayerPick(choice.key)}
        >
          <Image
            source={choice.source}
            style={[
              styles.compChoice,
              highlightedChoice === choice.key && styles.highlightedChoice,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  compChoice: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    opacity: 1, // Default opacity
  },
  highlightedChoice: {
    opacity: 0.5, // Dim non-highlighted choices
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: 20,
  },
});

export default HandChoices;
