import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import React from "react";

const backgroundImage = require("../../assets/BackgroundImage/UserStats/bg.png");
const splash = require("../../assets/UserStats/splash.png");
const exclamation = require("../../assets/UserStats/exclamation.png");
const statsContainer = require("../../assets/UserStats/stats-container.png");

const UserStats = ({stats}) => {
  return (
    <ImageBackground source={backgroundImage} style={{ height: 300 }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.text, { fontSize: 40, textAlign: "center" }]}>
            BEST{"\n"}WIN{"\n"}STREAK
          </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
          <ImageBackground source={splash} style={styles.splash}>
            <View style={styles.winstreakText}>
              <Text
                style={[styles.text, { fontSize: 75, textAlign: "center" }]}
              >
                {stats?.winstreak}
              </Text>
            </View>
          </ImageBackground>
          <Image source={exclamation} style={styles.exclamation} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={[
              styles.text,
              { fontSize: 18, textAlign: "center", color: "#02CCB0" },
            ]}
          >
            Win
          </Text>
          <ImageBackground
            source={statsContainer}
            style={styles.statsContainer}
          >
            <View style={styles.textContainerStats}>
              <Text style={styles.textStats}>{stats?.stats?.wins}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[styles.text, { fontSize: 18 }]}>Tie</Text>
          <ImageBackground
            source={statsContainer}
            style={styles.statsContainer}
          >
            <View style={styles.textContainerStats}>
              <Text style={styles.textStats}>{stats?.stats?.ties}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[styles.text, { fontSize: 18, color: "red" }]}>
            Losses
          </Text>
          <ImageBackground
            source={statsContainer}
            style={styles.statsContainer}
          >
            <View style={styles.textContainerStats}>
              <Text style={styles.textStats}>{stats?.stats?.losses}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserStats;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Bangers",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    borderColor: "black",
    textShadowRadius: 10,
  },
  splash: {
    width: 170,
    height: 170,
    flex: 1,
    marginRight: 20,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  exclamation: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    flex: 1,
  },
  statsContainer: {
    width: 70,
    height: 65,
    resizeMode: "stretch",
  },
  textContainerStats: {
    flex: 1,
    justifyContent: "center",
    padding: 1,
   
    marginBottom: 10,
  },
  textStats: {
    textAlign:'center',
    fontFamily: "Bangers",
    color: "#FFB202",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    fontSize: 30,
  },
  winstreakText: {
    width: 150,
    height: 150,
    marginLeft: 60,
    marginVertical: 40,
  },
});
