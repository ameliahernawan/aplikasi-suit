import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FormComponent({ state }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => setSecureTextEntry((prev) => !prev);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Handy: require('../assets/HandyCasual.ttf'),
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <View style={styles.groupText1}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.textHighlight}> Login</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.groupText1}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text style={styles.textHighlight}>Register now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  formComponent: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 5,
    fontFamily: 'Handy',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    alignItems: 'center',
    right: 15,
    top: '10%',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    width: '100%',
    backgroundColor: '#FABB55',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    elevation: 5,
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
    marginTop: 20,
    fontFamily: 'Handy'
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Handy',
  },
  textHighlight: {
    color: 'gold',
    fontWeight: 'bold',
    marginLeft: 5,
    fontFamily: 'Handy',
  },
});