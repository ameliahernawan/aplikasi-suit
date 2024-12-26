import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AvatarModal from './AvatarModal';
import Settingstitle from '../assets/Setting.png'; // Ensure this is the correct path to your image file

const SettingModal = ({ visible, onClose }) => {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true} animationType="none">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ImageBackground source={require('../assets/Background Box choose Avatar.png')} resizeMode="cover" style={styles.imageBackground}>
            {/* Replaced Text with Image */}
            <Image source={Settingstitle} style={styles.titleImage} />
            <View style={{ gap: 20 }}>
              <TouchableOpacity style={[styles.button, {backgroundColor: '#FABB55'}]} onPress={() => setAvatarModalVisible(true)}>
                <Text style={styles.buttonText}>Change Avatar</Text>
              </TouchableOpacity>
              <AvatarModal visible={avatarModalVisible} onClose={() => setAvatarModalVisible(false)} />
              <TouchableOpacity style={[styles.button, {backgroundColor: '#FABB55'}]}>
                <Text style={styles.buttonText}>Tutorial</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor: '#FF3131'}]}>
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor: '#02CCB0'}]} onPress={onClose}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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