import { StyleSheet, Text, View, Image } from "react-native";
import { TEXT } from "../../src/globalStyle";
import { PlayerMove } from "../../utils/PlayerMove";
import React from "react";

const VersusPlayerMove = ({ mode, winner, userData, playerOneChoice, playerTwoChoice }) => {

  return mode == "PVC" ? (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Image source={PlayerMove[playerOneChoice]} style={styles.avatar} />
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
          <Image source={PlayerMove[playerTwoChoice]} style={styles.avatar} />
    
        </View>
        <Text style={styles.playerText}>Computer</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Image source={PlayerMove[playerOneChoice]} style={styles.avatar} />
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
          <Image source={PlayerMove[playerTwoChoice]} style={styles.avatar} />
        </View>
        <Text style={styles.playerText}>Player 2</Text>
      </View>
    </View>
  );
};

export default VersusPlayerMove;

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
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: 100,
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
