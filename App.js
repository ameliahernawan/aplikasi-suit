import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import SplashScreen from './pages/SplashScreen';



import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import GamePlay from './pages/GamePlay';
import { AuthProvider } from './context/AuthContext';
import { loadFonts } from './src/fonts';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //useEffect SplashScreen
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await loadFonts();
        setFontsLoaded(true);

        // Splash screen timer
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
      } catch (e) {
        console.error('Error loading fonts:', e);
      }
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return null; // atau bisa tampilkan loading screen
  }

  return (
    <AuthProvider>
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
              <Stack.Screen name="gameplay" component={GamePlay} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useEffect, useState } from 'react';
// import SplashScreen from './pages/SplashScreen';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import OnboardingPage from './pages/OnboardingPage';
// import HomePage from './pages/HomePage';
// import GamePlay from './pages/GamePlay';
// import { AuthProvider } from './context/AuthContext';
// import { useAuth } from './context/AuthContext';

// const Stack = createStackNavigator();

// function AppNavigator() {
//   const [isLoading, setIsLoading] = useState(true);
//   const { isLogin } = useAuth;

//   //useEffect SplashScreen
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Stack.Navigator initialRouteName="splash">
//       {isLoading ? (
//         <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
//       ) : (
//         <>
//           {!isLogin ? (
//             <>
//               <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />
//               <Stack.Screen name="register" component={RegisterPage} options={{ headerShown: false }} />
//               <Stack.Screen name="onboarding" component={OnboardingPage} options={{ headerShown: false }} />
//             </>
//           ) : (
//             <>
//               <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
//               <Stack.Screen name="gameplay" component={GamePlay} options={{ headerShown: false }} />
//             </>
//           )}
//         </>
//       )}
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }
