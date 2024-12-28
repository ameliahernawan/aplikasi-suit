import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import FormComponent from "../components/FormComponent";

export default function RegisterPage() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/background_image.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <FormComponent state="register" />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  image: {
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
