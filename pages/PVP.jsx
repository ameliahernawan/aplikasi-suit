// import HandChoices from '../component/HandChoice';
// import SelectedChoice from '../component/SelectedChoice';
// import ResultModal from '../component/ResultModal';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { useState } from 'react';

// const PVPgamePlay = ({ onQuit }) => {
//   const [player1Choice, setPlayer1Choice] = useState(null);
//   const [player2Choice, setPlayer2Choice] = useState(null);
//   const [winner, setWinner] = useState(null);
//   const [roundComplete, setRoundComplete] = useState(false);
//   const [showResult, setShowResult] = useState(false);

//   const route = useRoute();
//   const { mode } = route.params;

//   const determineWinner = (choice1, choice2) => {
//     if (choice1 === choice2) return 'tie';
//     if ((choice1 === 'rock' && choice2 === 'scissors') || (choice1 === 'paper' && choice2 === 'rock') || (choice1 === 'scissors' && choice2 === 'paper')) {
//       return 'player1';
//     }
//     return 'player2';
//   };

//   const choiceImages = {
//     rock: require('../assets/Comp_Batu.png'),
//     paper: require('../assets/Comp_Kertas.png'),
//     scissors: require('../assets/Comp_Gunting.png'),
//   };

//   const handlePlayer1Choice = (choice) => {
//     setPlayer1Choice(choice);
//   };

//   const handlePlayer2Choice = (choice) => {
//     if (player1Choice) {
//       handleRoundComplete(player1Choice, choice);
//     }
//   };

//   const handleRoundComplete = (choice1, choice2) => {
//     const roundWinner = determineWinner(choice1, choice2);
//     setPlayer2Choice(choice2);
//     setWinner(roundWinner);
//     setRoundComplete(true);
//     setShowResult(true);
//   };

//   const handlePlayAgain = () => {
//     setPlayer1Choice(null);
//     setPlayer2Choice(null);
//     setWinner(null);
//     setRoundComplete(false);
//     setShowResult(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.modeText}>Mode: {mode === 'PVP' ? 'Player vs Player' : 'Player vs Computer'}</Text>
//       {!roundComplete && (
//         <>
//           <HandChoices onSelect={handlePlayer1Choice} disabled={!!player1Choice} />

//           {player1Choice && <HandChoices onSelect={handlePlayer2Choice} disabled={false} />}
//         </>
//       )}

//       {player1Choice && player2Choice && (
//         <>
//           <SelectedChoice player={1} choice={player1Choice} image={choiceImages[player1Choice]} />
//           <SelectedChoice player={2} choice={player2Choice} image={choiceImages[player2Choice]} />
//         </>
//       )}

//       {showResult && <ResultModal winner={winner} player1Choice={player1Choice} player2Choice={player2Choice} onPlayAgain={handlePlayAgain} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   statsContainer: {
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//   },
//   statTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   statsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   statItem: {
//     width: '30%',
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default PVPgamePlay;
