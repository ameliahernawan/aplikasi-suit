import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingModal from './components/SettingModal';
import HomePage from './pages/HomePage';
import GameplayPage from './pages/GameplayPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import { loadFonts } from './src/fonts';
import TutorialPage from './pages/TutorialPage';
import { enableScreens } from 'react-native-screens';

enableScreens()

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { isLogin } = useAuth();

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        setFontsLoaded(true);

        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      } catch (e) {
        console.error('Error loading fonts:', e);
      }
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="splash">
      {isLoading ? (
        <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
      ) : isLogin ? ( 
        <>
          <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="gameplay" component={GameplayPage} options={{ headerShown: false }} />
          <Stack.Screen name="tutorial" component={TutorialPage} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={RegisterPage} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
