import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OnboardingPage from "./pages/OnboardingPage";
import HomePage from "./pages/HomePage";
import GameplayPage from "./pages/GameplayPage";
import { AuthProvider } from "./context/AuthContext";
import { loadFonts } from "./src/fonts";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        setFontsLoaded(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
      } catch (e) {
        console.error("Error loading fonts:", e);
      }
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          {isLoading ? (
            <Stack.Screen
              name="splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="home"
                component={HomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="login"
                component={LoginPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="register"
                component={RegisterPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="onboarding"
                component={OnboardingPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="gameplay"
                component={GameplayPage}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
