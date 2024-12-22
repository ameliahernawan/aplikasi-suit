import { View, Text, Modal, TouchableOpacity } from 'react-native';

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

export default ResultModal;
