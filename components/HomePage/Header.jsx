import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import AvatarModal from "../AvatarModal";
import SettingModal from "../SettingModal";
import { useState } from "react";
import { Avatars } from "../../utils/Avatar";

const logo = require("../../assets/Logo.png");
const settingsIcon = require("../../assets/Icon/Settings.png");

const Header = () => {
  const [settingModalVisible, setSettingModalVisible] = useState(false);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => setAvatarModalVisible(true)}>
        <Image source={Avatars[1]} style={styles.Icon} />
      </TouchableOpacity>
      <AvatarModal
        visible={avatarModalVisible}
        onClose={() => setAvatarModalVisible(false)}
      />
      <Image source={logo} style={styles.logoImage} />

      <TouchableOpacity onPress={() => setSettingModalVisible(true)}>
        <Image source={settingsIcon} style={styles.Icon} />
      </TouchableOpacity>
      <SettingModal
        visible={settingModalVisible}
        onClose={() => setSettingModalVisible(false)}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },
  Icon: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
  logoImage: {
    alignSelf: "center",
    height: 100,
    width: 140,
  },
});
