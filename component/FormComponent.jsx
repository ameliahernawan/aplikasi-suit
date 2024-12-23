import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function FormComponent({ state }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const navigation = useNavigation();

  const toggleBalanceVisibility = () => setBalanceVisible((prev) => !prev);

  return (
    <SafeAreaView style={{}}>
      {/* Judul Page */}
      <View style={{ flexDirection: 'column-reverse' }}>
        {state === 'register' ? (
          <View style={[styles.loginimage]}>
            <Image style={{ width: width * 0.7, height: height * 0.1 }} source={require('../assets/CREATE ACCOUNT.png')} resizeMode="contain" />
          </View>
        ) : (
          <View style={[styles.loginimage]}>
            <Image style={{ width: width * 0.3, height: height * 0.1 }} source={require('../assets/LOGIN.png')} resizeMode="contain" />
          </View>
        )}

        {/* Logo Fist */}
        <View style={[styles.loginimage]}>
          <Image style={{ width: width * 0.65, height: height * 0.4 }} source={require('../assets/Logo.png')} resizeMode="contain" />
        </View>
      </View>

      {/* Formulir */}
      {state === 'register' && <TextInput style={styles.formComponent} placeholder="Username" value={username} onChangeText={setUserName} autoCorrect={false} />}
      <TextInput style={styles.formComponent} placeholder="Enter your email" value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize="none" />
      <TextInput style={[styles.formComponent, { marginBottom: '10' }]} placeholder="Enter your password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry />

      {/* Button */}
      {state === 'register' ? (
        <>
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('home')}>
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
          <TouchableOpacity style={styles.button}>
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
