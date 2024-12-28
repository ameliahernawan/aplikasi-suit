import { StyleSheet, Text, View, ImageBackground } from "react-native";
const splash = require("../../assets/UserStats/splash.png");
import React from "react";

const Winstreak = ({userData, winStreak}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageBackground source={splash} style={styles.splash}>
          <View style={styles.winstreakText}>
            <Text style={[styles.text, { fontSize: 75, textAlign: "center" }]}>
              {winStreak}
            </Text>
          </View>
        </ImageBackground>

        <Text
          style={[
            styles.text,
            {
              fontSize: 40,
              textAlign: "center",
              position: "absolute",
              marginTop: 90,
              width: 400,
            },
          ]}
        >
          {userData?.username} Winstreaks
        </Text>
      </View>
    </View>
  );
};

export default Winstreak;

const styles = StyleSheet.create({
  winstreakText: {
    width: 150,
    height: 150,
  },
  text: {
    fontFamily: "Bangers",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    borderColor: "black",
    textShadowRadius: 10,
  },
  splash: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
});
