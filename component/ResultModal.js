import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ResultModal = ({ winner, player1Choice, player2Choice, onPlayAgain }) => {
  return (
    <Modal visible={true} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.resultText}>{winner === 'tie' ? "It's a tie!" : `${winner} wins!`}</Text>
        <TouchableOpacity onPress={onPlayAgain}>
          <Text>Play again</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Posisikan konten di tengah layar
    alignItems: 'center', // Posisikan secara horizontal di tengah
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang transparan hitam untuk efek modal
    padding: 20,
  },
  resultText: {
    fontSize: 24, // Ukuran teks cukup besar untuk hasil yang mencolok
    fontWeight: 'bold',
    color: '#fff', // Warna teks putih
    marginBottom: 20, // Jarak antara teks hasil dan tombol
    textAlign: 'center', // Teks terpusat
  },
  playAgainButton: {
    backgroundColor: '#4CAF50', // Warna tombol hijau
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5, // Membuat tombol dengan sudut melengkung
    alignItems: 'center',
  },
  playAgainText: {
    color: '#fff', // Warna teks tombol putih
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultModal;
