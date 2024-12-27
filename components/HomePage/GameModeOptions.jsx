import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TEXT } from "../../src/globalStyle";
import React from "react";

const GameModeOptions = () => {
  return (
    <View style={{ alignItems: "center", gap: 12, justifyContent: "center" }}>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontSize: 40,
            textAlign: "center",
            fontFamily: "Bangers",
            color: "white",
            textShadowColor: "black",
            textShadowOffset: { width: 4, height: 4 },
            textShadowRadius: 0.4,
          }}
        >
          CHOOSE GAME MODE :
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("gameplay", { mode: "PVC" })}
        >
          <Image source={require("../../assets/PVC.png")} style={styles.card} />
          <Text style={styles.modeText}>Player vs Computer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("gameplay", { mode: "PVP" })}
        >
          <Image source={require("../../assets/PVP.png")} style={styles.card} />
          <Text style={styles.modeText}>Player vs Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameModeOptions;

const styles = StyleSheet.create({
  modeText: {
    fontFamily: "Handy",
    color: "white",
    fontSize: 20,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.1,
  },
  card: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
