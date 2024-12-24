import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, TextInput, View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { login, register } from '../api/restApi';

const { width, height } = Dimensions.get('window');

export default function FormComponent({ state }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      alert('Error: ', error.message);
      console.log(error);
    }
  };

  const handleRegister = async (username, email, password) => {
    try {
      const response = await register(username, email, password, '1');
      navigation.navigate('login');
    } catch (error) {
      alert('Error: ', error);
      console.log(error);
    }
  };

  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      {/* Render input username jika state adalah register */}
      {state === 'register' && (
        <TextInput
          style={styles.formComponent}
          placeholder="Username"
          value={username}
          onChangeText={setUserName}
          autoCorrect={false}
        />
      )}

      {/* Input email */}
      <TextInput
        style={styles.formComponent}
        text="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />

      {/* Input password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.formComponent, styles.passwordInput]}
          text="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Icon 
            name={secureTextEntry ? 'visibility-off' : 'visibility'} 
            size={24} 
            color="black" 
          />
        </TouchableOpacity>
      </View>

      {/* Tombol dan navigasi */}
      {state === 'register' ? (
        <>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <View style={styles.groupText1}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.textHighlight}> Login</Text>
            </TouchableOpacity>
=======
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <SafeAreaView style={{ flex: 1 }}>
          {/* Logo Fist */}
          <View style={[styles.loginimage]}>
            <Image style={{ width: width * 0.65, height: height * 0.4 }} source={require('../assets/Logo.png')} resizeMode="contain" />
>>>>>>> 5fa6b5f16f3dde25314e83ffbf96f5bd8653601f
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

          {/* Formulir */}
          {state === 'register' && <TextInput style={styles.formComponent} placeholder="Username" value={username} onChangeText={setUserName} autoCorrect={false} />}
          <TextInput style={styles.formComponent} placeholder="Enter your email" value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize="none" />
          <TextInput style={[styles.formComponent, { marginBottom: 10 }]} placeholder="Enter your password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry />

          {/* Button */}
          {state === 'register' ? (
            <>
              <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

              <View style={styles.groupText1}>
                <Text style={[styles.text, { color: 'white' }]}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace('login')}>
                  <Text style={[styles.text, { color: 'gold', fontWeight: 'bold' }]}> Login</Text>
                </TouchableOpacity>
              </View>
            </>
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
    paddingVertical: 20,
    paddingHorizontal: 20,

    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 10,
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
    color: '#FF5722', // Bright orange for links
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
