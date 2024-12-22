import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import FormComponent from "../component/FormComponent";
import { useNavigation } from "@react-navigation/native";
//import { login } from "../API/restApi";
//import { useAuth } from "../context/AuthContext";

const { width, height } = Dimensions.get('window');

export default function LoginPage({ }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  //const {saveToken} = useAuth();

  async function handleLogin() {
    let valid = true;
    console.log("login")

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } 

    // For the Log in
    console.log("sign in")
    try {
      const result = await login(
        email,
        password
      )
      const token = result.data.token
      saveToken(token)
      navigation.navigate("MainTabs", { screen: "Home" });
    } catch(e) {
     console.log(e)
    } finally {
      return null;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ImageBackground
        source={require('../assets/background_image.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
    <View style={styles.container}>
      
      <View style={[styles.loginimage, {flex:1, backgroundColor:'', paddingTop:'80'}]}>
        <Image
          style={{ width: width * 0.4, height: height * 0.1 }}
          source={require('../assets/LOGIN.png')}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.loginimage, {flex:2, backgroundColor:''}]}>
      <Image
          style={{ width: width * 0.65, height: height * 0.4 }}
          source={require('../assets/Fist Logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{backgroundColor:'', justifyContent:'center', flex:2, paddingHorizontal:30}}>
       <FormComponent/>
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
    flexDirection:'column'
  },
  loginimage: {
     alignItems:'center'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});