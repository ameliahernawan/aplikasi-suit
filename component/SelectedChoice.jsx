import { View, Text, StyleSheet, Image } from 'react-native';

const SelectedChoice = ({ player, choice, image }) => {
  return <View style={styles.choiceDisplay}>{image && <Image source={image} style={styles.choiceImage} />}</View>;
};

const styles = StyleSheet.create({
  choiceDisplay: {
    width: '%',
    padding: 1,
    flexDirection: '',

    marginBottom: 1, 
    // justifyContent: 'center', 
    
  },
  choiceImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default SelectedChoice;
