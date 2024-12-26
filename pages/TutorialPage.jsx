import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function LoginPage() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate('SettingModal'); // Navigate to HomePage
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../assets/background_image.png')} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.container}>
        <Image source={require('../assets/HOW TO PLAY.png')} style={styles.text}/>
        <Image source={require('../assets/Tutorial.png')} style={styles.tutorial}/>
        <TouchableOpacity style={styles.done} onPress={handleBackButtonPress}>
            <Image source={require('../assets/Done button.png')}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    alignItems: 'center',
  },
  tutorial: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  done: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});