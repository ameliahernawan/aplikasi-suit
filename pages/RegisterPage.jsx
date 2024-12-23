import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormComponent from "../component/FormComponent";

const { width, height } = Dimensions.get('window');

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

  const navigation = useNavigation();

  const handleRegister = async () => {
    let valid = true;

    // Reset errors
    setFullnameError("");
    setEmailError("");
    setPasswordError("");
    setIsCheckedError("");

    // Validation checks
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
        // Simulate API call
        const response = await register(fullname, email, password, avatarUrl);
        Alert.alert("Success", "Registration successful!", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
      } catch (error) {
        Alert.alert("Error", error.response?.data?.message || "Something went wrong.");
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
        <View style={styles.container}>
          <View style={[styles.image, { flex: 1, paddingTop: 80 }]}>
            <Image
              style={{ width: width * 0.65, height: height * 0.4 }}
              source={require('../assets/Fist Logo.png')}
              resizeMode="contain"
            />
          </View>
          <View style={[styles.image, { flex: 2 }]}>
            <Image
              style={{ width: width * 0.6, height: height * 0.5 }}
              source={require('../assets/CREATE ACCOUNT.png')}
              resizeMode="contain"
            />
          </View>
          <View style={{ justifyContent: 'center', flex: 2, paddingHorizontal: 30 }}>
            {/* Pass state prop to FormComponent */}
            <FormComponent state="register" onSubmit={handleRegister} />
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
  image: {
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