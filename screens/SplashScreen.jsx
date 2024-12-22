import React from 'react';
import { ActivityIndicator, View, Dimensions, Image } from 'react-native';
import { ImageBackground, View, Dimensions, Image, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={{ margin: 'auto' }}>
    <Image style={{ width: width * 0.5, height: height * 0.2 }} source={require('../assets/sun.png')} resizeMode="contain"></Image>
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background_image.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Image
          style={{ width: width * 0.8, height: height * 0.8 }}
          source={require('../assets/Logo.png')}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
    </View>
  );
}