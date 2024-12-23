import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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

  if (!fontLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require('../assets/background_image.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <View style={[styles.loginimage, { flex: 1, paddingTop: 80 }]}>
            <Image
              style={{ width: width * 0.4, height: height * 0.1 }}
              source={require('../assets/LOGIN.png')}
              resizeMode="contain"
            />
          </View>
          <View style={[styles.loginimage, { flex: 2 }]}>
            <Image
              style={{ width: width * 0.65, height: height * 0.4 }}
              source={require('../assets/Fist Logo.png')}
              resizeMode="contain"
            />
          </View>
          <View style={{ justifyContent: 'center', flex: 2, paddingHorizontal: 30 }}>
            {/* Pass state prop to FormComponent */}
            <FormComponent state="login" />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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