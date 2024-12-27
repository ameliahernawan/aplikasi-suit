import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TEXT } from "../../src/globalStyle";
import React from "react";

const pvc = require("../../assets/PVC.png");
const pvp = require("../../assets/PVP.png");

const GameModeOptions = ({handleNavigation}) => {


  return (
    <View style={{ alignItems: "center", gap: 12, justifyContent: "center" }}>
      <View style={{ width: "100%" }}>
        <Text style={TEXT.title}>CHOOSE GAME MODE :</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => handleNavigation("PVC")}
        >
          <Image source={pvc} style={styles.card} />
          <Text style={styles.modeText}>Player vs Computer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => handleNavigation("PVP")}
        >
          <Image source={pvp} style={styles.card} />
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
