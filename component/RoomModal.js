import { Modal, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Box, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const RoomModal = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const startGame = () => {
    onClose(); // Tutup modal
    navigation.
    
    
    navigate('pvp', { mode: 'pvp' }); // Kirim parameter mode PVP
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true} animationType="none">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeX} onPress={onClose}>
            <Ionicons name="close-circle" size={30} color="brown" />
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Choose your room</Text>

          <View>
            <TouchableOpacity>
              <Image source={require('../assets/sun.png')} style={styles.gameType} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/sun.png')} style={styles.gameType} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.modalButton} onPress={startGame}>
            <Text>Play now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FAFBFD',
    borderRadius: 5,
    fontSize: 14,
    paddingVertical: 22,
    marginBottom: 12,
  },
  closeX: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 10,
  },
  gameType: {
    height: 48,
    width: 48,
    margin: 12,
  },
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
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: 'brown',
    padding: 12,
    margin: 12,
    textAlign: 'center',
  },
});

export default RoomModal;
