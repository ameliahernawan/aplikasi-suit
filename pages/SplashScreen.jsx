import React from 'react';
import { ImageBackground, View, Dimensions, Image, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background_image.png')} resizeMode="cover" style={styles.imageBackground}>
        <Image style={{ width: width * 0.8, height: height * 0.8 }} source={require('../assets/Logo.png')} resizeMode="contain" />
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
