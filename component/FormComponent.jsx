import { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { login, register } from '../api/restApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function FormComponent({ state }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmitRegister = () => {
    let valid = true;

    setErrorMessage('');

    if (username.length <= 3) {
      setErrorMessage('Username must be more than 3 characters.');
      valid = false;
    }

    if (!email.includes('@')) {
      setErrorMessage('Email must contain "@" symbol.');
      valid = false;
    }

    if (password.length < 7) {
      setErrorMessage('Password must be at least 7 characters long.');
      valid = false;
    }

    if (valid) {
      handleRegister(username, email, password);
    }
  };

  const handleRegister = async (username, email, password) => {
    try {
      const response = await register(username, email, password, '1');
      navigation.navigate('login');
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      console.error(error);
    }
  };

  const handleSubmitLogin = () => {
    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }
    handleLogin(email, password);
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      await auth.login(response.token);
      navigation.navigate('home');
    } catch (error) {
      setErrorMessage('Email or password is incorrect.');
      console.error(error);
    }
  };

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Handy: require('../assets/HandyCasual.ttf'),
          Bangers: require('../assets/Bangers-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={{ flex: 1 }}>
          {/* Logo */}
          <View style={[styles.loginimage]}>
            <Image
              style={{ width: width * 0.65, height: height * 0.4 }}
              source={require('../assets/Logo.png')}
              resizeMode="contain"
            />
          </View>

          {/* Page Title */}
          {state === 'register' ? (
            <View style={[styles.loginimage]}>
              <Image
                style={{ width: width * 0.7, height: height * 0.1 }}
                source={require('../assets/CREATE ACCOUNT.png')}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={[styles.loginimage]}>
              <Image
                style={{ width: width * 0.3, height: height * 0.1 }}
                source={require('../assets/LOGIN.png')}
                resizeMode="contain"
              />
            </View>
          )}

          {/* Error Message */}
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          {/* Input Fields */}
          {state === 'register' && (
            <TextInput
              style={styles.formComponent}
              placeholder="Username"
              value={username}
              onChangeText={(value) => {
                setUserName(value);
                if (errorMessage) setErrorMessage('');
              }}
              autoCorrect={false}
            />
          )}
          <TextInput
            style={styles.formComponent}
            placeholder="Enter your email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              if (errorMessage) setErrorMessage('');
            }}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput]}
              placeholder="Enter your password"
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                if (errorMessage) setErrorMessage('');
              }}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
              <Icon name={secureTextEntry ? 'visibility-off' : 'visibility'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Buttons */}
          {state === 'register' ? (
            <SafeAreaView>
              <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
              <View style={styles.groupText1}>
                <Text style={[styles.text, { color: 'white' }]}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={[styles.text, { color: 'gold', fontWeight: 'bold' }]}> Login</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ) : (
            <>
              <TouchableOpacity style={styles.button} onPress={handleSubmitLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <View style={styles.groupText1}>
                <Text style={[styles.text, { color: 'white' }]}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace('register')}>
                  <Text style={[styles.text, { color: 'gold', fontWeight: 'bold' }]}> Register now</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginimage: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  formComponent: {
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 16,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 10,
    fontFamily: 'Handy',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 10,
  },
  passwordInput: {
    flex: 1,
    borderRadius: 50,
    fontFamily: 'Handy',
    fontSize: 16,
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FABB55',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'Handy',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 0,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'Handy',
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 0.5 },
    textShadowRadius: 0.4,
  },
  groupText1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Handy',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 0.5 },
    textShadowRadius: 0.4,
  },
});