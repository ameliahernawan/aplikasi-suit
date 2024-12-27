import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

import { TEXT } from "../src/globalStyle";
import { Avatars } from "../utils/Avatar";

const bg = require("../assets/Background main page.png");

const AvatarModal = ({ visible, onClose }) => {
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
            <ImageBackground
              source={bg}
              resizeMode="cover"
              style={styles.modalView}
            >
              <Text style={TEXT.title}>Choose your avatar</Text>
              <View style={styles.gridContainer}>
                <TouchableOpacity>
                  <Image source={Avatars[1]} style={styles.gameType} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Avatars[2]} style={styles.gameType} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Avatars[3]} style={styles.gameType} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Avatars[4]} style={styles.gameType} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    overflow: "hidden",
    width: 300,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  gameType: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10, // Adds rounded edges for consistency
  },
  modalButton: {
    backgroundColor: "brown",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
    borderBottomWidth: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default AvatarModal;
