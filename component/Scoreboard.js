import { View, StyleSheet, Text } from 'react-native';

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

const styles = StyleSheet.create({
  scoreContainer: {
    backgroundColor: '#f5f5f5', // Latar belakang abu-abu muda
    padding: 20,
    borderRadius: 10, // Sudut membulat agar tampak lebih modern
    marginBottom: 20, // Jarak antara scoreboard dan elemen lainnya
    shadowColor: '#000', // Bayangan untuk efek depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1, // Transparansi bayangan
    shadowRadius: 4,
    elevation: 3, // Efek bayangan di Android
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Warna teks gelap agar mudah dibaca
    marginBottom: 8, // Jarak antar baris teks
  },
  streakText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50', // Warna hijau untuk "Best Streak"
    marginTop: 12, // Jarak sedikit lebih besar untuk pemisah
  },
});

export default Scoreboard;
