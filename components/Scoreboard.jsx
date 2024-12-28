import { View, StyleSheet, Text } from 'react-native';

const Scoreboard = ({ stats }) => {
  return (
    <>
      <View style={styles.scoreContainer}>
        <Text>Player 1</Text>
        <Text>Wins: {stats.player1.wins}</Text>
        <Text>Losses: {stats.player1.losses}</Text>
        <Text>Ties: {stats.player1.ties}</Text>
        <Text>Best Streak: {stats.player1.bestStreak}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text>Player 2</Text>
        <Text>Wins: {stats.player2.wins}</Text>
        <Text>Losses: {stats.player2.losses}</Text>
        <Text>Ties: {stats.player2.ties}</Text>
        <Text>Best Streak: {stats.player2.bestStreak}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  streakText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 12,
  },
});

export default Scoreboard;
