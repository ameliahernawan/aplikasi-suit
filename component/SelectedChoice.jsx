import { View, Text } from 'react-native';

const SelectedChoice = ({ player, choice }) => {
  return (
    <View style={styles.choiceDisplay}>
      <Text>
        Player {player} chose: {choice}
      </Text>
    </View>
  );
};

export default SelectedChoice;
