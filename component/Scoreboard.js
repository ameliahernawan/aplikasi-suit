import { View } from 'react-native';

const Scoreboard = ({ stats }) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>Wins:{stats.wins}</Text>
      <Text style={styles.scoreText}>Losses:{stats.losses}</Text>
      <Text style={styles.scoreText}>Ties:{stats.ties}</Text>
      <Text style={styles.streakText}>Best Streak:{stats.bestStreak}</Text>
    </View>
  );
};

export default Scoreboard;
