// src/config/fonts.js
import * as Font from 'expo-font';

export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      Handy: require('../assets/HandyCasual.ttf'),
      Bangers: require('../assets/Bangers-Regular.ttf'),
    });
    return true;
  } catch (error) {
    throw error
    return false;
  }
};
