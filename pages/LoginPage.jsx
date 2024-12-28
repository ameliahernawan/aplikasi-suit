import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import FormComponent from '../components/FormComponent';

export default function LoginPage() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../assets/background_image.png')} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.container}>
          <FormComponent />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
