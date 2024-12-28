import { StyleSheet, Text, View } from "react-native";
import { TEXT } from "../../src/globalStyle";
import React from "react";

const Turn = ({ username, mode }) => {
  return (
    <View style={styles.container}>
      {mode != "PVC" && (
        <Text style={[TEXT.title, { marginTop: 40 }]}>{username}'S TURN</Text>
      )}
      <Text style={styles.title}>CHOOSE!</Text>
    </View>
  );
};

export default Turn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    paddingTop: 10,
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
