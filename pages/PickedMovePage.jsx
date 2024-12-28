import React from 'react';
import { ImageBackground, View,StyleSheet, Text } from 'react-native';
import { TEXT } from '../src/globalStyle';


export default function SplashMessage({message}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background_image.png')} resizeMode="cover" style={styles.imageBackground}>
        <Text style={TEXT.title}>{message}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
