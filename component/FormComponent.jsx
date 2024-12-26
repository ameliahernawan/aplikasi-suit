import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, TextInput, View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Platform } from 'react-native';
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
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const auth = useAuth();

  const navigation = useNavigation();

  const handleSubmitLogin = () => {
    if (!email || !password) {
      alert('Email and password are required');
      return;
    }
    handleLogin(email, password);
  };

  const handleSubmitRegister = () => {
    if (!username || !email || !password) {
      alert('Validation Error', 'Usarname, Email, and Password are required');
      return;
    }
    handleRegister(username, email, password);
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      await auth.login(response.token);
      console.log(response.token);
      navigation.navigate('home');
    } catch (error) {
      alert('Email atau password anda salah');
      console.log(error);
    }
  };

  const handleRegister = async (username, email, password) => {
    try {
      const response = await register(username, email, password, '1');
      navigation.navigate('login');
    } catch (error) {
      if (error.message === 'Email already in use') {
        setEmailError('Email already in use');
      } else if (error.message === 'Username already in use') {
        // Asumsi ada pesan serupa untuk username
        setUsernameError('Username already in use');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={{ flex: 1 }}>
          {/* Logo fist */}
          <View style={[styles.loginimage]}>
            <Image style={{ width: width * 0.65, height: height * 0.4 }} source={require('../assets/Logo.png')} resizeMode="contain" />
          </View>

          {/* Judul Page */}
          {state === 'register' ? (
            <View style={[styles.loginimage]}>
              <Image style={{ width: width * 0.7, height: height * 0.1 }} source={require('../assets/CREATE ACCOUNT.png')} resizeMode="contain" />
            </View>
          ) : (
            <View style={[styles.loginimage]}>
              <Image style={{ width: width * 0.3, height: height * 0.1 }} source={require('../assets/LOGIN.png')} resizeMode="contain" />
            </View>
          )}

          {/* Render input username jika state adalah register */}
          {state === 'register' && (
            <View>
              <TextInput
                style={styles.formComponent}
                placeholder="Username"
                value={username}
                onChangeText={(text) => {
                  setUserName(text);
                  setUsernameError(''); // Reset error saat user mengetik
                }}
                autoCorrect={false}
              />
              {/* {usernameError ? <Text style={{ color: 'red', marginBottom: 5 }}>{usernameError}</Text> : null} */}
              {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
            </View>
          )}

          {/* Input email */}
          <View>
            <TextInput
              style={styles.formComponent}
              text="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError(''); // Reset error saat user mengetik
              }}
              autoCorrect={false}
              autoCapitalize="none"
            />
            {/* {emailError ? <Text style={{ color: 'red', marginBottom: 5 }}>{emailError}</Text> : null} */}
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          </View>

          {/* Input password */}
          <View style={styles.passwordContainer}>
            <TextInput style={[styles.passwordInput]} text="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry={secureTextEntry} />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
              <Icon name={secureTextEntry ? 'visibility-off' : 'visibility'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Tombol dan navigasi */}
          {state === 'register' ? (
            <SafeAreaView>
              <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.buttonText}>REGISTER</Text>
              </TouchableOpacity>
              <View style={styles.groupText1}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={styles.textHighlight}> Login</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ) : (
            <>
              <TouchableOpacity style={styles.button} onPress={handleSubmitLogin}>
                <Text style={styles.buttonText}>Login</Text>
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
    //paddingVertical: 10,
    //paddingHorizontal: 15,
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
    color: 'black',
  },
  linkText: {
    color: '#FF5722',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
