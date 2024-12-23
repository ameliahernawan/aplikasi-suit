import { Modal, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Box, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AvatarModal from './AvatarModal';
import { useState } from 'react';

const SettingModal = ({ visible, onClose }) => {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true} animationType="none">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Settings</Text>
          <View style={{ gap: 20 }}>
            <TouchableOpacity style={styles.button} onPress={() => setAvatarModalVisible(true)}>
              <Text>Change Avatar</Text>
            </TouchableOpacity>
            <AvatarModal visible={avatarModalVisible} onClose={() => setAvatarModalVisible(false)} />
            <TouchableOpacity style={styles.button}>
              <Text>Tutorial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Log out</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <Text>Back</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
  },
  button: {
    backgroundColor: 'brown',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'pink',
    padding: 12,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default SettingModal;
