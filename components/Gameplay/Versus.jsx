import { StyleSheet, Text, View, Image } from "react-native";
import { TEXT } from "../../src/globalStyle";
import { Avatars } from "../../utils/Avatar";
import { getRandomNumber } from "../../utils/randomAvatar";
import React from "react";

const Versus = ({ mode, userData, playerOneTurn }) => {
  return mode == "PVC" ? (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Image source={Avatars[userData.avatar_id]} style={styles.avatar} />
          {!playerOneTurn && <View style={styles.overlay} />}
        </View>
        <Text style={styles.playerText}>{userData.username}</Text>
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
        <View>
          <Image source={Avatars[5]} style={styles.avatar} />
          {playerOneTurn && <View style={styles.overlay} />}
        </View>
        <Text style={styles.playerText}>Computer</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          {!playerOneTurn && <View style={styles.overlay} />}
          <Image source={Avatars[userData.avatar_id]} style={styles.avatar} />
        </View>

        <Text style={styles.playerText}>{userData.username}</Text>
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
        <View>
          {playerOneTurn && <View style={styles.overlay} />}
          <Image source={Avatars[getRandomNumber()]} style={styles.avatar} />
        </View>
        <Text style={styles.playerText}>Player 2</Text>
      </View>
    </View>
  );
};

export default Versus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '100%',
    gap: 15,

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
