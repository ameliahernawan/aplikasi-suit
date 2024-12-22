import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import OnboardingPage from './screens/OnboardingPage';
import GamePlayScreen from './screens/GamePlayScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  //useEffect SplashScreen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        {isLoading ? (
          <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="register" component={RegisterPage} options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" component={OnboardingPage} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
