import { View, Text, StyleSheet, Image } from 'react-native';

const SelectedChoice = ({ player, choice, image }) => {
  return <View style={styles.choiceDisplay}>{image && <Image source={image} style={styles.choiceImage} />}</View>;
};

const styles = StyleSheet.create({
  choiceDisplay: {
    width: '100%',
    padding: 1,
    flexDirection: 'row',
    marginBottom: 1, // Menyusun teks ke tengah
    justifyContent: 'center', // Menjaga teks tetap terpusat
  },
  choiceImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default SelectedChoice;
