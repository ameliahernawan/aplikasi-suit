import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions, TouchableWithoutFeedback, Text, TouchableOpacity, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TEXT, BUTTONS } from '../src/globalStyle';



export default function TutorialPage() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate('home');
  };

  return (
    <ImageBackground source={require('../assets/background_image.png')} resizeMode="cover" style={styles.imageBackground}>
      <View style={{ margin: 35 }}>
        <Text style={TEXT.title}>HOW TO PLAY?</Text>
        <View style={styles.blackBorder}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              1. Chooose one of the three options: Rock, Paper, or Scissors{'\n'}
              {'\n'}2. You and your opponent (Player 2 or Computer) will take turns making choices
            </Text>
            <Image source={require('../assets/Tutorial.png')} style={styles.image} />
          </View>
        </View>
        <TouchableOpacity style={BUTTONS.primary} onPress={handleBackButtonPress}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  image:{ 
    marginBottom: 50, 
    width: 213, 
    height: 171 
  },
  text: { 
    fontFamily: 'Handy', 
    fontWeight: 500, 
    marginBottom: 50, 
    fontSize: 20 
  },
  textContainer: { 
    backgroundColor: '#E5E5E5', 
    alignItems: 'center', 
    padding: 35, 
    marginVertical: 7 
  },
  blackBorder: { 
    backgroundColor: 'black', 
    alignItems: 'center', 
    marginVertical: 50, 
    zIndex: 1 
  },
    buttonText:{ 
      fontFamily: 'Handy', 
      color: 'white', 
      fontSize: 24, 
      textShadowColor: 'black', 
      textShadowOffset: { width: 2, height: 2 }, 
      textShadowRadius: 0.1 
    }
});
