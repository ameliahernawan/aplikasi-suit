import { Modal, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Box, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AvatarModal from './AvatarModal';
import { useState } from 'react';
import { BUTTONS, TEXT } from '../src/globalStyle';

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
    borderRadius: 20,
    padding: 20,
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
  button: {
    backgroundColor: 'brown',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  menuText: { fontFamily: 'Handy', fontSize: 24, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 0.1 },
  backButton: {
    backgroundColor: 'pink',
    padding: 12,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default SettingModal;
