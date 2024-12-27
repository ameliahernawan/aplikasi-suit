import { StyleSheet, Text, View, Image } from "react-native";
import { TEXT } from "../../src/globalStyle";
import { Avatars } from "../../utils/Avatar";
import { getRandomNumber } from "../../utils/randomAvatar";
import React from "react";

const Versus = ({ mode }) => {
  return mode == "PVC" ? (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Image source={Avatars[1]} style={styles.avatar} />
          {/* <View style={styles.overlay} /> */}
        </View>
        <Text style={styles.playerText}>Player 1</Text>
      </View>
      <Text
        style={[
          TEXT.title,
          { flex: 1 / 2, textAlign: "center", textAlignVertical: "center" },
        ]}
      >
        VS
      </Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={Avatars[5]} style={styles.avatar} />
        <Text style={styles.playerText}>Computer</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={Avatars[1]} style={styles.avatar} />

        <Text style={styles.playerText}>Player 1</Text>
      </View>
      <Text
        style={[
          TEXT.title,
          { flex: 1 / 2, textAlign: "center", textAlignVertical: "center" },
        ]}
      >
        VS
      </Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={Avatars[getRandomNumber()]} style={styles.avatar} />
        <Text style={styles.playerText}>Player 2</Text>
      </View>
    </View>
  );
};

export default Versus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 400,
    gap: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire image
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    borderRadius: 100, // Match the image's border radius
  },
  playerText: {
    fontFamily: "Bangers",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.1,

    fontSize: 20,
  },
});
