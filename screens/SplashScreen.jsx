import React from 'react';
import { ActivityIndicator, View, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={{ margin: 'auto' }}>
      <Image style={{ width: width * 0.5, height: height * 0.2 }} source={require('../assets/sun.png')} resizeMode="contain"></Image>
      {/* <ActivityIndicator size={'large'} color="pink" /> */}
    </View>
  );
}
