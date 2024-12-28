import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';

import { TEXT } from '../src/globalStyle';
import { Avatars } from '../utils/Avatar';

const bg = require('../assets/Background Modal.png');

const AvatarModal = ({ visible, onClose, handleUpdateAvatar }) => {
  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <ImageBackground source={bg} resizeMode="cover" style={styles.modalView}>
              <Text style={TEXT.title}>Choose your avatar</Text>
              <View style={styles.gridContainer}>
                <TouchableOpacity onPress={() => handleUpdateAvatar(1)}>
                  <Image source={Avatars[1]} style={styles.gameType} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleUpdateAvatar(2)}>
                  <Image source={Avatars[2]} style={styles.gameType} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleUpdateAvatar(3)}>
                  <Image source={Avatars[3]} style={styles.gameType} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleUpdateAvatar(4)}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalView: {
    overflow: 'hidden',
    width: 300,
    height: 450,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  gameType: {
    height: 100,
    width: 100,
    margin: 20,
    borderRadius: 10,
  },
});

export default AvatarModal;
