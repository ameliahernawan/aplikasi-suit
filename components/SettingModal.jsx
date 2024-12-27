import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { BUTTONS, TEXT } from "../src/globalStyle";

const bg = require("../assets/Background main page.png");

const SettingModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      animationType="none"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView style={styles.modalContainer} behavior="padding">
              <ImageBackground
                source={bg}
                resizeMode="cover"
                style={styles.modalView}
              >
                <View>
                  <Text style={TEXT.title}>Settings</Text>
                  <View style={{ paddingBottom: 20, gap: 10, marginTop: 40 }}>
                    <TouchableOpacity style={BUTTONS.primary}>
                      <Text style={styles.menuText}>TUTORIAL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={BUTTONS.danger}>
                      <Text style={styles.menuText}>LOG OUT</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={BUTTONS.secondary} onPress={onClose}>
                    <Text style={styles.menuText}>BACK</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 30,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuText: {
    fontFamily: "Handy",
    fontSize: 24,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.1,
  },
});

export default SettingModal;
