import { StyleSheet, Text, View } from "react-native";
import { TEXT } from "../../src/globalStyle";
import React from "react";

const WinnerResult = ({ winner }) => {
  console.log('winner', winner)
  return winner == "Tie" ? (
    <View style={styles.container}>
      <Text style={styles.title}>Tie</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Winner is : </Text>
      <Text style={TEXT.title}>{winner.username}</Text>
    </View>
  );
};

export default WinnerResult;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Bangers",
    color: "#FFB202",
    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0.1,
  },
});
