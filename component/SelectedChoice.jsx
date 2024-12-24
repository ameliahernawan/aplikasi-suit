import { View, Text, StyleSheet, Image } from 'react-native';

const SelectedChoice = ({ player, choice, image }) => {
  return <View style={styles.choiceDisplay}>{image && <Image source={image} style={styles.choiceImage} />}</View>;
};

const styles = StyleSheet.create({
  choiceDisplay: {
<<<<<<< HEAD
    width: '100%',
    padding: 1,
=======
>>>>>>> 5fa6b5f16f3dde25314e83ffbf96f5bd8653601f
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

<<<<<<< HEAD
export default SelectedChoice;
=======
export default SelectedChoice;
>>>>>>> 5fa6b5f16f3dde25314e83ffbf96f5bd8653601f
