import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, TextInput, View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { login, register } from '../api/restApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { validateForm } from '../src/formValidation';

const { width, height } = Dimensions.get('window');

export default function FormComponent({ state }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const auth = useAuth();

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleApiError = (error, setLoginError, setRegisterError) => {
    const errorResponse = error.response?.data;
    let errorMessage;

    if (errorResponse?.message === 'User not found') {
      errorMessage = 'User not found';
    } else if (errorResponse?.error === 'Username or email already exists.') {
      errorMessage = 'Username or email already exists.';
    } else {
      errorMessage = errorResponse?.error || 'An error occurred, try again later';
    }

    console.log('API error:', errorResponse);

    if (setLoginError) {
      setLoginError(errorMessage);
    } else if (setRegisterError) {
      setRegisterError(errorMessage);
    }
  };

  const handleSubmitRegister = () => {
    setRegisterError('');
    const { usernameErrorMessage, emailErrorMessage, passwordErrorMessage, isValid } = validateForm(username, email, password);

<<<<<<< HEAD:component/FormComponent.jsx
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
=======
    setUsernameErrorMessage(usernameErrorMessage);
    setEmailErrorMessage(emailErrorMessage);
    setPasswordErrorMessage(passwordErrorMessage);

    if (isValid) {
>>>>>>> 2477631b379d7146a6ca162d902445662ffa5965:components/FormComponent.jsx
      handleRegister(username, email, password);
    }
  };

  const handleRegister = async (username, email, password) => {
    setIsLoading(true);
    try {
      const response = await register(username, email, password, '1');
      navigation.navigate('login');
    } catch (error) {
      handleApiError(error, null, setRegisterError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitLogin = () => {
    setLoginError('');
    if (!email || !password) {
      setLoginError('Email and password are required.');
      return;
    }
    handleLogin(email, password);
  };

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await login(email, password);
      await auth.login(response.token);
      navigation.navigate('home');
    } catch (error) {
      handleApiError(error, setLoginError, null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={{ flex: 1 }}>
          {/* Logo */}
          <View style={[styles.loginimage]}>
            <Image style={{ width: width * 0.65, height: height * 0.4 }} source={require('../assets/Logo.png')} resizeMode="contain" />
          </View>

          {/* Page Title */}
          {state === 'register' ? (
            <View style={[styles.loginimage]}>
              <Image style={{ width: width * 0.7, height: height * 0.1 }} source={require('../assets/CREATE ACCOUNT.png')} resizeMode="contain" />
            </View>
          ) : (
            <View style={[styles.loginimage]}>
              <Image style={{ width: width * 0.3, height: height * 0.1 }} source={require('../assets/LOGIN.png')} resizeMode="contain" />
            </View>
          )}

          {loginError && <Text style={styles.errorText}>{loginError}</Text>}
          {registerError && <Text style={styles.errorText}>{registerError}</Text>}
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

          {/* Username Text Input */}
          {state === 'register' && (
            <TextInput
              style={styles.formComponent}
              placeholder="Username"
              value={username}
              onChangeText={(value) => {
                setUserName(value);
                if (usernameErrorMessage) setUsernameErrorMessage('');
              }}
              autoCorrect={false}
            />
          )}
          {/* Error Message */}
          {usernameErrorMessage && <Text style={styles.errorText}>{usernameErrorMessage}</Text>}

          {/* Email Text Input */}
          <TextInput
            style={styles.formComponent}
            placeholder="Enter your email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              if (emailErrorMessage) setEmailErrorMessage('');
            }}
            autoCorrect={false}
            autoCapitalize="none"
          />
          {/* Error Message */}
          {emailErrorMessage && <Text style={styles.errorText}>{emailErrorMessage}</Text>}

          {/* Password Text Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput]}
              placeholder="Enter your password"
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                if (passwordErrorMessage) setPasswordErrorMessage('');
              }}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
              <Icon name={secureTextEntry ? 'visibility-off' : 'visibility'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* Error Message */}
          {passwordErrorMessage ? <Text style={styles.errorText}>{passwordErrorMessage}</Text> : null}

          {/* Buttons */}
          {state === 'register' ? (
            <SafeAreaView>
              <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
              <View style={styles.groupText1}>
                <Text style={[styles.text, { color: 'white' }]}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={[styles.text, { color: 'gold', fontWeight: 'bold', fontFamily: 'Handy' }]}> Login</Text>
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