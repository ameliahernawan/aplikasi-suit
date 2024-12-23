import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard} from "react-native";
import * as Font from 'expo-font';
import FormComponent from "../component/FormComponent";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function LoginPage() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Handy: require('../assets/HandyCasual.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    }

    // For the Log in
    console.log('sign in');
    try {
      const result = await login(email, password);
      const token = result.data.token;
      saveToken(token);
      navigation.navigate('MainTabs', { screen: 'Home' });
    } catch (e) {
      console.log(e);
    } finally {
      return null;
    }
  if (!fontLoaded) {
    return null;
  }
}

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
  loginimage: {
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});