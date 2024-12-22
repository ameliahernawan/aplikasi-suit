import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import RoomModal from '../component/RoomModal';
import SettingModal from '../component/SettingModal';
import GamePlay from './GamePlay';

export default function HomePage() {
  const [gameMode, setGameMode] = useState(null);
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [settingModalVisible, setSettingModalVisible] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const handlePlayNow = () => {
    setShowGame(mode);
    setRoomModalVisible(true);
  };

  const handleQuitGame = () => {
    setShowGame(false);
    setPlayer2('');
    setSelectedAvatar(null);
  };

  if (showGame) {
    return <GamePlay onQuit={handleQuitGame} />;
  }

  return (

    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => setSettingModalVisible(true)}>
          <Image source={require('../assets/sun.png')} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSettingModalVisible(true)}>
          <Image source={require('../assets/sun.png')} style={styles.avatar} />
        </TouchableOpacity>
        <SettingModal visible={settingModalVisible} onClose={() => setSettingModalVisible(false)} />
      </View>

      <Image source={require('../assets/sun.png')} style={styles.logoImage} />

      <View style={{ justifyContent: 'center', backgroundColor: 'brown', padding: 24, alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>
          Best win streak: 999!{'\n'}
          Wins: 999{'\n'}
          Draw: 999{'\n'}
          Lose: 999
        </Text>
      </View>

      <View style={{ alignItems: 'center', paddingVertical: 24, gap: 12 }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Choose Mode</Text>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <TouchableOpacity>
            <Image source={require('../assets/sun.png')} style={styles.gameType} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.typeContainer} onPress={() => setRoomModalVisible(true)}>
            <Image source={require('../assets/sun.png')} style={styles.gameType} />
          </TouchableOpacity>

          <RoomModal visible={roomModalVisible} onClose={() => setRoomModalVisible(false)} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 28,
    gap: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
  },
  logoImage: {
    alignSelf: 'center',
    height: 200,
    width: 210,
  },
  typeContainer: {
    backgroundColor: 'pink',
    padding: 24,
    borderRadius: 20,
  },
  gameType: {
    height: 48,
    width: 48,
  },
});
