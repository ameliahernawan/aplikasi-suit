import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageBackground,

} from "react-native";
//import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FormComponent from "../component/FormComponent";
const { width, height } = Dimensions.get('window');
//import { register } from "../API/restApi"; 

export default function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isCheckedError, setIsCheckedError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleRegister = async () => {
    let valid = true;

    setFullnameError("");
    setEmailError("");
    setPasswordError("");
    setIsCheckedError("");

    if (fullname.length <= 3) {
      setFullnameError("Fullname must be more than 3 characters.");
      valid = false;
    }

    if (!email.includes("@")) {
      setEmailError("Email must contain '@'.");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      valid = false;
    }

    if (!isChecked) {
      setIsCheckedError("You must agree to the Terms and Conditions.");
      valid = false;
    }

    if (valid) {
      try {
        const response = await register(fullname, email, password, avatarUrl);

        Alert.alert("Success", "Registration successful!", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
      } catch (error) {
        
        Alert.alert("Error", error.response.data.message);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ImageBackground
              source={require('../assets/background_image.png')}
              resizeMode="cover"
              style={styles.imageBackground}
            >
    <View style={{ flex: 1, width: "100%" }}>
      <View style={[styles.loginimage, {flex:1, backgroundColor:'', paddingTop:'80', alignItems: 'center'}]}>
              <Image
                style={{ width: width * 0.6, height: height * 0.1 }}
                source={require('../assets/CREATE ACCOUNT.png')}
                resizeMode="contain"
              />
        </View>
      <View style= {{backgroundColor:'', flex:7,  paddingHorizontal:30}}>
        <FormComponent state="register"></FormComponent>
      </View>
    </View>
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },


})