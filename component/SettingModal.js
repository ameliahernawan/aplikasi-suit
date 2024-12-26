import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AvatarModal from './AvatarModal';
import { useState } from 'react';
import { BUTTONS, TEXT } from '../src/globalStyle';
import Settingstitle from '../assets/Setting.png'; // Ensure this is the correct path to your image file

const SettingModal = ({ visible, onClose }) => {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true} animationType="none">
      <View style={styles.centeredView}>
        <ImageBackground source={require('../assets/Background main page.png')} resizeMode="cover" style={styles.modalView}>
          <View style={{}}>
            <Text style={TEXT.tittle}>Settings</Text>
            <View style={{ paddingBottom: 20, gap: 10 }}>
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalView: {
    width: '80%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden', // Ensures content stays inside the rounded borders
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#FABB55',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
    padding: 30,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'Handy',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 0,
  },
  titleImage: {
    width: 150, // Adjust based on the desired size
    height: 50, // Adjust based on the desired size
    margin: 12,
    resizeMode: 'contain', // Ensures the image scales proportionally
  },
  menuText: { fontFamily: 'Handy', fontSize: 24, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 0.1 },
  backButton: {
    backgroundColor: 'pink',
    padding: 12,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1, // Inherit modalView's dimensions
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingModal;
