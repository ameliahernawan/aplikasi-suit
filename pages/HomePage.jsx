import { TouchableOpacity, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import SettingModal from '../component/SettingModal';
import GamePlay from './GamePlay';
import { useNavigation } from '@react-navigation/native';
import { TEXT } from '../src/globalStyle';
import AvatarModal from '../component/AvatarModal';

export default function HomePage() {
  const [settingModalVisible, setSettingModalVisible] = useState(false);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const navigation = useNavigation();

  const handleQuitGame = () => {
    setShowGame(false);
    setPlayer2('');
    setSelectedAvatar(null);
  };

  if (showGame) {
    return <GamePlay onQuit={handleQuitGame} />;
  }

  return (
    <ImageBackground source={require('../assets/Background main page.png')} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => setAvatarModalVisible(true)}>
            <Image source={require('../assets/Avatar F1.png')} style={styles.avatar} />
          </TouchableOpacity>
          <AvatarModal visible={avatarModalVisible} onClose={() => setAvatarModalVisible(false)} />
          <Image source={require('../assets/Logo.png')} style={styles.logoImage} />
          <TouchableOpacity onPress={() => setSettingModalVisible(true)}>
            <Image source={require('../assets/Setting Icon.png')} style={styles.avatar} />
          </TouchableOpacity>
          <SettingModal visible={settingModalVisible} onClose={() => setSettingModalVisible(false)} />
        </View>

        <ImageBackground source={require('../assets/Group 9.png')} style={{ height: 300 }}>
          <Text style={[TEXT.tittle, { textAlign: 'center', position: 'reltive', left: 0, top: 0 }]}>
            BEST{'\n'}WIN{'\n'}STREAK
          </Text>
        </ImageBackground>

        <View style={{ alignItems: 'center', gap: 12, padding: 12 }}>
          <Text style={TEXT.tittle}>CHOOSE GAME MODE</Text>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('gameplay', { mode: 'PVC' })}>
              <Image source={require('../assets/PVC.png')} style={{}} />
              <Text style={styles.modeText}>Player vs Computer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('gameplay', { mode: 'PVP' })}>
              <Image source={require('../assets/PVP.png')} style={{}} />
              <Text style={styles.modeText}>Player vs Player</Text>
            </TouchableOpacity>

            {/* <RoomModal visible={roomModalVisible} onClose={() => setRoomModalVisible(false)} /> */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
  },
  avatar: {
    height: 48,
    width: 48,
  },
  logoImage: {
    alignSelf: 'center',
    height: 100,
    width: 140,
  },
  modeText: {
    fontFamily: 'Handy',
    color: 'white',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.1,
  },
});
